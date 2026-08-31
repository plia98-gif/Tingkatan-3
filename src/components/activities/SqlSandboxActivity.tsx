import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageSquare, CheckCircle2, RefreshCw, Shield, AlertCircle } from 'lucide-react';
import { AffirmationCardWidget } from '../AffirmationCardWidget';

interface MindReframingActivityProps {
  onComplete: () => void;
  isCompleted: boolean;
}

interface ReframingItem {
  id: string;
  toxicThought: string;
  correctReframe: string;
  distractors: string[];
}

const REFRAMING_ITEMS: ReframingItem[] = [
  {
    id: 'rf-1',
    toxicThought: "'Saya memang bodoh dan tak berguna sebab gagal dalam satu penilaian sekolah ini.'",
    correctReframe: "'Keputusan ini hanyalah maklum balas untuk saya perbaiki strategi belajar saya bagi penilaian berikutnya.'",
    distractors: [
      "'Memang betul saya bodoh dan patut berhenti berusaha.'",
      "'Saya akan salahkan cikgu sebab bagi soalan susah.'"
    ]
  },
  {
    id: 'rf-2',
    toxicThought: "'Semua kawan ejek fizikal saya, maknanya rupa saya buruk sangat.'",
    correctReframe: "'Ejekan mereka mencerminkan ketidakmatangan akhlak mereka sendiri, bukannya nilai dan kecantikan diri saya.'",
    distractors: [
      "'Saya kena menyorok dalam tandas sepanjang hari.'",
      "'Saya akan ejek balik fizikal ibu bapa mereka.'"
    ]
  }
];

export const SqlSandboxActivity: React.FC<MindReframingActivityProps> = ({
  onComplete,
  isCompleted
}) => {
  const [selectedReframes, setSelectedReframes] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(isCompleted);

  const handleSelect = (itemId: string, choice: string) => {
    if (isSubmitted) return;
    setSelectedReframes(prev => ({ ...prev, [itemId]: choice }));
  };

  const isAllAnswered = Object.keys(selectedReframes).length === REFRAMING_ITEMS.length;

  const handleSubmit = () => {
    setIsSubmitted(true);
    let allCorrect = true;
    REFRAMING_ITEMS.forEach(item => {
      if (selectedReframes[item.id] !== item.correctReframe) {
        allCorrect = false;
      }
    });
    if (allCorrect) {
      onComplete();
    }
  };

  const handleReset = () => {
    setSelectedReframes({});
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl font-sans text-slate-800 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black shadow-xs">
            <Sparkles className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900">Bab 4: Simulator Reframing Minda & Ketegasan Berhemah</h3>
            <p className="text-xs text-slate-500 font-medium">Tukar bisikan fikiran toksik kepada penyataan daya tahan positif realistik</p>
          </div>
        </div>

        {isCompleted && (
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Aktiviti Disempurnakan</span>
          </span>
        )}
      </div>

      {/* Kad Afirmasi Diri */}
      <AffirmationCardWidget />

      {/* Reframing Cards */}
      <div className="space-y-6">
        {REFRAMING_ITEMS.map((item, idx) => {
          const options = [item.correctReframe, ...item.distractors].sort();
          const userChoice = selectedReframes[item.id];
          const isCorrect = userChoice === item.correctReframe;

          return (
            <div key={item.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <span className="text-xs font-black text-indigo-800 bg-indigo-100 px-2.5 py-0.5 rounded-full border border-indigo-200">
                Latihan Reframing {idx + 1}
              </span>

              {/* Toxic Thought Box */}
              <div className="bg-rose-50 border border-rose-200 p-4 rounded-xl text-xs md:text-sm text-rose-950 font-bold flex items-start space-x-2.5">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-black tracking-wider block text-rose-700 mb-0.5">
                    Fikiran Toksik / Negatif:
                  </span>
                  <span>{item.toxicThought}</span>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700">
                  Pilih Reframing Positif (Growth Mindset) yang Paling Tepat:
                </label>
                {options.map((opt, optIdx) => {
                  const isSelected = userChoice === opt;
                  let optStyle = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';

                  if (isSubmitted) {
                    if (opt === item.correctReframe) {
                      optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                    } else if (isSelected && !isCorrect) {
                      optStyle = 'bg-rose-50 border-rose-400 text-rose-950 font-bold';
                    }
                  } else if (isSelected) {
                    optStyle = 'bg-indigo-50 border-indigo-500 text-indigo-950 font-bold ring-2 ring-indigo-400/50';
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(item.id, opt)}
                      disabled={isSubmitted}
                      className={`w-full p-3.5 rounded-xl border text-left text-xs transition-all flex items-start space-x-2.5 ${optStyle}`}
                    >
                      <Sparkles className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <span className="flex-1 leading-relaxed">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {isSubmitted && (
                <div className={`p-3 rounded-xl text-xs font-medium border ${
                  isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}>
                  {isCorrect ? '✅ Syabas! Ini adalah penyataan reframing yang membina daya tahan.' : '❌ Pilihan kurang tepat. Sila semak semula penyataan growth mindset.'}
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
            <span>Cuba Semula Reframing</span>
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!isAllAnswered}
            className="ml-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black rounded-2xl text-xs md:text-sm flex items-center space-x-2 shadow-md shadow-indigo-600/30 transition-all hover:scale-105"
          >
            <Shield className="w-4 h-4" />
            <span>Sahkan Penyataan Reframing Minda</span>
          </button>
        )}
      </div>
    </div>
  );
};
