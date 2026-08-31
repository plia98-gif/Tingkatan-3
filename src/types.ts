export type ThemeColor = 'sky' | 'emerald' | 'amber' | 'indigo' | 'rose' | 'purple' | 'teal';

export interface InfographicPoint {
  title: string;
  description: string;
  icon: string;
  tag?: string;
  color?: ThemeColor;
}

export interface DialogueItem {
  speaker: string;
  avatar: string; // 'adam' | 'siti' | 'kavita' | 'wong' | 'cikgu'
  text: string;
  type: 'example' | 'statement' | 'advice';
}

export interface Section {
  id: string;
  title: string;
  subtitle?: string;
  audioText: string;
  paragraphs: string[];
  infographicPoints?: InfographicPoint[];
  bulletPoints?: string[];
  dialogue?: DialogueItem[];
  keyTakeaway?: string;
}

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface QuizQuestion {
  id: string;
  scenario?: string;
  question: string;
  options: QuizOption[];
}

export interface ChapterActivity {
  type: 'analisis-tekanan' | 'teknik-grounding' | 'keseimbangan-masa' | 'reframing-minda' | 'saluran-bantuan';
  title: string;
  description: string;
  instructions: string;
}

export interface FeaturedStudent {
  name: string;
  role: string;
  ethnicity: string;
  avatarKey: string;
  quote: string;
}

export interface Chapter {
  id: number;
  title: string;
  slug: string;
  tagline: string;
  themeColor: ThemeColor;
  estimatedMinutes: number;
  featuredStudent: FeaturedStudent;
  summary: string;
  learningOutcomes: string[];
  sections: Section[];
  activity: ChapterActivity;
  quiz: QuizQuestion[];
}

export interface GlossaryItem {
  term: string;
  category: 'Pengurusan Emosi' | 'Jenis Buli & Siber' | 'Daya Tahan & EQ' | 'Saluran Bantuan';
  meaning: string;
  example: string;
}

export interface ReferenceItem {
  name: string;
  category: string;
  type: 'helpline' | 'teknik' | 'buli' | 'hak';
  codeOrInfo: string;
  description: string;
}

export interface UserProgress {
  completedChapters: number[];
  currentChapterId: number | null;
  quizScores: Record<number, number>;
  finalQuizScore: number | null;
  completedActivities: string[];
  studentName: string;
  studentClass: string;
  schoolName: string;
  completionDate: string | null;
  certificateId: string;
  pledgeText: string | null;
  pledgeSignature: string | null;
}
