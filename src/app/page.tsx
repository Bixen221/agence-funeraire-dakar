import Link from "next/link";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import { Formules } from "@/components/Formules";
import { ClockIcon, DocIcon, GlobeIcon, HandIcon } from "@/components/Icons";
import { faq, site } from "@/lib/site";

const engagements = [
  { icon: ClockIcon, titre: "Joignables à toute heure", texte: "Un appel suffit, de jour comme de nuit, week-end compris. Nous nous déplaçons à l'hôpital ou au domicile." },
  { icon: DocIcon, titre: "Toutes les démarches", texte: "Certificat de décès, état civil, permis d'inhumer, transport : nous nous en chargeons." },
  { icon: HandIcon, titre: "Dans le respect des rites", texte: "Nous accompagnons les familles musulmanes et chrétiennes, selon leurs traditions." },
  { icon: GlobeIcon, titre: "Pour la diaspora", texte: "Vous êtes à l'étranger ? Nous gérons tout sur place et vous tenons informé." },
];

const parcours = ["Vous nous appelez", "Nous venons à l'hôpital ou au domicile", "Nous gérons les papiers", "Lavage, prière ou veillée", "Accompagnement jusqu'à l'inhumation"];

export default function Home() {
  return (
    <>
      <section className="bg-cedre text-white">
        <div className="container-site grid gap-10 pt-12 md:grid-cols-[1.15fr_1fr] md:items-end md:gap-14 md:pt-20">
          <div className="md:pb-20">
            <p className="text-[0.95rem] text-gold">Pompes funèbres à Dakar et dans tout le Sénégal</p>
            <h1 className="mt-4 max-w-[16ch] font-serif text-[clamp(2.5rem,8.5vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.01em]">
              Nous nous occupons de tout, pour que vous puissiez vous recueillir.
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-white/80">
              De l&apos;hôpital jusqu&apos;à l&apos;inhumation, une seule équipe prend en charge le défunt et toutes les démarches. Pour les familles musulmanes et chrétiennes, au Sénégal comme à l&apos;étranger.
            </p>
          </div>
          <div className="arch relative mx-auto w-full max-w-[26rem] bg-pierre px-7 pt-16 pb-9 text-center text-ink md:px-10 md:pt-24">
            <div aria-hidden="true" className="arch pointer-events-none absolute inset-x-3 top-3 bottom-0 border-x border-t border-gold/60" />
            <p className="relative text-[0.95rem] text-ink/70">Appelez-nous, de jour comme de nuit</p>
            <a href={site.tel} className="relative mt-2 block font-serif text-[clamp(2.6rem,11vw,3.4rem)] leading-none font-semibold whitespace-nowrap text-cedre">{site.phoneDisplay}</a>
            <p className="relative mt-2 text-sm text-ink/60">Depuis l&apos;étranger : {site.phoneIntl}</p>
            <div className="relative mt-7 flex flex-col gap-3">
              <CallButton />
              <WhatsAppButton />
            </div>
            <p className="relative mt-5 text-sm text-ink/70">Réponse en moins de 15 minutes, 7 jours sur 7.</p>
          </div>
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <h2 className="h2 max-w-[20ch]">Une seule équipe, du premier appel au dernier hommage</h2>
        <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {engagements.map(({ icon: Icon, titre, texte }) => (
            <div key={titre} className="flex gap-4 border-t border-cedre/15 pt-6">
              <Icon className="mt-1 h-6 w-6 shrink-0 text-bronze" />
              <div>
                <h3 className="font-serif text-2xl font-semibold text-cedre">{titre}</h3>
                <p className="mt-1.5 max-w-[48ch] leading-relaxed text-ink/75">{texte}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-pierre-dark py-16 md:py-24">
        <div className="container-site">
                    <h2 className="h2 max-w-2xl">Un parcours clair, du premier appel à l&apos;inhumation</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {parcours.map((p, i) => (
              <li key={p} className="flex items-start gap-4 md:flex-col md:gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-gold font-serif text-xl font-semibold text-cedre">{i + 1}</span>
                <span className="pt-2 font-medium text-cedre md:pt-0">{p}</span>
              </li>
            ))}
          </ol>
          <Link href="/demarches" className="btn btn-outline mt-10 text-cedre hover:bg-cedre hover:text-white">Voir le guide des démarches</Link>
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <div className="text-center">
                    <h2 className="h2 mx-auto mt-3 max-w-2xl">Trois formules pour chaque communauté</h2>
          <p className="lead mx-auto mt-4 max-w-xl">Basique, Premium ou Spécial : choisissez le niveau d&apos;accompagnement qui convient à votre famille.</p>
        </div>
        <div className="mt-10"><Formules /></div>
      </section>

      <section className="bg-cedre py-16 text-white md:py-20">
        <div className="container-site grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
                        <h2 className="font-serif text-[clamp(1.9rem,5vw,2.75rem)] leading-tight font-semibold">Vous êtes loin ? Confiez-nous la prise en charge.</h2>
            <p className="mt-4 max-w-xl text-white/80">Nous agissons sur place à votre place et vous envoyons chaque étape sur WhatsApp, quel que soit votre fuseau horaire.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link href="/diaspora" className="btn btn-gold">Découvrir l&apos;accompagnement diaspora</Link>
            <WhatsAppButton text="Bonjour, je vis à l'étranger et j'ai besoin d'une prise en charge funéraire au Sénégal." />
          </div>
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
                <h2 className="h2">Vous vous posez des questions</h2>
        <div className="mt-8 divide-y divide-cedre/10 rounded-2xl border border-cedre/10 bg-white">
          {faq.slice(0, 4).map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-cedre">
                {f.q}<span className="text-2xl text-bronze transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-ink/75">{f.r}</p>
            </details>
          ))}
        </div>
        <Link href="/contact#faq" className="mt-6 inline-block font-medium text-bronze underline underline-offset-4">Toutes les questions</Link>
      </section>
    </>
  );
}
