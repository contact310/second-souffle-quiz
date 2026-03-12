export default function ProgressBar({ current, total }) {
  const progress = ((current) / total) * 100

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-between text-sm">
        <span className="text-[#A0A0A0]">Question {current} / {total}</span>
        <span className="text-[#A0A0A0] text-xs">{Math.round(progress)}%</span>
      </div>
      <div className="w-full h-1.5 bg-[#2A2A2A] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#6a00ff] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
