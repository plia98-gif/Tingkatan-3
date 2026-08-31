import React from 'react';
import { Shield, BookMarked, Award, CheckCircle2, FileText, Wind } from 'lucide-react';
import { UserProgress } from '../types';

interface NavbarProps {
  progress: UserProgress;
  onOpenGlossary: () => void;
  onOpenReference: () => void;
  onOpenCertificate: () => void;
  onOpenFinalQuiz: () => void;

}

export const Navbar: React.FC<NavbarProps> = ({
  progress,
  onOpenGlossary,
  onOpenReference,
  onOpenCertificate,
  onOpenFinalQuiz
}) => {
  const completedCount = progress.completedChapters.length;
  const progressPercent = Math.round((completedCount / 5) * 100);
  const isFinalUnlocked = completedCount === 5 || progress.finalQuizScore !== null;

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & App Title */}
          <div className="flex items-center space-x-3.5 self-start md:self-auto">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-xs shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-100">
                  KPM TINGKATAN 3
                </span>
                <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                  Kementerian Pendidikan Malaysia
                </span>
              </div>
              <h1 className="text-base md:text-lg font-bold tracking-tight text-slate-800">
                Modul Anti-Buli & Emosi <span className="text-indigo-600">Tingkatan 3</span>
              </h1>
            </div>
          </div>

          {/* Progress Bar & Status */}
          <div className="w-full md:w-auto flex items-center space-x-4 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Status: {completedCount === 5 ? 'Selesai' : 'Aktif'}
              </span>
            </div>
            <div className="h-4 w-px bg-slate-200"></div>
            <div className="text-left">
              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="text-slate-500 font-medium">Kemajuan Modul:</span>
                <span className="font-bold text-indigo-600">{completedCount} / 5 Bab</span>
              </div>
              <div className="w-32 sm:w-40 bg-slate-200 h-2 rounded-full mt-1 overflow-hidden">
                <div
                  className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
            <span className="text-xs font-bold text-slate-700 shrink-0">{progressPercent}%</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 self-end md:self-auto text-xs flex-wrap gap-y-2">


            <button
              id="nav-btn-glossary"
              onClick={onOpenGlossary}
              className="px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-indigo-600 border border-slate-200 flex items-center space-x-1.5 font-medium transition-colors"
              title="Glosari Istilah Anti-Buli & EQ"
            >
              <BookMarked className="w-4 h-4 text-indigo-600" />
              <span className="hidden sm:inline font-semibold">Glosari EQ</span>
            </button>

            <button
              id="nav-btn-reference"
              onClick={onOpenReference}
              className="px-3 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-emerald-600 border border-slate-200 flex items-center space-x-1.5 font-medium transition-colors"
              title="Nota Talian Crisis & Panduan KPM"
            >
              <FileText className="w-4 h-4 text-emerald-600" />
              <span className="hidden sm:inline font-semibold">Nota Talian</span>
            </button>

            {completedCount === 5 && (
              <button
                id="nav-btn-final-quiz"
                onClick={onOpenFinalQuiz}
                className="px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center space-x-1.5 shadow-sm transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Ujian Akhir</span>
              </button>
            )}

            <button
              id="nav-btn-certificate"
              onClick={onOpenCertificate}
              className={`px-3 py-2 rounded-lg font-bold flex items-center space-x-1.5 transition-colors shadow-xs ${
                isFinalUnlocked
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  : 'bg-slate-100 text-slate-400 hover:text-slate-600 border border-slate-200'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Sijil {isFinalUnlocked ? 'Rasmi' : ''}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
