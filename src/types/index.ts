export type CertId =
  | 'security-plus'
  | 'ebios-rm'
  | 'sc-200'
  | 'iso-42001'
  | 'cissp'
  | 'cisa'

export type Difficulty = 'easy' | 'medium' | 'hard'

export type QuestionType = 'single' | 'multi' | 'pbq'

export interface Option {
  id: string
  text: string
  /** Rationale court (1 phrase) : pourquoi cette option est bonne OU fausse. Affiché au clic. */
  rationale?: string
}

export interface Question {
  id: string
  certId: CertId
  domainId: string
  type: QuestionType
  prompt: string
  scenario?: string
  options: Option[]
  /** option ids (single = 1 id, multi = >=2 ids) */
  correct: string[]
  /** Phrase-clé à retenir, facultative (1 ligne max). Les détails vont dans les rationales des options. */
  explanation?: string
  references?: { label: string; url: string }[]
  tags?: string[]
  difficulty: Difficulty
  /** true si la question provient d'un support officiel (exemple : MS Learn practice, MOOC Club EBIOS). Affiche une bannière rouge. */
  official?: boolean
}

export interface Domain {
  id: string
  label: string
  /** pondération en % (Security+) ou ordre (EBIOS, SC 200) */
  weight?: number
  description?: string
  color?: string
}

export interface Certification {
  id: CertId
  name: string
  shortName: string
  tagline: string
  color: string
  /** Couleur hex utilisée pour le badge et les accents visuels. */
  hexColor: string
  /** Chemin relatif du logo (image PNG ou SVG) dans public/. */
  logoPath?: string
  examMinutes: number
  examQuestions: number
  passingScore: string
  language: 'FR' | 'EN'
  domains: Domain[]
  officialUrl: string
  resources: {
    label: string
    url: string
    kind?: 'pdf' | 'mooc' | 'doc' | 'exam' | 'drive'
  }[]
  /** Bloc "davantage de ressources" mis en avant visuellement. */
  extraResources?: {
    label: string
    url: string
    description?: string
  }[]
}

export interface Flashcard {
  id: string
  certId: CertId
  front: string
  back: string
  domainId?: string
  tag?: string
}

export interface CourseSheet {
  id: string
  certId: CertId
  domainId: string
  title: string
  readMinutes: number
  body: string
}

export interface GlossaryEntry {
  term: string
  aka?: string[]
  definition: string
  certIds?: CertId[]
}

export interface Attempt {
  qid: string
  certId: CertId
  domainId: string
  correct: boolean
  answeredAt: number
  ms: number
}

export interface ExamRun {
  id: string
  certId: CertId
  startedAt: number
  endedAt?: number
  totalQuestions: number
  score: number
  perDomain: Record<string, { correct: number; total: number }>
  passed: boolean
}

export interface Progress {
  attempts: Attempt[]
  exams: ExamRun[]
  streak: { current: number; longest: number; lastDay: string | null }
  badges: string[]
  onboarded: boolean
  positioningScore?: number
  settings: {
    theme: 'light' | 'dark' | 'system'
    reducedMotion: boolean
  }
}
