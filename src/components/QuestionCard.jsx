import { useState, useEffect } from 'react'
import AnswerOption from './AnswerOption.jsx'

export default function QuestionCard({ question, selectedLabel, onSelect }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const timer = setTimeout(() => setVisible(true), 20)
    return () => clearTimeout(timer)
  }, [question.id])

  return (
    <div
      className={`flex flex-col gap-5 transition-all duration-300 ease-out
        ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
      `}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
        {question.text}
      </h2>

      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            isSelected={selectedLabel === option.label}
            onClick={() => onSelect(option)}
          />
        ))}
      </div>
    </div>
  )
}
