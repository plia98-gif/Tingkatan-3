import React from 'react';
import { motion } from 'motion/react';
import { FileText, X, PhoneCall, Shield, HeartPulse, CheckCircle2 } from 'lucide-react';
import { ASK_REFERENCES } from '../data/askTingkatan3Data';

interface ReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferenceModal: React.FC<ReferenceModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 max-w-3xl w-full my-8 shadow-2xl relative text-slate-800 max-h-[90vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black shadow-xs">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">Rujukan & Nota Poket Panduan Bantuan & EQ</h3>
              <p className="text-xs text-slate-500 font-medium">Nombor talian krisis rasmi, panduan grounding & hak murid KPM</p>
            </div>
          </div>

          <button
            id="btn-close-reference"
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto py-6 space-y-6 pr-1">
          {/* Quick Cheat Sheet Box */}
          <div className="bg-slate-900 text-emerald-400 p-5 rounded-2xl shadow-md space-y-3 font-mono text-xs md:text-sm border border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-amber-400 font-bold flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-400" />
                Talian Bantuan Krisis & Aduan Rasmi Malaysia
              </span>
              <span className="text-[10px] text-slate-400">MODUL ANTI-BULI</span>
            </div>

            <div>
              <p className="text-slate-400 text-[10px] uppercase">Talian HEAL (Sokongan Emosi KKM):</p>
              <p className="text-emerald-300 font-bold">15555 (24 Jam Percuma)</p>
            </div>

            <div>
              <p className="text-slate-400 text-[10px] uppercase">Talian Kasih (Kebajikan & Perlindungan):</p>
              <p className="text-emerald-300 font-bold">15999 / WhatsApp: 019-2615999</p>
            </div>

            <div>
              <p className="text-slate-400 text-[10px] uppercase">Portal Aduan Buli Sekolah KPM:</p>
              <p className="text-emerald-300 font-bold">aduanbuli.moe.gov.my</p>
            </div>

            <div>
              <p className="text-slate-400 text-[10px] uppercase">Formula Grounding Pantas:</p>
              <p className="text-emerald-300 font-bold">5 Nampak ➔ 4 Sentuh ➔ 3 Dengar ➔ 2 Bau ➔ 1 Rasa</p>
            </div>
          </div>

          {/* Reference List */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Ringkasan Panduan Rasmi KPM:</h4>
            {ASK_REFERENCES.map((ref, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <h5 className="font-extrabold text-sm text-slate-900">{ref.name}</h5>
                  <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                    {ref.category}
                  </span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 font-mono text-xs text-sky-800 font-bold">
                  {ref.codeOrInfo}
                </div>
                <p className="text-xs text-slate-600 font-medium">{ref.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
