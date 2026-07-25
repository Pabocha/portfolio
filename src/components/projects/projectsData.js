import ecom1 from "../../assets/project/ecom1.png";
import ecom2 from "../../assets/project/ecom2.png";
import ecom3 from "../../assets/project/ecom3.png";
import ecom4 from "../../assets/project/ecom4.png";
import ecom5 from "../../assets/project/ecom5.png";
import katra1 from "../../assets/project/katra1.png";
import katra2 from "../../assets/project/katra2.png";
import katra3 from "../../assets/project/katra3.png";
import katra4 from "../../assets/project/katra4.png";
import katra5 from "../../assets/project/katra5.png";
import katra6 from "../../assets/project/katra6.png";
import invest1 from "../../assets/project/invest1.png";
import invest2 from "../../assets/project/invest2.png";
import invest3 from "../../assets/project/invest3.png";
import invest4 from "../../assets/project/invest4.png";
import immo1 from "../../assets/project/immo1.png";
import immo2 from "../../assets/project/immo2.png";
import immo3 from "../../assets/project/immo3.png";
import brico1 from "../../assets/project/brico1.png";
import brico2 from "../../assets/project/brico2.png";
import brico4 from "../../assets/project/brico4.png";
import og1 from "../../assets/project/og1.png";
import og2 from "../../assets/project/og2.png";
import ng from "../../assets/project/ng.jpeg";
import placeholder from "../../assets/project/placeholder.svg";

export const projects = [
  {
    cover: ecom1,
    gallery: [ecom2, ecom3, ecom4, ecom5],
    tags: [
      { label: "Django REST", cls: "bg-blue-500/20 text-blue-400" },
      { label: "WebSockets", cls: "bg-violet-500/20 text-violet-400" },
      { label: "React", cls: "bg-cyan-500/20 text-cyan-400" },
      { label: "Zustand", cls: "bg-green-500/20 text-green-400" },
      { label: "Elasticsearch", cls: "bg-purple-500/20 text-purple-400" },
      { label: "Redis", cls: "bg-red-500/20 text-red-400" },
      { label: "PostgreSQL", cls: "bg-blue-500/20 text-blue-400" },
    ],
    title: "E-Commerce Platform",
    desc: "Marketplace full-stack avec paiement intégré, gestion des stocks en temps réel et tableau de bord admin.",
    details:
      "Plateforme pensée pour vendre des produits avec une expérience fluide, de la fiche article jusqu'au paiement et au suivi des commandes.",
    highlights: [
      "Paiement sécurisé avec Stripe",
      "Gestion des commandes et des stocks",
      "Interface admin pour piloter le catalogue",
      "Navigation rapide côté client",
    ],
    challenge:
      "Le point fort du projet est la cohérence entre le front, le paiement et la logique de stock pour éviter les erreurs de commande.",
    demo: "#",
    repo: "https://github.com/Pabocha/ecom_app_web",
  },


  {
    cover: ng,
    tags: [
      { label: "Flutter", cls: "bg-cyan-500/20 text-cyan-400" },
      { label: "GetX", cls: "bg-green-500/20 text-green-400" },
      { label: "Django REST", cls: "bg-blue-500/20 text-blue-400" },
      { label: "Redis", cls: "bg-red-500/20 text-red-400" },
      { label: "WebSockets", cls: "bg-violet-500/20 text-violet-400" },
      { label: "Elasticsearch", cls: "bg-purple-500/20 text-purple-400" },
      { label: "PostgreSQL", cls: "bg-blue-500/20 text-blue-400" },

    ],
    title: "E-Commerce Mobile",
    desc: "Application marketplace mobile permettant aux vendeurs de gérer leurs produits et aux clients de commander en quelques taps.",
    details:
      "Marketplace mobile multi-vendeurs avec catalogue enrichi, messagerie entre acheteurs et vendeurs, système de notation et paiement mobile money sécurisé. Chaque vendeur dispose d'un tableau de bord pour gérer ses produits, commandes et statistiques de vente.",
    highlights: [
      "Marketplace multi-vendeurs avec boutiques dédiées",
      "Messagerie et notifications en temps réel",
      "Paiement sécurisé via mobile money",
      "Tableau de bord vendeur avec suivi des ventes",
    ],
    challenge:
      "Créer une expérience marketplace fluide sur mobile, avec une gestion multi-vendeurs fiable même sur des connexions internet instables.",
    repo: "https://github.com/Pabocha/ecom_app",
  },


  {
    cover: ecom1,
    tags: [
      { label: "Flutter", cls: "bg-cyan-500/20 text-cyan-400" },
      { label: "Firebase", cls: "bg-green-500/20 text-green-400" },
      { label: "Orange Money", cls: "bg-orange-500/20 text-orange-400" },
      { label: "MTN MoMo", cls: "bg-yellow-500/20 text-yellow-400" },
      { label: "Google Maps API", cls: "bg-blue-500/20 text-blue-400" },
    ],
    title: "EatSafe — Application de restauration",
    desc: "Application de restauration au Cameroun avec paiements mobile et navigation en temps réel pour les livreurs.",
    details:
      "EatSafe est une application mobile permettant aux employés d'entreprises enregistrées de commander des repas et de suivre leur livraison en temps réel. Le système intègre les paiements mobiles Orange Money et MTN MoMo, ainsi que la navigation Google Maps pour une livraison fluide.",
    highlights: [
      "Paiement sécurisé via Orange Money et MTN MoMo",
      "Navigation Google Maps en temps réel pour les livreurs",
      "Commande de repas simple et rapide",
      "Notifications en direct sur le statut de la livraison",
    ],
    challenge:
      "L'intégration des paiements mobiles (Orange Money et MTN MoMo) tout en offrant une navigation fluide aux livreurs via Google Maps, dans un contexte de connectivité variable au Cameroun.",
    demo: "https://play.google.com/store/apps/details?id=com.foodindustry.eatsafe&pli=1",
  },
 

  {
    cover: katra1,
    gallery: [katra2, katra3, katra4, katra5, katra6],
    tags: [
      { label: "WordPress", cls: "bg-blue-500/20 text-blue-400" },
      { label: "Elementor", cls: "bg-violet-500/20 text-violet-400" },
      { label: "QMFORT", cls: "bg-green-500/20 text-green-400" },
      { label: "Monetbil", cls: "bg-cyan-500/20 text-cyan-400" },
    ],
    title: "Site d'hébergement d'appartements",
    desc: "Plateforme de location d'appartements avec recherche avancée, réservations en ligne et gestion des annonces.",
    details:
      "Site conçu pour faciliter la location d'appartements, avec une interface utilisateur intuitive et des fonctionnalités de recherche avancées pour trouver rapidement le logement idéal. Les utilisateurs peuvent réserver en ligne et les propriétaires peuvent gérer leurs annonces facilement.",
    highlights: [
      "Recherche avancée avec filtres multiples",
      "Réservations en ligne sécurisées",
      "Interface de gestion des annonces pour les propriétaires",
      "Design responsive pour une expérience optimale sur tous les appareils",
    ],
    challenge:
      "Le défi principal était de concevoir une interface intuitive tout en intégrant un système de réservation et de paiement fiable.",
    demo: "https://katralodging.net/ours-apartments/",
  },


  {
    cover: invest1,
    gallery: [invest2, invest3, invest4],
    tags: [
      { label: "WordPress", cls: "bg-blue-500/20 text-blue-400" },
      { label: "Astra", cls: "bg-orange-500/20 text-orange-400" },
      { label: "Gutenberg", cls: "bg-cyan-500/20 text-cyan-400" },
    ],
    title: "Site vitrine d'investissement",
    desc: "Site présentant ce que fait la société, avec une section de blog pour partager des analyses et des insights sur les tendances du marché.",
    details:
      "Le site a pour objectif de présenter aux investisseurs les opportunités d'investissement en République centrafricaine, ainsi que l'accompagnement proposé par la société pour les aider à s'implanter dans le pays.",
    highlights: [
      "Site vitrine clair et professionnel",
      "Section blog pour partager des insights",
      "Design responsive pour une expérience optimale sur tous les appareils",
      "Mise en avant des opportunités d'investissement et de l'accompagnement offert",
    ],
    challenge:
      "Le défi principal était de créer un site qui inspire confiance aux investisseurs potentiels tout en mettant en avant les opportunités d'investissement et l'accompagnement offert par la société.",
    demo: "https://katrainvest.com/about/",
  },


  {
    cover: immo1,
    gallery: [immo2, immo3],
    tags: [
      { label: "WordPress", cls: "bg-blue-500/20 text-blue-400" },
      { label: "PHP", cls: "bg-violet-500/20 text-violet-400" },
    ],
    title: "CoopérativeCP",
    desc: "Plateforme de coopérative immobilière offrant l'acquisition de logements via entraide et investissement au Sénégal.",
    details:
      "Coopérative Construisons Ensemble — une plateforme qui aide la population à acquérir un chez-soi grâce à un système d'entraide mutualisé (LIKILEMBA), des opportunités d'investissement immobilier et la vente de matériaux de construction à prix accessibles.",
    highlights: [
      "Système d'entraide LIKILEMBA entre membres",
      "Investissement immobilier avec dividendes",
      "Vente de matériaux de construction",
      "Inscription et gestion de compte en ligne",
    ],
    challenge:
      "Le défi principal était de concevoir un système d'entraide fiable et transparent tout en offrant une expérience utilisateur simple pour des membres de tous niveaux.",
    demo: "https://pablogenius.pythonanywhere.com/",
  },


  {
    cover: brico1,
    gallery: [brico2, brico4],
    tags: [
      { label: "WordPress", cls: "bg-blue-500/20 text-blue-400" },
      { label: "PHP", cls: "bg-violet-500/20 text-violet-400" },
    ],
    title: "Bricolibe",
    desc: "Plateforme de mise en relation entre clients et artisans au Sénégal.",
    details:
      "Bricolibe permet de trouver des artisans qualifiés près de chez soi au Sénégal. La plateforme facilite la recherche par spécialité, la mise en relation rapide et le suivi des travaux pour des projets de bricolage et de construction.",
    highlights: [
      "Recherche d'artisans par spécialité et localisation",
      "Mise en relation rapide entre clients et artisans",
      "Interface simple et accessible",
      "Dédié au marché sénégalais",
    ],
    challenge:
      "Le défi était de créer un pont fiable entre les clients et les artisans au Sénégal, dans un marché où la confiance et la traçabilité sont essentielles.",
    demo: "https://bricolibe.com/",
  },


  {
    cover: og1,
    gallery: [og2],
    tags: [
      { label: "WordPress", cls: "bg-blue-500/20 text-blue-400" },
      { label: "PHP", cls: "bg-violet-500/20 text-violet-400" },
    ],
    title: "Solutions Épileptiques",
    desc: "Site vitrine et collecte de fonds pour une fondation médicale luttant contre l'épilepsie sur l'île d'Idjwi.",
    details:
      "Fondation créée par le Dr. Mukendi en 2022, dédiée à lutter contre l'exclusion des patients épileptiques sur l'île d'Idjwi (RDC) par le soin médical et la réintégration sociale. Le site inclut un système de dons en ligne, un blog d'actualités et des comptes donateurs.",
    highlights: [
      "Système de collecte de fonds en ligne",
      "Blog d'actualités et rapports d'impact",
      "Comptes donateurs avec suivi",
      "Créé pour Dave Procode",
    ],
    challenge:
      "Le défi principal était de concevoir un site qui inspire confiance et transparence pour les donateurs tout en mettant en avant l'impact concret de la fondation sur le terrain.",
    demo: "https://solutionsepileptiques.org/",
  },

  {
    cover: placeholder,
    tags: [
      { label: "Django REST", cls: "bg-blue-500/20 text-blue-400" },
      { label: "PostgreSQL", cls: "bg-blue-500/20 text-blue-400" },
      { label: "React", cls: "bg-cyan-500/20 text-cyan-400" },
      { label: "Docker", cls: "bg-violet-500/20 text-violet-400" },
    ],
    title: "Gestion Scolaire Multi-Tenant",
    desc: "Application de gestion scolaire multi-tenant avec Django REST Framework, schémas partagés et base PostgreSQL unique.",
    details:
      "Plateforme de gestion scolaire permettant à plusieurs écoles de partager une même base de données PostgreSQL grâce à une architecture multi-tenant avec des schémas partagés. Chaque école dispose de son propre espace avec une API RESTful construite avec Django REST Framework.",
    highlights: [
      "Architecture multi-tenant avec schémas partagés PostgreSQL",
      "API RESTful avec Django REST Framework",
      "Base de données unique pour toutes les écoles",
      "Interface d'administration par école",
    ],
    challenge:
      "Concevoir une architecture multi-tenant fiable avec des schémas partagés dans une seule base de données PostgreSQL, tout en garantissant l'isolation des données entre écoles et des performances optimales.",
    demo: "#",
  },
];
