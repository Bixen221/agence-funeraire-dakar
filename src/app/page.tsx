import Link from "next/link";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import { Formules } from "@/components/Formules";
import { ClockIcon, DocIcon, GlobeIcon, HandIcon } from "@/components/Icons";
import { faq, site } from "@/lib/site";

const engagements = [
  { icon: ClockIcon, titre: "24 h/24, 7 j/7", texte: "Un appel suffit, de jour comme de nuit. Réponse en moins de 15 minutes." },
  { icon: DocIcon, titre: "Toutes les démarches", texte: "Certificat de décès, état civil, permis d'inhumer, transport : nous nous en chargeons." },
  { icon: HandIcon, titre: "Dans le respect des rites", texte: "Nous accompagnons les familles musulmanes et chrétiennes, selon leurs traditions." },
  { icon: GlobeIcon, titre: "Pour la diaspora", texte: "Vous êtes à l'étranger ? Nous gérons tout sur place et vous tenons informé." },
];

const parcours = ["Vous nous appelez", "Nous venons à l'hôpital ou au domicile", "Nous gérons les papiers", "Lavage, prière ou veillée", "Accompagnement jusqu'à l'inhumation"];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-night text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -bottom-40 h-[28rem] w-[28rem] rounded-t-full border-[3px] border-gold/25 md:right-10" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-8 -bottom-40 h-[22rem] w-[19rem] rounded-t-full border-2 border-gold/15 md:right-24" />
        <div className="container-site relative py-16 md:py-28">
          <p className="eyebrow !text-gold">Pompes funèbres · Dakar et tout le Sénégal</p>
          <h1 className="mt-4 max-w-3xl font-serif text-[clamp(2.4rem,8vw,4.25rem)] leading-[1.05] font-semibold">
            Nous nous occupons de tout, pour que vous puissiez vous recueillir.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            De l&apos;hôpital jusqu&apos;à l&apos;inhumation, une seule équipe prend en charge votre défunt et toutes les démarches. Familles musulmanes et chrétiennes, au Sénégal et à l&apos;étranger.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CallButton className="!bg-gold !text-night hover:!bg-[#d6ba7a] sm:min-w-44" />
            <WhatsAppButton className="sm:min-w-44" />
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-white/70">
            <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" /></span>
            Une personne vous répond maintenant, au {site.phoneDisplay}
          </p>
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {engagements.map(({ icon: Icon, titre, texte }) => (
            <div key={titre} className="rounded-2xl border border-night/10 bg-white p-6">
              <Icon className="h-8 w-8 text-gold-dark" />
              <h2 className="mt-4 font-serif text-2xl font-semibold text-night">{titre}</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/75">{texte}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand py-16 md:py-24">
        <div className="container-site">
          <p className="eyebrow">Comment ça se passe</p>
          <h2 className="h2 mt-3 max-w-2xl">Un parcours clair, du premier appel à l&apos;inhumation</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {parcours.map((p, i) => (
              <li key={p} className="flex items-start gap-4 md:flex-col md:gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-gold font-serif text-xl font-semibold text-night">{i + 1}</span>
                <span className="pt-2 font-medium text-night md:pt-0">{p}</span>
              </li>
            ))}
          </ol>
          <Link href="/demarches" className="btn btn-outline mt-10 text-night hover:bg-night hover:text-white">Voir le guide des démarches</Link>
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <div className="text-center">
          <p className="eyebrow">Nos formules</p>
          <h2 className="h2 mx-auto mt-3 max-w-2xl">Trois formules pour chaque communauté</h2>
          <p className="lead mx-auto mt-4 max-w-xl">Basique, Premium ou Spécial : choisissez le niveau d&apos;accompagnement qui convient à votre famille.</p>
        </div>
        <div className="mt-10"><Formules /></div>
      </section>

      <section className="bg-night py-16 text-white md:py-20">
        <div className="container-site grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow !text-gold">Familles à l&apos;étranger</p>
            <h2 className="mt-3 font-serif text-[clamp(1.9rem,5vw,2.75rem)] leading-tight font-semibold">Vous êtes loin ? Confiez-nous la prise en charge.</h2>
            <p className="mt-4 max-w-xl text-white/80">Nous agissons sur place à votre place et vous envoyons chaque étape sur WhatsApp, quel que soit votre fuseau horaire.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link href="/diaspora" className="btn btn-gold">Découvrir l&apos;accompagnement diaspora</Link>
            <WhatsAppButton text="Bonjour, je vis à l'étranger et j'ai besoin d'une prise en charge funéraire au Sénégal." />
          </div>
        </div>
      </section>

      <section className="container-site py-16 md:py-24">
        <p className="eyebrow">Questions fréquentes</p>
        <h2 className="h2 mt-3">Vous vous posez des questions</h2>
        <div className="mt-8 divide-y divide-night/10 rounded-2xl border border-night/10 bg-white">
          {faq.slice(0, 4).map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-night">
                {f.q}<span className="text-2xl text-gold-dark transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-ink/75">{f.r}</p>
            </details>
          ))}
        </div>
        <Link href="/contact#faq" className="mt-6 inline-block font-medium text-gold-dark underline underline-offset-4">Toutes les questions</Link>
      </section>
    </>
  );
}
