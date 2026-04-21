"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen flex items-end justify-center text-center px-6 relative overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0">
        <img src="/img/hero-main.webp" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 text-white pb-4 text-center"
      >
        <h1 className="font-[var(--font-playfair)] text-6xl md:text-8xl mb-10">
          Nayeli & Mario
        </h1>
        <p className="text-lg md:text-4xl font-light">Nos casamos</p>
        <p className="mt-2 text-md md:text-lg tracking-widest mb-6">
          24 · ABRIL · 2026
        </p>
        <div>
          <Image
            src="/ornament-down-white.svg"
            alt=""
            width={360}
            height={360}
            className="ml-auto mr-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}
