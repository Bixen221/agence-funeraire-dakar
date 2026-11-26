export const site = {
  name: "Agence Funéraire de Dakar",
  shortName: "AFD",
  phoneDisplay: "77 796 86 57",
  phoneIntl: "+221 77 796 86 57",
  tel: "tel:+221777968657",
  whatsappNumber: "221777968657",
  email: "chararibou66@gmail.com",
  address: "Cité Damel, Dakar",
  zone: "Dakar, tout le Sénégal et accompagnement des familles à l'étranger",
  url: "https://agence-funeraire-dakar.vercel.app",
};

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const nav = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Formules" },
  { href: "/demarches", label: "Démarches" },
  { href: "/diaspora", label: "Diaspora" },
  { href: "/contact", label: "Contact" },
];

export type Formule = {
  nom: "Basique" | "Premium" | "Spécial";
  accroche: string;
  inclus: string[];
  prix: string;
  miseEnAvant?: boolean;
};

const basique = [
  "Démarches administratives (certificat de décès, état civil, permis d'inhumer, autorisation de transport)",
  "Lavage mortuaire",
  "Corbillard vers le cimetière",
];

export const formules: Record<"musulmane" | "chretienne", Formule[]> = {
  musulmane: [
    { nom: "Basique", accroche: "L'essentiel, pris en charge avec soin.", inclus: basique, prix: "Sur devis" },
    {
      nom: "Premium",
      accroche: "Une organisation complète, sans souci pour la famille.",
      inclus: [
        "Tout le contenu de la formule Basique",
        "Conservation à la morgue",
        "Organisation de la prière mortuaire",
        "Réservation de la parcelle au cimetière",
      ],
      prix: "Sur devis",
      miseEnAvant: true,
    },
    {
      nom: "Spécial",
      accroche: "Un accompagnement dédié, du premier appel au dernier hommage.",
      inclus: [
        "Tout le contenu de la formule Premium",
        "Ornement de la tombe",
        "Coordination complète pour la famille à l'étranger",
        "Un interlocuteur dédié tout au long de la prise en charge",
      ],
      prix: "Sur devis",
    },
  ],
  chretienne: [
    { nom: "Basique", accroche: "L'essentiel, pris en charge avec soin.", inclus: basique, prix: "Sur devis" },
    {
      nom: "Premium",
      accroche: "Une organisation complète, sans souci pour la famille.",
      inclus: [
        "Tout le contenu de la formule Basique",
        "Conservation à la morgue",
        "Organisation de la prière ou de la veillée de prière",
        "Réservation de la parcelle au cimetière",
        "Cercueil standard",
      ],
      prix: "Sur devis",
      miseEnAvant: true,
    },
    {
      nom: "Spécial",
      accroche: "Un accompagnement dédié, du premier appel au dernier hommage.",
      inclus: [
        "Tout le contenu de la formule Premium",
        "Cercueil haut de gamme",
        "Ornement de la tombe",
        "Coordination complète pour la famille à l'étranger",
        "Un interlocuteur dédié tout au long de la prise en charge",
      ],
      prix: "Sur devis",
    },
  ],
};

export type Etape = {
  titre: string;
  texte: string;
  musulman?: string;
  chretien?: string;
};

export const etapes: { phase: string; items: Etape[] }[] = [
  {
    phase: "Les premières heures",
    items: [
      {
        titre: "Nous appeler",
        texte:
          "Dès le décès, appelez-nous ou écrivez sur WhatsApp, de jour comme de nuit. Nous vous disons quoi faire et nous nous déplaçons.",
      },
      {
        titre: "Certificat de décès",
        texte:
          "Il est établi par le médecin de l'hôpital ou, pour un décès à domicile, par un médecin appelé sur place. Nous nous en occupons avec vous.",
      },
      {
        titre: "Conservation du corps",
        texte: "Si nécessaire, nous organisons le transfert et la conservation à la morgue en attendant l'inhumation.",
      },
    ],
  },
  {
    phase: "Les démarches administratives",
    items: [
      {
        titre: "Déclaration à l'état civil",
        texte: "La déclaration du décès est faite au centre d'état civil compétent. Nous préparons et déposons le dossier.",
      },
      {
        titre: "Permis d'inhumer",
        texte: "Il autorise l'inhumation. Nous l'obtenons auprès des services concernés.",
      },
      {
        titre: "Autorisation de transport du corps",
        texte: "Elle est nécessaire pour transporter le défunt, à Dakar comme vers une autre région. Nous la demandons pour vous.",
      },
    ],
  },
  {
    phase: "La préparation et le recueillement",
    items: [
      {
        titre: "Lavage mortuaire",
        texte: "Il est réalisé dans le respect des rites de la famille.",
      },
      {
        titre: "Prière",
        texte: "Nous organisons le temps de prière selon la tradition de la famille.",
        musulman: "Prière mortuaire",
        chretien: "Prière ou veillée de prière",
      },
      {
        titre: "Cercueil",
        texte: "Pour les familles chrétiennes, nous vous aidons à choisir et à acheter le cercueil.",
        musulman: "Non concerné",
        chretien: "Choix et achat du cercueil",
      },
    ],
  },
  {
    phase: "L'inhumation",
    items: [
      {
        titre: "Date de l'enterrement",
        texte: "Nous fixons la date avec la famille et les autorités du cimetière.",
      },
      {
        titre: "Parcelle au cimetière",
        texte: "Nous réservons la parcelle au cimetière choisi.",
      },
      {
        titre: "Corbillard vers le cimetière",
        texte: "Le défunt est transporté dignement jusqu'au cimetière.",
      },
      {
        titre: "Ornement de la tombe",
        texte: "Après l'inhumation, nous pouvons prendre en charge l'ornement de la tombe.",
      },
    ],
  },
];

export const faq = [
  {
    q: "Êtes-vous joignables la nuit et le week-end ?",
    r: "Oui. Nous répondons 24 h/24 et 7 j/7, par téléphone et sur WhatsApp. Nous visons une réponse en moins de 15 minutes.",
  },
  {
    q: "Accompagnez-vous les familles musulmanes et chrétiennes ?",
    r: "Oui. Nous respectons les rites de chaque famille, avec des formules adaptées à chaque communauté.",
  },
  {
    q: "Combien coûte une prise en charge ?",
    r: "Chaque situation est différente. Nous établissons un devis clair et gratuit dès votre appel, avant tout engagement.",
  },
  {
    q: "Je vis à l'étranger. Pouvez-vous tout gérer pour ma famille ?",
    r: "Oui. Nous coordonnons toute la prise en charge sur place et vous tenons informé par WhatsApp, en tenant compte du décalage horaire.",
  },
  {
    q: "Intervenez-vous hors de Dakar ?",
    r: "Oui. Nous intervenons à Dakar et dans les régions du Sénégal. Appelez-nous pour en parler.",
  },
  {
    q: "Quels documents dois-je préparer ?",
    r: "La pièce d'identité du défunt et, si possible, celle du déclarant. Nous vous guidons pour le reste.",
  },
];
