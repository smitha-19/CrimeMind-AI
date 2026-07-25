import Icon from '../ui/Icon.jsx'

export default function AiInsightsCard({ insights }) {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3 glass-panel rounded-xl p-6 h-[360px] sm:h-[400px] flex flex-col border-primary/20">
      <div className="flex items-center gap-2 mb-4 text-primary">
        <Icon name="auto_awesome" />
        <h2 className="font-title-lg text-title-lg font-bold">AI Insights</h2>
      </div>
      <div className="space-y-4 overflow-y-auto custom-scrollbar flex-1 pr-2">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className={`p-4 bg-surface-container-high rounded-lg border-l-4 ${insight.borderColor}`}
          >
            <p className={`font-label-caps text-[10px] mb-1 ${insight.tagColor}`}>{insight.tag}</p>
            <p className="text-body-sm font-bold mb-2">{insight.title}</p>
            <p className="text-[12px] text-on-surface-variant leading-relaxed">{insight.description}</p>
            {insight.action && (
              <button className="mt-3 text-primary text-[12px] font-bold hover:underline flex items-center gap-1">
                {insight.action} <Icon name="arrow_forward" size="14px" />
              </button>
            )}
          </div>
        ))}
      </div>
      <button className="w-full mt-4 py-2 border border-outline-variant rounded-lg font-label-caps hover:bg-surface-container-high transition-colors">
        View All Predictions
      </button>
    </div>
  )
}
