import React from 'react';

interface PlatformIconProps {
  icon: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const PlatformIcon: React.FC<PlatformIconProps> = ({
  icon,
  name,
  size = 'md',
  className = '',
}) => {
  // Tailles uniformes pour tous les contextes - FIXÉES pour homogénéité
  const sizeClasses = {
    sm: 'w-11 h-11 min-w-[2.75rem] min-h-[2.75rem]',
    md: 'w-12 h-12 min-w-[3rem] min-h-[3rem]',
    lg: 'w-14 h-14 min-w-[3.5rem] min-h-[3.5rem]',
  };
  
  // Taille d'emoji fixe pour tous les contextes
  const emojiSize = {
    sm: 'text-[1.5rem]',  // 24px
    md: 'text-[1.75rem]', // 28px
    lg: 'text-[2rem]',    // 32px
  };

  // Taille d'image pour logos réels
  const imageSize = {
    sm: 'w-7 h-7',   // 28px
    md: 'w-8 h-8',   // 32px
    lg: 'w-10 h-10', // 40px
  };

  // Détecter si c'est une URL (logo) ou un emoji
  const isUrl = icon.startsWith('http') || icon.startsWith('/') || icon.startsWith('data:');

  return (
    <div
      className={`
        ${sizeClasses[size]}
        flex items-center justify-center
        rounded-xl
        bg-gradient-to-br from-cyan-50 to-blue-50
        dark:from-slate-800 dark:to-slate-700
        border border-cyan-200/60 dark:border-cyan-500/40
        shadow-sm
        transition-all duration-200
        group-hover:scale-105
        group-hover:shadow-md
        group-hover:border-cyan-300 dark:group-hover:border-cyan-400
        ${className}
      `}
      aria-hidden="true"
    >
      {isUrl ? (
        // Logo réel (image)
        <img 
          src={icon} 
          alt={name || 'Service logo'} 
          className={`${imageSize[size]} object-contain transition-all duration-200`}
          loading="lazy"
          onError={(e) => {
            // Fallback : si l'image ne charge pas, afficher un emoji par défaut
            e.currentTarget.style.display = 'none';
            e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl">📱</span>';
          }}
        />
      ) : (
        // Emoji (comportement actuel)
        <span className={`flex items-center justify-center leading-none ${emojiSize[size]}`}>
          {icon}
        </span>
      )}
    </div>
  );
};
