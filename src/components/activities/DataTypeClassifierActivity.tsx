import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, Hand, Volume2, Wind, Smile, CheckCircle2, RefreshCw, Sparkles } from 'lucide-react';


interface GroundingExerciseActivityProps {
  onComplete: () => void;
  isCompleted: boolean;
}

export const DataTypeClassifierActivity: React.FC<GroundingExerciseActivityProps> = ({
  onComplete,
  isCompleted
}) => {
  // Grounding 5-4-3-2-1 items input
  const [items5, setItems5] = useState(['', '', '', '', '']);
  const [items4, setItems4] = useState(['', '', '', '']);
  const [items3, setItems3] = useState(['', '', '']);
  const [items2, setItems2] = useState(['', '']);
  const [item1, setItem1] = useState('');
  const [selectedEmotion, setSelectedEmotion] = useState('');
  const [journalNote, setJournalNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(isCompleted);

  const handleUpdate5 = (idx: number, val: string) => {
    const next = [...items5];
    next[idx] = val;
    setItems5(next);
  };

  const handleUpdate4 = (idx: number, val: string) => {
    const next = [...items4];
    next[idx] = val;
    setItems4(next);
  };

  const handleUpdate3 = (idx: number, val: string) => {
    const next = [...items3];
    next[idx] = val;
    setItems3(next);
  };

  const handleUpdate2 = (idx: number, val: string) => {
    const next = [...items2];
    next[idx] = val;
    setItems2(next);
  };

  const isFormValid =
    items5.every(i => i.trim().length > 0) &&
    items4.every(i => i.trim().length > 0) &&
    items3.every(i => i.trim().length > 0) &&
    items2.every(i => i.trim().length > 0) &&
    item1.trim().length > 0 &&
    selectedEmotion !== '';

  const handleSubmit = () => {
    setIsSubmitted(true);
    onComplete();
  };

  const handleReset = () => {
    setItems5(['', '', '', '', '']);
    setItems4(['', '', '', '']);
    setItems3(['', '', '']);
    setItems2(['', '']);
    setItem1('');
    setSelectedEmotion('');
    setJournalNote('');
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl font-sans text-slate-800 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black shadow-xs">
            <Wind className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900">Bab 2: Simulator Teknik Grounding 5-4-3-2-1 & Diari Emosi</h3>
            <p className="text-xs text-slate-500 font-medium">Latihan ketenangan sensorik & kesedaran kendiri untuk menenangkan fikiran</p>
          </div>
        </div>

        {isCompleted && (
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Aktiviti Disempurnakan</span>
          </span>
        )}
      </div>



      {/* Grounding 5-4-3-2-1 Form */}
      <div className="space-y-6">
        <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <span>Lengkapkan 5 Sensor Grounding Anda Di Sekeliling Anda:</span>
        </h4>

        {/* 5 Nampak */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
          <label className="text-xs font-black text-emerald-800 flex items-center gap-2">
            <Eye className="w-4 h-4 text-emerald-600" />
            <span>5 Perkara yang Anda NAMPAK di sekeliling anda:</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
            {items5.map((val, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Perkara ${i + 1}`}
                value={val}
                disabled={isSubmitted}
                onChange={e => handleUpdate5(i, e.target.value)}
                className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-emerald-500"
              />
            ))}
          </div>
        </div>

        {/* 4 Sentuh */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
          <label className="text-xs font-black text-amber-800 flex items-center gap-2">
            <Hand className="w-4 h-4 text-amber-600" />
            <span>4 Perkara yang Anda SENTUH atau RASAI:</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            {items4.map((val, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Sentuhan ${i + 1}`}
                value={val}
                disabled={isSubmitted}
                onChange={e => handleUpdate4(i, e.target.value)}
                className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-amber-500"
              />
            ))}
          </div>
        </div>

        {/* 3 Dengar */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
          <label className="text-xs font-black text-sky-800 flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-sky-600" />
            <span>3 Perkara yang Anda DENGAR:</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {items3.map((val, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Bunyi ${i + 1}`}
                value={val}
                disabled={isSubmitted}
                onChange={e => handleUpdate3(i, e.target.value)}
                className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-sky-500"
              />
            ))}
          </div>
        </div>

        {/* 2 Bau */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
          <label className="text-xs font-black text-indigo-800 flex items-center gap-2">
            <Wind className="w-4 h-4 text-indigo-600" />
            <span>2 Perkara yang Anda BAU:</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {items2.map((val, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Aroma ${i + 1}`}
                value={val}
                disabled={isSubmitted}
                onChange={e => handleUpdate2(i, e.target.value)}
                className="bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-indigo-500"
              />
            ))}
          </div>
        </div>

        {/* 1 Rasa */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
          <label className="text-xs font-black text-rose-800 flex items-center gap-2">
            <Smile className="w-4 h-4 text-rose-600" />
            <span>1 Perkara yang Anda BOLEH RASA (makanan/minuman/pernafasan):</span>
          </label>
          <input
            type="text"
            placeholder="Rasa nikmat pernafasan tenang..."
            value={item1}
            disabled={isSubmitted}
            onChange={e => setItem1(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-rose-500"
          />
        </div>
      </div>

      {/* Emotion Journal */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-4">
        <h4 className="text-sm font-black text-emerald-950 flex items-center gap-2">
          <Smile className="w-4 h-4 text-emerald-600" />
          <span>Diari Emosi: Pilih Perasaan Anda Sekarang & Catatan Kendiri</span>
        </h4>

        <div className="flex flex-wrap gap-2">
          {['Tenang & Yakin', 'Gelisah / Risau', 'Sedikit Marah', 'Bersemangat', 'Letih Mental'].map(emo => (
            <button
              key={emo}
              onClick={() => setSelectedEmotion(emo)}
              disabled={isSubmitted}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                selectedEmotion === emo
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-emerald-100/50'
              }`}
            >
              {emo}
            </button>
          ))}
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1">
            Catatan Komitmen Pengurusan Emosi Diri:
          </label>
          <textarea
            rows={2}
            placeholder="Tulis dialog positif atau strategi menenangkan diri anda..."
            value={journalNote}
            disabled={isSubmitted}
            onChange={e => setJournalNote(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-900 font-medium focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        {isSubmitted ? (
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs flex items-center space-x-2 border border-slate-200"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Kemas Kini Diari Grounding</span>
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className="ml-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black rounded-2xl text-xs md:text-sm flex items-center space-x-2 shadow-md shadow-emerald-600/30 transition-all hover:scale-105"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Simpan Diari & Sempurnakan Latihan</span>
          </button>
        )}
      </div>
    </div>
  );
};
