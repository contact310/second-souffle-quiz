export default function AnswerOption({ option, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-4 rounded-xl border transition-all duration-150 text-sm sm:text-base leading-snug
        ${isSelected
          ? 'border-[#6a00ff] bg-[#6a00ff]/10 text-white'
          : 'border-[#2A2A2A] bg-[#1A1A1A] text-[#D0D0D0] hover:border-[#3A3A3A] hover:bg-[#222222] hover:text-white'
        }
      `}
    >
      <span className={`inline-block w-5 h-5 rounded-full border mr-3 flex-shrink-0 align-middle transition-all duration-150
        ${isSelected
          ? 'border-[#6a00ff] bg-[#6a00ff]'
          : 'border-[#3A3A3A] bg-transparent'
        }
      `} />
      {option.label}
    </button>
  )
}
