"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { MailIcon, WhatsAppIcon } from "./Icons";

export function DemandeForm() {
  const params = useSearchParams();
  const [error, setError] = useState("");

  const communauteInit = params.get("communaute") === "chretienne" ? "Chrétienne" : params.get("communaute") === "musulmane" ? "Musulmane" : "";
  const formuleInit = params.get("formule") ?? "";
  const etranger = params.get("origine") === "etranger";

  function buildMessage(form: HTMLFormElement) {
    const d = new FormData(form);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    if (!get("nom") || !get("telephone")) {
      setError("Merci d'indiquer au moins votre nom et votre numéro de téléphone.");
      return null;
    }
    setError("");
    const lignes = [
      "Demande de prise en charge",
      `Nom : ${get("nom")}`,
      `Téléphone : ${get("telephone")}`,
      get("pays") && `Lieu du demandeur : ${get("pays")}`,
      get("lieu") && `Où se trouve le défunt : ${get("lieu")}`,
      get("communaute") && `Communauté : ${get("communaute")}`,
      get("formule") && `Formule souhaitée : ${get("formule")}`,
      get("message") && `Message : ${get("message")}`,
    ].filter(Boolean);
    return lignes.join("\n");
  }

  function send(via: "whatsapp" | "email", e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form!;
    const msg = buildMessage(form);
    if (!msg) return;
    if (via === "whatsapp") window.open(whatsappLink(msg), "_blank", "noopener");
    else window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Demande de prise en charge")}&body=${encodeURIComponent(msg)}`;
  }

  return (
    <form className="mx-auto max-w-2xl space-y-5 rounded-2xl border border-cedre/10 bg-white p-5 md:p-8" onSubmit={(e) => e.preventDefault()} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block"><span className="mb-1.5 block text-sm font-medium text-cedre">Votre nom *</span>
          <input name="nom" required autoComplete="name" className="field" /></label>
        <label className="block"><span className="mb-1.5 block text-sm font-medium text-cedre">Votre téléphone ou WhatsApp *</span>
          <input name="telephone" required type="tel" inputMode="tel" autoComplete="tel" placeholder="77 000 00 00" className="field" /></label>
      </div>
      <label className="block"><span className="mb-1.5 block text-sm font-medium text-cedre">Où êtes-vous ?</span>
        <input name="pays" defaultValue={etranger ? "À l'étranger : " : ""} placeholder="Dakar, Thiès, Paris…" className="field" /></label>
      <label className="block"><span className="mb-1.5 block text-sm font-medium text-cedre">Où se trouve le défunt ?</span>
        <select name="lieu" className="field" defaultValue="">
          <option value="">Choisir</option>
          <option>À l&apos;hôpital</option>
          <option>Au domicile</option>
          <option>À la morgue</option>
          <option>Autre</option>
        </select></label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block"><span className="mb-1.5 block text-sm font-medium text-cedre">Communauté</span>
          <select name="communaute" className="field" defaultValue={communauteInit}>
            <option value="">Choisir</option>
            <option>Musulmane</option>
            <option>Chrétienne</option>
          </select></label>
        <label className="block"><span className="mb-1.5 block text-sm font-medium text-cedre">Formule souhaitée</span>
          <select name="formule" className="field" defaultValue={formuleInit}>
            <option value="">Je ne sais pas encore</option>
            <option>Basique</option>
            <option>Premium</option>
            <option>Spécial</option>
          </select></label>
      </div>
      <label className="block"><span className="mb-1.5 block text-sm font-medium text-cedre">Message</span>
        <textarea name="message" rows={4} className="field" placeholder="Toute information utile pour vous aider" /></label>
      {error && <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">{error}</p>}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={(e) => send("whatsapp", e)} className="btn btn-wa flex-1"><WhatsAppIcon /> Envoyer par WhatsApp</button>
        <button type="button" onClick={(e) => send("email", e)} className="btn btn-call flex-1"><MailIcon /> Envoyer par e-mail</button>
      </div>
      <p className="text-xs text-ink/60">Vos informations servent uniquement à vous recontacter. Elles ne sont pas enregistrées sur ce site.</p>
    </form>
  );
}
