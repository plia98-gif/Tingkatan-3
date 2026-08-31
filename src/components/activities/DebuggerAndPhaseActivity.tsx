import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, AlertCircle, RefreshCw, Shield, Search, HeartPulse } from 'lucide-react';

interface StressAnalyzerActivityProps {
  onComplete: () => void;
  isCompleted: boolean;
}

interface Scenario {
  id: string;
  title: string;
  description: string;
  category: 'Eustres' | 'Distres' | 'Buli Siber';
  symptom: 'Fizikal' | 'Emosi' | 'Tingkah Laku';
  action: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 's1',
    title: "Ejekan Fizikal di Media Sosial",
    description: "Seseorang memuat naik gambar dan mengejek rupa paras anda di kumpulan WhatsApp sekolah.",
    category: 'Buli Siber',
    symptom: 'Emosi',
    action: "Laporkan kepada guru kaunseling dan simpan tangkapan skrin sebagai bukti."
  },
  {
    id: 's2',
    title: "Semangat Pembentangan Kelas",
    description: "Rasa sedikit debar sebelum membentangkan projek di hadapan rakan, tetapi bersemangat untuk buat yang terbaik.",
    category: 'Eustres',
    symptom: 'Fizikal',
    action: "Amalkan pernafasan tenang dan teruskan pembentangan dengan yakin."
  },
  {
    id: 's3',
    title: "Tugasan Terkumpul & Kurang Tidur",
    description: "Menangguhkan kerja sekolah sehingga malam suntuk menyebabkan sakit kepala dan panik.",
    category: 'Distres',
    symptom: 'Fizikal',
    action: "Susun jadual mengikut keutamaan dan pastikan tidur sekurang-kurangnya 7 jam."
  },
  {
    id: 's4',
    title: "Diancam Dipulaukan Rakan",
    description: "Rakan mengancam tidak mahu berkawan jika anda tidak menyerahkan nota jawapan pentaksiran.",
    category: 'Buli Siber',
    symptom: 'Tingkah Laku',
    action: "Katakan TIDAK secara tegas dan maklumkan kepada Guru Bimbingan Kaunseling."
  }
];

export const DebuggerAndPhaseActivity: React.FC<StressAnalyzerActivityProps> = ({
  onComplete,
  isCompleted
}) => {
  const [userCategoryAnswers, setUserCategoryAnswers] = useState<Record<string, string>>({});
  const [userSymptomAnswers, setUserSymptomAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(isCompleted);

  const handleSelectCategory = (scenarioId: string, category: string) => {
    if (isSubmitted) return;
    setUserCategoryAnswers(prev => ({ ...prev, [scenarioId]: category }));
  };

  const handleSelectSymptom = (scenarioId: string, symptom: string) => {
    if (isSubmitted) return;
    setUserSymptomAnswers(prev => ({ ...prev, [scenarioId]: symptom }));
  };

  const isAllAnswered =
    Object.keys(userCategoryAnswers).length === SCENARIOS.length &&
    Object.keys(userSymptomAnswers).length === SCENARIOS.length;

  const handleSubmit = () => {
    setIsSubmitted(true);
    let correct = 0;
    SCENARIOS.forEach(s => {
      if (userCategoryAnswers[s.id] === s.category && userSymptomAnswers[s.id] === s.symptom) {
        correct++;
      }
    });
    if (correct >= 3) {
      onComplete();
    }
  };

  const handleReset = () => {
    setUserCategoryAnswers({});
    setUserSymptomAnswers({});
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl font-sans text-slate-800 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black shadow-xs">
            <HeartPulse className="w-5 h-5 text-sky-600" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900">Bab 1: Analyzer Punca Tekanan & Indikator Stres</h3>
            <p className="text-xs text-slate-500 font-medium">Analisis situasi, kelaskan jenis tekanan dan kenal pasti tanda-tanda gejala</p>
          </div>
        </div>

        {isCompleted && (
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Aktiviti Disempurnakan</span>
          </span>
        )}
      </div>

      {/* Scenarios Grid */}
      <div className="space-y-6">
        {SCENARIOS.map((sc, idx) => {
          const selectedCat = userCategoryAnswers[sc.id];
          const selectedSym = userSymptomAnswers[sc.id];
          const isCatCorrect = selectedCat === sc.category;
          const isSymCorrect = selectedSym === sc.symptom;

          return (
            <div key={sc.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded-full border border-sky-200 uppercase">
                  Situasi {idx + 1}
                </span>
                <span className="text-[11px] font-bold text-slate-500">{sc.title}</span>
              </div>

              <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-medium bg-white p-3.5 rounded-xl border border-slate-200">
                "{sc.description}"
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Select Category */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    1. Kelaskan Jenis Tekanan / Buli:
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['Eustres', 'Distres', 'Buli Siber'] as const).map(cat => (
                      <button
                        key={cat}
                        onClick={() => handleSelectCategory(sc.id, cat)}
                        disabled={isSubmitted}
                        className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all ${
                          selectedCat === cat
                            ? isSubmitted
                              ? isCatCorrect
                                ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                                : 'bg-rose-50 border-rose-500 text-rose-800'
                              : 'bg-sky-600 text-white border-sky-600 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Select Symptom */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    2. Jenis Indikator Utama:
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {(['Fizikal', 'Emosi', 'Tingkah Laku'] as const).map(sym => (
                      <button
                        key={sym}
                        onClick={() => handleSelectSymptom(sc.id, sym)}
                        disabled={isSubmitted}
                        className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all ${
                          selectedSym === sym
                            ? isSubmitted
                              ? isSymCorrect
                                ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                                : 'bg-rose-50 border-rose-500 text-rose-800'
                              : 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {sym}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Feedback after submission */}
              {isSubmitted && (
                <div className="mt-2 bg-sky-50 border border-sky-200 p-3 rounded-xl text-xs text-sky-950 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-sky-800">
                    <Sparkles className="w-4 h-4 text-sky-600" />
                    <span>Tindakan Positif Disyorkan:</span>
                  </div>
                  <p className="font-medium text-slate-700 leading-relaxed">{sc.action}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        {isSubmitted ? (
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs flex items-center space-x-2 border border-slate-200"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Cuba Semula Analisis</span>
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!isAllAnswered}
            className="ml-auto px-6 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black rounded-2xl text-xs md:text-sm flex items-center space-x-2 shadow-md shadow-sky-600/30 transition-all hover:scale-105"
          >
            <Shield className="w-4 h-4" />
            <span>Semak Keputusan Analisis Stres</span>
          </button>
        )}
      </div>
    </div>
  );
};
