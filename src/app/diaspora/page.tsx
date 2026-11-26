import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { WhatsAppButton } from "@/components/ContactButtons";
import { CheckIcon } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Familles à l'étranger",
  description: "Vous vivez à l'étranger et un proche est décédé au Sénégal ? Nous prenons tout en charge sur place et vous informons sur WhatsApp.",
};

const etapes = [
  { t: "Contactez-nous sur WhatsApp", d: `Écrivez ou appelez le ${site.phoneIntl}, à toute heure. Nous répondons en moins de 15 minutes.` },
  { t: "Nous agissons sur place", d: "Nous nous rendons à l'hôpital ou au domicile, et nous prenons le relais avec les proches présents." },
  { t: "Vous validez à distance", d: "Devis, choix de la formule, date de l'inhumation : vous décidez, nous exécutons." },
  { t: "Vous suivez chaque étape", d: "Photos et messages à chaque étape clé, sur WhatsApp, quel que soit votre fuseau horaire." },
];

const avantages = [
  "Un interlocuteur unique qui parle avec vous et avec la famille sur place",
  "Toutes les démarches administratives faites pour vous",
  "Paiement et documents organisés avec vous à distance",
  "Coordination complète incluse dans la formule Spécial",
];

export default function Diaspora() {
  return (
    <>
      <PageHero eyebrow="Diaspora" title="Vous êtes loin. Nous sommes sur place.">
        Perdre un proche quand on vit à l&apos;étranger est une épreuve double. Confiez-nous la prise en charge : nous agissons pour vous au Sénégal, du premier jour jusqu&apos;à l&apos;inhumation.
      </PageHero>
      <section className="container-site py-12 md:py-20">
        <ol className="grid gap-5 md:grid-cols-2">
          {etapes.map((e, i) => (
            <li key={e.t} className="rounded-2xl border border-night/10 bg-white p-6">
              <span className="font-serif text-4xl font-semibold text-gold-dark">{i + 1}</span>
              <h2 className="mt-2 text-lg font-semibold text-night">{e.t}</h2>
              <p className="mt-1 text-ink/75">{e.d}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="bg-night py-14 text-white md:py-20">
        <div className="container-site grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-4xl font-semibold">Ce que nous faisons pour vous</h2>
            <ul className="mt-6 space-y-3">
              {avantages.map((a) => <li key={a} className="flex gap-3"><CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> {a}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <p className="text-sm text-white/70">Depuis l&apos;étranger, composez :</p>
            <a href={site.tel} className="mt-1 block font-serif text-4xl font-semibold text-gold">{site.phoneIntl}</a>
            <div className="mt-5 flex flex-col gap-3">
              <WhatsAppButton text="Bonjour, je vis à l'étranger et j'ai besoin d'une prise en charge funéraire au Sénégal." />
              <Link href="/demande?origine=etranger" className="btn btn-gold">Remplir une demande</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
