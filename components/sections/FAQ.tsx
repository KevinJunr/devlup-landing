"use client";

import { Section } from "@/components/layout/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "Comment fonctionne l'essai gratuit ?",
      answer:
        "L'essai gratuit vous donne accès à toutes les fonctionnalités de Devlup pendant 1 mois complet. Aucune carte de crédit n'est requise pour commencer. Vous pouvez créer vos carnets de compétences, ajouter vos élèves, et tester l'application en conditions réelles. À la fin de l'essai, vous décidez si vous souhaitez continuer avec un abonnement mensuel ou annuel.",
    },
    {
      question: "Puis-je personnaliser les carnets de compétences ?",
      answer:
        "Absolument ! Devlup vous permet de créer des carnets de compétences 100% personnalisés selon votre méthode d'enseignement. Vous définissez vos propres compétences, critères d'évaluation, et niveaux de progression. Chaque carnet peut être adapté à différents groupes d'âge ou niveaux de jeu.",
    },
    {
      question: "Comment les parents accèdent-ils à l'application ?",
      answer:
        "Lorsque vous ajoutez un élève, les parents reçoivent automatiquement une invitation par email. Ils créent leur compte gratuit en quelques secondes et accèdent immédiatement à l'espace dédié de leur enfant. Aucun coût additionnel pour eux, l'accès parent est toujours gratuit avec votre abonnement.",
    },
    {
      question: "Quelle est la limite d'élèves ?",
      answer:
        "Tous nos plans vous permettent de gérer jusqu'à 300 élèves simultanément. Cette limite est largement suffisante pour la plupart des écoles de tennis. Si vous avez besoin de gérer plus d'élèves, contactez-nous pour discuter d'une solution personnalisée adaptée à votre structure.",
    },
    {
      question: "Puis-je changer de formule ?",
      answer:
        "Oui, vous pouvez passer d'un abonnement mensuel à annuel (ou inversement) à tout moment depuis votre espace de gestion. Si vous passez à l'abonnement annuel en cours de route, nous ajustons automatiquement le montant au prorata. Aucun frais de changement, c'est totalement flexible.",
    },
    {
      question: "Les données de mes élèves sont-elles sécurisées ?",
      answer:
        "La sécurité des données est notre priorité absolue. Toutes les données sont chiffrées et hébergées sur des serveurs sécurisés en Europe (RGPD compliant). Vous restez propriétaire de vos données et pouvez les exporter à tout moment. Nous ne partageons jamais vos informations avec des tiers.",
    },
  ];

  return (
    <Section className="bg-bg-dark relative overflow-hidden" id="faq">
      {/* 3D Character - Small accent bottom right (visible on tablet) */}
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={inView ? { opacity: 1, rotate: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-0 right-5 md:right-10 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 opacity-12 md:opacity-15 pointer-events-none hidden md:block"
      >
        <Image
          src="/assets/3d/Homme 1/Homme(1)_pose(1).png"
          alt="Tennis player thinking"
          width={300}
          height={300}
          className="object-contain"
        />
      </motion.div>

      <div ref={ref} className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Questions{" "}
            <span className="text-gradient-orange">
              fréquentes
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur Devlup. Vous ne trouvez pas la
            réponse ? Contactez-nous !
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-lg border border-white/10 rounded-xl px-6 hover:border-white/20 transition-all"
              >
                <AccordionTrigger className="text-left text-white hover:text-orange-solid transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </Section>
  );
}
