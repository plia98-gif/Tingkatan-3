import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Shield,
  BookOpen,
  Award,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  RotateCcw,
  Heart,
  Brain,
  PhoneCall,
  Clock,
  UserCheck,
  Wind
} from 'lucide-react';
import { UserProgress } from './types';
import { ASK_CHAPTERS } from './data/askTingkatan3Data';
import { Navbar } from './components/Navbar';
import { ChapterCard } from './components/ChapterCard';
import { ChapterViewer } from './components/ChapterViewer';
import { CertificateModal } from './components/CertificateModal';
import { FinalQuizModal } from './components/FinalQuizModal';
import { GlossaryModal } from './components/GlossaryModal';
import { ReferenceModal } from './components/ReferenceModal';
import {
  AdamAvatar,
  SitiAvatar,
  KavitaAvatar,
  WongAvatar,
  CikguHafizAvatar,
  GroupIllustration
} from './components/StudentIllustrations';
import { AudioPlayerButton } from './components/AudioPlayerButton';

const STORAGE_KEY = 'anti_buli_tingkatan_3_progress_v1';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse saved progress', e);
        }
      }
    }
    return {
      completedChapters: [],
      currentChapterId: null,
      quizScores: {},
      finalQuizScore: null,
      completedActivities: [],
      studentName: 'Adam bin Mohd Zaki',
      studentClass: '3 Bestari',
      schoolName: 'SMK Seri Bintang',
      completionDate: null,
      certificateId: 'KPM-ANTIBULI-T3-2026-9921',
      pledgeText: null,
      pledgeSignature: null
    };
  });

  const [activeChapterId, setActiveChapterId] = useState<number | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isFinalQuizOpen, setIsFinalQuizOpen] = useState(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [isReferenceOpen, setIsReferenceOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const handleSelectChapter = (id: number) => {
    setActiveChapterId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActiveChapterId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMarkChapterCompleted = (chapterId: number, quizScore: number) => {
    setProgress(prev => {
      const updatedChapters = prev.completedChapters.includes(chapterId)
        ? prev.completedChapters
        : [...prev.completedChapters, chapterId];

      const updatedScores = {
        ...prev.quizScores,
        [chapterId]: quizScore
      };

      const isAllDone = updatedChapters.length === 5;

      return {
        ...prev,
        completedChapters: updatedChapters,
        quizScores: updatedScores,
        completionDate: isAllDone && !prev.completionDate
          ? new Date().toLocaleDateString('ms-MY', { day: 'numeric', month: 'long', year: 'numeric' })
          : prev.completionDate
      };
    });
  };

  const handlePassFinalQuiz = (score: number) => {
    setProgress(prev => ({
      ...prev,
      finalQuizScore: score,
      completionDate: new Date().toLocaleDateString('ms-MY', { day: 'numeric', month: 'long', year: 'numeric' })
    }));
    setIsCertModalOpen(true);
  };

  const handleUpdateStudentInfo = (name: string, studentClass: string, schoolName: string) => {
    setProgress(prev => ({
      ...prev,
      studentName: name,
      studentClass,
      schoolName
    }));
  };

  const handleResetProgress = () => {
    if (window.confirm('Adakah anda pasti mahu set semula semua kemajuan modul kepada 0/5?')) {
      const resetState: UserProgress = {
        completedChapters: [],
        currentChapterId: null,
        quizScores: {},
        finalQuizScore: null,
        completedActivities: [],
        studentName: progress.studentName || 'Adam bin Mohd Zaki',
        studentClass: progress.studentClass || '3 Bestari',
        schoolName: progress.schoolName || 'SMK Seri Bintang',
        completionDate: null,
        certificateId: `KPM-ANTIBULI-T3-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        pledgeText: null,
        pledgeSignature: null
      };
      setProgress(resetState);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resetState));
      setActiveChapterId(null);
    }
  };

  const currentChapter = ASK_CHAPTERS.find(c => c.id === activeChapterId);
  const completedCount = progress.completedChapters.length;
  const isAllCompleted = completedCount === 5;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar
        progress={progress}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
        onOpenReference={() => setIsReferenceOpen(true)}
        onOpenCertificate={() => setIsCertModalOpen(true)}
        onOpenFinalQuiz={() => setIsFinalQuizOpen(true)}
      />
      {/* Main Content Area */}
      {currentChapter ? (
        <ChapterViewer
          chapter={currentChapter}
          onBackToHome={handleBackToHome}
          onNextChapter={() => {
            if (currentChapter.id < 5) {
              setActiveChapterId(currentChapter.id + 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          onPreviousChapter={() => {
            if (currentChapter.id > 1) {
              setActiveChapterId(currentChapter.id - 1);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          isFirstChapter={currentChapter.id === 1}
          isLastChapter={currentChapter.id === 5}
          isCompleted={progress.completedChapters.includes(currentChapter.id)}
          onMarkChapterCompleted={handleMarkChapterCompleted}
          studentName={progress.studentName}
          studentClass={progress.studentClass}
          schoolName={progress.schoolName}
          onUpdateStudentInfo={handleUpdateStudentInfo}
        />
      ) : (
        <main className="max-w-7xl mx-auto px-6 py-8 space-y-10">
          {/* Hero Banner */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full border border-indigo-100 text-xs font-semibold uppercase tracking-wider">
                  <Shield className="w-3.5 h-3.5 text-indigo-600" />
                  <span>MODUL SAHSAH & MINDA SIHAT KPM</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  MODUL ANTI-BULI TINGKATAN 3 <br />
                  <span className="text-indigo-600">
                    BIJAK TANGANI TEKANAN & EMOSI
                  </span>
                </h1>

                <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                  Selamat datang murid-murid Tingkatan 3! Modul interaktif 5 bab ini membimbing anda memahami punca tekanan, mengurus emosi kendiri (EQ & Grounding 5-4-3-2-1), mengimbangi masa belajar dan rehat, membina daya tahan di masa sukar, serta mengetahui saluran bantuan rasmi dan hak perlindungan murid KPM.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                  <button
                    id="btn-hero-start"
                    onClick={() => handleSelectChapter(progress.completedChapters.length < 5 ? progress.completedChapters.length + 1 : 1)}
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-sm flex items-center space-x-2 shadow-sm transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>
                      {completedCount === 0
                        ? 'Mula Belajar Bab 1 Sekarang'
                        : completedCount === 5
                        ? 'Ulang Semula Modul'
                        : `Sambung Bab ${completedCount + 1}`}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>



                  <AudioPlayerButton
                    text="Selamat datang ke Modul Anti-Buli Tingkatan 3: Bijak Tangani Tekanan dan Emosi. Modul ini mengandungi lima bab pembelajaran interaktif untuk membantu anda mengurus emosi, menangani siberbuli, membina kesihatan mental yang positif, dan menandatangani Ikrar Integriti Pelajar Anti-Buli."
                    textId="hero-welcome-audio"
                    label="Dengar Pengenalan Audio"
                    size="lg"
                  />
                </div>
              </div>

              {/* Student Squad Banner */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-center w-full max-w-md">
                  <p className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-3">
                    Skuad Anti-Buli & Minda Sihat T3
                  </p>

                  <GroupIllustration className="mb-4" />

                  <div className="grid grid-cols-5 gap-1 text-center text-[10px] font-semibold text-slate-600 border-t border-slate-200 pt-3">
                    <div className="flex flex-col items-center">
                      <AdamAvatar size="sm" className="mb-1" />
                      <span className="block text-slate-800 font-bold text-[11px]">Adam</span>
                      <span className="text-[9px] text-indigo-600 font-semibold">Bab 1</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <SitiAvatar size="sm" className="mb-1" />
                      <span className="block text-slate-800 font-bold text-[11px]">Siti</span>
                      <span className="text-[9px] text-emerald-600 font-semibold">Bab 2</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <KavitaAvatar size="sm" className="mb-1" />
                      <span className="block text-slate-800 font-bold text-[11px]">Kavita</span>
                      <span className="text-[9px] text-amber-600 font-semibold">Bab 3</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <WongAvatar size="sm" className="mb-1" />
                      <span className="block text-slate-800 font-bold text-[11px]">Wong</span>
                      <span className="text-[9px] text-purple-600 font-semibold">Bab 4</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <CikguHafizAvatar size="sm" className="mb-1" />
                      <span className="block text-slate-800 font-bold text-[11px]">Cikgu</span>
                      <span className="text-[9px] text-rose-600 font-semibold">Bab 5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chapters List */}
          <section className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <div className="flex items-center space-x-2 text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  <span>Sukatan Pembelajaran Anti-Buli & Emosi Tingkatan 3</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  5 Bab Pembelajaran & Aktiviti Interaktif
                </h2>
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Selesaikan semua 5 bab untuk membuka Sijil Digital Rasmi KPM.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ASK_CHAPTERS.map(ch => (
                <ChapterCard
                  key={ch.id}
                  chapter={ch}
                  isCompleted={progress.completedChapters.includes(ch.id)}
                  score={progress.quizScores[ch.id]}
                  onSelect={() => handleSelectChapter(ch.id)}
                />
              ))}

              {/* Final Assessment Card */}
              <motion.div
                whileHover={{ y: -3 }}
                className={`rounded-xl border p-6 flex flex-col justify-between relative overflow-hidden transition-all shadow-sm ${
                  isAllCompleted
                    ? 'bg-amber-50/50 border-amber-300 text-slate-800'
                    : 'bg-white border-slate-200 text-slate-600'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200 uppercase">
                      PENSIJILAN RASMI
                    </span>
                    <Award className="w-5 h-5 text-amber-500" />
                  </div>

                  <div className="flex items-center space-x-3.5 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 border border-amber-200">
                      <Shield className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">Sijil & Ujian Akhir</h3>
                      <p className="text-xs text-slate-500 mt-0.5 font-normal">
                        {isAllCompleted
                          ? 'Semua 5 bab lengkap! Ambil kuiz akhir untuk jana sijil.'
                          : `Selesaikan ${5 - completedCount} bab lagi untuk layak.`}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                    Sijil digital rasmi KPM yang lengkap dengan nama anda, nombor siri unik, dan pengesahan pangkalan data Anti-Buli Sekolah.
                  </p>
                </div>

                <div className="space-y-2">
                  <button
                    id="btn-card-final-quiz"
                    onClick={() => setIsFinalQuizOpen(true)}
                    className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold flex items-center justify-center space-x-2 transition-colors shadow-xs ${
                      isAllCompleted
                        ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 border border-slate-200'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Ujian Akhir 10 Soalan</span>
                  </button>

                  <button
                    id="btn-card-view-cert"
                    onClick={() => setIsCertModalOpen(true)}
                    className="w-full py-2 px-4 rounded-lg text-xs font-semibold flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>Lihat / Cetak Sijil Digital</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 4 Pillars Section */}
          <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded border border-indigo-100 uppercase">
                Pengurusan Emosi & Kesihatan Mental T3
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                4 Teras Utama Pengurusan Tekanan, Emosi & Anti-Buli
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-normal">
                Kemahiran penting untuk menghadapi tekanan pembelajaran, mempertahankan sempadan diri, dan membina iklim sekolah yang selamat.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold shadow-xs">
                  <Brain className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-800">1. Kenali Punca Stres</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Membezakan Eustres (positif) dan Distres (negatif) serta mengenali reaksi badan dan emosi.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold shadow-xs">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-800">2. Kecerdasan Emosi (EQ)</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Menguasai Grounding 5-4-3-2-1 dan Pernafasan 4-7-8 untuk menenangkan cemas dan marah.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold shadow-xs">
                  <Clock className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-800">3. Masa & Sempadan Diri</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Belajar Teknik Pomodoro 25:5, menyusun jadual harian dan berani berkata TIDAK kepada buli.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold shadow-xs">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-800">4. Reframing & Bantuan</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Menukar minda negatif, menghubungi Talian HEAL 15555 & mengikat Ikrar Anti-Buli Sekolah.
                </p>
              </div>
            </div>
          </section>

          {/* Reset Progress Button */}
          <div className="flex justify-center pt-4">
            <button
              id="btn-reset-all-progress"
              onClick={handleResetProgress}
              className="text-xs text-slate-500 hover:text-slate-700 flex items-center space-x-1.5 transition-colors font-medium"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Set Semula Kemajuan Modul (0/5)</span>
            </button>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4 space-y-2">
          <p className="font-bold text-slate-700">
            Modul Anti-Buli & Pengurusan Emosi Tingkatan 3 — KPM • © 2026 Prospera Digital Solutions. Hak Cipta Terpelihara.
          </p>
          <p>
            Dibina khas untuk sekolah-sekolah di seluruh Malaysia bagi menyokong amalan Sahsiah & Kesihatan Mental Pelajar.
          </p>
        </div>
      </footer>

      {/* Modals */}
      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        studentName={progress.studentName}
        studentClass={progress.studentClass}
        schoolName={progress.schoolName}
        score={progress.finalQuizScore || 100}
        completionDate={progress.completionDate || new Date().toLocaleDateString('ms-MY', { day: 'numeric', month: 'long', year: 'numeric' })}
        certificateId={progress.certificateId || 'KPM-ANTIBULI-T3-2026-9921'}
        onUpdateStudentInfo={handleUpdateStudentInfo}
      />

      <FinalQuizModal
        isOpen={isFinalQuizOpen}
        onClose={() => setIsFinalQuizOpen(false)}
        onPassQuiz={handlePassFinalQuiz}
        currentFinalScore={progress.finalQuizScore}
      />

      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />

      <ReferenceModal
        isOpen={isReferenceOpen}
        onClose={() => setIsReferenceOpen(false)}
      />


    </div>
  );
}
