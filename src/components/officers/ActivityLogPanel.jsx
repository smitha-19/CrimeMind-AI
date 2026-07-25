import Icon from '../ui/Icon.jsx'

export default function ActivityLogPanel({ items, className = '' }) {
  return (
    <aside
      className={`w-full lg:w-[380px] bg-surface-container border border-outline-variant rounded-3xl flex flex-col overflow-hidden ${className}`}
    >
      <div className="p-6 border-b border-outline-variant flex items-center justify-between bg-surface-container-high/40">
        <div className="flex items-center space-x-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-status-success" />
          </span>
          <h3 className="font-title-lg text-title-lg">Live Activity Log</h3>
        </div>
        <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
          <Icon name="more_vert" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6 max-h-[420px] lg:max-h-none">
        {items.map((item, idx) => (
          <div
            key={item.id}
            className={`relative pl-6 border-l-2 border-outline-variant/30 ${idx !== items.length - 1 ? 'pb-6' : ''}`}
          >
            <div className={`absolute -left-[7px] top-0 w-3 h-3 rounded-full ${item.dotColor} ring-4 ring-surface`} />
            <div className="bg-surface-container-high/50 p-4 rounded-xl border border-outline-variant/50">
              <div className="flex justify-between items-start mb-2">
                <span className={`font-label-caps text-[10px] ${item.tagColor}`}>{item.tag}</span>
                <span className="font-data-mono text-[10px] text-on-surface-variant">{item.time}</span>
              </div>
              <p className="font-body-sm text-on-surface">{item.text}</p>
              {item.meta && (
                <p className="mt-2 font-data-mono text-[11px] text-on-surface-variant bg-surface px-2 py-1 rounded inline-block">
                  {item.meta}
                </p>
              )}
              {item.progress != null && (
                <div className="mt-3 w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-status-success h-full" style={{ width: `${item.progress}%` }} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="p-6 bg-surface-container-highest/20 border-t border-outline-variant">
        <button className="w-full py-2 bg-surface-container-highest hover:bg-surface-container-high border border-outline-variant text-on-surface rounded-lg font-label-caps text-xs transition-all">
          View Full Audit Trail
        </button>
      </div>
    </aside>
  )
}
