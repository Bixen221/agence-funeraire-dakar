import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { MailIcon, PhoneIcon, PinIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-cedre pb-32 text-white/80 md:pb-0">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Prise en charge complète du défunt, de l&apos;hôpital à l&apos;inhumation. Familles musulmanes et chrétiennes, au Sénégal et à l&apos;étranger.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-lg text-gold">Pages</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {[...nav, { href: "/demande", label: "Demande de prise en charge" }].map((n) => (
              <li key={n.href}><Link href={n.href} className="transition-colors hover:text-gold">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-lg text-gold">Nous joindre, 24 h/24</h2>
          <ul className="mt-3 space-y-3 text-sm">
            <li><a href={site.tel} className="flex items-center gap-2 transition-colors hover:text-gold"><PhoneIcon className="h-4 w-4" /> {site.phoneDisplay} (tél. et WhatsApp)</a></li>
            <li><a href={`mailto:${site.email}`} className="flex items-center gap-2 break-all transition-colors hover:text-gold"><MailIcon className="h-4 w-4 shrink-0" /> {site.email}</a></li>
            <li className="flex items-center gap-2"><PinIcon className="h-4 w-4" /> {site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-site py-5 text-xs text-white/50">© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
