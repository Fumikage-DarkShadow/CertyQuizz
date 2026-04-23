# CertyQuiz

PWA responsive de préparation aux certifications cybersécurité, pensée pour les débutants avec une UX type Duolingo et Quizlet : progression visible, gamification légère, explication pédagogique après chaque question.

Une question marquée `official: true` affiche une **bannière rouge « Question officielle »** pour signaler qu\'elle est reprise telle quelle d\'un support éditeur (par exemple practice assessment Microsoft Learn, MOOC Club EBIOS). Les questions livrées par défaut sont rédigées par CertyQuiz à partir des objectifs officiels. Aucune n\'est copiée d\'un examen réel.

## Certifications couvertes

| Certification | Langue | Format | Seuil |
| :-- | :-- | :-- | :-- |
| **CompTIA Security+ (SY0 701)** | EN | 90 Q / 90 min | 750 / 900 (environ 83 %) |
| **EBIOS Risk Manager (ANSSI et Club EBIOS)** | FR | 5 ateliers, QCM environ 1h30 | à paramétrer |
| **Microsoft SC 200** | EN | 100 min | 700 / 1000 (70 %) |

## Fonctionnalités

- **Entraînement libre** : quiz sans chrono, correction immédiate avec explication pédagogique et liens vers les sources officielles.
- **Examen blanc** : chronométré, pas d\'explication pendant l\'épreuve, bilan détaillé par domaine à la fin.
- **Révision ciblée** : refait uniquement les questions ratées.
- **Flashcards** : recto verso pour les acronymes et concepts clés.
- **Onboarding** : quiz de positionnement de 10 questions.
- **Roadmap** : étapes débloquées progressivement (≥ 60 % de précision par domaine).
- **Fiches de cours** : 2 à 3 min de lecture, avec glossaire intégré en popover.
- **Définitions** : plus de 120 termes et acronymes, classés par catégorie, recherchables.
- **Statistiques** : précision par domaine, streak quotidien, badges (10, 50, 100, 500 Q), readiness par certif.
- **PWA installable** : manifest plus service worker (vite plugin pwa), fonctionne offline après la première visite.
- **Mode clair, sombre, système**. Design épuré et accessible (contraste AA, ARIA, navigation clavier).

## Stack

- **React 18 + Vite + TypeScript**
- **Tailwind CSS** (design system maison, mode sombre via `class`)
- **Zustand + localStorage** pour la progression (persisté, fonctionne offline)
- **React Router** pour la navigation
- **Framer Motion** pour les animations
- **Lucide** pour les icônes
- **vite plugin pwa** (Workbox) pour le service worker et le manifest

## Installation

Prérequis : **Node 18+** et **npm** (ou pnpm / yarn).

```bash
cd Cyber
npm install
npm run dev
```

L\'application est accessible sur <http://localhost:5173>.

### Build de production

```bash
npm run build
npm run preview
```

Déploie le dossier `dist/` sur Vercel, Netlify, Cloudflare Pages ou tout hébergeur statique.

## Structure du code

```
src/
├── components/        UI réutilisable (Layout, QuizCard, ProgressBar, Popover…)
├── data/              Banques de questions, fiches, glossaire, mnémos
│   ├── security-plus/
│   ├── ebios-rm/
│   ├── sc-200/
│   ├── certifications.ts
│   ├── flashcards.ts
│   ├── course-sheets.ts
│   ├── glossary.ts
│   └── mnemonics.ts
├── hooks/             useTheme
├── pages/             Home, CertHub, Training, Exam, Review, Flashcards, Stats, Definitions, Roadmap, Onboarding, CourseSheet
├── store/             progress.ts (Zustand)
├── types/             modèles TypeScript
└── lib/               helpers (cn, …)
```

## Ajouter des questions

Chaque question suit le type `Question` de [src/types/index.ts](src/types/index.ts) :

```ts
{
  id: 'sp-d1-99',
  certId: 'security-plus',
  domainId: 'd1',
  type: 'single' | 'multi' | 'pbq',
  difficulty: 'easy' | 'medium' | 'hard',
  prompt: '...',
  scenario: '...',      // optionnel, pour les PBQ
  options: [
    { id: 'a', text: '...', rationale: 'pourquoi cette option est bonne ou fausse (1 phrase)' }
  ],
  correct: ['a'],
  explanation: '...',   // phrase clé à retenir, facultative
  references: [{ label: '...', url: 'https://...' }],
  tags: ['...'],
  official: true        // optionnel, affiche la bannière rouge
}
```

Ajoute ta question dans le fichier correspondant :

- [src/data/security-plus/questions.ts](src/data/security-plus/questions.ts)
- [src/data/ebios-rm/questions.ts](src/data/ebios-rm/questions.ts)
- [src/data/sc-200/questions.ts](src/data/sc-200/questions.ts)

Elle sera automatiquement disponible dans tous les modes.

## Ressources officielles référencées

**Security+**
- [page officielle](https://www.comptia.org/certifications/security)
- [PDF objectifs SY0 701](https://www.comptia.org/docs/default-source/exam-objectives/comptia-security-sy0-701-exam-objectives.pdf)
- [Professor Messer (gratuit)](https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/)

**EBIOS RM**
- [méthode ANSSI](https://cyber.gouv.fr/la-methode-ebios-risk-manager)
- [Club EBIOS](https://club-ebios.org/)
- [MOOC Club EBIOS](https://lms.club-ebios.org/)
- Guide v1.5 (2024) aligné ISO 27005:2022

**SC 200**
- [page officielle Microsoft](https://learn.microsoft.com/credentials/certifications/exams/sc-200)
- [Parcours Learn gratuit](https://learn.microsoft.com/training/courses/sc-200t00)
- [Doc Sentinel](https://learn.microsoft.com/azure/sentinel/)
- [Doc Defender XDR](https://learn.microsoft.com/defender-xdr/)
- [KQL](https://learn.microsoft.com/kusto/query/)

## Prochaines évolutions suggérées

- **Synchronisation multi appareils** via Supabase (auth + Postgres + RLS). Les hooks `useProgress` sont déjà isolés, il suffit de brancher un middleware côté store.
- **Banque de questions élargie** (objectif : 300+ par certif pour couvrir tous les sous objectifs).
- **PBQ interactifs** avec drag and drop réel (actuellement simulés en QCM contextuels).
- **Spaced repetition** plus fin (SM 2 ou FSRS) pour le mode révision ciblée.
- **Export PDF** des fiches de révision.

## Licence

Projet personnel. Adapte le à ta guise.
