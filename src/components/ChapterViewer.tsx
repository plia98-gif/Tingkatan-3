import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  XCircle,
  Clock,
  Award,
  Search,
  FileCode,
  Code,
  Bug,
  Database,
  Tag,
  List,
  CheckSquare,
  Filter,
  Edit3,
  ChevronDown
} from 'lucide-react';
import { Chapter } from '../types';

import { AffirmationCardWidget } from './AffirmationCardWidget';
import { AudioPlayerButton } from './AudioPlayerButton';
import { DebuggerAndPhaseActivity } from './activities/DebuggerAndPhaseActivity';
import { DataTypeClassifierActivity } from './activities/DataTypeClassifierActivity';
import { ErdDesignerActivity } from './activities/ErdDesignerActivity';
import { SqlSandboxActivity } from './activities/SqlSandboxActivity';
import { FormReportBuilderActivity } from './activities/FormReportBuilderActivity';
import {
  AdamAvatar,
  SitiAvatar,
  KavitaAvatar,
  WongAvatar,
  CikguHafizAvatar
} from './StudentIllustrations';
import confetti from 'canvas-confetti';

interface ChapterViewerProps {
  chapter: Chapter;
  onBackToHome: () => void;
  onNextChapter: () => void;
  onPreviousChapter: () => void;
  isFirstChapter: boolean;
  isLastChapter: boolean;
  isCompleted: boolean;
  onMarkChapterCompleted: (chapterId: number, quizScore: number) => void;
  studentName?: string;
  studentClass?: string;
  schoolName?: string;
  onUpdateStudentInfo?: (name: string, studentClass: string, schoolName: string) => void;
}

export const ChapterViewer: React.FC<ChapterViewerProps> = ({
  chapter,
  onBackToHome,
  onNextChapter,
  onPreviousChapter,
  isFirstChapter,
  isLastChapter,
  isCompleted,
  onMarkChapterCompleted,
  studentName,
  studentClass,
  schoolName,
  onUpdateStudentInfo
}) => {
  const [activeTab, setActiveTab] = useState<'pembelajaran' | 'aktiviti' | 'kuiz'>('pembelajaran');
  const [activityDone, setActivityDone] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const renderAvatar = (key: string, size: 'sm' | 'md' | 'lg' = 'md') => {
    switch (key) {
      case 'adam':
        return <AdamAvatar size={size} />;
      case 'siti':
        return <SitiAvatar size={size} />;
      case 'kavita':
        return <KavitaAvatar size={size} />;
      case 'wong':
        return <WongAvatar size={size} />;
      case 'cikgu':
        return <CikguHafizAvatar size={size} />;
      default:
        return <AdamAvatar size={size} />;
    }
  };

  const handleSelectQuizOption = (questionId: string, optionId: string) => {
    if (quizSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleSubmitQuiz = () => {
    if (Object.keys(selectedAnswers).length < chapter.quiz.length) return;
    setQuizSubmitted(true);

    let correctCount = 0;
    chapter.quiz.forEach(q => {
      const selected = q.options.find(o => o.id === selectedAnswers[q.id]);
      if (selected && selected.isCorrect) {
        correctCount += 1;
      }
    });

    const scorePercent = Math.round((correctCount / chapter.quiz.length) * 100);
    onMarkChapterCompleted(chapter.id, scorePercent);

    if (scorePercent >= 60) {
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    }
  };

  const handleRetryQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'FileCode':
        return <FileCode className="w-5 h-5" />;
      case 'Code':
        return <Code className="w-5 h-5" />;
      case 'Bug':
        return <Bug className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Variable':
        return <Sparkles className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Tag':
        return <Tag className="w-5 h-5" />;
      case 'List':
        return <List className="w-5 h-5" />;
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5" />;
      case 'Filter':
        return <Filter className="w-5 h-5" />;
      case 'Edit3':
        return <Edit3 className="w-5 h-5" />;
      case 'ChevronDown':
        return <ChevronDown className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20 font-sans">
      {/* Chapter Top Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-3 shadow-xs">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            id="btn-back-to-home"
            onClick={onBackToHome}
            className="flex items-center space-x-2 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-xs transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-sky-600" />
            <span>Menu Utama (0/5 Bab)</span>
          </button>

          <div className="flex items-center space-x-2 text-xs">
            <span className="bg-sky-100 text-sky-700 font-black px-2.5 py-1 rounded-lg border border-sky-200 shadow-xs">
              Bab {chapter.id} / 5
            </span>
            {isCompleted && (
              <span className="hidden sm:inline-flex items-center space-x-1 text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Selesai</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Hero Header Box */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <div className="bg-gradient-to-br from-white via-sky-50/70 to-indigo-50/60 border border-sky-100 rounded-3xl p-6 md:p-8 shadow-xl shadow-sky-100/50 relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
            {/* Student Avatar */}
            <div className="shrink-0 flex flex-col items-center">
              {renderAvatar(chapter.featuredStudent.avatarKey, 'lg')}
              <span className="text-xs font-black text-slate-900 mt-2">{chapter.featuredStudent.name}</span>
              <span className="text-[10px] text-slate-500 font-semibold">{chapter.featuredStudent.role}</span>
            </div>

            {/* Title & Tagline */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                <span className="text-xs font-black tracking-wider text-sky-700 bg-sky-100 px-3 py-0.5 rounded-full border border-sky-200 uppercase shadow-xs">
                  Bab {chapter.id}: Anti-Buli & Emosi T3
                </span>
                <span className="text-xs text-slate-500 font-semibold flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{chapter.estimatedMinutes} Minit Bacaan & Aktiviti</span>
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-2">
                {chapter.title}
              </h1>

              <p className="text-sm md:text-base text-slate-600 mb-4 leading-relaxed font-medium">
                {chapter.tagline}
              </p>

              <div className="bg-white border-l-4 border-sky-500 p-3.5 rounded-r-2xl text-xs md:text-sm text-slate-700 italic shadow-xs border border-slate-100">
                "{chapter.featuredStudent.quote}"
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-sky-100 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-500 font-medium">
              💡 Klik butang suara untuk mendengar modul dibaca dalam Bahasa Melayu.
            </div>
            <AudioPlayerButton
              text={`${chapter.title}. ${chapter.tagline}. ${chapter.summary}`}
              textId={`ch-${chapter.id}-summary`}
              label="Dengar Pengenalan Bab Ini"
              size="md"
            />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm mb-8 max-w-xl mx-auto">
          <button
            id="tab-btn-pembelajaran"
            onClick={() => setActiveTab('pembelajaran')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs md:text-sm font-extrabold flex items-center justify-center space-x-2 transition-all ${
              activeTab === 'pembelajaran'
                ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-md shadow-sky-600/30'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>1. Pembelajaran</span>
          </button>

          <button
            id="tab-btn-aktiviti"
            onClick={() => setActiveTab('aktiviti')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs md:text-sm font-extrabold flex items-center justify-center space-x-2 transition-all ${
              activeTab === 'aktiviti'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md shadow-amber-500/30'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>2. Aktiviti Interaktif</span>
            {activityDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 ml-1" />}
          </button>

          <button
            id="tab-btn-kuiz"
            onClick={() => setActiveTab('kuiz')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs md:text-sm font-extrabold flex items-center justify-center space-x-2 transition-all ${
              activeTab === 'kuiz'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>3. Kuiz Bab</span>
            {quizSubmitted && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 ml-1" />}
          </button>
        </div>

        {/* Tab 1: Pembelajaran */}
        {activeTab === 'pembelajaran' && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            {/* Learning Outcomes Box */}
            <div className="bg-white border border-sky-100 rounded-3xl p-5 md:p-6 shadow-sm">
              <h3 className="text-sm font-black text-sky-700 uppercase tracking-wider mb-3 flex items-center space-x-2">
                <Award className="w-4 h-4 text-sky-600" />
                <span>Hasil Pembelajaran Bab Ini:</span>
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-slate-700 font-medium">
                {chapter.learningOutcomes.map((lo, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{lo}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chapter Sections */}
            {chapter.sections.map(section => (
              <div key={section.id} className="bg-white border border-slate-200/90 rounded-3xl p-6 md:p-8 shadow-lg shadow-slate-100/80 relative">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4 border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-1">{section.title}</h2>
                    {section.subtitle && (
                      <p className="text-xs md:text-sm font-semibold text-slate-500">{section.subtitle}</p>
                    )}
                  </div>
                  <AudioPlayerButton
                    text={`${section.title}. ${section.subtitle || ''}. ${section.audioText}. ${section.paragraphs.join(' ')}`}
                    textId={`sec-audio-${section.id}`}
                    label="Baca Bahagian Ini"
                    size="sm"
                  />
                </div>

                <div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed mb-6 font-medium">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Infographic Grid */}
                {section.infographicPoints && section.infographicPoints.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {section.infographicPoints.map((ip, ipIdx) => (
                      <div
                        key={ipIdx}
                        className={`p-4 rounded-2xl border transition-all ${
                          ip.color === 'emerald'
                            ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                            : ip.color === 'rose'
                            ? 'bg-rose-50/80 border-rose-200 text-rose-950'
                            : ip.color === 'amber'
                            ? 'bg-amber-50/80 border-amber-200 text-amber-950'
                            : ip.color === 'indigo'
                            ? 'bg-indigo-50/80 border-indigo-200 text-indigo-950'
                            : 'bg-sky-50/80 border-sky-200 text-sky-950'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="p-2 rounded-xl bg-white text-slate-900 shadow-xs border border-slate-200/80">
                            {renderIcon(ip.icon)}
                          </div>
                          {ip.tag && (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200/80 uppercase shadow-xs">
                              {ip.tag}
                            </span>
                          )}
                        </div>
                        <h4 className="font-extrabold text-sm mb-1 text-slate-900">{ip.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line font-medium">
                          {ip.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}



                {/* Special Interactive Widget for Section 4.1: Affirmation Card */}
                {section.id === 'sec-4-1' && (
                  <div className="mb-6">
                    <AffirmationCardWidget />
                  </div>
                )}

                {/* Bullet Points */}
                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <div className="bg-sky-50/60 border border-sky-100 rounded-2xl p-4 md:p-5 mb-6 space-y-3">
                    {section.bulletPoints.map((bp, bpIdx) => (
                      <div key={bpIdx} className="text-xs md:text-sm text-slate-700 font-medium leading-relaxed pl-2 border-l-3 border-sky-500">
                        {bp}
                      </div>
                    ))}
                  </div>
                )}

                {/* Dialogue Items */}
                {section.dialogue && section.dialogue.length > 0 && (
                  <div className="space-y-4 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <p className="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Perbualan Refleksi:</p>
                    {section.dialogue.map((dItem, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-3">
                        <div className="shrink-0">
                          {renderAvatar(dItem.avatar, 'sm')}
                        </div>
                        <div className="flex-1 bg-white rounded-2xl rounded-tl-none p-3.5 border border-slate-200/90 shadow-xs">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-extrabold text-xs text-slate-900">{dItem.speaker}</span>
                            <span className="text-[10px] text-sky-700 font-black uppercase">{dItem.type}</span>
                          </div>
                          <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium">{dItem.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Takeaway */}
                {section.keyTakeaway && (
                  <div className="bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-200 rounded-2xl p-4 flex items-start space-x-3 text-xs md:text-sm text-sky-950 font-medium shadow-xs">
                    <Sparkles className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-sky-800 font-black">Intipati Utama:</strong> {section.keyTakeaway}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="flex justify-end pt-4">
              <button
                id="btn-goto-activity"
                onClick={() => {
                  setActiveTab('aktiviti');
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold rounded-2xl text-sm flex items-center space-x-2 shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
              >
                <span>Teruskan ke Aktiviti Interaktif Bab {chapter.id}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Aktiviti Interaktif */}
        {activeTab === 'aktiviti' && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            {chapter.id === 1 && (
              <DebuggerAndPhaseActivity
                onComplete={() => setActivityDone(true)}
                isCompleted={activityDone}
              />
            )}
            {chapter.id === 2 && (
              <DataTypeClassifierActivity
                onComplete={() => setActivityDone(true)}
                isCompleted={activityDone}
              />
            )}
            {chapter.id === 3 && (
              <ErdDesignerActivity
                onComplete={() => setActivityDone(true)}
                isCompleted={activityDone}
              />
            )}
            {chapter.id === 4 && (
              <SqlSandboxActivity
                onComplete={() => setActivityDone(true)}
                isCompleted={activityDone}
              />
            )}
            {chapter.id === 5 && (
              <FormReportBuilderActivity
                onComplete={() => setActivityDone(true)}
                isCompleted={activityDone}
                studentName={studentName}
                studentClass={studentClass}
                schoolName={schoolName}
                onUpdateInfo={onUpdateStudentInfo}
              />
            )}

            <div className="flex justify-between pt-4">
              <button
                id="btn-back-to-learn"
                onClick={() => setActiveTab('pembelajaran')}
                className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-xl text-xs md:text-sm flex items-center space-x-2 transition-all border border-slate-200 shadow-xs"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Ulang Semula Nota Pembelajaran</span>
              </button>

              <button
                id="btn-goto-quiz"
                onClick={() => {
                  setActiveTab('kuiz');
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold rounded-2xl text-xs md:text-sm flex items-center space-x-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
              >
                <span>Teruskan ke Kuiz Pengukuhan Bab {chapter.id}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Kuiz Bab */}
        {activeTab === 'kuiz' && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl">
              <div className="flex items-center space-x-3 mb-6 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black shadow-xs">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Kuiz Pengukuhan Bab {chapter.id}</h3>
                  <p className="text-xs text-slate-500 font-medium">Jawab 3 soalan situasi untuk mengesahkan penyempurnaan bab ini</p>
                </div>
              </div>

              <div className="space-y-8 mb-8">
                {chapter.quiz.map((q, qIdx) => {
                  const userChoice = selectedAnswers[q.id];
                  const selectedOpt = q.options.find(o => o.id === userChoice);

                  return (
                    <div key={q.id} className="bg-slate-50 rounded-2xl p-5 md:p-6 border border-slate-200/80">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 uppercase shadow-xs">
                          Soalan {qIdx + 1} daripada {chapter.quiz.length}
                        </span>
                      </div>

                      {q.scenario && (
                        <p className="text-xs md:text-sm text-slate-700 italic mb-3 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs font-medium">
                          📌 {q.scenario}
                        </p>
                      )}

                      <h4 className="text-sm md:text-base font-extrabold text-slate-900 mb-4">{q.question}</h4>

                      <div className="space-y-2.5">
                        {q.options.map(opt => {
                          const isSelected = userChoice === opt.id;
                          let optStyle = 'bg-white hover:bg-sky-50/50 border-slate-200 text-slate-700 shadow-xs';

                          if (quizSubmitted) {
                            if (opt.isCorrect) {
                              optStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 ring-2 ring-emerald-300 font-bold';
                            } else if (isSelected && !opt.isCorrect) {
                              optStyle = 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-300 font-bold';
                            }
                          } else if (isSelected) {
                            optStyle = 'bg-sky-50 border-sky-400 text-sky-950 ring-2 ring-sky-300 font-bold shadow-xs';
                          }

                          return (
                            <button
                              key={opt.id}
                              id={`q-${q.id}-opt-${opt.id}`}
                              onClick={() => handleSelectQuizOption(q.id, opt.id)}
                              disabled={quizSubmitted}
                              className={`w-full p-3.5 rounded-xl border text-left text-xs md:text-sm transition-all flex items-start space-x-3 ${optStyle}`}
                            >
                              <span className="w-5 h-5 rounded-full border border-slate-300 bg-slate-100 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 uppercase text-slate-700">
                                {opt.id}
                              </span>
                              <span className="flex-1 leading-relaxed">{opt.text}</span>
                              {quizSubmitted && opt.isCorrect && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                              {quizSubmitted && isSelected && !opt.isCorrect && (
                                <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && selectedOpt && (
                        <div
                          className={`mt-3 p-3.5 rounded-xl text-xs leading-relaxed font-medium ${
                            selectedOpt.isCorrect
                              ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                              : 'bg-rose-50 border border-rose-200 text-rose-900'
                          }`}
                        >
                          <strong className="block mb-1 font-extrabold">
                            {selectedOpt.isCorrect ? '✅ Penjelasan Tepat:' : '❌ Penjelasan:'}
                          </strong>
                          {selectedOpt.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                {quizSubmitted ? (
                  <>
                    <button
                      id="btn-retry-chapter-quiz"
                      onClick={handleRetryQuiz}
                      className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 shadow-xs"
                    >
                      Cuba Semula Kuiz
                    </button>

                    <div className="flex items-center space-x-3">
                      {isLastChapter ? (
                        <button
                          id="btn-finish-all-chapters"
                          onClick={onBackToHome}
                          className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-sky-600 hover:from-emerald-500 hover:to-sky-500 text-white font-extrabold rounded-2xl text-sm flex items-center space-x-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
                        >
                          <Award className="w-4 h-4" />
                          <span>Tamat Semua 5 Bab! Ambil Penilaian Sijil</span>
                        </button>
                      ) : (
                        <button
                          id="btn-next-chapter"
                          onClick={onNextChapter}
                          className="px-6 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-extrabold rounded-2xl text-sm flex items-center space-x-2 shadow-lg shadow-sky-600/30 transition-all hover:scale-105"
                        >
                          <span>Lanjut ke Bab Seterusnya (Bab {chapter.id + 1})</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  <button
                    id="btn-submit-chapter-quiz"
                    onClick={handleSubmitQuiz}
                    disabled={Object.keys(selectedAnswers).length < chapter.quiz.length}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-extrabold rounded-2xl text-sm flex items-center space-x-2 shadow-lg shadow-emerald-600/30 transition-all ml-auto hover:scale-105"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Hantar Jawapan Kuiz Bab {chapter.id}</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Bottom Navigation */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between">
          <button
            id="btn-bottom-prev-ch"
            onClick={onPreviousChapter}
            disabled={isFirstChapter}
            className="flex items-center space-x-2 text-xs font-bold text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Bab Sebelumnya</span>
          </button>

          <button
            id="btn-bottom-home"
            onClick={onBackToHome}
            className="text-xs font-bold text-slate-500 hover:text-sky-600 transition-colors"
          >
            Kembali ke Papan Pemuka
          </button>

          <button
            id="btn-bottom-next-ch"
            onClick={onNextChapter}
            disabled={isLastChapter}
            className="flex items-center space-x-2 text-xs font-bold text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs"
          >
            <span>Bab Seterusnya</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
