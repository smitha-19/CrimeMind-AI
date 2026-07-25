import Icon from '../ui/Icon.jsx'

const TREND_COLOR = {
  success: 'text-status-success',
  warning: 'text-status-warning',
  critical: 'text-status-critical',
}

export default function KpiCard({ icon, iconColor, label, value, trend, barColor, barWidth }) {
  return (
    <div className="bg-surface-container-low border border-outline-variant rounded-xl p-5 hover:border-primary/50 transition-colors">
      <div className="flex justify-between items-start mb-2">
        <Icon name={icon} className={`${iconColor} text-[24px]`} />
        {trend?.direction && (
          <span className={`flex items-center font-data-mono text-xs ${TREND_COLOR[trend.tone]}`}>
            <Icon name={trend.direction === 'up' ? 'arrow_drop_up' : 'arrow_drop_down'} size="14px" />
            {trend.value}
          </span>
        )}
        {trend?.label && !trend?.direction && (
          <span className="font-data-mono text-xs text-on-surface-variant">{trend.label}</span>
        )}
      </div>
      <h3 className="font-label-caps text-on-surface-variant text-[10px] uppercase tracking-widest mb-1">
        {label}
      </h3>
      <p className="font-headline-md text-headline-md font-bold">{value}</p>
      <div className="mt-4 h-1 bg-surface-container-high rounded-full overflow-hidden">
        <div className={`h-full ${barColor}`} style={{ width: barWidth }} />
      </div>
    </div>
  )
}
