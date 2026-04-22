"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden min-h-screen h-dvh flex items-end justify-center px-6 text-center"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {/* Fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/img/hero-wedding-splash.webp"
          alt="hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Contenido TODO ABAJO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl text-white pb-6"
      >
        {/* ❌ quitamos h-full */}
        <div>
          <h1 className="font-[var(--font-playfair)] text-5xl sm:text-6xl md:text-8xl mb-6 leading-tight mb-10">
            Nayeli & Mario
          </h1>
        </div>

        <div>
          <p className="text-sm sm:text-base md:text-lg tracking-widest mb-14">
            24 · ABRIL · 2026
          </p>

          <div className="flex justify-center w-full">
            <Image
              src="/ornament-down-white.svg"
              alt=""
              width={360}
              height={360}
              className="mx-auto h-auto"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
