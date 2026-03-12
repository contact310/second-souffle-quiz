export default function DiagnosticBlock({ diagnostics, staggerIndex }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-base font-semibold text-white">
        Ce que ton diagnostic révèle
      </h3>
      <div className="flex flex-col gap-3">
        {diagnostics.map((item, index) => (
          <div
            key={item.tag}
            className="px-4 py-4 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] text-sm text-[#D0D0D0] leading-relaxed animate-fade-in-up"
            style={{ animationDelay: `${(staggerIndex + index) * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}
          >
            {item.message}
          </div>
        ))}
      </div>
    </div>
  )
}
