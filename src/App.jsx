import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import HomePage from './components/HomePage.jsx'
import QuizView from './components/QuizView.jsx'
import LeadForm from './components/LeadForm.jsx'
import ResultsView from './components/ResultsView.jsx'
import { getNormalizedScore } from './utils/scoring.js'

export default function App() {
  const [currentView, setCurrentView] = useState('home') // 'home' | 'quiz' | 'lead' | 'results'
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([]) // [{ questionId, points, tag, label }]
  const [totalScore, setTotalScore] = useState(0) // Raw score — normalize before display

  const handleStart = () => {
    setCurrentView('quiz')
    setCurrentQuestion(0)
    setAnswers([])
    setTotalScore(0)
  }

  const handleAnswer = (questionId, option) => {
    const newAnswers = [...answers]
    const existingIndex = newAnswers.findIndex(a => a.questionId === questionId)
    const answer = { questionId, points: option.points, tag: option.tag, label: option.label }

    if (existingIndex >= 0) {
      newAnswers[existingIndex] = answer
    } else {
      newAnswers.push(answer)
    }

    setAnswers(newAnswers)
    const newTotal = newAnswers.reduce((sum, a) => sum + a.points, 0)
    setTotalScore(newTotal)
  }

  const handleNext = () => {
    setCurrentQuestion(prev => prev + 1)
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const handleFinish = () => {
    setCurrentView('lead')
  }

  const handleLeadSubmit = () => {
    setCurrentView('results')
  }

  const handleRestart = () => {
    setCurrentView('home')
    setCurrentQuestion(0)
    setAnswers([])
    setTotalScore(0)
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      {currentView === 'home' && (
        <HomePage onStart={handleStart} />
      )}
      {currentView === 'quiz' && (
        <QuizView
          currentQuestion={currentQuestion}
          answers={answers}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onBack={handleBack}
          onFinish={handleFinish}
        />
      )}
      {currentView === 'lead' && (
        <LeadForm onSubmit={handleLeadSubmit} />
      )}
      {currentView === 'results' && (
        <ResultsView
          totalScore={totalScore}
          normalizedScore={getNormalizedScore(totalScore)}
          answers={answers}
          onRestart={handleRestart}
        />
      )}
      <Analytics />
    </div>
  )
}
