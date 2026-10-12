# HSC English Standard 2026 — Visual Study Guide

An interactive, visual revision site for the **2026 NSW HSC English Standard** course (English Standard Stage 6 Syllabus 2017; NESA prescriptions 2019–2026).

| Module | Prescribed text(s) |
|---|---|
| Common Module — Texts and Human Experiences | *Billy Elliot* (2000), dir. Stephen Daldry |
| Module A — Language, Identity and Culture | Ali Cobby Eckermann, *Inside My Mother* (2015): “Trance”, “Unearth”, “Oombulgarri”, “Eyes”, “Leaves”, “Key” |
| Module B — Close Study of Literature | Mark Haddon, *The Curious Incident of the Dog in the Night-Time* (2003) |
| Module C — The Craft of Writing | Bradbury “The Pedestrian”; Jobs, Stanford address (2005); Rowling, Harvard address (2008); Carol Chan “Popcorn”; Bush, Address to the Nation (11 Sept 2001) |

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

The build is fully static (hash routing, relative asset paths), so `dist/` can be hosted on any static host or opened from a sub-folder. No API keys, paid services or databases are needed; fonts are bundled.

## Features

- **Module dashboard** with progress for each module.
- **Consistent A–H module layout**: overview, descriptor and rubric explorer, prescribed text, themes (with a theme-connection diagram), techniques, text-specific breakdown, interactive concept map (React Flow), and quick revision. Each module also has a sources area.
- **Text-specific breakdowns**:
  - Common Module: character relationship map, character arcs, key scenes, paradoxes, and a strike-vs-Billy timeline.
  - Module A: a page for each of the six poems, plus groupings.
  - Module B: the interactive **Idea + Form + Language → Reader understanding → Literary significance** model, the narrative arc and prime-chapter visual.
  - Module C: a page for each mentor text, a writing-forms comparison, mentor-text strategies and a reflection guide.
- **Theme explorer** across all modules; **text comparison** for any two poems (all 15 pairs written) or mentor texts.
- **Rubric explorer**; **course map**; **flashcards** generated from the guide content (flip, filter, shuffle, track known cards).
- **Search** (Ctrl/⌘ K or `/`), **revision checklist**, and **print / save-as-PDF** summaries.
- **Study modes**: Standard, Visual learning (hides long explanations) and Text-only (plain reading layout without diagrams). Light and dark themes.
- Preferences, checklist and flashcard progress are saved in `localStorage`.

## Project structure

```
src/
  data/            # all educational content (typed TypeScript)
    types.ts       # content model
    common.ts      # Common Module + Billy Elliot scenes, characters, paradoxes
    moduleA.ts     # Module A + poems, groupings, 15 pair comparisons
    moduleB.ts     # Module B + narrative features, IFL strands
    moduleC.ts     # Module C + mentor texts, writing forms, reflection steps
    index.ts       # cross-module themes, flashcards, search index, checklist
  components/      # reusable UI (cards, concept maps, rubric explorer, etc.)
    breakdowns/    # module-specific section F components
  pages/           # routed pages
  lib/             # preferences, progress (localStorage), helpers
```

## Accuracy notes

- Descriptor text is a student-friendly summary of the NESA descriptors, with key phrases highlighted. Each module links to the official NESA syllabus page for exact wording.
- **“Popcorn”** is a poem by Carol Chan, published in *Contemporary Asian Australian Poets* (Puncher & Wattmann, 2013), and appears on the NESA Module C list. The guide does not quote it. Check details against your class copy.
- **Bush’s 9/11 address** could not be confirmed on the NESA Module C prescribed list, so it is labelled as a likely teacher-selected text. Quotations from it come from the official White House archive transcript.
- Module A uses short image cues rather than quoting the poems; check wording against your copy of *Inside My Mother* before quoting.
- Module B avoids diagnosing Christopher; the novel never names a condition.

This is an independent study aid, not an official NESA publication.
