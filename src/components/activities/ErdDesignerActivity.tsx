import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Shield, CheckCircle2, RefreshCw, AlertTriangle, Sparkles } from 'lucide-react';


interface TimeBalanceActivityProps {
  onComplete: () => void;
  isCompleted: boolean;
}

interface BoundaryScenario {
  id: string;
  situation: string;
  options: {
    id: string;
    text: string;
    isAssertive: boolean;
    feedback: string;
  }[];
}

const BOUNDARY_SCENARIOS: BoundaryScenario[] = [
  {
    id: 'bs-1',
    situation: "Seorang rakan memaksa anda menyerahkan tugasan jawapan projek sekolah agar dia boleh menyalin secara bulat-bulat.",
    options: [
      { id: 'a', text: "Menyerahkan sahaja kerana takut kawan itu marah.", isAssertive: false, feedback: "Salah. Ini gaya pasif yang merosakkan sempadan diri anda." },
      { id: 'b', text: "Katakan tegas: 'Saya sudi terangkan konsepnya, tetapi saya tidak akan beri salin jawapan saya.'", isAssertive: true, feedback: "Tepat! Menegakkan sempadan diri secara berhemah dan mematuhi integriti." },
      { id: 'c', text: "Menjerit dan menumbuk muka rakan tersebut.", isAssertive: false, feedback: "Salah. Kekerasan fizikal bukan tindakan assertive." }
    ]
  },
  {
    id: 'bs-2',
    situation: "Kumpulan perbualan dalam talian mengajak anda mengejek seorang rakan sekelas yang baharu berpindah.",
    options: [
      { id: 'a', text: "Menaip ejekan tambahan supaya nampak cool.", isAssertive: false, feedback: "Salah. Ini perbuatan membuli siber." },
      { id: 'b', text: "Menaip mesej: 'Tindakan mengejek ini tidak matang, mari kita hentikan.' lalu keluar dari perbualan.", isAssertive: true, feedback: "Tepat! Sikap pertahanan integriti yang tinggi." },
      { id: 'c', text: "Membisu dan pura-pura tidak nampak.", isAssertive: false, feedback: "Salah. Ini bystander pasif." }
    ]
  }
];

export const ErdDesignerActivity: React.FC<TimeBalanceActivityProps> = ({
  onComplete,
  isCompleted
}) => {
  const [studyHours, setStudyHours] = useState(6);
  const [sleepHours, setSleepHours] = useState(8);
  const [relaxHours, setRelaxHours] = useState(4);
  const [exerciseHours, setExerciseHours] = useState(2);
  const [selectedBoundaries, setSelectedBoundaries] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(isCompleted);

  const totalHours = studyHours + sleepHours + relaxHours + exerciseHours;

  const handleSelectBoundary = (scId: string, optId: string) => {
    if (isSubmitted) return;
    setSelectedBoundaries(prev => ({ ...prev, [scId]: optId }));
  };

  const isFormValid = totalHours === 24 && Object.keys(selectedBoundaries).length === BOUNDARY_SCENARIOS.length;

  const handleSubmit = () => {
    setIsSubmitted(true);
    let allAssertive = true;
    BOUNDARY_SCENARIOS.forEach(sc => {
      const choice = sc.options.find(o => o.id === selectedBoundaries[sc.id]);
      if (!choice || !choice.isAssertive) allAssertive = false;
    });
    if (allAssertive) {
      onComplete();
    }
  };

  const handleReset = () => {
    setSelectedBoundaries({});
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl font-sans text-slate-800 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black shadow-xs">
            <Clock className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900">Bab 3: Perancang Keseimbangan Masa & Sempadan Diri</h3>
            <p className="text-xs text-slate-500 font-medium">Pengagihan 24 jam sehari & latihan ketegasan sempadan diri (Boundaries)</p>
          </div>
        </div>

        {isCompleted && (
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Aktiviti Disempurnakan</span>
          </span>
        )}
      </div>



      {/* 24-Hour Planner */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-600" />
            <span> Bahagian A: Agihkan Masa 24 Jam Sehari Anda</span>
          </h4>
          <span className={`text-xs font-black px-3 py-1 rounded-full border ${
            totalHours === 24 ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-rose-100 text-rose-800 border-rose-300'
          }`}>
            Jumlah: {totalHours} / 24 Jam
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
            <label className="text-xs font-bold text-slate-700 block">📚 Pembelajaran & Kelas ({studyHours} jam)</label>
            <input
              type="range"
              min={2}
              max={12}
              value={studyHours}
              disabled={isSubmitted}
              onChange={e => setStudyHours(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
            <label className="text-xs font-bold text-slate-700 block">🌙 Tidur Sihat ({sleepHours} jam)</label>
            <input
              type="range"
              min={4}
              max={12}
              value={sleepHours}
              disabled={isSubmitted}
              onChange={e => setSleepHours(Number(e.target.value))}
              className="w-full accent-indigo-500"
            />
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
            <label className="text-xs font-bold text-slate-700 block">🎨 Rehat & Hobi Minda ({relaxHours} jam)</label>
            <input
              type="range"
              min={1}
              max={8}
              value={relaxHours}
              disabled={isSubmitted}
              onChange={e => setRelaxHours(Number(e.target.value))}
              className="w-full accent-emerald-500"
            />
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
            <label className="text-xs font-bold text-slate-700 block">🏃 Riadah & Fizikal ({exerciseHours} jam)</label>
            <input
              type="range"
              min={1}
              max={6}
              value={exerciseHours}
              disabled={isSubmitted}
              onChange={e => setExerciseHours(Number(e.target.value))}
              className="w-full accent-sky-500"
            />
          </div>
        </div>
      </div>

      {/* Boundary Scenarios */}
      <div className="space-y-4">
        <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
          <Shield className="w-4 h-4 text-amber-600" />
          <span>Bahagian B: Pilih Respons Menegakkan Sempadan Diri (Boundaries)</span>
        </h4>

        {BOUNDARY_SCENARIOS.map((sc, idx) => {
          const userChoice = selectedBoundaries[sc.id];

          return (
            <div key={sc.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
              <span className="text-xs font-black text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                Cabaran {idx + 1}
              </span>
              <p className="text-xs md:text-sm font-bold text-slate-900 leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200">
                {sc.situation}
              </p>

              <div className="space-y-2">
                {sc.options.map(opt => {
                  const isSelected = userChoice === opt.id;
                  let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100';

                  if (isSubmitted) {
                    if (opt.isAssertive) {
                      btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                    } else if (isSelected && !opt.isAssertive) {
                      btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 font-bold';
                    }
                  } else if (isSelected) {
                    btnStyle = 'bg-amber-50 border-amber-500 text-amber-950 font-bold ring-2 ring-amber-400/50';
                  }

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectBoundary(sc.id, opt.id)}
                      disabled={isSubmitted}
                      className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-start space-x-2.5 ${btnStyle}`}
                    >
                      <span className="w-4 h-4 rounded-full border border-slate-300 bg-slate-100 text-slate-700 flex items-center justify-center font-black text-[10px] shrink-0 mt-0.5">
                        {opt.id.toUpperCase()}
                      </span>
                      <span className="flex-1 leading-relaxed">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {isSubmitted && userChoice && (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 font-medium">
                  {sc.options.find(o => o.id === userChoice)?.feedback}
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
            <span>Cuba Semula Perancang</span>
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className="ml-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black rounded-2xl text-xs md:text-sm flex items-center space-x-2 shadow-md shadow-amber-500/30 transition-all hover:scale-105"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Sahkan Jadual Keseimbangan & Sempadan Diri</span>
          </button>
        )}
      </div>
    </div>
  );
};
