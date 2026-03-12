export const questions = [
  {
    id: 1,
    text: "Combien de fois par semaine cours-tu en ce moment ?",
    tag_context: "volume",
    options: [
      { label: "1 fois ou moins", points: 4, tag: "volume_faible" },
      { label: "2 fois par semaine", points: 8, tag: "volume_limite" },
      { label: "3 fois par semaine", points: 12, tag: "volume_ok" },
      { label: "4 fois ou plus", points: 10, tag: "volume_risque" }
    ]
  },
  {
    id: 2,
    text: "Comment tu décrirais tes sorties en termes d'intensité ?",
    tag_context: "intensite",
    options: [
      { label: "Je cours toujours à fond ou presque", points: 2, tag: "intensite_mal_repartie" },
      { label: "Je fais surtout du footing lent", points: 8, tag: "intensite_mal_repartie" },
      { label: "Je mélange footings lents et séances rapides", points: 15, tag: "intensite_ok" },
      { label: "J'ai un plan structuré avec EF, seuil et fractionné", points: 15, tag: "intensite_ok" }
    ]
  },
  {
    id: 3,
    text: "Comment tu organises tes semaines d'entraînement ?",
    tag_context: "planification",
    options: [
      { label: "Je cours quand j'ai le temps, sans plan", points: 2, tag: "pas_de_plan" },
      { label: "J'ai un plan approximatif dans la tête", points: 5, tag: "pas_de_plan" },
      { label: "Je suis un plan trouvé sur internet", points: 8, tag: "plan_generique" },
      { label: "J'ai un plan personnalisé adapté à mon niveau et objectif", points: 12, tag: "plan_ok" }
    ]
  },
  {
    id: 4,
    text: "Comment tu gères tes jours de repos ?",
    tag_context: "recuperation",
    options: [
      { label: "Je n'en fais pas vraiment, je cours presque tous les jours", points: 2, tag: "recuperation_insuffisante" },
      { label: "Je récupère quand je me sens vraiment fatigué", points: 6, tag: "recuperation_insuffisante" },
      { label: "J'ai 1 à 2 jours de repos planifiés chaque semaine", points: 12, tag: "recuperation_ok" },
      { label: "Je fais des semaines de décharge régulières en plus des repos", points: 12, tag: "recuperation_ok" }
    ]
  },
  {
    id: 5,
    text: "Comment tu évalues ta récupération entre tes séances ?",
    tag_context: "fatigue",
    options: [
      { label: "Je me sens souvent épuisé avant même de commencer", points: 2, tag: "fatigue_chronique" },
      { label: "Je suis souvent fatigué mais je m'en accommode", points: 5, tag: "fatigue_chronique" },
      { label: "Je récupère bien la plupart du temps", points: 8, tag: "fatigue_ok" },
      { label: "Je me sens frais et motivé avant chaque séance", points: 10, tag: "fatigue_ok" }
    ]
  },
  {
    id: 6,
    text: "As-tu eu des blessures liées à la course ces 12 derniers mois ?",
    tag_context: "blessures",
    options: [
      { label: "Oui, plusieurs (2 ou plus)", points: 2, tag: "blessure_recurrente" },
      { label: "Oui, une blessure significative", points: 6, tag: "blessure_isolee" },
      { label: "Une petite gêne passagère seulement", points: 10, tag: "blessure_ok" },
      { label: "Aucune blessure", points: 12, tag: "blessure_ok" }
    ]
  },
  {
    id: 7,
    text: "Est-ce que tu progresses vers ton objectif en ce moment ?",
    tag_context: "progression",
    options: [
      { label: "Non, je stagne depuis plusieurs mois", points: 2, tag: "stagnation" },
      { label: "Je progresse très lentement", points: 6, tag: "progression_lente" },
      { label: "Je progresse mais pas régulièrement", points: 9, tag: "progression_irreguliere" },
      { label: "Oui, je sens une vraie progression constante", points: 12, tag: "progression_ok" }
    ]
  },
  {
    id: 8,
    text: "Comment tu gères ta nutrition autour de tes entraînements ?",
    tag_context: "nutrition",
    options: [
      { label: "Je ne fais pas du tout attention à ça", points: 2, tag: "nutrition_negligee" },
      { label: "Je mange normalement sans y penser", points: 4, tag: "nutrition_negligee" },
      { label: "Je fais attention à manger correctement avant et après", points: 6, tag: "nutrition_ok" },
      { label: "J'ai une stratégie nutritionnelle adaptée à mon entraînement", points: 8, tag: "nutrition_ok" }
    ]
  },
  {
    id: 9,
    text: "Comment tu te sens dans ta pratique de la course à pied en ce moment ?",
    tag_context: "motivation",
    options: [
      { label: "Ça me frustre — je mets les efforts mais les résultats ne suivent pas", points: 2, tag: "frustration_active" },
      { label: "Je commence à perdre confiance, j'ai envie d'arrêter", points: 1, tag: "decouragement" },
      { label: "C'est mitigé — de bons moments, mais beaucoup de doutes", points: 5, tag: "motivation_fragile" },
      { label: "Je suis stable, mais il me manque quelque chose pour vraiment décoller", points: 7, tag: "motivation_plateau" },
      { label: "Je suis motivé et j'y prends du plaisir", points: 8, tag: "motivation_ok" }
    ]
  },
  {
    id: 10,
    text: "As-tu un objectif de course précis avec une date ?",
    tag_context: "objectif",
    options: [
      { label: "Non, je cours juste pour courir", points: 3, tag: "objectif_flou" },
      { label: "J'ai un objectif vague (courir un semi un jour...)", points: 5, tag: "objectif_flou" },
      { label: "Oui, j'ai une course et une date précise", points: 7, tag: "objectif_ok" }
    ]
  }
]
