'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

interface ImageSlideshowProps {
  images: {
    src: string
    alt: string
    width: number
    height: number
  }[]
  className?: string
  autoPlayInterval?: number
  showIndicators?: boolean
}

// Animation variants matching the hero section's motion library patterns
const slideVariants = {
  enter: {
    opacity: 0,
    scale: 1.05,
  },
  center: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      bounce: 0.2,
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.5,
    },
  },
}

export function ImageSlideshow({
  images,
  className,
  autoPlayInterval = 4000,
  showIndicators = true,
}: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [images.length, autoPlayInterval])

  const goToSlide = (index: number) => {
    if (index === currentIndex) return
    setCurrentIndex(index)
  }

  if (images.length === 0) return null

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Image Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={images[currentIndex].width}
              height={images[currentIndex].height}
              className="w-full h-full object-cover object-center rounded-xl sm:rounded-2xl"
              loading={currentIndex === 0 ? "eager" : "lazy"}
              priority={currentIndex === 0}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Subtle overlay for better text readability on indicators */}
      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      )}

      {/* Indicators */}
      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300 hover:scale-125",
                index === currentIndex
                  ? "bg-white shadow-lg"
                  : "bg-white/50 hover:bg-white/75"
              )}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}