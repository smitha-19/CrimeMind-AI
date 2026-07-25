import Icon from '../ui/Icon.jsx'

export default function ActivityFeed({ items }) {
  return (
    <div className="col-span-12 lg:col-span-4 bg-surface-container-low border border-outline-variant rounded-xl flex flex-col h-full">
      <div className="p-6 border-b border-outline-variant flex justify-between items-center">
        <h2 className="font-title-lg text-title-lg font-bold">Activity Feed</h2>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-status-success" />
        </span>
      </div>
      <div className="flex-1 p-6 space-y-6 overflow-y-auto custom-scrollbar max-h-[400px] lg:max-h-none">
        {items.map((item, idx) => (
          <div key={item.id} className="flex gap-4 relative">
            {idx !== items.length - 1 && (
              <div className="absolute left-[15px] top-[30px] bottom-[-20px] w-px bg-outline-variant" />
            )}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 ${item.iconBg}`}
            >
              <Icon name={item.icon} className={`${item.iconColor} text-[18px]`} />
            </div>
            <div>
              <p className={`text-body-sm font-bold ${item.critical ? 'text-status-critical' : ''}`}>
                {item.title}
              </p>
              <p className="text-[12px] text-on-surface-variant">{item.description}</p>
              <span className="font-data-mono text-[10px] text-on-surface-variant mt-2 block">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
