import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import { etapes } from "@/lib/site";
import { DemarchesGuide } from "@/components/DemarchesGuide";

export const metadata: Metadata = {
  title: "Guide des démarches après un décès",
  description: "Que faire après un décès au Sénégal ? Les étapes, de l'hôpital à l'inhumation : certificat de décès, état civil, permis d'inhumer, transport, cimetière.",
};

export default function Demarches() {
  return (
    <>
      <PageHero eyebrow="Guide des démarches" title="Que faire après un décès ?">
        Voici les étapes, dans l&apos;ordre, de l&apos;hôpital à l&apos;inhumation. Vous n&apos;avez pas à les faire seul : nous prenons tout en charge dès votre appel.
      </PageHero>
      <section className="container-site py-12 md:py-20">
        <div className="mb-10 rounded-2xl border border-gold/50 bg-white p-5 md:p-6">
          <p className="font-serif text-2xl font-semibold text-cedre">La première chose à faire : nous appeler.</p>
          <p className="mt-1 text-ink/80">Nous vous disons quoi faire immédiatement et nous nous déplaçons, 24 h/24.</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row"><CallButton /><WhatsAppButton /></div>
        </div>
        <DemarchesGuide phases={etapes} />
        <div className="mt-20 text-center">
          <Link href="/demande" className="btn btn-call">Demander une prise en charge</Link>
        </div>
      </section>
    </>
  );
}
