"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";

type CarouselProps = {
  initialImage: number;
  style?: String;
};

const Carousel = ({ initialImage, style }: CarouselProps) => {
  const images = [
    { id: 1, src: "/img/pool-dark.jpg", alt: "Pool Dark" },
    { id: 2, src: "/img/pool.png", alt: "Pool" },
    { id: 3, src: "/img/shadow-dark.png", alt: "Shadow Dark" },
    { id: 4, src: "/img/football-field.png", alt: "Football Field" },
    { id: 5, src: "/img/shadow-nature.png", alt: "Shadow Nature" },
    { id: 6, src: "/img/hut-shadow.png", alt: "Hut Shadow" },
  ];

  const [currentSlide, setCurrentSlide] = useState(initialImage);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === images.length ? 1 : prev + 1));
      setIsTransitioning(false);
    }, 500);
  }, [images.length]);

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 1 ? images.length : prev - 1));
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide, nextSlide]);

  return (
    <div className="relative w-full h-64 lg:h-96 overflow-hidden">
      {images.map((slide) => (
        <div
          key={slide.id}
          id={`slide${slide.id}`}
          className={`absolute inset-0 transition-opacity duration-500 ${style} ${
            currentSlide === slide.id ? "opacity-100" : "opacity-0"
          } ${isTransitioning ? "pointer-events-none" : ""}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            layout="fill"
            objectFit="cover"
          />

          <div className="absolute left-0 right-0 top-1/2 flex justify-between transform -translate-y-1/2 px-4">
            <button
              className="text-xl"
              onClick={prevSlide}
              aria-label="Previous Slide"
            >
              ❮
            </button>
            <button
              className="text-xl"
              onClick={nextSlide}
              aria-label="Next Slide"
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
