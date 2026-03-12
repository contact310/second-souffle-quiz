import { diagnosticMessages } from '../data/diagnosticMessages.js'
import { getScoreLevel } from '../data/scoreLevels.js'

export const MAX_SCORE = 108

export const getNormalizedScore = (rawScore) => {
  return Math.round((rawScore / MAX_SCORE) * 100)
}

// Tags that represent positive/neutral outcomes — no diagnostic message shown
const POSITIVE_TAGS = new Set([
  'volume_ok',
  'volume_limite',
  'intensite_ok',
  'plan_ok',
  'recuperation_ok',
  'fatigue_ok',
  'blessure_ok',
  'progression_ok',
  'nutrition_ok',
  'motivation_ok',
  'objectif_ok',
])

/**
 * Returns up to 4 diagnostic messages for the questions with the lowest scores.
 * Only includes tags that have a corresponding message in diagnosticMessages.
 *
 * @param {Array} answers - Array of { questionId, points, tag }
 * @param {number} normalizedScore
 * @returns {Array} Array of diagnostic message strings (max 4)
 */
export const getActiveDiagnostics = (answers, normalizedScore) => {
  // Filter to answers with negative tags that have a message
  const negativAnswers = answers.filter(answer => {
    if (POSITIVE_TAGS.has(answer.tag)) return false
    // Include progression_irreguliere only if score is below 75
    if (answer.tag === 'progression_irreguliere' && normalizedScore >= 75) return false
    return diagnosticMessages[answer.tag] !== undefined
  })

  // Sort by points ascending (worst answers first)
  const sorted = [...negativAnswers].sort((a, b) => a.points - b.points)

  // Take top 4 worst
  return sorted.slice(0, 4).map(answer => ({
    tag: answer.tag,
    message: diagnosticMessages[answer.tag]
  }))
}

export { getScoreLevel }
