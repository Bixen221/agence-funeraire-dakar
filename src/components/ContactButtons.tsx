import { site, whatsappLink } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

const msg = "Bonjour, j'ai besoin d'une prise en charge funéraire.";

export function CallButton({ className = "" }: { className?: string }) {
  return (
    <a href={site.tel} className={`btn btn-call ${className}`}>
      <PhoneIcon /> Appeler
    </a>
  );
}

export function WhatsAppButton({ className = "", text = msg }: { className?: string; text?: string }) {
  return (
    <a href={whatsappLink(text)} target="_blank" rel="noopener noreferrer" className={`btn btn-wa ${className}`}>
      <WhatsAppIcon /> WhatsApp
    </a>
  );
}

/** Barre fixe en bas d'écran sur mobile ; boutons flottants sur grand écran. */
export function StickyContact() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cedre/20 bg-white/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md gap-3">
          <CallButton className="flex-1" />
          <WhatsAppButton className="flex-1" />
        </div>
        <p className="mt-1.5 text-center text-xs text-ink/80">Joignables 24 h/24 au {site.phoneDisplay}</p>
      </div>
      <div className="fixed right-6 bottom-6 z-40 hidden flex-col gap-3 md:flex">
        <a href={whatsappLink(msg)} target="_blank" rel="noopener noreferrer" aria-label="Écrire sur WhatsApp" className="grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-lg transition hover:scale-105 hover:bg-[#18663a]">
          <WhatsAppIcon className="h-7 w-7" />
        </a>
        <a href={site.tel} aria-label={`Appeler le ${site.phoneDisplay}`} className="grid h-14 w-14 place-items-center rounded-full bg-cedre text-white shadow-lg transition hover:scale-105 hover:bg-cedre-light">
          <PhoneIcon className="h-6 w-6" />
        </a>
      </div>
    </>
  );
}
