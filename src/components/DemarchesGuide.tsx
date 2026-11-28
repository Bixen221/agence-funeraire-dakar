"use client";
import { useEffect, useRef, useState } from "react";
import type { Etape } from "@/lib/site";

type Phase = { phase: string; items: Etape[] };

/**
 * Guide des démarches : une barre de phases qui suit le défilement (la phase en cours
 * se met en avant et la jauge dorée avance), puis chaque phase en cartes qui apparaissent
 * à leur tour. Sans JavaScript ou avec « réduire les animations », tout est visible d'emblée.
 */
export function DemarchesGuide({ phases }: { phases: Phase[] }) {
  const [active, setActive] = useState(0);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState<boolean[]>(() => phases.map(() => false));
  const sections = useRef<(HTMLElement | null)[]>([]);
  const bar = useRef<HTMLOListElement>(null);

  // Sur mobile, la barre défile d'elle-même pour garder la phase en cours visible.
  useEffect(() => {
    const ol = bar.current;
    const li = ol?.children[active] as HTMLElement | undefined;
    if (!ol || !li) return;
    ol.scrollTo({ left: li.offsetLeft - (ol.clientWidth - li.offsetWidth) / 2, behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window)) return;
    if (!reduce) setArmed(true);
    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const i = Number((e.target as HTMLElement).dataset.i);
          setShown((s) => (s[i] ? s : s.map((v, k) => (k === i ? true : v))));
        }),
      { threshold: 0.15 },
    );
    // Phase en cours : la dernière dont le haut a passé le milieu de l'écran.
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const mid = window.innerHeight * 0.5;
        let cur = 0;
        sections.current.forEach((el, i) => {
          if (el && el.getBoundingClientRect().top < mid) cur = i;
        });
        setActive(cur);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    sections.current.forEach((el) => {
      if (el) reveal.observe(el);
    });
    return () => {
      reveal.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  let n = 0;
  const progress = ((active + 1) / phases.length) * 100;

  return (
    <div>
      {/* Barre des phases, collée sous l'en-tête */}
      <nav aria-label="Phases des démarches" className="sticky top-16 z-30 -mx-5 border-b border-cedre/15 bg-white/95 px-5 backdrop-blur md:top-20 md:mx-0 md:rounded-2xl md:border md:px-3 md:card-shadow">
        <ol ref={bar} className="relative flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {phases.map((p, i) => (
            <li key={p.phase} className="shrink-0">
              <a
                href={`#phase-${i + 1}`}
                aria-current={active === i ? "step" : undefined}
                className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-300 ${active === i ? "bg-cedre text-white" : "text-cedre/80 hover:bg-pierre-dark hover:text-cedre"}`}
              >
                <span className={`grid h-6 w-6 place-items-center rounded-full text-xs transition-colors duration-300 ${active === i ? "bg-gold-btn text-white" : "bg-pierre-dark text-cedre"}`}>{i + 1}</span>
                {p.phase}
              </a>
            </li>
          ))}
        </ol>
        <div aria-hidden="true" className="h-0.5 bg-gold/20 md:mx-2 md:mb-2 md:rounded-full">
          <div className="h-full rounded-full bg-gold-btn transition-[width] duration-700 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </nav>

      <div className="mt-12 space-y-20 md:mt-16">
        {phases.map((p, i) => {
          const hidden = armed && !shown[i];
          return (
            <section
              key={p.phase}
              id={`phase-${i + 1}`}
              data-i={i}
              ref={(el) => {
                sections.current[i] = el;
              }}
              className="scroll-mt-40 lg:grid lg:grid-cols-[17rem_1fr] lg:gap-12"
            >
              <header className={`transition-all duration-700 ease-out lg:sticky lg:top-44 lg:self-start ${hidden ? "translate-y-3 opacity-0" : "opacity-100"}`}>
                <p aria-hidden="true" className="font-serif text-7xl leading-none font-semibold text-transparent [-webkit-text-stroke:1.5px_var(--color-gold)] [font-variant-numeric:lining-nums] md:text-8xl">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-cedre md:text-4xl">{p.phase}</h2>
                <p className="mt-2 text-sm text-ink/70">
                  {p.items.length} étapes, prises en charge par notre équipe.
                </p>
              </header>

              <ol className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:mt-0">
                {p.items.map((e, k) => {
                  n += 1;
                  const wide = e.musulman || e.chretien;
                  return (
                    <li
                      key={e.titre}
                      style={{ transitionDelay: hidden ? "0ms" : `${150 + k * 120}ms` }}
                      className={`group relative flex flex-col rounded-2xl border border-cedre/15 bg-white p-5 card-shadow transition-[opacity,translate,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_40px_-16px_rgba(30,59,51,.35)] ${wide ? "sm:col-span-2" : ""} ${hidden ? "translate-y-4 opacity-0" : "opacity-100"}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cedre font-serif text-lg font-semibold text-white transition-colors duration-300 group-hover:bg-gold-btn [font-variant-numeric:lining-nums]">
                          {n}
                        </span>
                        <h3 className="text-lg font-semibold text-cedre">{e.titre}</h3>
                      </div>
                      <p className="mt-3 text-ink/80">{e.texte}</p>
                      {wide && (
                        <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                          <div className="rounded-xl bg-pierre-dark px-4 py-3">
                            <dt className="font-semibold text-cedre">Familles musulmanes</dt>
                            <dd className="mt-0.5 text-ink/80">{e.musulman}</dd>
                          </div>
                          <div className="rounded-xl bg-pierre-dark px-4 py-3">
                            <dt className="font-semibold text-cedre">Familles chrétiennes</dt>
                            <dd className="mt-0.5 text-ink/80">{e.chretien}</dd>
                          </div>
                        </dl>
                      )}
                    </li>
                  );
                })}
              </ol>
            </section>
          );
        })}
      </div>
    </div>
  );
}
