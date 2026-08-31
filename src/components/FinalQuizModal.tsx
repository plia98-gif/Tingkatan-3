import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, XCircle, ArrowRight, RotateCcw, X, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QuizQuestion } from '../types';

export const FINAL_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'fq-1',
    scenario: 'Bab 1: Konsep Stres',
    question: 'Apakah perbezaan utama antara Eustres dan Distres?',
    options: [
      { id: 'a', text: 'Eustres ialah tekanan negatif manakala Distres ialah tekanan positif.', isCorrect: false, explanation: 'Salah. Sebaliknya Eustres ialah tekanan positif.' },
      { id: 'b', text: 'Eustres ialah tekanan positif yang memotivasi, manakala Distres ialah tekanan negatif yang menyebabkan keletihan emosi.', isCorrect: true, explanation: 'Tepat! Eustres mendorong usaha, manakala Distres menjejas emosi.' },
      { id: 'c', text: 'Kedua-duanya adalah penyakit fizikal kronik.', isCorrect: false, explanation: 'Salah.' },
      { id: 'd', text: 'Eustres hanya berlaku kepada guru.', isCorrect: false, explanation: 'Salah.' }
    ]
  },
  {
    id: 'fq-2',
    scenario: 'Bab 1: Gejala Stres Berlebihan',
    question: 'Siti kerap mengalami sakit kepala, degupan jantung pantas dan otot leher tegang sebelum minggu penilaian sekolah. Ini adalah indikator:',
    options: [
      { id: 'a', text: 'Tanda Fizikal Stres', isCorrect: true, explanation: 'Tepat! Degupan jantung laju dan sakit kepala ialah tindak balas fizikal badan.' },
      { id: 'b', text: 'Tanda Tingkah Laku Stres', isCorrect: false, explanation: 'Salah. Tingkah laku merangkumi tindakan seperti mengasingkan diri.' },
      { id: 'c', text: 'Demam Denggi', isCorrect: false, explanation: 'Salah.' },
      { id: 'd', text: 'Gejala Kecerdasan Tinggi', isCorrect: false, explanation: 'Salah.' }
    ]
  },
  {
    id: 'fq-3',
    scenario: 'Bab 2: Kecerdasan Emosi (EQ)',
    question: 'Antara berikut, manakah komponen utama dalam Kecerdasan Emosi (EQ)?',
    options: [
      { id: 'a', text: 'Kesedaran kendiri dan empati terhadap perasaan rakan', isCorrect: true, explanation: 'Tepat! EQ merangkumi memahami emosi diri dan berempati.' },
      { id: 'b', text: 'Kelajuan menyelesaikan persamaan matematik', isCorrect: false, explanation: 'Salah. Itu berkaitan IQ.' },
      { id: "c", text: "Kemahiran bertumbuk di gelanggang", isCorrect: false, explanation: "Salah." },
      { id: 'd', text: 'Kekerapan memuat naik status di media sosial', isCorrect: false, explanation: 'Salah.' }
    ]
  },
  {
    id: 'fq-4',
    scenario: 'Bab 2: Teknik Grounding 5-4-3-2-1',
    question: 'Apakah tujuan utama mengamalkan Teknik Grounding 5-4-3-2-1 apabila dilanda cemas atau marah?',
    options: [
      { id: 'a', text: 'Mengalihkan tumpuan minda berserabut kembali kepada 5 pancaindera fizikal di sekeliling.', isCorrect: true, explanation: 'Tepat! Teknik Grounding menenangkan fikiran melalui kesedaran sensorik.' },
      { id: 'b', text: 'Menghafal buku teks secara automatik.', isCorrect: false, explanation: 'Salah.' },
      { id: 'c', text: 'Mencari kunci rumah yang hilang.', isCorrect: false, explanation: 'Salah.' },
      { id: 'd', text: 'Menghapus rekod kehadiran kelas.', isCorrect: false, explanation: 'Salah.' }
    ]
  },
  {
    id: 'fq-5',
    scenario: 'Bab 3: Pengurusan Masa & Pomodoro',
    question: 'Bagaimanakah susunan sesi pembelajaran berasaskan Teknik Pomodoro dijalankan?',
    options: [
      { id: 'a', text: 'Belajar 5 jam tanpa henti kemudian tidur 10 jam.', isCorrect: false, explanation: 'Salah.' },
      { id: 'b', text: 'Belajar fokus 25 minit diikuti rehat pendek 5 minit.', isCorrect: true, explanation: 'Tepat! 25 minit fokus + 5 minit rehat menyegarkan semula tumpuan minda.' },
      { id: 'c', text: 'Bermain peranti 50 minit dan belajar 2 minit.', isCorrect: false, explanation: 'Salah.' },
      { id: 'd', text: 'Membaca buku teks sambil menonton televisyen.', isCorrect: false, explanation: 'Salah.' }
    ]
  },
  {
    id: 'fq-6',
    scenario: 'Bab 3: Sempadan Diri (Boundaries)',
    question: 'Rakan memaksa anda menyerahkan wang saku sekolah. Apakah tindakan menegakkan sempadan diri yang betul?',
    options: [
      { id: 'a', text: 'Berkata TIDAK secara tegas dan melaporkan pemerasan ini kepada Guru Bimbingan Kaunseling.', isCorrect: true, explanation: 'Tepat! Menolak pemerasan dan mendapatkan perlindungan guru.' },
      { id: 'b', text: 'Menyerahkan wang setiap hari tanpa memberitahu sesiapa.', isCorrect: false, explanation: 'Salah. Ini membiarkan diri dibuli.' },
      { id: 'c', text: 'Memukul murid tersebut dengan kayu.', isCorrect: false, explanation: 'Salah. Kekerasan bukan jalan keluar.' },
      { id: 'd', text: 'Berhenti sekolah.', isCorrect: false, explanation: 'Salah.' }
    ]
  },
  {
    id: 'fq-7',
    scenario: 'Bab 4: Reframing Minda',
    question: 'Tukar pemikiran negatif: "Saya gagal ujian ini, maknanya saya langsung tak berguna" kepada penyataan Reframing Positif:',
    options: [
      { id: 'a', text: '"Keputusan ini adalah peluang untuk saya memperbaik strategi belajar saya."', isCorrect: true, explanation: 'Tepat! Ini adalah penyataan minda berkembang (growth mindset).' },
      { id: 'b', text: '"Memang betul saya tiada masa depan."', isCorrect: false, explanation: 'Salah. Ini pemikiran toksik.' },
      { id: 'c', text: '"Saya takkan duduki sebarang ujian lagi."', isCorrect: false, explanation: 'Salah.' },
      { id: 'd', text: '"Orang lain yang sebabkan saya gagal."', isCorrect: false, explanation: 'Salah.' }
    ]
  },
  {
    id: 'fq-8',
    scenario: 'Bab 4: Communication Style',
    question: 'Apakah kelebihan gaya komunikasi Tegas Berhemah (Assertive) berbanding Agresif atau Pasif?',
    options: [
      { id: 'a', text: 'Menyatakan pendirian dan hak diri secara tenang, jelas dan bersopan tanpa kekerasan.', isCorrect: true, explanation: 'Tepat! Assertive mempertahankan hak secara matang.' },
      { id: 'b', text: 'Boleh memenangi pergaduhan fizikal dengan cepat.', isCorrect: false, explanation: 'Salah.' },
      { id: 'c', text: 'Menjadikan orang takut dengan suara jeritan.', isCorrect: false, explanation: 'Salah.' },
      { id: 'd', text: 'Membiarkan orang lain membuat keputusan untuk kita.', isCorrect: false, explanation: 'Salah.' }
    ]
  },
  {
    id: 'fq-9',
    scenario: 'Bab 5: Saluran Bantuan Crisis',
    question: 'Nombor talian percuma 24 jam sokongan kesihatan mental di bawah Kementerian Kesihatan Malaysia (KKM) ialah:',
    options: [
      { id: 'a', text: 'Talian HEAL 15555', isCorrect: true, explanation: 'Tepat! Talian HEAL 15555 sedia membantu emosi remaja.' },
      { id: 'b', text: '999', isCorrect: false, explanation: 'Salah. 999 untuk polis/bomba/ambulans kecemasan.' },
      { id: 'c', text: '100', isCorrect: false, explanation: 'Salah.' },
      { id: 'd', text: '1300-88-8888', isCorrect: false, explanation: 'Salah.' }
    ]
  },
  {
    id: 'fq-10',
    scenario: 'Bab 5: Peranan Rakan Sebaya',
    question: 'Apakah peranan yang digalakkan bagi seorang murid apabila menyaksikan kejadian pembulian di sekolah?',
    options: [
      { id: 'a', text: 'Menjadi Upstander/Defender dengan mendampingi mangsa dan melaporkan kepada pihak sekolah.', isCorrect: true, explanation: 'Tepat! Membela mangsa dan menghentikan buli secara berhemah.' },
      { id: 'b', text: 'Menjadi Bystander Pasif yang mentertawakan mangsa.', isCorrect: false, explanation: 'Salah.' },
      { id: 'c', text: 'Merakam video untuk glamor di sosial media.', isCorrect: false, explanation: 'Salah.' },
      { id: 'd', text: 'Menolong pembuli memegang beg mangsa.', isCorrect: false, explanation: 'Salah.' }
    ]
  }
];

interface FinalQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPassQuiz: (score: number) => void;
  currentFinalScore: number | null;
}

export const FinalQuizModal: React.FC<FinalQuizModalProps> = ({
  isOpen,
  onClose,
  onPassQuiz,
  currentFinalScore
}) => {
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [calculatedScore, setCalculatedScore] = useState<number | null>(currentFinalScore);

  if (!isOpen) return null;

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmitQuiz = () => {
    if (Object.keys(userAnswers).length < FINAL_QUIZ_QUESTIONS.length) return;

    let correctCount = 0;
    FINAL_QUIZ_QUESTIONS.forEach(q => {
      const selected = q.options.find(o => o.id === userAnswers[q.id]);
      if (selected && selected.isCorrect) {
        correctCount += 1;
      }
    });

    const scorePercent = Math.round((correctCount / FINAL_QUIZ_QUESTIONS.length) * 100);
    setCalculatedScore(scorePercent);
    setIsSubmitted(true);

    if (scorePercent >= 70) {
      confetti({ particleCount: 120, spread: 90, origin: { y: 0.55 } });
      onPassQuiz(scorePercent);
    }
  };

  const handleRetry = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setCalculatedScore(null);
  };

  const answeredCount = Object.keys(userAnswers).length;

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
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-black text-slate-900">Ujian Penilaian Akhir Modul Anti-Buli & Emosi</h3>
              <p className="text-xs text-slate-500 font-medium">10 Soalan Pengukuhan (Skor lulus ≥ 70% untuk layak mendapat Sijil Rasmi)</p>
            </div>
          </div>

          <button
            id="btn-close-final-quiz"
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Questions List */}
        <div className="flex-1 overflow-y-auto py-6 space-y-6 pr-2">
          {/* Progress Banner */}
          <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 flex items-center justify-between text-xs text-slate-700 font-medium shadow-xs">
            <span>Kemajuan Menjawab:</span>
            <span className="font-black text-amber-800 text-sm">{answeredCount} / {FINAL_QUIZ_QUESTIONS.length} Soalan Dipilih</span>
          </div>

          {/* Results Box */}
          {isSubmitted && calculatedScore !== null && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl border text-center shadow-xs ${
                calculatedScore >= 70
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-rose-50 border-rose-300 text-rose-950'
              }`}
            >
              <h4 className="text-xl font-black mb-1">
                {calculatedScore >= 70 ? '🎉 Tahniah! Anda Lulus Cemerlang!' : 'Ulang Semula untuk Layak Mendapat Sijil'}
              </h4>
              <p className="text-sm font-semibold">
                Skor Penilaian Akhir: <strong className="text-2xl font-black">{calculatedScore}%</strong>
              </p>
              <p className="text-xs mt-2 text-slate-600 font-medium">
                {calculatedScore >= 70
                  ? 'Anda telah membuktikan kefahaman mendalam mengenai Modul Anti-Buli dan Pengurusan Emosi Tingkatan 3 KPM. Sijil Digital Rasmi anda kini sedia!'
                  : 'Sila semak semula nota dalam 5 bab dan cuba lagi sehingga mencapai sekurang-kurangnya 70% markah.'}
              </p>
            </motion.div>
          )}

          {/* Questions */}
          {FINAL_QUIZ_QUESTIONS.map((q, qIdx) => {
            const userChoice = userAnswers[q.id];
            const selectedOpt = q.options.find(o => o.id === userChoice);

            return (
              <div key={q.id} className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded-full border border-sky-200">
                    Soalan {qIdx + 1}
                  </span>
                  <span className="text-[11px] text-slate-500 font-semibold">{q.scenario}</span>
                </div>

                <h4 className="text-sm md:text-base font-extrabold text-slate-900 leading-relaxed">{q.question}</h4>

                <div className="space-y-2.5">
                  {q.options.map(opt => {
                    const isSelected = userChoice === opt.id;
                    let optStyle = 'bg-white hover:bg-slate-100/80 border-slate-200 text-slate-700 shadow-2xs font-medium';

                    if (isSubmitted) {
                      if (opt.isCorrect) {
                        optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/50 font-bold';
                      } else if (isSelected && !opt.isCorrect) {
                        optStyle = 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-400/50 font-bold';
                      }
                    } else if (isSelected) {
                      optStyle = 'bg-amber-50 border-amber-400 text-amber-950 ring-2 ring-amber-400/40 font-bold shadow-xs';
                    }

                    return (
                      <button
                        key={opt.id}
                        id={`final-q-${q.id}-opt-${opt.id}`}
                        onClick={() => handleSelectOption(q.id, opt.id)}
                        disabled={isSubmitted}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs md:text-sm transition-all flex items-start space-x-3 ${optStyle}`}
                      >
                        <span className="w-5 h-5 rounded-full border border-slate-300 bg-slate-100 text-slate-700 flex items-center justify-center font-black text-xs shrink-0 mt-0.5 uppercase">
                          {opt.id}
                        </span>
                        <span className="flex-1 leading-relaxed">{opt.text}</span>
                        {isSubmitted && opt.isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                        {isSubmitted && isSelected && !opt.isCorrect && (
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {isSubmitted && selectedOpt && (
                  <div
                    className={`mt-3 p-3.5 rounded-xl text-xs leading-relaxed font-medium ${
                      selectedOpt.isCorrect
                        ? 'bg-emerald-100/70 border border-emerald-300 text-emerald-950'
                        : 'bg-rose-100/70 border border-rose-300 text-rose-950'
                    }`}
                  >
                    <strong className="block mb-1 font-bold">
                      {selectedOpt.isCorrect ? '✅ Penjelasan Tepat:' : '❌ Penjelasan:'}
                    </strong>
                    {selectedOpt.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 shrink-0">
          {isSubmitted ? (
            <>
              <button
                id="btn-retry-final-exam"
                onClick={handleRetry}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center space-x-2 border border-slate-200 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ulang Semula Ujian</span>
              </button>

              <button
                id="btn-done-final-exam"
                onClick={onClose}
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-extrabold rounded-xl flex items-center space-x-2 shadow-md shadow-emerald-600/25 transition-all"
              >
                <span>Tutup & Lihat Sijil</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <button
              id="btn-submit-final-exam"
              onClick={handleSubmitQuiz}
              disabled={answeredCount < FINAL_QUIZ_QUESTIONS.length}
              className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-extrabold rounded-2xl text-sm flex items-center justify-center space-x-2 shadow-md shadow-amber-500/25 transition-all ml-auto"
            >
              <Award className="w-4 h-4" />
              <span>Hantar & Kira Keputusan Sijil</span>
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};
