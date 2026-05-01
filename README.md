# CertyQuiz

PWA de préparation aux certifications cybersécurité, pensée comme un Duolingo + Quizlet pour la cyber : progression visible, gamification légère, **rationale par option** affiché au clic, fiches de révision, glossaire, examens blancs chronométrés.

**Démo en ligne :** [https://certyquiz.vercel.app](https://certyquiz.vercel.app)

> Toutes les questions livrées sont **rédigées originalement** par CertyQuiz à partir des objectifs publics et des cours associés. Aucune question d'examen réel n'est reproduite. Si une question provient d'un support officiel public (ex. practice assessment Microsoft Learn, MOOC Club EBIOS), un attribut `official: true` affiche une **bannière rouge** explicite.

---

## Sommaire

- [Certifications couvertes](#certifications-couvertes)
- [Banque de questions et glossaire](#banque-de-questions-et-glossaire)
- [Fonctionnalités](#fonctionnalités)
- [Shuffle des options (lutte anti biais position A)](#shuffle-des-options-lutte-anti-biais-position-a)
- [Stack technique](#stack-technique)
- [Installation locale](#installation-locale)
- [Build et déploiement](#build-et-déploiement)
- [Structure du code](#structure-du-code)
- [Ajouter une question](#ajouter-une-question)
- [Ajouter une certification](#ajouter-une-certification)
- [Ressources officielles référencées](#ressources-officielles-référencées)
- [Prochaines évolutions suggérées](#prochaines-évolutions-suggérées)

---

## Certifications couvertes

7 parcours, du généraliste fondamentaux jusqu'aux certifications senior et au Master EFREI.

| Certification | Langue | Examen blanc | Seuil cible | Banque |
| :-- | :--: | :-- | :-- | --: |
| **CompTIA Security+ (SY0-701)** | EN | 90 Q / 90 min | 750 / 900 (≈ 83 %) | 138 |
| **EBIOS Risk Manager** (ANSSI / Club EBIOS) | FR | 40 Q / 75 min | 70 % | 108 |
| **Microsoft SC-200** | EN | 50 Q / 100 min | 700 / 1000 (70 %) | 98 |
| **ISO 42001 Lead Implementer** (PECB) | FR | 12 Q ouvertes / 180 min | 70 % | 20 |
| **CISSP** (ISC2) | EN | 125 Q / 240 min (CAT) | 700 / 1000 | 99 |
| **CISA** (ISACA) | EN | 150 Q / 240 min | 450 / 800 (≈ 56 %) | 80 |
| **EFREI Gouvernance, Audit et Risques** (RNCP39781 BC01) | FR | 30 Q / 60 min | 60 % | **110** |

**Total : 653 QCM originaux, plus de 209 définitions, 7 certifications.**

### Focus EFREI Gouvernance

Construit à partir des trois cours du module *Infrastructure IT, Gouvernance, Audit et Risques* (Master Cybersécurité EFREI / CSM-4) et de la fiche de révision officielle. Six domaines :

- **G1** Gouvernance et audit (COBIT, ITIL, ISO 19011, Three Lines of Defense, types d'audit, CMMI, NIST CSF)
- **G2** Analyse de risque EBIOS RM (5 ateliers, échelles V0-V4 et G1-G4, vraisemblance vs gravité)
- **G3** Plan d'action et PACS (contenu, sponsor exécutif, documents associés, règle 3-2-1-1-0)
- **G4** Prestataires, SLA et tiers (4 parties d'un SLA, GTI vs GTR, BCR, DPA, MTO, ISO 27036)
- **G5** Continuité et reprise (PCA vs PRA, RTO/RPO, hot/warm/cold sites, BIA, tests)
- **G6** Réglementations RGPD, DORA, NIS2 (articles précis, délais de notification, sanctions, TLPT, FCT)

---

## Banque de questions et glossaire

Chaque question contient :

- un **prompt** clair (et un `scenario` pour les questions contextuelles type PBQ),
- 3 à 5 **options** dont chacune a son propre `rationale` (pourquoi cette option est bonne **ou** pourquoi elle est fausse), affiché au clic,
- une **explanation** (1 ligne à retenir) et des **références officielles** cliquables,
- des **tags** pour la révision ciblée,
- un niveau (`easy`, `medium`, `hard`).

Le **glossaire** contient plus de 209 entrées catégorisées (Fondamentaux, IAM, Crypto, Réseau, Cloud, Détection / SIEM, Réglementation, EBIOS, Gouvernance EFREI…) avec recherche libre et filtre par certification.

---

## Fonctionnalités

- **Entraînement libre** : quiz sans chrono, correction immédiate, rationale par option, liens vers les sources officielles.
- **Examen blanc** : chronométré, calé sur le format réel de chaque certif (volume, minutes, seuil), bilan détaillé par domaine à la fin.
- **Révision ciblée** : refait uniquement les questions ratées, ordonnées par fréquence d'erreur.
- **Quiz de positionnement** : 10 questions à l'onboarding pour calibrer le niveau de départ.
- **Roadmap par certif** : étapes débloquées progressivement (≥ 60 % de précision par domaine).
- **Fiches de cours** : 2 à 3 min de lecture, avec glossaire intégré en popover.
- **Définitions** : page dédiée, plus de 209 termes, classés par catégorie, recherche instantanée.
- **Flashcards** : recto verso pour les acronymes et concepts clés.
- **Statistiques** : précision par domaine, streak quotidien, badges (10, 50, 100, 500 Q), readiness par certif.
- **PWA installable** : manifest + service worker (vite-plugin-pwa, Workbox), fonctionne **offline** après la première visite.
- **Mode clair, sombre, système** ; design accessible (contraste AA, ARIA, navigation clavier).

---

## Shuffle des options (lutte anti biais position A)

L'ordre des options de chaque question est **mélangé à l'affichage** via un Fisher-Yates seedé sur `question.id` :

- l'ordre est **stable** pendant qu'une question est affichée (pas de saut au clic),
- l'ordre **change** entre deux montages de la même question (révision),
- la lettre A / B / C / D affichée suit la position **visuelle**, pas l'id interne,
- tracking interne par id (`'a'`, `'b'`…) donc la validation et les rationales restent corrects.

Bénéfice : la bonne réponse n'est plus mémorisable par sa position, sur **toutes** les certifications.

---

## Stack technique

- **React 18 + Vite + TypeScript**
- **Tailwind CSS** (design system maison, mode sombre via `class`)
- **Zustand + localStorage** pour la progression (persisté, fonctionne offline)
- **React Router DOM** pour la navigation
- **Framer Motion** pour les animations
- **Lucide React** pour les icônes
- **vite-plugin-pwa** (Workbox) pour le service worker et le manifest
- Hébergement **Vercel** (CD via GitHub, branch `main`)

---

## Installation locale

Prérequis : **Node 18+** et **npm** (ou pnpm / yarn).

```bash
git clone https://github.com/Fumikage-DarkShadow/CertyQuizz.git
cd CertyQuizz
npm install
npm run dev
```

L'application est accessible sur <http://localhost:5173>.

---

## Build et déploiement

```bash
npm run build      # tsc -b && vite build
npm run preview    # sert le contenu de dist/
```

Le dossier `dist/` peut être déployé sur Vercel, Netlify, Cloudflare Pages ou tout hébergeur statique.

**Déploiement actuel** : Vercel, projet `certyquiz`, auto-deploy sur push `main`. URL stable : <https://certyquiz.vercel.app>.

> En cas d'ancienne version affichée après un push : `Ctrl + Shift + R` pour bypasser le cache du service worker, ou DevTools → Application → Service Workers → Unregister.

---

## Structure du code

```
src/
├── components/        UI réutilisable (Layout, QuizCard, ProgressBar, CertLogo, Popover, …)
├── data/              Banques de questions, fiches, glossaire, mnémos
│   ├── certifications.ts
│   ├── flashcards.ts
│   ├── course-sheets.ts
│   ├── glossary.ts
│   ├── mnemonics.ts
│   ├── security-plus/
│   ├── ebios-rm/
│   ├── sc-200/
│   ├── iso-42001/
│   ├── cissp/
│   ├── cisa/
│   └── efrei-gouvernance/
├── hooks/             useTheme
├── pages/             Home, Certifications, CertHub, Training, Exam, Review, Flashcards, Stats,
│                      Definitions, Roadmap, Onboarding, CourseSheet
├── store/             progress.ts (Zustand persisté)
├── types/             modèles TypeScript (Question, Certification, GlossaryEntry, Progress…)
└── lib/               helpers (cn, …)
```

---

## Ajouter une question

Chaque question suit le type `Question` de [`src/types/index.ts`](src/types/index.ts) :

```ts
{
  id: 'efr-g6-99',
  certId: 'efrei-gouvernance',
  domainId: 'g6',
  type: 'single',          // 'single' | 'multi' | 'pbq'
  difficulty: 'medium',    // 'easy' | 'medium' | 'hard'
  prompt: '…',
  scenario: '…',           // optionnel, contexte pour PBQ
  options: [
    { id: 'a', text: '…', rationale: 'pourquoi cette option est bonne ou fausse (1 phrase)' },
    { id: 'b', text: '…', rationale: '…' },
    { id: 'c', text: '…', rationale: '…' },
    { id: 'd', text: '…', rationale: '…' },
  ],
  correct: ['a'],          // ids des bonnes options
  explanation: '…',        // phrase clé à retenir, facultative
  references: [{ label: '…', url: 'https://…' }],
  tags: ['…'],
  official: false,         // true → bannière rouge "question officielle"
}
```

Ajoute-la dans le fichier de la certif concernée (par ex. `src/data/efrei-gouvernance/questions.ts`). Elle sera automatiquement disponible dans tous les modes (entraînement, examen, révision ciblée, stats).

---

## Ajouter une certification

1. Ajouter le nouvel id dans le union type `CertId` de [`src/types/index.ts`](src/types/index.ts).
2. Insérer un objet `Certification` dans [`src/data/certifications.ts`](src/data/certifications.ts) (id, name, shortName, tagline, hexColor, examMinutes, examQuestions, passingScore, domains, resources).
3. Créer le dossier `src/data/<id>/questions.ts` et exporter un `Question[]` typé.
4. L'importer dans [`src/data/index.ts`](src/data/index.ts) et l'ajouter à `QUESTIONS`.
5. Ajouter une entrée dans `EXAM_CONFIG` de [`src/pages/Exam.tsx`](src/pages/Exam.tsx) (questions, minutes, passPct).
6. (Optionnel) Déposer un logo PNG dans `public/certs/<id>.png` et le référencer via `logoPath`.

---

## Ressources officielles référencées

**Security+ (SY0-701)**
- [page officielle CompTIA](https://www.comptia.org/certifications/security)
- [PDF objectifs SY0-701](https://www.comptia.org/docs/default-source/exam-objectives/comptia-security-sy0-701-exam-objectives.pdf)
- [Professor Messer (gratuit)](https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/)

**EBIOS Risk Manager**
- [Méthode ANSSI](https://cyber.gouv.fr/la-methode-ebios-risk-manager) (guide v1.5, 2024, aligné ISO 27005:2022)
- [Club EBIOS](https://club-ebios.org/)
- [MOOC Club EBIOS](https://lms.club-ebios.org/)

**Microsoft SC-200**
- [page officielle](https://learn.microsoft.com/credentials/certifications/exams/sc-200)
- [Parcours Learn gratuit](https://learn.microsoft.com/training/courses/sc-200t00)
- [Doc Sentinel](https://learn.microsoft.com/azure/sentinel/) · [Doc Defender XDR](https://learn.microsoft.com/defender-xdr/) · [KQL](https://learn.microsoft.com/kusto/query/)

**ISO 42001 Lead Implementer**
- [page officielle PECB](https://pecb.com/en/education-and-certification-for-individuals/iso-42001)
- ISO/IEC 42001:2023, AI Management System (AIMS)

**CISSP**
- [page officielle ISC2](https://www.isc2.org/Certifications/CISSP)
- 8 domaines CBK

**CISA**
- [page officielle ISACA](https://www.isaca.org/credentialing/cisa)
- 5 domaines, audit des SI

**EFREI Gouvernance, Audit et Risques (RNCP39781 BC01)**
- [Site EFREI](https://www.efrei.fr/)
- [RGPD CNIL](https://www.cnil.fr/fr/reglement-europeen-protection-donnees) · [DORA UE 2022/2554](https://eur-lex.europa.eu/eli/reg/2022/2554/oj) · [NIS2 UE 2022/2555](https://eur-lex.europa.eu/eli/dir/2022/2555/oj)
- [SecNumCloud (ANSSI)](https://cyber.gouv.fr/secnumcloud-pour-les-fournisseurs-de-services-cloud) · [HDS](https://esante.gouv.fr/produits-services/hds)
- [ISO 19011:2018](https://www.iso.org/standard/70017.html) · [ISO 27001:2022](https://www.iso.org/standard/27001)

---

## Prochaines évolutions suggérées

- **Synchronisation multi-appareils** via Supabase (auth + Postgres + RLS). Les hooks `useProgress` sont déjà isolés, il suffira de brancher un middleware côté store.
- **Banque élargie** : objectif 200 Q par certif pour couvrir tous les sous-objectifs.
- **PBQ interactifs** avec drag-and-drop réel (actuellement simulés en QCM contextuels).
- **Spaced repetition** plus fin (SM-2 ou FSRS) pour le mode révision ciblée.
- **Export PDF** des fiches de révision et du glossaire.
- **Mode multi-joueurs** : duels en temps réel sur un sous-ensemble de questions.

---

## Licence

Projet personnel d'étude. Usage libre à titre individuel. Les marques (CompTIA, ISC2, ISACA, Microsoft, ANSSI, EFREI…) appartiennent à leurs propriétaires respectifs ; CertyQuiz n'est ni affilié ni sponsorisé par ces organismes.
