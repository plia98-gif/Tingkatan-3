import React from 'react';
import avatarSiti from '../assets/images/avatar_siti_1788180415348.jpg';
import avatarAdam from '../assets/images/avatar_adam_1788180429275.jpg';
import avatarKavita from '../assets/images/avatar_kavita_1788180451407.jpg';
import avatarWong from '../assets/images/avatar_wong_1788180470098.jpg';
import avatarCikgu from '../assets/images/avatar_cikgu_1788180484303.jpg';
import heroSquadBanner from '../assets/images/hero_squad_banner_1788180500537.jpg';

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  expression?: 'confident' | 'thoughtful' | 'supportive' | 'happy';
}

export const AdamAvatar: React.FC<AvatarProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-44 h-44',
    hero: 'w-56 h-56 md:w-64 md:h-64'
  }[size];

  return (
    <div className={`relative inline-block overflow-hidden rounded-2xl border-2 border-sky-300 shadow-md ${sizeClasses} ${className}`}>
      <img
        src={avatarAdam}
        alt="Adam Avatar Kartun"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export const SitiAvatar: React.FC<AvatarProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-44 h-44',
    hero: 'w-56 h-56 md:w-64 md:h-64'
  }[size];

  return (
    <div className={`relative inline-block overflow-hidden rounded-2xl border-2 border-emerald-300 shadow-md ${sizeClasses} ${className}`}>
      <img
        src={avatarSiti}
        alt="Siti Avatar Kartun"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export const KavitaAvatar: React.FC<AvatarProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-44 h-44',
    hero: 'w-56 h-56 md:w-64 md:h-64'
  }[size];

  return (
    <div className={`relative inline-block overflow-hidden rounded-2xl border-2 border-amber-300 shadow-md ${sizeClasses} ${className}`}>
      <img
        src={avatarKavita}
        alt="Kavita Avatar Kartun"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export const WongAvatar: React.FC<AvatarProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-44 h-44',
    hero: 'w-56 h-56 md:w-64 md:h-64'
  }[size];

  return (
    <div className={`relative inline-block overflow-hidden rounded-2xl border-2 border-indigo-300 shadow-md ${sizeClasses} ${className}`}>
      <img
        src={avatarWong}
        alt="Wong Avatar Kartun"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export const CikguHafizAvatar: React.FC<AvatarProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-44 h-44',
    hero: 'w-56 h-56 md:w-64 md:h-64'
  }[size];

  return (
    <div className={`relative inline-block overflow-hidden rounded-2xl border-2 border-rose-300 shadow-md ${sizeClasses} ${className}`}>
      <img
        src={avatarCikgu}
        alt="Cikgu Hafiz Avatar Kartun"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export const GroupIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden rounded-2xl border border-sky-200 shadow-md group ${className}`}>
    <div className="relative h-44 w-full overflow-hidden bg-slate-900">
      <img
        src={heroSquadBanner}
        alt="Skuad Pelajar Anti-Buli"
        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col items-center justify-end p-4 text-center">
        <div className="flex items-center justify-center -space-x-3 mb-2">
          <AdamAvatar size="sm" className="ring-2 ring-white" />
          <SitiAvatar size="sm" className="ring-2 ring-white" />
          <KavitaAvatar size="sm" className="ring-2 ring-white" />
          <WongAvatar size="sm" className="ring-2 ring-white" />
          <CikguHafizAvatar size="sm" className="ring-2 ring-white" />
        </div>
        <h3 className="font-black text-base text-white drop-shadow-sm">Skuad Pelajar Anti-Buli & Minda Sihat T3</h3>
        <p className="text-[11px] text-sky-200 font-medium">Pengurusan Tekanan, Emosi & Ikrar Anti-Buli KPM</p>
      </div>
    </div>
  </div>
);

