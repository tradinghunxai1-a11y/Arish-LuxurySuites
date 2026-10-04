import React, { useState } from 'react';
import { X, Upload, RotateCcw, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { HOTEL_CONFIG, DEFAULT_IMAGES } from '../data/hotelData';
import { PhotoSlotMap, fileToDataUrl } from '../utils/photoStorage';

interface PhotoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  customPhotos: PhotoSlotMap;
  onUpdateSlot: (slotKey: string, dataUrl: string) => Promise<void>;
  onResetAll: () => Promise<void>;
}

const PHOTO_SLOTS = [
  {
    key: 'heroSunsetExterior',
    label: 'Homepage Hero & Sunset Exterior',
    expectedFiles: '302756581.jpg',
    description: 'Full-width hero image & twilight exterior view',
  },
  {
    key: 'daytimeGardenExterior',
    label: 'Daytime Exterior & Lawn Garden',
    expectedFiles: 'Arish-Luxury-Suites-skardu (9).jpg',
    description: 'Stone facade, garden table/umbrella, and mountain backdrop',
  },
  {
    key: 'executiveSuiteWingback',
    label: 'Executive Suite (Wingback Armchairs & Bed)',
    expectedFiles: 'executive-quad-suite-img1-arish-luxury-suites-img11-arish12.jpg',
    description: 'Suite interior with tufted bed, foot bench, and twin wingback chairs',
  },
  {
    key: 'deluxeSuiteVanity',
    label: 'Deluxe Suite (Vanity Mirror & Bedroom)',
    expectedFiles: '365453250.jpg / images.jpeg',
    description: 'Suite interior showing ornate vanity mirror, bed, and lounge',
  },
  {
    key: 'grandLoungeDining',
    label: 'Grand Velvet Lounge & Breakfast Dining Hall',
    expectedFiles: '304414298.jpg',
    description: 'Spacious lounge with curved velvet sofas and breakfast table',
  },
];

export const PhotoManagerModal: React.FC<PhotoManagerModalProps> = ({
  isOpen,
  onClose,
  customPhotos,
  onUpdateSlot,
  onResetAll,
}) => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleBatchFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    let matchedCount = 0;

    for (const file of Array.from(files)) {
      const lower = file.name.toLowerCase();
      // Ignore the Royal Crest dark design reference template if dropped accidentally
      if (lower.includes('aterrizaje') || lower.includes('royal')) {
        continue;
      }

      const dataUrl = await fileToDataUrl(file);

      if (lower.includes('302756581')) {
        await onUpdateSlot('heroSunsetExterior', dataUrl);
        matchedCount++;
      } else if (lower.includes('arish-luxury-suites-skardu') || lower.includes('(9)')) {
        await onUpdateSlot('daytimeGardenExterior', dataUrl);
        matchedCount++;
      } else if (lower.includes('executive-quad-suite')) {
        await onUpdateSlot('executiveSuiteWingback', dataUrl);
        matchedCount++;
      } else if (lower.includes('365453250') || lower.includes('images.jpeg')) {
        await onUpdateSlot('deluxeSuiteVanity', dataUrl);
        matchedCount++;
      } else if (lower.includes('304414298')) {
        await onUpdateSlot('grandLoungeDining', dataUrl);
        matchedCount++;
      } else {
        // Fallback: assign to first slot if only 1 file uploaded
        await onUpdateSlot('heroSunsetExterior', dataUrl);
        matchedCount++;
      }
    }

    setStatusMessage(
      `Updated ${matchedCount} hotel photograph(s). Your changes are saved in this browser.`
    );
  };

  const handleSingleSlotFile = async (slotKey: string, files: FileList | null) => {
    if (!files || !files[0]) return;
    const dataUrl = await fileToDataUrl(files[0]);
    await onUpdateSlot(slotKey, dataUrl);
    setStatusMessage(`Updated photograph for "${slotKey}".`);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="photo-manager-title"
    >
      <div className="bg-[#F8F6F1] border border-[#1C1B19]/15 rounded-xl max-w-4xl w-full overflow-hidden shadow-xl my-8">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1C1B19]/10">
          <div>
            <p className="text-xs font-medium text-[#8C6D46]">
              {HOTEL_CONFIG.name} · Media Manager
            </p>
            <h3
              id="photo-manager-title"
              className="font-display text-2xl font-semibold text-[#1C1B19]"
            >
              Upload or Replace Hotel Photographs
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo manager"
            className="p-2 rounded-lg text-[#4A4640] hover:text-[#1C1B19] hover:bg-[#EAE5DC] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Batch Drag & Drop Zone */}
          <div className="p-6 rounded-xl border-2 border-dashed border-[#8C6D46]/50 bg-[#EFECE6] text-center">
            <Upload className="w-7 h-7 text-[#8C6D46] mx-auto mb-2" />
            <h4 className="text-sm font-semibold text-[#1C1B19]">
              Batch Upload Your Original Hotel Photos
            </h4>
            <p className="text-xs text-[#4A4640] max-w-xl mx-auto mt-1 mb-4">
              Select all your hotel JPEGs (<code className="text-[11px]">302756581.jpg</code>,{' '}
              <code className="text-[11px]">Arish-Luxury-Suites-skardu (9).jpg</code>,{' '}
              <code className="text-[11px]">executive-quad-suite...jpg</code>,{' '}
              <code className="text-[11px]">365453250.jpg</code>,{' '}
              <code className="text-[11px]">304414298.jpg</code>) at once—they will automatically map to the Hero, Suites, Lounge, and Exterior sections.
            </p>
            <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1C1B19] hover:bg-[#332F2A] text-white text-xs font-semibold cursor-pointer transition-colors">
              <ImageIcon className="w-4 h-4 text-[#C5A572]" />
              <span>Select Hotel Photos from Device</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleBatchFiles(e.target.files)}
                className="hidden"
              />
            </label>
          </div>

          {statusMessage && (
            <div className="p-3.5 rounded-lg bg-[#1F5138]/10 border border-[#1F5138]/30 flex items-center gap-2.5 text-xs font-medium text-[#1F5138]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Individual Photo Slots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PHOTO_SLOTS.map((slot) => {
              const currentSrc =
                customPhotos[slot.key] ||
                DEFAULT_IMAGES[slot.key as keyof typeof DEFAULT_IMAGES];
              const isCustom = Boolean(customPhotos[slot.key]);

              return (
                <div
                  key={slot.key}
                  className="p-4 rounded-xl bg-white border border-[#1C1B19]/10 flex flex-col justify-between gap-3"
                >
                  <div>
                    <div className="aspect-16/10 rounded-lg overflow-hidden bg-[#262522] mb-3">
                      <img
                        src={currentSrc}
                        alt={slot.label}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs font-semibold text-[#1C1B19]">{slot.label}</p>
                    <p className="text-[11px] text-[#6E685F] mt-0.5">{slot.description}</p>
                    <p className="text-[11px] text-[#8C6D46] mt-1 font-mono-num">
                      {isCustom ? 'Custom Uploaded Photo Active' : `Matches: ${slot.expectedFiles}`}
                    </p>
                  </div>

                  <label className="w-full py-2 px-3 rounded-lg border border-[#1C1B19]/20 hover:bg-[#EAE5DC] text-xs font-semibold text-[#1C1B19] text-center cursor-pointer transition-colors">
                    Replace This Photo
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleSingleSlotFile(slot.key, e.target.files)}
                      className="hidden"
                    />
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-6 py-4 bg-[#EFECE6] border-t border-[#1C1B19]/10 flex items-center justify-between">
          <button
            type="button"
            onClick={async () => {
              await onResetAll();
              setStatusMessage('Restored default hotel photographs.');
            }}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6E685F] hover:text-[#1C1B19] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default Photos</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#1C1B19] text-white text-xs font-semibold hover:bg-[#332F2A] transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
