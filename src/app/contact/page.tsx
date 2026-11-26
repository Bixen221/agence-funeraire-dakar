import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CallButton, WhatsAppButton } from "@/components/ContactButtons";
import { MailIcon, PhoneIcon, PinIcon, GlobeIcon } from "@/components/Icons";
import { faq, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact et questions fréquentes",
  description: "Contactez l'Agence Funéraire de Dakar 24 h/24 au 77 796 86 57. Cité Damel, Dakar. Intervention dans tout le Sénégal.",
};

export default function Contact() {
  const infos = [
    { icon: PhoneIcon, label: "Téléphone et WhatsApp", value: `${site.phoneDisplay} (depuis l'étranger : ${site.phoneIntl})`, href: site.tel },
    { icon: MailIcon, label: "E-mail", value: site.email, href: `mailto:${site.email}` },
    { icon: PinIcon, label: "Adresse", value: site.address },
    { icon: GlobeIcon, label: "Zone couverte", value: site.zone },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="Nous sommes joignables à toute heure">
        Un membre de l&apos;équipe vous répond 24 h/24 et 7 j/7.
      </PageHero>
      <section className="container-site grid gap-8 py-12 md:grid-cols-2 md:py-20">
        <ul className="space-y-4">
          {infos.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="flex gap-4 rounded-2xl border border-cedre/10 bg-white p-5">
              <Icon className="h-6 w-6 shrink-0 text-bronze" />
              <div className="min-w-0">
                <p className="text-sm text-ink/60">{label}</p>
                {href ? <a href={href} className="font-medium break-words text-cedre underline-offset-4 hover:underline">{value}</a> : <p className="font-medium text-cedre">{value}</p>}
              </div>
            </li>
          ))}
        </ul>
        <div className="rounded-2xl bg-cedre p-6 text-white md:p-8">
          <h2 className="font-serif text-3xl font-semibold">Besoin d&apos;aide maintenant ?</h2>
          <p className="mt-2 text-white/80">Appelez-nous ou écrivez-nous. Nous vous répondons en moins de 15 minutes.</p>
          <div className="mt-6 flex flex-col gap-3"><CallButton className="!bg-gold !text-cedre" /><WhatsAppButton /></div>
        </div>
      </section>
      <section id="faq" className="container-site scroll-mt-24 pb-16 md:pb-24">
        <h2 className="h2">Questions fréquentes</h2>
        <div className="mt-8 divide-y divide-cedre/10 rounded-2xl border border-cedre/10 bg-white">
          {faq.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-cedre">
                {f.q}<span className="text-2xl text-bronze transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-ink/75">{f.r}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
