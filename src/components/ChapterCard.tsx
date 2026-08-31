import React from 'react';
import { motion } from 'motion/react';
import { Clock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Chapter } from '../types';
import {
  AdamAvatar,
  SitiAvatar,
  KavitaAvatar,
  WongAvatar,
  CikguHafizAvatar
} from './StudentIllustrations';
import { AudioPlayerButton } from './AudioPlayerButton';

interface ChapterCardProps {
  chapter: Chapter;
  isCompleted: boolean;
  score?: number;
  onSelect: () => void;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({
  chapter,
  isCompleted,
  score,
  onSelect
}) => {
  const renderAvatar = (key: string) => {
    switch (key) {
      case 'adam':
        return <AdamAvatar size="md" />;
      case 'siti':
        return <SitiAvatar size="md" />;
      case 'kavita':
        return <KavitaAvatar size="md" />;
      case 'wong':
        return <WongAvatar size="md" />;
      case 'cikgu':
        return <CikguHafizAvatar size="md" />;
      default:
        return <AdamAvatar size="md" />;
    }
  };

  const themeStyles = {
    sky: {
      card: 'border-slate-200 hover:border-indigo-400 bg-white hover:shadow-md',
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-100',
      button: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs',
      activityBg: 'bg-slate-50 border-slate-200/80'
    },
    emerald: {
      card: 'border-slate-200 hover:border-emerald-400 bg-white hover:shadow-md',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      button: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs',
      activityBg: 'bg-emerald-50/60 border-emerald-100'
    },
    amber: {
      card: 'border-slate-200 hover:border-amber-400 bg-white hover:shadow-md',
      badge: 'bg-amber-50 text-amber-800 border-amber-100',
      button: 'bg-amber-600 hover:bg-amber-700 text-white shadow-xs',
      activityBg: 'bg-amber-50/60 border-amber-100'
    },
    indigo: {
      card: 'border-slate-200 hover:border-indigo-500 bg-white hover:shadow-md',
      badge: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      button: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs',
      activityBg: 'bg-indigo-50/60 border-indigo-100'
    },
    rose: {
      card: 'border-slate-200 hover:border-rose-400 bg-white hover:shadow-md',
      badge: 'bg-rose-50 text-rose-800 border-rose-100',
      button: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs',
      activityBg: 'bg-slate-50 border-slate-200/80'
    },
    purple: {
      card: 'border-slate-200 hover:border-purple-400 bg-white hover:shadow-md',
      badge: 'bg-purple-50 text-purple-800 border-purple-100',
      button: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs',
      activityBg: 'bg-slate-50 border-slate-200/80'
    },
    teal: {
      card: 'border-slate-200 hover:border-teal-400 bg-white hover:shadow-md',
      badge: 'bg-teal-50 text-teal-800 border-teal-100',
      button: 'bg-teal-600 hover:bg-teal-700 text-white shadow-xs',
      activityBg: 'bg-teal-50/60 border-teal-100'
    }
  }[chapter.themeColor] || {
    card: 'border-slate-200 hover:border-indigo-500 bg-white hover:shadow-md',
    badge: 'bg-slate-100 text-slate-800 border-slate-200',
    button: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs',
    activityBg: 'bg-slate-50 border-slate-200'
  };

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`rounded-xl border p-6 transition-all duration-200 shadow-sm flex flex-col justify-between relative overflow-hidden group ${themeStyles.card}`}
    >
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center space-x-2">
            <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded border ${themeStyles.badge}`}>
              BAB {chapter.id}
            </span>
            <span className="text-[11px] text-slate-400 font-medium flex items-center space-x-1">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>{chapter.estimatedMinutes} min</span>
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {isCompleted && (
              <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Selesai {score ? `(${score}%)` : ''}</span>
              </span>
            )}
            <AudioPlayerButton
              text={`${chapter.title}. ${chapter.tagline}`}
              textId={`card-audio-${chapter.id}`}
              variant="ghost"
              size="sm"
            />
          </div>
        </div>

        {/* Content & Avatar */}
        <div className="flex items-start gap-4 mb-4">
          <div className="shrink-0 group-hover:scale-105 transition-transform">
            {renderAvatar(chapter.featuredStudent.avatarKey)}
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-slate-800 leading-snug group-hover:text-indigo-600 transition-colors">
              {chapter.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed font-normal">
              {chapter.tagline}
            </p>
          </div>
        </div>

        {/* Activity Highlight Box */}
        <div className={`rounded-lg p-3 border mb-5 ${themeStyles.activityBg}`}>
          <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider mb-0.5 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-indigo-500" />
            Aktiviti Interaktif:
          </p>
          <p className="text-xs text-slate-700 font-medium line-clamp-1">
            {chapter.activity.title}
          </p>
        </div>
      </div>

      {/* Action Button */}
      <button
        id={`btn-open-chapter-${chapter.id}`}
        onClick={onSelect}
        className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold flex items-center justify-center space-x-2 transition-all ${themeStyles.button}`}
      >
        <span>{isCompleted ? 'Ulang Semula Bab Ini' : 'Mula Belajar Bab Ini'}</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};
