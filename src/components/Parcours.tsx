"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Les 5 étapes du parcours. Au défilement, la ligne dorée se trace d'une étape à l'autre
 * et chaque étape apparaît à son tour. Sans JavaScript ou avec « réduire les animations »,
 * tout est affiché immédiatement.
 */
export function Parcours({ etapes }: { etapes: string[] }) {
  const ref = useRef<HTMLOListElement>(null);
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
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden = armed && !shown;

  return (
    <ol ref={ref} className="relative mt-10 grid gap-6 md:grid-cols-5 md:gap-4">
      {/* Ligne qui relie les étapes : verticale sur mobile, horizontale sur ordinateur */}
      <span aria-hidden="true" className="absolute top-2 bottom-2 left-[21px] w-0.5 bg-gold/25 md:top-[21px] md:right-[18%] md:bottom-auto md:left-[22px] md:h-0.5 md:w-auto" />
      <span
        aria-hidden="true"
        className={`absolute top-2 bottom-2 left-[21px] w-0.5 origin-top bg-gold transition-transform duration-[1600ms] ease-out md:top-[21px] md:right-[18%] md:bottom-auto md:left-[22px] md:h-0.5 md:w-auto md:origin-left ${hidden ? "scale-y-0 md:scale-x-0 md:scale-y-100" : "scale-100"}`}
      />
      {etapes.map((p, i) => (
        <li
          key={p}
          style={{ transitionDelay: `${i * 280}ms` }}
          className={`group relative flex items-start gap-4 transition-all duration-700 ease-out md:flex-col md:gap-3 ${hidden ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"}`}
        >
          <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-gold bg-pierre-dark font-serif text-xl font-semibold text-cedre transition-colors duration-300 group-hover:border-gold-btn group-hover:bg-gold-btn group-hover:text-white">
            {i + 1}
          </span>
          <span className="pt-2 font-medium text-cedre transition-colors duration-300 group-hover:text-bronze md:pt-0">{p}</span>
        </li>
      ))}
    </ol>
  );
}
