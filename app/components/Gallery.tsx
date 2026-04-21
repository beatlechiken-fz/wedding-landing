"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = Array.from({ length: 31 }, (_, i) => `/img/${i + 1}.webp`);

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 👉 controla animación

  // 👉 swipe
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    const x = e.changedTouches[0].clientX;
    touchStartX.current = x;
    touchEndX.current = x;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) next();
    if (diff < -50) prev();
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const getIndex = (i: number) => (i + images.length) % images.length;

  // 🎯 variantes animación
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="relative py-2 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Ornamento */}
        <Image
          src="/ornament-up-green.svg"
          alt=""
          width={360}
          height={360}
          className="mx-auto"
        />

        <h2 className="text-4xl md:text-5xl mb-20 mt-8 text-[var(--color-primary)]">
          Nuestra Historia
        </h2>

        {/* CONTENEDOR */}
        <div
          className="relative flex items-center justify-center gap-6 md:gap-10"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Flecha izquierda */}
          <button
            onClick={prev}
            className="absolute left-0 z-20 bg-white/80 backdrop-blur-md w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
          >
            ←
          </button>

          {/* 👈 IZQUIERDA */}
          <div className="hidden lg:block w-[220px] h-[300px] relative rounded-2xl overflow-hidden shadow-md">
            <Image
              key={images[getIndex(index - 1)]}
              src={images[getIndex(index - 1)]}
              alt=""
              fill
              className="object-cover opacity-90"
            />
          </div>

          {/* 🎯 CENTRAL ANIMADA */}
          <div className="relative w-[260px] sm:w-[320px] md:w-[420px] h-[420px] md:h-[520px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.25)]"
              >
                <Image
                  key={images[index]}
                  src={images[index]}
                  alt="principal"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 👉 DERECHA */}
          <div className="hidden lg:block w-[220px] h-[300px] relative rounded-2xl overflow-hidden shadow-md">
            <Image
              key={images[getIndex(index + 1)]}
              src={images[getIndex(index + 1)]}
              alt=""
              fill
              className="object-cover opacity-90"
            />
          </div>

          {/* Flecha derecha */}
          <button
            onClick={next}
            className="absolute right-0 z-20 bg-white/80 backdrop-blur-md w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
          >
            →
          </button>
        </div>

        {/* Ornamento */}
        <Image
          src="/ornament-down-green.svg"
          alt=""
          width={360}
          height={360}
          className="mx-auto mt-20"
        />
      </div>
    </section>
  );
}
