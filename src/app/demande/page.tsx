import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { DemandeForm } from "@/components/DemandeForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Demande de prise en charge",
  description: "Envoyez votre demande de prise en charge funéraire par WhatsApp ou par e-mail. Réponse en moins de 15 minutes, 24 h/24.",
};

export default function Demande() {
  return (
    <>
      <PageHero eyebrow="Demande de prise en charge" title="Dites-nous comment vous aider">
        Remplissez ces quelques champs : votre demande part directement sur notre WhatsApp ou par e-mail. Pour une urgence, appelez le {site.phoneDisplay}.
      </PageHero>
      <section className="container-site py-12 md:py-16">
        <Suspense><DemandeForm /></Suspense>
      </section>
    </>
  );
}
