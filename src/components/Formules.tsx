"use client";
import Link from "next/link";
import { useState } from "react";
import { formules } from "@/lib/site";
import { CheckIcon } from "./Icons";

type C = "musulmane" | "chretienne";

export function Formules() {
  const [c, setC] = useState<C>("musulmane");
  return (
    <div>
      <div role="tablist" aria-label="Choisir la communauté" className="mx-auto flex w-full max-w-md rounded-full border border-night/15 bg-white p-1">
        {([["musulmane", "Familles musulmanes"], ["chretienne", "Familles chrétiennes"]] as const).map(([k, label]) => (
          <button key={k} role="tab" aria-selected={c === k} onClick={() => setC(k)} className={`flex-1 rounded-full px-3 py-2.5 text-sm font-semibold transition sm:text-base ${c === k ? "bg-night text-white" : "text-night/70 hover:text-night"}`}>
            {label}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {formules[c].map((f) => (
          <article key={f.nom} className={`relative flex flex-col rounded-2xl border bg-white p-6 ${f.miseEnAvant ? "border-gold shadow-[0_10px_30px_-12px_rgba(20,35,59,.25)]" : "border-night/10"}`}>
            {f.miseEnAvant && <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-night">La plus choisie</span>}
            <h3 className="font-serif text-3xl font-semibold text-night">{f.nom}</h3>
            <p className="mt-1 text-sm text-ink/70">{f.accroche}</p>
            <ul className="mt-5 flex-1 space-y-3 text-[0.95rem]">
              {f.inclus.map((i) => (
                <li key={i} className="flex gap-2.5"><CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" /> <span>{i}</span></li>
              ))}
            </ul>
            <p className="mt-6 border-t border-night/10 pt-4 font-serif text-xl text-night">{f.prix}</p>
            <Link href={`/demande?formule=${encodeURIComponent(f.nom)}&communaute=${c}`} className={`btn mt-4 w-full ${f.miseEnAvant ? "btn-call" : "btn-outline text-night hover:bg-night hover:text-white"}`}>
              Demander un devis
            </Link>
          </article>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-ink/70">Devis gratuit et sans engagement. Chaque formule s&apos;adapte aux souhaits de la famille.</p>
    </div>
  );
}
