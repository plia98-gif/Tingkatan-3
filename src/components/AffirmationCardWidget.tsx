import React, { useState } from 'react';
import { Sparkles, Copy, Check, Shuffle } from 'lucide-react';

interface AffirmationCardWidgetProps {
  className?: string;
}

const AFFIRMATION_LIST = [
  "Nilai diriku tidak ditentukan oleh kata-kata sindiran atau ejekan orang lain.",
  "Saya berhak dihormati dan mempunyai suara yang mempertahankan kebenaran dan maruah diri.",
  "Perasaan dan emosiku adalah sah; saya memilih untuk bertindak dengan bijak, bukannya mengikut emosi melampau.",
  "Apabila diganggu di alam siber, saya bijak mengambil tindakan menyimpan bukti dan membuat laporan kepada pihak sekolah.",
  "Diri saya lebih kuat daripada apa yang saya sangkakan, dan saya tidak bersendirian menghadapi cabaran ini.",
  "Saya belajar menerima kelemahan diri sambil mengukuhkan kekuatan yang ada dalam diri saya.",
  "Ketenangan fikiran saya adalah keutamaan utama; saya berhak menetapkan batasan yang sihat dengan orang di sekeliling."
];

export const AffirmationCardWidget: React.FC<AffirmationCardWidgetProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentAffirmation = AFFIRMATION_LIST[currentIndex];

  const handleNextAffirmation = () => {
    setCopied(false);
    setCurrentIndex(prev => (prev + 1) % AFFIRMATION_LIST.length);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`"${currentAffirmation}" — MINDA PELAJAR RESILIEN TINGKATAN 3`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-xl font-sans relative overflow-hidden ${className}`}>
      {/* Header Row */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center space-x-2.5">
          <Sparkles className="w-5 h-5 text-amber-600" />
          <h3 className="text-base md:text-lg font-black text-[#853406] tracking-tight">
            Kad Afirmasi Diri (Positive Self-Talk)
          </h3>
        </div>

        {/* Pill Badge Top Right */}
        <span className="bg-[#fef08a] border border-amber-300/80 text-[#854d0e] font-black text-xs px-3 py-1 rounded-full shadow-2xs">
          Kekuatan Diri
        </span>
      </div>

      {/* Main Quote Box */}
      <div className="bg-amber-50/30 border border-amber-300/80 rounded-2xl p-6 md:p-10 text-center relative mb-5 transition-all">
        <blockquote className="text-slate-900 font-extrabold italic text-lg md:text-xl lg:text-2xl leading-relaxed tracking-tight max-w-2xl mx-auto">
          "{currentAffirmation}"
        </blockquote>

        <span className="text-[11px] md:text-xs font-black tracking-widest text-[#9a3412] uppercase mt-4 block">
          — MINDA PELAJAR RESILIEN TINGKATAN 3
        </span>
      </div>

      {/* Footer Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
        {/* Left Instruction Text */}
        <p className="text-xs text-slate-500 font-medium text-center sm:text-left">
          Ulangi ayat ini dalam hati 3 kali untuk menyuntik ketenangan.
        </p>

        {/* Right Action Buttons */}
        <div className="flex items-center space-x-2.5 w-full sm:w-auto justify-end">
          {/* Copy Button */}
          <button
            id="btn-copy-affirmation"
            onClick={handleCopy}
            className="flex-1 sm:flex-none px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 font-bold rounded-2xl text-xs flex items-center justify-center space-x-2 transition-all shadow-2xs hover:border-slate-300 active:scale-95"
            title="Salin Ayat Afirmasi"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-600" />
                <span>Salin Ayat</span>
              </>
            )}
          </button>

          {/* Generate New Sentence Button */}
          <button
            id="btn-generate-affirmation"
            onClick={handleNextAffirmation}
            className="flex-1 sm:flex-none px-5 py-2.5 bg-[#ff9500] hover:bg-[#e08300] active:scale-95 text-slate-950 font-black rounded-2xl text-xs flex items-center justify-center space-x-2 transition-all shadow-md hover:scale-105"
          >
            <Shuffle className="w-4 h-4 text-slate-950" />
            <span>Jana Ayat Baharu</span>
          </button>
        </div>
      </div>
    </div>
  );
};
