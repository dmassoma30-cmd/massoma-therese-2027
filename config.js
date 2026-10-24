/* ==========================================================
   TOUS LES TEXTES DU SITE SONT ICI
   Modifiez simplement ce qui est entre guillemets "..."
   puis enregistrez le fichier. Ne touchez pas aux virgules
   ni aux accolades { } [ ].
   ========================================================== */

const SITE = {

  /* ---------- LES MARIÉS ---------- */
  titrePage: "Massoma & Thérèse — Invitation de mariage",
  prenom1: "Massoma",
  prenom2: "Thérèse",
  initiale1: "M",
  initiale2: "T",
  hashtag: "#MassomaEtTherese",

  /* ---------- DATE ET HEURE ----------
     Format de dateISO : AAAA-MM-JJTHH:MM:00+00:00
     (la Côte d'Ivoire est à l'heure UTC, donc +00:00)       */
  dateISO: "2027-02-14T11:00:00+00:00",
  dateTexte: "Dimanche 14 février 2027",
  dateCourte: "14 · 02 · 2027",

  /* ---------- ENVELOPPE ---------- */
  introTexte: "Vous êtes invités",
  boutonOuvrir: "Ouvrir notre invitation",
  carteMention: "Notre mariage",

  /* ---------- ACCUEIL ---------- */
  accueilIntertitre: "Nous nous marions",
  accueilPhrase:
    "Deux cœurs, une seule promesse. Nous avons la joie de vous inviter à partager avec nous le plus beau jour de notre vie.",
  compteTitre: "Rendez-vous dans",
  compteLibelles: ["Jours", "Heures", "Minutes", "Secondes"],

  /* ---------- NOTRE HISTOIRE ---------- */
  histoireIntertitre: "Notre histoire",
  histoireTitre: "Comment tout a commencé",
  histoire: [
    {
      date: "Le début",
      titre: "Notre rencontre",
      texte:
        "Notre première rencontre reste inoubliable, car depuis ce jour, j'ai su que tu serais l'élue de mon cœur, la mère de mes enfants et celle que j'attendais."
    },
    {
      date: "Les premiers pas",
      titre: "Notre premier rendez-vous",
      texte:
        "Quelques heures de discussion qui ont semblé durer quelques minutes. Ce jour-là, nous avons compris que quelque chose de beau venait de naître."
    },
    {
      date: "La promesse",
      titre: "La demande en mariage",
      texte:
        "Avec le cœur plein d'émotion, une question, un « oui » sincère, et le début de notre éternité à deux."
    }
  ],

  /* ---------- GALERIE ----------
     Remplacez les photos du dossier "photos" en gardant les
     mêmes noms (galerie-1.jpg à galerie-6.jpg).
     Pour n'avoir que 4 ou 5 photos, supprimez des lignes.   */
  galerieIntertitre: "Galerie",
  galerieTitre: "Nos plus beaux souvenirs",
  galerie: [
    { src: "galerie-1.jpg", alt: "Massoma et Thérèse en selfie" },
    { src: "galerie-2.jpg", alt: "Massoma et Thérèse côte à côte" },
    { src: "galerie-3.jpg", alt: "Massoma en tenue wax" },
    { src: "galerie-4.jpg", alt: "Massoma et Thérèse en tenues turquoise et violette" },
    { src: "galerie-5.jpg", alt: "Massoma et Thérèse devant la maison" },
    { src: "galerie-6.jpg", alt: "Massoma et Thérèse en tenues rouges" }
  ],

  /* ---------- LE PROGRAMME (horaires à modifier) ---------- */
  programmeIntertitre: "Le programme",
  programmeTitre: "Le déroulement de la journée",
  programme: [
    { heure: "09h30", titre: "Accueil des invités", texte: "Installation et retrouvailles en famille." },
    { heure: "11h00", titre: "Cérémonie", texte: "Échange des consentements et des vœux." },
    { heure: "13h00", titre: "Séance photos", texte: "Souvenirs avec la famille et les amis." },
    { heure: "14h30", titre: "Repas", texte: "Un moment de partage et de convivialité." },
    { heure: "17h00", titre: "Remerciements", texte: "Un mot de gratitude avant de nous quitter." }
  ],

  /* ---------- LE LIEU ---------- */
  lieuIntertitre: "Le lieu",
  lieuTitre: "Où nous retrouver",
  lieuNom: "Domicile de la famille",
  lieuAdresse: "Bouaké, quartier Belleville, non loin de la maternité",
  lieuVille: "Bouaké, Côte d'Ivoire",
  lieuMapsRecherche: "Belleville, Bouaké, Côte d'Ivoire",
  boutonItineraire: "Ouvrir l'itinéraire",

  /* ---------- TENUE (à modifier) ---------- */
  tenueIntertitre: "Tenue",
  tenueTitre: "Dress code",
  tenueTexte:
    "Nous vous invitons à porter des tons chauds et élégants : crème, terracotta et brun. Les tenues traditionnelles et les pagnes raffinés sont les bienvenus.",
  tenueCouleurs: [
    { nom: "Crème", hex: "#f3e6d0" },
    { nom: "Terracotta", hex: "#c0643a" },
    { nom: "Brun", hex: "#3b2218" }
  ],

  /* ---------- CONFIRMER MA PRÉSENCE ----------
     Pour activer le bouton, écrivez votre numéro WhatsApp avec
     l'indicatif, sans le + ni espaces. Exemple : "2250700000000"
     Laissez "" pour ne pas afficher de bouton.               */
  rsvpIntertitre: "Confirmer ma présence",
  rsvpTitre: "Votre présence nous est précieuse",
  rsvpTexte:
    "Merci de nous faire savoir si vous pourrez être des nôtres, afin que nous puissions tout préparer avec soin.",
  rsvpDateLimite: "31 janvier 2027",
  rsvpLibelleLimite: "Réponse souhaitée avant le",
  rsvpBouton: "Confirmer ma présence",
  rsvpWhatsapp: "",
  rsvpMessage: "Bonjour Massoma et Thérèse, je confirme ma présence à votre mariage le 14 février 2027.",
  rsvpSansBouton: "Merci de confirmer votre présence directement auprès des mariés.",

  /* ---------- PIED DE PAGE ---------- */
  merci: "Merci de faire partie de notre histoire",

  /* ---------- MUSIQUE ----------
     Déposez votre fichier mp3 dans le dossier "musique" et
     nommez-le musique.mp3 (ou changez le nom ci-dessous).   */
  musique: "musique.mp3"
};
