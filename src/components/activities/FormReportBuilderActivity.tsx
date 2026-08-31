import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PhoneCall, Shield, CheckCircle2, RefreshCw, FileText, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HotlinePledgeActivityProps {
  onComplete: () => void;
  isCompleted: boolean;
}

interface HotlineQuiz {
  id: string;
  question: string;
  correctAnswer: string;
  options: string[];
}

const HOTLINE_QUIZZES: HotlineQuiz[] = [
  {
    id: 'hq-1',
    question: "Apakah Talian Bantuan Sokongan Kesihatan Mental 24 jam rasmi bawah KKM?",
    correctAnswer: "Talian HEAL 15555",
    options: ["Talian HEAL 15555", "Talian Polis 999", "Talian Bomba 994"]
  },
  {
    id: 'hq-2',
    question: "Apakah laman portal rasmi Kementerian Pendidikan Malaysia untuk aduan kes buli sekolah?",
    correctAnswer: "aduanbuli.moe.gov.my",
    options: ["aduanbuli.moe.gov.my", "facebook.com", "google.com"]
  }
];

export const FormReportBuilderActivity: React.FC<HotlinePledgeActivityProps> = ({
  onComplete,
  isCompleted
}) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [pledgeName, setPledgeName] = useState('');
  const [pledgeClass, setPledgeClass] = useState('3 Bestari');
  const [pledgeSchool, setPledgeSchool] = useState('Sekolah Menengah Malaysia');
  const [pledgeChecked, setPledgeChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(isCompleted);

  const handleSelectAnswer = (qId: string, val: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const isFormValid =
    Object.keys(answers).length === HOTLINE_QUIZZES.length &&
    pledgeName.trim().length > 0 &&
    pledgeChecked;

  const handleSubmit = () => {
    setIsSubmitted(true);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    onComplete();
  };

  const handleReset = () => {
    setAnswers({});
    setPledgeName('');
    setPledgeChecked(false);
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl font-sans text-slate-800 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-black shadow-xs">
            <Heart className="w-5 h-5 text-rose-600" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900">Bab 5: Simulator Saluran Bantuan & Borang Ikrar Anti-Buli KPM</h3>
            <p className="text-xs text-slate-500 font-medium">Pengusaan talian bantuan & menandatangani ikrar solidariti pelajar anti-buli</p>
          </div>
        </div>

        {isCompleted && (
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Aktiviti Disempurnakan</span>
          </span>
        )}
      </div>

      {/* Hotline Quiz Section */}
      <div className="space-y-4">
        <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
          <PhoneCall className="w-4 h-4 text-rose-600" />
          <span>Bahagian A: Padanan Talian Bantuan Rasmi Malaysia</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {HOTLINE_QUIZZES.map((hq, idx) => {
            const userChoice = answers[hq.id];
            return (
              <div key={hq.id} className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-3">
                <span className="text-[10px] font-black text-rose-800 bg-rose-100 px-2 py-0.5 rounded-full border border-rose-200">
                  Soalan {idx + 1}
                </span>
                <p className="text-xs font-bold text-slate-900">{hq.question}</p>
                <div className="space-y-1.5">
                  {hq.options.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectAnswer(hq.id, opt)}
                      disabled={isSubmitted}
                      className={`w-full p-2.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                        userChoice === opt
                          ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Official Student Anti-Bullying Digital Pledge */}
      <div className="bg-rose-950 text-white rounded-3xl p-6 md:p-8 border-4 border-rose-800 shadow-2xl relative space-y-6">
        <div className="flex items-center justify-between border-b border-rose-800/80 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-800/80 text-rose-200 flex items-center justify-center font-black">
              <Shield className="w-6 h-6 text-rose-300" />
            </div>
            <div>
              <span className="text-[10px] font-black tracking-widest uppercase text-rose-300">
                KEMENTERIAN PENDIDIKAN MALAYSIA • IKRAR SOLIDARITI
              </span>
              <h4 className="text-lg font-black text-white">Borang Ikrar Pelajar Anti-Buli & Kesedaran Minda</h4>
            </div>
          </div>
          <Sparkles className="w-6 h-6 text-amber-400" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-[11px] font-bold text-rose-200 mb-1">Nama Penuh Murid:</label>
            <input
              type="text"
              placeholder="Contoh: Adam bin Mohd Zaki"
              value={pledgeName}
              disabled={isSubmitted}
              onChange={e => setPledgeName(e.target.value)}
              className="w-full bg-rose-900/60 border border-rose-700 rounded-xl px-3 py-2 text-xs text-white placeholder-rose-400 font-medium focus:outline-none focus:border-amber-400"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-rose-200 mb-1">Tingkatan / Kelas:</label>
            <input
              type="text"
              value={pledgeClass}
              disabled={isSubmitted}
              onChange={e => setPledgeClass(e.target.value)}
              className="w-full bg-rose-900/60 border border-rose-700 rounded-xl px-3 py-2 text-xs text-white font-medium focus:outline-none focus:border-amber-400"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-rose-200 mb-1">Nama Sekolah:</label>
            <input
              type="text"
              value={pledgeSchool}
              disabled={isSubmitted}
              onChange={e => setPledgeSchool(e.target.value)}
              className="w-full bg-rose-900/60 border border-rose-700 rounded-xl px-3 py-2 text-xs text-white font-medium focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Pledge Text */}
        <div className="bg-rose-900/40 p-4 rounded-2xl border border-rose-800/60 space-y-2 text-xs text-rose-100 leading-relaxed font-serif italic">
          <p>
            "Saya dengan ini berikrar untuk sentiasa menjaga keharmonian sekolah, menolak sebarang bentuk pembulian lisan, fizikal mahupun buli siber, mengurus tekanan emosi secara sihat melalui teknik grounding, serta berani menyokong rakan-rakan yang memerlukan bantuan."
          </p>
        </div>

        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={pledgeChecked}
            disabled={isSubmitted}
            onChange={e => setPledgeChecked(e.target.checked)}
            className="w-5 h-5 accent-amber-400 rounded-lg cursor-pointer"
          />
          <span className="text-xs font-bold text-white">
            Saya mengesahkan ikrar ini dan bersedia menjadi agen rakan sebaya positif KPM.
          </span>
        </label>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        {isSubmitted ? (
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs flex items-center space-x-2 border border-slate-200"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Kemas Kini Ikrar</span>
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className="ml-auto px-6 py-3 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black rounded-2xl text-xs md:text-sm flex items-center space-x-2 shadow-md shadow-rose-600/30 transition-all hover:scale-105"
          >
            <Shield className="w-4 h-4" />
            <span>Hantar Ikrar Anti-Buli & Sempurnakan Bab 5</span>
          </button>
        )}
      </div>
    </div>
  );
};
