import Image from "next/image";
import Link from "next/link";

// Logo final (colombe). Fichiers sources : /mnt/project-files/logo/final/
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center transition-opacity hover:opacity-75" aria-label="Agence Funéraire de Dakar, accueil">
      <Image
        src={light ? "/logo-blanc.svg" : "/logo.svg"}
        alt="Agence Funéraire de Dakar"
        width={304}
        height={72}
        className="h-11 w-auto md:h-12"
        priority={!light}
      />
    </Link>
  );
}
