import Icon from '../ui/Icon.jsx'
import { suggestedAnalysis, relatedCasesDetailed, regionalStats } from '../../data/aiAssistantData.js'

const SEVERITY_STYLES = {
  Critical: { border: 'border-status-critical', badge: 'bg-error-container text-on-error-container' },
  Moderate: { border: 'border-status-warning', badge: 'bg-tertiary-container text-on-tertiary-container' },
}

export default function InsightsPanel({ className = '' }) {
  return (
    <section className={`w-full lg:w-96 border-l border-outline-variant bg-surface-container-low flex flex-col p-6 overflow-y-auto custom-scrollbar ${className}`}>
      <h2 className="font-title-lg text-title-lg font-bold mb-6 flex items-center gap-2">
        <Icon name="query_stats" className="text-primary" filled />
        AI Insights
      </h2>

      <div className="mb-8">
        <p className="font-label-caps text-label-caps text-on-surface-variant mb-4 flex items-center justify-between">
          Suggested Analysis
          <Icon name="auto_awesome" className="text-xs" />
        </p>
        <div className="space-y-2">
          {suggestedAnalysis.map((q) => (
            <button
              key={q}
              className="w-full text-left p-3 rounded-lg border border-outline-variant bg-surface-container-highest hover:bg-primary-container/20 hover:border-primary transition-all group"
            >
              <p className="text-body-sm text-on-surface">{q}</p>
              <span className="text-[10px] text-on-surface-variant group-hover:text-primary">Tap to run query</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <p className="font-label-caps text-label-caps text-on-surface-variant mb-4">
          Related Cases ({relatedCasesDetailed.length})
        </p>
        <div className="space-y-3">
          {relatedCasesDetailed.map((c) => {
            const style = SEVERITY_STYLES[c.severity]
            return (
              <div key={c.id} className={`p-3 bg-surface border-l-4 ${style.border} rounded shadow-sm`}>
                <div className="flex justify-between items-start mb-1">
                  <span className="font-data-mono text-[11px] text-on-surface-variant">{c.id}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${style.badge}`}>
                    {c.severity}
                  </span>
                </div>
                <p className="text-body-sm font-bold text-on-surface">{c.title}</p>
                <p className="text-[11px] text-on-surface-variant mt-1">Similarity: {c.similarity}</p>
              </div>
            )
          })}
        </div>
        <button className="w-full mt-4 text-center text-primary font-label-caps text-label-caps py-2 hover:underline">
          View All Matches
        </button>
      </div>

      <div className="flex-1">
        <p className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">
          Regional Stats: {regionalStats.region}
        </p>
        <div className="bg-surface-container-highest rounded-xl p-4 border border-outline-variant">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[24px] font-bold text-on-surface">{regionalStats.riseThisMonth}</p>
              <p className="text-[10px] text-status-critical font-bold uppercase">Rise this month</p>
            </div>
            <div className="w-16 h-10 flex items-end gap-1">
              <div className="w-2 h-4 bg-primary/30 rounded-t-sm" />
              <div className="w-2 h-6 bg-primary/50 rounded-t-sm" />
              <div className="w-2 h-10 bg-primary rounded-t-sm" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-body-sm text-on-surface-variant">Robbery Suspects Active</span>
              <span className="font-data-mono text-on-surface">{regionalStats.suspectsActive}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-body-sm text-on-surface-variant">Patrol Saturation</span>
              <span className="font-data-mono text-status-warning">{regionalStats.patrolSaturation}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-body-sm text-on-surface-variant">Solved Rate</span>
              <span className="font-data-mono text-status-success">{regionalStats.solvedRate}</span>
            </div>
          </div>
        </div>
        <div className="mt-6 rounded-xl overflow-hidden h-32 relative border border-outline-variant bg-surface-container-highest flex items-center justify-center">
          <Icon name="satellite_alt" className="text-primary/40" size="40px" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
          <div className="absolute bottom-2 left-3">
            <p className="text-[10px] font-bold text-primary flex items-center gap-1 uppercase">
              <Icon name="location_on" className="text-xs" />
              Pattern Hotspot Detected
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
