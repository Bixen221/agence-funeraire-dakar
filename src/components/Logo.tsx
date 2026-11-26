import Image from "next/image";
import Link from "next/link";

// Logo provisoire : remplacer /public/logo.svg par le logo final, sans toucher au code.
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Agence Funéraire de Dakar, accueil">
      <Image src="/logo.svg" alt="" width={40} height={40} className="h-10 w-10 shrink-0" priority />
      <span className={`font-serif leading-tight ${light ? "text-white" : "text-cedre"}`}>
        <span className="block whitespace-nowrap text-[0.62rem] uppercase tracking-[0.16em] text-bronze">Agence Funéraire</span>
        <span className="block text-xl font-semibold">de Dakar</span>
      </span>
    </Link>
  );
}
