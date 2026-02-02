import { useState, memo } from 'react';
import { cn } from '@/lib/utils';
import { ZoomIn, X } from 'lucide-react';

interface ChapterImageProps {
  src: string;
  alt: string;
  className?: string;
  variant?: 'hero' | 'inline' | 'gallery' | 'left' | 'right' | 'full' | 'float-left' | 'float-right';
}

export const ChapterImage = memo(function ChapterImage({ src, alt, className, variant = 'inline' }: ChapterImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const baseStyles = {
    hero: 'w-full h-48 md:h-64 object-cover rounded-xl shadow-lg',
    inline: 'w-full max-w-3xl mx-auto rounded-lg shadow-md',
    gallery: 'w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity',
    left: 'w-full md:w-1/2 rounded-lg shadow-md',
    right: 'w-full md:w-1/2 ml-auto rounded-lg shadow-md',
    full: 'w-full rounded-xl shadow-lg object-cover h-64 md:h-80',
    'float-left': 'w-full max-w-3xl mx-auto rounded-lg shadow-md',
    'float-right': 'w-full max-w-3xl mx-auto rounded-lg shadow-md',
  };

  const containerStyles = {
    hero: '',
    inline: 'flex justify-center my-6',
    gallery: '',
    left: 'flex justify-start',
    right: 'flex justify-end',
    full: '',
    'float-left': 'flex justify-center my-6',
    'float-right': 'flex justify-center my-6',
  };

  return (
    <>
      <figure className={cn('relative group', containerStyles[variant], className)}>
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={src}
            alt={alt}
            className={cn(baseStyles[variant], 'transition-transform duration-300')}
            loading="lazy"
          />
          {variant !== 'hero' && variant !== 'float-left' && variant !== 'float-right' && (
            <button
              onClick={() => setIsZoomed(true)}
              className="absolute top-2 right-2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Zoom image"
            >
              <ZoomIn className="w-4 h-4 text-white" />
            </button>
          )}
        </div>
      </figure>

      {/* Lightbox */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </>
  );
});

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  columns?: 2 | 3 | 4;
}

export const ImageGallery = memo(function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  };

  return (
    <div className={cn('grid gap-4', gridCols[columns])}>
      {images.map((image, index) => (
        <ChapterImage
          key={index}
          src={image.src}
          alt={image.alt}
          variant="gallery"
        />
      ))}
    </div>
  );
});
