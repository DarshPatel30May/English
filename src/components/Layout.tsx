import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import {
  BookOpen,
  ChevronDown,
  Eye,
  FileText,
  Layers,
  LayoutGrid,
  Menu,
  Moon,
  Search,
  Sun,
  X,
} from 'lucide-react';
import { modules } from '../data';
import { usePrefs, type ViewMode } from '../lib/prefs';
import { cx } from './ui';
import { SearchDialog } from './SearchDialog';

const tools = [
  { to: '/quotes', label: 'Quote bank' },
  { to: '/themes', label: 'Theme explorer' },
  { to: '/compare', label: 'Compare texts' },
  { to: '/rubric', label: 'Rubric explorer' },
  { to: '/map', label: 'Course map' },
  { to: '/flashcards', label: 'Flashcards' },
  { to: '/checklist', label: 'Checklist' },
  { to: '/print/all', label: 'Print / PDF' },
];

const modeOptions: { id: ViewMode; label: string; icon: typeof Eye; hint: string }[] = [
  { id: 'standard', label: 'Standard', icon: LayoutGrid, hint: 'Full guide with diagrams and explanations' },
  { id: 'visual', label: 'Visual', icon: Eye, hint: 'Diagrams, summaries and connections only' },
  { id: 'text', label: 'Text-only', icon: FileText, hint: 'Plain reading layout without diagrams' },
];

export function ModeSwitcher({ compact = false }: { compact?: boolean }) {
  const { mode, setMode } = usePrefs();
  return (
    <div role="radiogroup" aria-label="Study mode" className="inline-flex rounded-full border border-line bg-surface p-0.5">
      {modeOptions.map((o) => {
        const Icon = o.icon;
        const active = mode === o.id;
        return (
          <button
            key={o.id}
            role="radio"
            aria-checked={active}
            title={o.hint}
            onClick={() => setMode(o.id)}
            className={cx(
              'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors',
              active ? 'bg-brand text-black' : 'text-ink-3 hover:text-ink',
            )}
          >
            <Icon size={14} />
            <span className={compact ? 'sr-only' : ''}>{o.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = usePrefs();
  return (
    <button
      onClick={toggleTheme}
      className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface text-ink-2 transition-colors hover:text-ink"
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
    >
      {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

function ToolsMenu() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium text-ink-2 hover:text-ink"
      >
        Study tools <ChevronDown size={15} className={cx('transition-transform', open && 'rotate-180')} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full z-50 w-52 pt-2"
          >
            <div className="rounded-xl border border-line bg-surface p-1.5 shadow-xl">
              {tools.map((t) => (
                <Link key={t.to} to={t.to} role="menuitem" className="block rounded-lg px-3 py-2 text-sm text-ink-2 hover:bg-surface-2 hover:text-ink">
                  {t.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Layout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      } else if (e.key === '/' && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-black">
        Skip to content
      </a>
      <header className="no-print sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6">
          <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="Dashboard">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-black">
              <BookOpen size={18} strokeWidth={2.4} />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-display text-[15px] font-semibold text-ink">HSC English Standard</span>
              <span className="block text-[11px] font-medium tracking-wide text-ink-3">2026 Visual Study Guide</span>
            </span>
          </Link>

          <nav aria-label="Modules" className="ml-4 hidden items-center gap-0.5 lg:flex">
            {modules.map((m) => (
              <NavLink
                key={m.id}
                to={`/module/${m.id}`}
                data-module={m.id}
                className={({ isActive }) =>
                  cx(
                    'rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
                    isActive || pathname.startsWith(`/module/${m.id}/`) ? 'bg-accent-soft text-accent-ink' : 'text-ink-2 hover:text-ink',
                  )
                }
              >
                {m.shortTitle}
              </NavLink>
            ))}
            <ToolsMenu />
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="inline-flex h-9 items-center gap-2 rounded-full border border-line bg-surface px-3 text-sm text-ink-3 transition-colors hover:text-ink"
              aria-label="Search the guide"
            >
              <Search size={16} />
              <span className="hidden md:inline">Search</span>
              <kbd className="hidden rounded border border-line px-1.5 text-[10px] font-semibold md:inline">Ctrl K</kbd>
            </button>
            <div className="hidden md:block">
              <ModeSwitcher compact />
            </div>
            <ThemeToggle />
            <button
              className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface lg:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-label="Open menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              aria-label="Mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-line lg:hidden"
            >
              <div className="mx-auto max-w-7xl space-y-4 px-4 py-4 sm:px-6">
                <div className="grid grid-cols-2 gap-2">
                  {modules.map((m) => (
                    <Link key={m.id} to={`/module/${m.id}`} data-module={m.id} className="rounded-xl border border-line bg-surface p-3">
                      <span className="block text-xs font-semibold text-accent-ink">{m.code}</span>
                      <span className="block text-sm font-medium text-ink">{m.title}</span>
                    </Link>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <Link key={t.to} to={t.to} className="rounded-full border border-line px-3 py-1.5 text-sm text-ink-2">
                      {t.label}
                    </Link>
                  ))}
                </div>
                <div className="flex items-center gap-3 text-sm text-ink-3">
                  <Layers size={16} /> Study mode: <ModeSwitcher />
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="no-print mt-24 border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-10 text-sm text-ink-3 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            Built for the NSW HSC English Standard course (Stage 6 Syllabus 2017; prescriptions 2019–2026). An independent study aid, not an official NESA publication.
          </p>
          <p className="shrink-0">Progress is saved in this browser only.</p>
        </div>
      </footer>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
