import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import { etapes } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guide des démarches après un décès",
  description: "Que faire après un décès au Sénégal ? Les étapes, de l'hôpital à l'inhumation : certificat de décès, état civil, permis d'inhumer, transport, cimetière.",
};

export default function Demarches() {
  let n = 0;
  return (
    <>
      <PageHero eyebrow="Guide des démarches" title="Que faire après un décès ?">
        Voici les étapes, dans l&apos;ordre, de l&apos;hôpital à l&apos;inhumation. Vous n&apos;avez pas à les faire seul : nous prenons tout en charge dès votre appel.
      </PageHero>
      <section className="container-site py-12 md:py-20">
        <div className="mb-10 rounded-2xl border border-gold/50 bg-white p-5 md:p-6">
          <p className="font-serif text-2xl font-semibold text-cedre">La première chose à faire : nous appeler.</p>
          <p className="mt-1 text-ink/75">Nous vous disons quoi faire immédiatement et nous nous déplaçons, 24 h/24.</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row"><CallButton /><WhatsAppButton /></div>
        </div>
        <div className="space-y-14">
          {etapes.map((phase) => (
            <div key={phase.phase}>
              <h2 className="h2 !text-3xl md:!text-4xl">{phase.phase}</h2>
              <ol className="mt-6 space-y-0 border-l-2 border-gold/40 pl-0">
                {phase.items.map((e) => {
                  n += 1;
                  return (
                    <li key={e.titre} className="relative pb-8 pl-10 last:pb-0">
                      <span className="absolute -left-[1.1rem] top-0 grid h-9 w-9 place-items-center rounded-full bg-cedre font-serif text-lg font-semibold text-gold">{n}</span>
                      <h3 className="pt-1 text-lg font-semibold text-cedre">{e.titre}</h3>
                      <p className="mt-1 max-w-2xl text-ink/75">{e.texte}</p>
                      {(e.musulman || e.chretien) && (
                        <dl className="mt-3 grid max-w-xl gap-2 text-sm sm:grid-cols-2">
                          <div className="rounded-lg bg-pierre-dark px-3 py-2"><dt className="font-semibold text-cedre">Familles musulmanes</dt><dd className="text-ink/75">{e.musulman}</dd></div>
                          <div className="rounded-lg bg-pierre-dark px-3 py-2"><dt className="font-semibold text-cedre">Familles chrétiennes</dt><dd className="text-ink/75">{e.chretien}</dd></div>
                        </dl>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link href="/demande" className="btn btn-call">Demander une prise en charge</Link>
        </div>
      </section>
    </>
  );
}
