"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface RoomImageCarouselProps {
  images: string[] | string;
  roomName?: string;
}

const RoomImageCarousel = ({ images, roomName }: RoomImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Convert to array if single string
  const imageArray = typeof images === 'string' ? [images] : (images || []);
  const hasMultipleImages = imageArray.length > 1;
  
  const handlePrevious = useCallback(() => {
    if (hasMultipleImages) {
      setCurrentIndex((prev) => (prev === 0 ? imageArray.length - 1 : prev - 1));
    }
  }, [imageArray.length, hasMultipleImages]);
  
  const handleNext = useCallback(() => {
    if (hasMultipleImages) {
      setCurrentIndex((prev) => (prev === imageArray.length - 1 ? 0 : prev + 1));
    }
  }, [imageArray.length, hasMultipleImages]);
  
  // Keyboard navigation support
  useEffect(() => {
    if (!hasMultipleImages) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasMultipleImages, handlePrevious, handleNext]);
  
  // Touch/swipe support for mobile
  const minSwipeDistance = 50;
  
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && hasMultipleImages) {
      handleNext();
    }
    if (isRightSwipe && hasMultipleImages) {
      handlePrevious();
    }
  };
  
  if (!imageArray.length) return null;
  
  return (
    <div 
      className="relative group h-full"
      onTouchStart={hasMultipleImages ? onTouchStart : undefined}
      onTouchMove={hasMultipleImages ? onTouchMove : undefined}
      onTouchEnd={hasMultipleImages ? onTouchEnd : undefined}
    >
      <div className="relative w-full h-full min-h-[192px] md:min-h-[300px]">
        <Image
          src={imageArray[currentIndex]}
          alt={roomName || "Venue"}
          fill
          quality={90}
          priority
          className="object-cover rounded-lg"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
        />
      </div>
      {hasMultipleImages && (
        <>
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100"
            aria-label="Previous image"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path 
                d="M15 18L9 12L15 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          
          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100"
            aria-label="Next image"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-6 md:h-6"
            >
              <path 
                d="M9 18L15 12L9 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {imageArray.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RoomImageCarousel;