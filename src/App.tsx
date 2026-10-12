import { HashRouter, Route, Routes } from 'react-router';
import { PrefsProvider } from './lib/prefs';
import { ProgressProvider } from './lib/progress';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { ModulePage } from './pages/ModulePage';
import { PoemPage } from './pages/PoemPage';
import { MentorPage } from './pages/MentorPage';
import { ThemesPage } from './pages/ThemesPage';
import { ComparePage } from './pages/ComparePage';
import { RubricPage } from './pages/RubricPage';
import { FlashcardsPage } from './pages/FlashcardsPage';
import { SearchPage } from './pages/SearchPage';
import { ChecklistPage } from './pages/ChecklistPage';
import { PrintPage } from './pages/PrintPage';
import { MapPage } from './pages/MapPage';
import { QuotesPage } from './pages/QuotesPage';
import { NotFound } from './pages/NotFound';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <PrefsProvider>
      <ProgressProvider>
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="module/:moduleId" element={<ModulePage />} />
              <Route path="module/module-a/poem/:poemId" element={<PoemPage />} />
              <Route path="module/module-c/text/:textId" element={<MentorPage />} />
              <Route path="themes" element={<ThemesPage />} />
              <Route path="compare" element={<ComparePage />} />
              <Route path="rubric" element={<RubricPage />} />
              <Route path="flashcards" element={<FlashcardsPage />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="checklist" element={<ChecklistPage />} />
              <Route path="map" element={<MapPage />} />
              <Route path="quotes" element={<QuotesPage />} />
              <Route path="print/:moduleId" element={<PrintPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </HashRouter>
      </ProgressProvider>
    </PrefsProvider>
  );
}
