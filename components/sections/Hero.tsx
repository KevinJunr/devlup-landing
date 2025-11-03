"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Users, Star } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-orange-solid/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-aqua-solid/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-solid/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <Badge className="bg-orange-glass-light border-orange-solid/30 text-white px-4 py-2 text-sm">
                🎾 N°1 des écoles de tennis modernes
              </Badge>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Transformez votre{" "}
              <span className="text-gradient-orange">
                école de tennis
              </span>{" "}
              avec le suivi digital
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Simplifiez votre enseignement, engagez vos élèves et fidélisez
              les parents avec la solution de gestion complète pour écoles de
              tennis.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-orange-gradient hover:scale-105 transition-all shadow-lg shadow-orange-solid/30 text-white font-semibold group"
              >
                Essayer gratuitement 1 mois
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 backdrop-blur group"
              >
                <Play className="mr-2 group-hover:scale-110 transition-transform" />
                Voir une démo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Users className="w-5 h-5 text-orange-solid" />
                  <p className="text-2xl font-bold text-white">500+</p>
                </div>
                <p className="text-sm text-foreground/60">Clubs partenaires</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-aqua-solid" />
                  <p className="text-2xl font-bold text-white">10K+</p>
                </div>
                <p className="text-sm text-foreground/60">Élèves actifs</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <Star className="w-5 h-5 text-rose-solid" />
                  <p className="text-2xl font-bold text-white">98%</p>
                </div>
                <p className="text-sm text-foreground/60">Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* 3D Character with glassmorphism background */}
              <div className="relative w-full aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-solid/20 to-aqua-solid/20 rounded-3xl backdrop-blur-xl border border-white/10 flex items-end justify-center overflow-hidden">
                  <Image
                    src="/assets/3d/Homme 1/Homme(1)_pose(2).png"
                    alt="Devlup App"
                    width={600}
                    height={600}
                    className="object-contain scale-110"
                    priority
                  />
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 bg-card/80 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-gradient flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">Progression</p>
                    <p className="text-sm font-semibold text-white">+127%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-lg border border-white/10 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-aqua-gradient flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">
                      Engagement parents
                    </p>
                    <p className="text-sm font-semibold text-white">94%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient separator */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-fg-dark to-transparent" />
    </div>
  );
}
