import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Award, Shield, Printer, Download, Edit3, X } from 'lucide-react';
import html2canvas from 'html2canvas';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  studentClass: string;
  schoolName: string;
  score: number;
  completionDate: string;
  certificateId: string;
  onUpdateStudentInfo: (name: string, studentClass: string, schoolName: string) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  studentName,
  studentClass,
  schoolName,
  score,
  completionDate,
  certificateId,
  onUpdateStudentInfo
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(studentName || 'Adam bin Mohd Zaki');
  const [editClass, setEditClass] = useState(studentClass || '3 Bestari');
  const [editSchool, setEditSchool] = useState(schoolName || 'SMK Seri Bintang');
  const [isDownloading, setIsDownloading] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleSaveInfo = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateStudentInfo(editName.trim(), editClass.trim(), editSchool.trim());
    setIsEditing(false);
  };

  const handleDownloadImage = async () => {
    if (!certRef.current) return;
    setIsDownloading(true);
    try {
      const canvas = await html2canvas(certRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#FFFFFF'
      });
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `Sijil-AntiBuli-T3-${(editName || 'Pelajar').replace(/\s+/g, '_')}.png`;
      link.href = image;
      link.click();
    } catch (err) {
      console.error('Failed to export certificate image:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 max-w-4xl w-full my-8 shadow-2xl relative text-slate-800 max-h-[92vh] flex flex-col print:border-none print:shadow-none print:max-h-none print:w-full print:my-0 print:p-0 print:bg-white"
      >
        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 shrink-0 print:hidden">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black shadow-xs">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-900">Sijil Pencapaian Digital Anti-Buli & Minda Sihat</h3>
              <p className="text-xs text-slate-500 font-medium">Modul Pengurusan Tekanan, Emosi & Ikrar Anti-Buli Tingkatan 3 KPM</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              id="btn-toggle-edit-cert"
              onClick={() => setIsEditing(!isEditing)}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 flex items-center space-x-1.5 transition-all"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Tutup Edit' : 'Edit Nama Pelajar'}</span>
            </button>

            <button
              id="btn-close-cert-modal"
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Edit Form */}
        {isEditing && (
          <form onSubmit={handleSaveInfo} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mt-4 mb-2 grid grid-cols-1 sm:grid-cols-3 gap-3 print:hidden">
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">Nama Penuh:</label>
              <input
                type="text"
                required
                value={editName}
                onChange={e => setEditName(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">Kelas:</label>
              <input
                type="text"
                required
                value={editClass}
                onChange={e => setEditClass(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">Nama Sekolah:</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  required
                  value={editSchool}
                  onChange={e => setEditSchool(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-1.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs font-extrabold shrink-0 shadow-xs"
                >
                  Simpan
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Certificate Printable Canvas Container */}
        <div className="flex-1 overflow-y-auto py-4">
          <div
            ref={certRef}
            id="official-certificate-container"
            className="bg-white text-slate-900 rounded-2xl p-8 md:p-12 border-8 border-amber-400 shadow-2xl relative overflow-hidden font-serif max-w-3xl mx-auto print:border-4 print:p-8"
          >
            {/* Border Accents */}
            <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-amber-600 pointer-events-none" />
            <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-amber-600 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-amber-600 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-amber-600 pointer-events-none" />

            <div className="border border-amber-300 p-6 rounded-lg text-center relative z-10">
              <div className="mb-6 border-b border-amber-200 pb-4">
                <p className="text-[11px] font-sans font-extrabold uppercase tracking-widest text-amber-800 mb-1">
                  KEMENTERIAN PENDIDIKAN MALAYSIA • KURIKULUM SAHSAH & MINDA SIHAT
                </p>
                <h1 className="text-2xl md:text-3xl font-black uppercase text-slate-900 tracking-tight">
                  SIJIL PENCAPAIAN DIGITAL ANTI-BULI
                </h1>
                <p className="text-xs md:text-sm font-sans font-semibold text-slate-600 mt-1">
                  Pengurusan Tekanan & Emosi Tingkatan 3: Bijak Tangani Tekanan & Emosi
                </p>
              </div>

              <p className="text-xs font-sans text-slate-500 uppercase tracking-wider mb-2">
                DENGAN INI DIPERAKUKAN BAHAWA
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-sky-950 underline decoration-amber-400 decoration-2 underline-offset-8 mb-2">
                {editName || 'Nama Murid'}
              </h2>

              <p className="text-xs md:text-sm font-sans font-semibold text-slate-700 mb-6">
                Tingkatan: <span className="text-sky-900 font-bold">{editClass || '3 Bestari'}</span> • Sekolah: <span className="text-sky-900 font-bold">{editSchool || 'Sekolah Menengah Malaysia'}</span>
              </p>

              <p className="text-xs md:text-sm text-slate-700 leading-relaxed max-w-xl mx-auto mb-8 font-sans">
                Telah berjaya menyempurnakan kesemua <strong>5 Bab Modul Pembelajaran Anti-Buli Tingkatan 3 KPM</strong>, menguasai Kenali Punca Stres, Teknik Grounding 5-4-3-2-1, Keseimbangan Masa Belajar, Reframing Minda Positif, serta menandatangani Ikrar Integriti Pelajar Anti-Buli KPM dengan pencapaian skor cemerlang <strong>{score}%</strong>.
              </p>

              <div className="grid grid-cols-3 items-end justify-between pt-6 border-t border-amber-200 text-xs font-sans text-slate-600">
                <div className="text-left">
                  <p className="font-serif italic text-lg text-slate-800 mb-1">Cikgu Hafiz</p>
                  <p className="border-t border-slate-400 pt-1 font-bold text-slate-800 text-[11px]">
                    Guru Bimbingan & Kaunseling
                  </p>
                  <p className="text-[10px] text-slate-500">Penyelaras Modul Anti-Buli T3</p>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 via-amber-300 to-amber-500 text-slate-900 flex flex-col items-center justify-center shadow-lg border-2 border-amber-600 p-1">
                    <Shield className="w-5 h-5 text-amber-950 mb-0.5" />
                    <span className="text-[7px] font-black uppercase text-amber-950">RASMI KPM</span>
                    <span className="text-[7px] font-bold text-amber-950">2026</span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-serif italic text-lg text-slate-800 mb-1">Dr. Azman b. Rashid</p>
                  <p className="border-t border-slate-400 pt-1 font-bold text-slate-800 text-[11px]">
                    Pengetua Cemerlang
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Tarikh: {completionDate || '22 Ogos 2026'}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[9px] font-sans text-slate-400">
                <span>No. Sijil Digital: <strong className="text-slate-600 font-mono">{certificateId}</strong></span>
                <span>Status: Disahkan & Berdaftar Dalam Pangkalan Anti-Buli KPM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 shrink-0 print:hidden">
          <div className="text-xs text-slate-500 font-medium">
            Sijil ini diiktiraf sebagai bukti penyertaan kokurikulum & pencapaian sahsiah sekolah.
          </div>
          <div className="flex items-center space-x-3">
            <button
              id="btn-print-certificate"
              onClick={handlePrint}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center space-x-2 border border-slate-200 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak Sijil</span>
            </button>
            <button
              id="btn-download-cert-image"
              onClick={handleDownloadImage}
              disabled={isDownloading}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-xs font-extrabold rounded-xl flex items-center space-x-2 shadow-md shadow-amber-500/25 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{isDownloading ? 'Menjana Imej...' : 'Muat Turun Imej Sijil (PNG)'}</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
