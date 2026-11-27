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
      <section className="relative isolate overflow-hidden bg-cedre-deep py-16 text-white md:py-24">
        {/* Fond animé : deux halos qui dérivent lentement et une ligne qui relie l'étranger à Dakar */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="halo absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-gold/20 blur-3xl" />
          <div className="halo halo-lent absolute -right-24 -bottom-40 h-[32rem] w-[32rem] rounded-full bg-[#2b5146]/70 blur-3xl" />
          <svg className="absolute inset-x-0 top-20 h-[22rem] w-full md:top-24" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice" fill="none">
            <path id="trajet" d="M -20 250 C 300 -40, 900 -40, 1220 230" stroke="rgba(176,141,87,.4)" strokeWidth="1.5" strokeDasharray="6 10" className="trajet" />
            <circle r="5" fill="#b08d57" className="voyageur">
              <animateMotion dur="9s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                <mpath href="#trajet" />
              </animateMotion>
            </circle>
            <circle r="14" fill="rgba(176,141,87,.18)" className="voyageur">
              <animateMotion dur="9s" repeatCount="indefinite">
                <mpath href="#trajet" />
              </animateMotion>
            </circle>
          </svg>
        </div>

        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-[18ch] font-serif text-[clamp(2rem,5vw,3rem)] leading-tight font-semibold">De là où vous êtes jusqu&apos;à Dakar, en quatre temps</h2>
            <p className="flex items-center gap-3 text-sm text-white/75">
              <span>Votre pays</span>
              <span aria-hidden="true" className="h-px w-10 bg-gold" />
              <span>Dakar</span>
            </p>
          </div>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {etapes.map((e, i) => (
              <li
                key={e.t}
                style={{ animationDelay: `${150 + i * 140}ms` }}
                className={`anim-fade-up group relative overflow-hidden rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/12 backdrop-blur-sm transition-[translate,background-color] duration-300 hover:-translate-y-1.5 hover:bg-white/[0.1] ${i % 2 === 1 ? "lg:mt-14" : ""}`}
              >
                <span aria-hidden="true" className="pointer-events-none absolute -top-4 right-4 font-serif text-[6.5rem] [font-variant-numeric:lining-nums] leading-none font-semibold text-transparent [-webkit-text-stroke:1px_rgba(176,141,87,.45)] transition-colors duration-300 group-hover:[-webkit-text-stroke:1px_rgba(214,189,140,.9)]">{i + 1}</span>
                <span className="relative block text-sm font-medium text-[#d6bd8c]">Étape {i + 1}</span>
                <h3 className="relative mt-8 font-serif text-2xl leading-snug font-semibold">{e.t}</h3>
                <p className="relative mt-2 leading-relaxed text-white/80">{e.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-pierre-dark py-14 text-ink md:py-20">
        <div className="container-site grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-4xl font-semibold text-cedre">Ce que nous faisons pour vous</h2>
            <ul className="mt-6 space-y-3 text-ink/85">
              {avantages.map((a) => <li key={a} className="flex gap-3"><CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-bronze" /> {a}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-cedre/20 bg-white p-6 card-shadow">
            <p className="text-sm text-ink/80">Depuis l&apos;étranger, composez :</p>
            <a href={site.tel} className="mt-1 block font-serif text-[clamp(2rem,7vw,2.6rem)] leading-tight font-bold whitespace-nowrap text-[#1f4e8c] transition-colors hover:text-cedre">{site.phoneIntl}</a>
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
