import React, { useState, useEffect } from 'react';
import { Volume2, Play, Pause, FastForward } from 'lucide-react';

class SpeechSynthService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeaking: boolean = false;
  private isPaused: boolean = false;
  private listeners: ((isSpeaking: boolean, isPaused: boolean, currentId?: string) => void)[] = [];
  private currentTextId: string | null = null;
  private rate: number = 1.0;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  subscribe(listener: (isSpeaking: boolean, isPaused: boolean, currentId?: string) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(listener => listener(this.isSpeaking, this.isPaused, this.currentTextId || undefined));
  }

  setRate(rate: number) {
    this.rate = Math.max(0.7, Math.min(1.5, rate));
  }

  getRate() {
    return this.rate;
  }

  speak(text: string, id?: string) {
    if (!this.synth) {
      console.warn('Speech synthesis not supported in this browser.');
      return;
    }

    this.stop();

    if (!text || text.trim() === '') return;

    // Clean markdown formatting if any
    const cleanText = text
      .replace(/[#*_~`]/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = this.rate;
    utterance.pitch = 1.05;

    // Try to find Malay / Indonesian or default voice
    const voices = this.synth.getVoices();
    const malayVoice = voices.find(
      v => v.lang.startsWith('ms') || v.lang.startsWith('id') || v.name.toLowerCase().includes('malay') || v.name.toLowerCase().includes('indonesian')
    );
    if (malayVoice) {
      utterance.voice = malayVoice;
    }

    this.currentTextId = id || 'default';
    this.isSpeaking = true;
    this.isPaused = false;
    this.currentUtterance = utterance;
    this.notify();

    utterance.onend = () => {
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentTextId = null;
      this.currentUtterance = null;
      this.notify();
    };

    utterance.onerror = (e) => {
      console.error('Speech synthesis error:', e);
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentTextId = null;
      this.currentUtterance = null;
      this.notify();
    };

    this.synth.speak(utterance);
  }

  pause() {
    if (this.synth && this.isSpeaking && !this.isPaused) {
      this.synth.pause();
      this.isPaused = true;
      this.notify();
    }
  }

  resume() {
    if (this.synth && this.isSpeaking && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
      this.notify();
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isSpeaking = false;
    this.isPaused = false;
    this.currentTextId = null;
    this.currentUtterance = null;
    this.notify();
  }

  getStatus() {
    return {
      isSpeaking: this.isSpeaking,
      isPaused: this.isPaused,
      currentTextId: this.currentTextId,
      rate: this.rate
    };
  }
}

export const speechService = new SpeechSynthService();

interface AudioPlayerButtonProps {
  text: string;
  textId: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'pill' | 'ghost';
}

export const AudioPlayerButton: React.FC<AudioPlayerButtonProps> = ({
  text,
  textId,
  label = 'Dengar Audio BM',
  size = 'md',
  variant = 'pill'
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState(speechService.getRate());

  useEffect(() => {
    const unsubscribe = speechService.subscribe((speaking, paused, currentId) => {
      setIsPlaying(speaking && currentId === textId);
      setIsPaused(paused);
    });
    return () => unsubscribe();
  }, [textId]);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      if (isPaused) {
        speechService.resume();
      } else {
        speechService.pause();
      }
    } else {
      speechService.speak(text, textId);
    }
  };

  const handleChangeSpeed = (e: React.MouseEvent) => {
    e.stopPropagation();
    const speeds = [0.85, 1.0, 1.25];
    const currentIndex = speeds.indexOf(rate);
    const nextSpeed = speeds[(currentIndex + 1) % speeds.length] || 1.0;
    speechService.setRate(nextSpeed);
    setRate(nextSpeed);
    if (isPlaying) {
      speechService.speak(text, textId);
    }
  };

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1 gap-1.5',
    md: 'text-xs font-semibold px-3 py-1.5 gap-2',
    lg: 'text-sm font-semibold px-4 py-2 gap-2.5'
  }[size];

  if (variant === 'ghost') {
    return (
      <button
        id={`audio-btn-${textId}`}
        onClick={handleTogglePlay}
        title={isPlaying ? (isPaused ? 'Sambung Audio' : 'Jeda Audio') : 'Dengar Bacaan Teks'}
        className={`p-2 rounded-xl transition-all flex items-center justify-center ${
          isPlaying
            ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30 ring-2 ring-sky-300 animate-pulse'
            : 'bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 shadow-xs'
        }`}
      >
        {isPlaying ? (
          isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />
        ) : (
          <Volume2 className="w-4 h-4" />
        )}
      </button>
    );
  }

  return (
    <div className="inline-flex items-center space-x-1.5">
      <button
        id={`audio-btn-${textId}`}
        onClick={handleTogglePlay}
        className={`rounded-full transition-all flex items-center shadow-xs font-bold ${sizeClasses} ${
          isPlaying
            ? isPaused
              ? 'bg-amber-500 text-slate-950 ring-2 ring-amber-300'
              : 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white ring-2 ring-sky-300 shadow-md shadow-sky-600/30 animate-pulse'
            : 'bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-700 border border-slate-200 hover:border-sky-300'
        }`}
      >
        {isPlaying ? (
          isPaused ? (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Sambung</span>
            </>
          ) : (
            <>
              <Pause className="w-3.5 h-3.5 fill-current" />
              <span>Sedang Membaca...</span>
            </>
          )
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5 text-sky-600" />
            <span>{label}</span>
          </>
        )}
      </button>

      {isPlaying && (
        <button
          id={`speed-btn-${textId}`}
          onClick={handleChangeSpeed}
          title="Tukar Kelajuan Suara"
          className="text-[10px] font-extrabold px-2 py-1 rounded-full bg-white hover:bg-sky-50 text-sky-700 border border-sky-200 flex items-center space-x-1 shadow-xs"
        >
          <FastForward className="w-3 h-3" />
          <span>{rate}x</span>
        </button>
      )}
    </div>
  );
};
