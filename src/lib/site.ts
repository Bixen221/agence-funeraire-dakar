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
  option?: string;
  miseEnAvant?: boolean;
};

const demarches = "Démarches administratives (certificat de décès, état civil, permis d'inhumer, autorisation de transport)";
const optionBus = "Bus pour les proches : +50\u202f000 FCFA par bus";

const basiqueMusulmane = [demarches, "Lavage mortuaire", "Corbillard vers le cimetière", "Prière mortuaire", "Inhumation au cimetière"];
const basiqueChretienne = [demarches, "Veillée de prière", "Préparation du corps", "Cercueil fourni", "Corbillard vers le cimetière", "Réservation du caveau"];

export const formules: Record<"musulmane" | "chretienne", Formule[]> = {
  musulmane: [
    { nom: "Basique", accroche: "L'essentiel, pris en charge avec soin.", inclus: basiqueMusulmane, prix: "100\u202f000 FCFA" },
    {
      nom: "Premium",
      accroche: "L'essentiel, avec une tombe ornée.",
      inclus: ["Tout le contenu de la formule Basique", "Ornement de la tombe"],
      option: optionBus,
      prix: "200\u202f000 FCFA",
      miseEnAvant: true,
    },
    {
      nom: "Spécial",
      accroche: "Tout est prévu, jusqu'à l'accueil des visiteurs.",
      inclus: ["Tout le contenu de la formule Premium", "Bâche et traiteur pour accueillir les visiteurs"],
      option: optionBus,
      prix: "350\u202f000 FCFA",
    },
  ],
  chretienne: [
    { nom: "Basique", accroche: "L'essentiel, pris en charge avec soin.", inclus: basiqueChretienne, prix: "500\u202f000 FCFA" },
    {
      nom: "Premium",
      accroche: "L'essentiel, avec un caveau orné.",
      inclus: ["Tout le contenu de la formule Basique", "Ornement du caveau"],
      option: optionBus,
      prix: "650\u202f000 FCFA",
      miseEnAvant: true,
    },
    {
      nom: "Spécial",
      accroche: "Tout est prévu, jusqu'à l'accueil des visiteurs.",
      inclus: ["Tout le contenu de la formule Premium", "Bâche et traiteur pour accueillir les visiteurs"],
      option: optionBus,
      prix: "1\u202f000\u202f000 FCFA",
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
    r: "Nos formules commencent à 100 000 FCFA pour les familles musulmanes et à 500 000 FCFA pour les familles chrétiennes. Avec les formules Premium et Spécial, vous pouvez ajouter des bus pour les proches, à 50\u202f000 FCFA par bus. Nous confirmons le prix avec vous dès votre appel, avant tout engagement.",
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
