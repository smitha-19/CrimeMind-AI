import Icon from '../ui/Icon.jsx'

export default function AiRiskScoreCard({ label, value, max, status }) {
  const percent = Math.round((value / max) * 100)
  return (
    <div className="bg-primary-container border border-primary/20 rounded-xl p-5 relative overflow-hidden group">
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
      <div className="flex justify-between items-start mb-2">
        <Icon name="psychology" className="text-primary text-[24px]" />
        <span className="text-primary font-bold font-data-mono">ALERT</span>
      </div>
      <h3 className="font-label-caps text-on-primary-container text-[10px] uppercase tracking-widest mb-1">
        {label}
      </h3>
      <div className="flex items-end gap-2">
        <p className="font-headline-md text-headline-md font-bold text-primary">{value}</p>
        <span className="font-label-caps text-on-primary-container text-[12px] mb-1.5">/ {max}</span>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-surface/50 rounded-full overflow-hidden">
          <div className="h-full bg-primary" style={{ width: `${percent}%` }} />
        </div>
        <span className="font-data-mono text-[10px] text-primary">{status}</span>
      </div>
    </div>
  )
}
