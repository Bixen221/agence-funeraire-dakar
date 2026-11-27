import type { Metadata } from "next";
import { Formules } from "@/components/Formules";
import { PageHero } from "@/components/PageHero";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";

export const metadata: Metadata = {
  title: "Nos formules",
  description: "Formules Basique, Premium et Spécial pour les familles musulmanes et chrétiennes à Dakar. Devis gratuit, 24 h/24.",
};

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Formules" title="Un accompagnement adapté à chaque famille">
        Nous réalisons nous-mêmes toutes les prestations, dans le respect des rites musulmans et chrétiens. Choisissez votre communauté pour voir le détail des formules.
      </PageHero>
      <section className="container-site py-12 md:py-20"><Formules /></section>
      <section className="container-site pb-16">
        <div className="rounded-2xl bg-pierre-dark p-6 md:flex md:items-center md:justify-between md:p-10">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-cedre">Vous hésitez entre deux formules ?</h2>
            <p className="mt-2 text-ink/80">Appelez-nous : nous vous conseillons sans engagement et vous donnons un devis clair.</p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-0"><CallButton /><WhatsAppButton /></div>
        </div>
      </section>
    </>
  );
}
