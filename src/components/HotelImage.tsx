import React, { useState } from 'react';
import { Mountain } from 'lucide-react';

interface HotelImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  fallbackLabel?: string;
}

export const HotelImage: React.FC<HotelImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative overflow-hidden bg-[#262522]',
  priority = false,
  fallbackLabel,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={containerClassName}>
      {!hasError ? (
        <>
          {!isLoaded && (
            <div
              className="absolute inset-0 bg-[#EAE5DC] animate-pulse"
              aria-hidden="true"
            />
          )}
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            referrerPolicy="no-referrer"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`${className} transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </>
      ) : (
        <div className="w-full h-full min-h-[240px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#2C302E] via-[#1C1B19] to-[#3A3227] text-[#F8F6F1]">
          <Mountain className="w-8 h-8 text-[#C5A572] mb-3 opacity-80" />
          <p className="font-display text-lg tracking-wide text-[#F8F6F1]">
            {fallbackLabel || 'Arish Luxury Suites · Skardu'}
          </p>
          <p className="text-xs text-[#C2BCB2] mt-1 max-w-xs">{alt}</p>
        </div>
      )}
    </div>
  );
};
