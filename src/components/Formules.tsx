"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { formules } from "@/lib/site";
import { CheckIcon } from "./Icons";

type C = "musulmane" | "chretienne";

export function Formules() {
  const [c, setC] = useState<C>("musulmane");
  // Animation : les cartes apparaissent l'une après l'autre au défilement et à chaque changement d'onglet.
  // Sans JavaScript ou avec « réduire les animations », tout s'affiche directement.
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    setArmed(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const hidden = armed && !shown;
  return (
    <div ref={ref}>
      <div role="tablist" aria-label="Choisir la communauté" className="relative mx-auto flex w-full max-w-md rounded-full border border-cedre/25 bg-white p-1">
        <span aria-hidden="true" className={`absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-cedre transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${c === "chretienne" ? "translate-x-full" : "translate-x-0"}`} />
        {([["musulmane", "Familles musulmanes"], ["chretienne", "Familles chrétiennes"]] as const).map(([k, label]) => (
          <button key={k} role="tab" aria-selected={c === k} onClick={() => setC(k)} className={`relative z-10 flex-1 rounded-full px-3 py-2.5 text-sm font-semibold transition-colors duration-300 sm:text-base ${c === k ? "text-white" : "text-cedre/80 hover:text-bronze"}`}>
            {label}
          </button>
        ))}
      </div>
      <div key={`${c}-${shown}`} className="mt-8 grid gap-5 md:grid-cols-3">
        {formules[c].map((f, i) => (
          <article
            key={f.nom}
            style={{ animationDelay: `${i * 120}ms` }}
            className={`group relative flex flex-col rounded-2xl border bg-white p-6 card-shadow transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-16px_rgba(30,59,51,.35)] ${hidden ? "opacity-0" : armed ? "anim-fade-up" : ""} ${f.miseEnAvant ? "border-gold shadow-[0_10px_30px_-12px_rgba(20,35,59,.25)]" : "border-cedre/20"}`}>
            {f.miseEnAvant && <span className="absolute -top-3 left-6 rounded-full bg-gold-btn px-3 py-1 text-xs font-semibold text-white">Recommandée</span>}
            <h3 className="font-serif text-3xl font-semibold text-cedre">{f.nom}</h3>
            <p className="mt-1 text-sm text-ink/80">{f.accroche}</p>
            <ul className="mt-5 flex-1 space-y-3 text-[0.95rem]">
              {f.inclus.map((item) => (
                <li key={item} className="flex gap-2.5"><CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-bronze transition-transform duration-300 group-hover:scale-110" /> <span>{item}</span></li>
              ))}
            </ul>
            <p className="mt-6 border-t border-cedre/20 pt-4 font-serif text-3xl font-semibold whitespace-nowrap text-cedre [font-variant-numeric:lining-nums_tabular-nums]">{f.prix}</p>
            <Link href={`/demande?formule=${encodeURIComponent(f.nom)}&communaute=${c}`} className={`btn mt-4 w-full ${f.miseEnAvant ? "btn-call" : "btn-outline text-cedre hover:bg-cedre hover:text-white"}`}>
              Demander un devis
            </Link>
          </article>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-ink/80">Prix de base en francs CFA. Chaque formule s&apos;adapte aux souhaits de la famille : nous confirmons le prix avec vous dès votre appel.</p>
    </div>
  );
}
