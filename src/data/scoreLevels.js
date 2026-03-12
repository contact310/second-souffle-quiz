export const scoreLevels = [
  {
    maxScore: 39,
    level: "critique",
    color: "#6a00ff",
    emoji: "🔴",
    title: "Ton plan actuel te freine activement",
    subtitle: "Plusieurs éléments fondamentaux sont absents ou mal calibrés. C'est ce qui explique la stagnation — ou pire, les blessures."
  },
  {
    maxScore: 59,
    level: "fragile",
    color: "#F4804A",
    emoji: "🟠",
    title: "Des failles importantes ralentissent ta progression",
    subtitle: "Tu fais des efforts réels, mais des erreurs structurelles t'empêchent d'en voir les résultats."
  },
  {
    maxScore: 74,
    level: "moyen",
    color: "#F4C842",
    emoji: "🟡",
    title: "Tu fais des choses bien, mais il manque des pièces clés",
    subtitle: "Ta base est correcte. Quelques ajustements précis suffiraient à changer vraiment les choses."
  },
  {
    maxScore: 89,
    level: "solide",
    color: "#82C45A",
    emoji: "🟢",
    title: "Bonne base — des ajustements ciblés feraient la différence",
    subtitle: "Tu as compris l'essentiel. Mais il reste des marges de progression que tu n'exploites probablement pas."
  },
  {
    maxScore: 100,
    level: "optimise",
    color: "#2DC653",
    emoji: "💚",
    title: "Tu maîtrises les fondamentaux",
    subtitle: "Est-ce que ça se voit sur tes chronos ? Si non, le problème vient peut-être d'ailleurs — et c'est là qu'on peut t'aider."
  }
]

export const getScoreLevel = (score) => {
  return scoreLevels.find(level => score <= level.maxScore) || scoreLevels[scoreLevels.length - 1]
}
