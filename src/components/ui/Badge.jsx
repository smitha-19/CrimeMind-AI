const TONE_STYLES = {
  critical: 'bg-status-critical/10 text-status-critical border-status-critical/20',
  warning: 'bg-status-warning/10 text-status-warning border-status-warning/20',
  success: 'bg-status-success/10 text-status-success border-status-success/20',
  primary: 'bg-primary/10 text-primary border-primary/20',
  neutral: 'bg-surface-container-highest text-on-surface-variant border-outline-variant',
}

const STATUS_TONE_MAP = {
  Active: 'critical',
  Investigation: 'warning',
  Closed: 'success',
  Ready: 'success',
  Processing: 'warning',
  'On Leave': 'warning',
}

export default function Badge({ children, tone, status, className = '' }) {
  const resolvedTone = tone || STATUS_TONE_MAP[status] || 'neutral'
  return (
    <span
      className={`px-2 py-1 border rounded-full text-[10px] font-bold uppercase tracking-tight whitespace-nowrap ${TONE_STYLES[resolvedTone]} ${className}`}
    >
      {children || status}
    </span>
  )
}
