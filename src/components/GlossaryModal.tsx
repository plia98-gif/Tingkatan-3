import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookMarked, Search, X } from 'lucide-react';
import { ASK_GLOSSARY } from '../data/askTingkatan3Data';
import { AudioPlayerButton } from './AudioPlayerButton';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  if (!isOpen) return null;

  const categories = ['Semua', 'Pengurusan Emosi', 'Jenis Buli & Siber', 'Daya Tahan & EQ', 'Saluran Bantuan'];

  const filteredGlossary = ASK_GLOSSARY.filter(item => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.meaning.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'Semua' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 max-w-3xl w-full my-8 shadow-2xl relative text-slate-800 max-h-[88vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black shadow-xs">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">Glosari & Istilah Poket Anti-Buli & Emosi Tingkatan 3</h3>
              <p className="text-xs text-slate-500 font-medium">Definisi istilah pengurusan tekanan, EQ, jenis buli & saluran bantuan</p>
            </div>
          </div>

          <button
            id="btn-close-glossary"
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter */}
        <div className="py-4 space-y-3 shrink-0 border-b border-slate-100">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              id="search-glossary-input"
              type="text"
              placeholder="Cari istilah (e.g. Stres, Grounding 5-4-3-2-1, Cyberbullying, EQ)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs md:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white font-medium"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1 rounded-xl font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Terms List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
          {filteredGlossary.length === 0 ? (
            <p className="text-center text-xs text-slate-500 py-8 font-medium">
              Tiada istilah ditemui untuk carian anda.
            </p>
          ) : (
            filteredGlossary.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                    <span>{item.term}</span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 border border-sky-200 uppercase shadow-xs">
                      {item.category}
                    </span>
                  </h4>
                  <AudioPlayerButton
                    text={`${item.term}. Maksud: ${item.meaning}. Contoh: ${item.example}`}
                    textId={`glossary-${idx}`}
                    variant="ghost"
                    size="sm"
                  />
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.meaning}</p>
                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-600 italic font-medium shadow-xs">
                  <strong className="text-slate-900 not-italic font-bold">Contoh: </strong>
                  {item.example}
                </div>
              </div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};
