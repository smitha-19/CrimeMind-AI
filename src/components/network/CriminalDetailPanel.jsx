import Icon from '../ui/Icon.jsx'

const TONE_ICON_BG = {
  critical: 'bg-status-critical/10 text-status-critical',
  warning: 'bg-status-warning/10 text-status-warning',
}

export default function CriminalDetailPanel({ criminal, onClose, className = '' }) {
  if (!criminal) {
    return (
      <div className={`w-full lg:w-[380px] h-full border-l border-outline-variant bg-surface-container-lowest flex-col items-center justify-center p-6 text-center ${className}`}>
        <Icon name="hub" className="text-outline-variant mb-3" size="40px" />
        <p className="text-on-surface-variant text-body-sm">Select a node on the graph to view profile details.</p>
      </div>
    )
  }

  return (
    <div className={`w-full lg:w-[380px] h-full border-l border-outline-variant bg-surface-container-lowest flex-col z-20 ${className}`}>
      <div className="p-6 border-b border-outline-variant">
        <div className="flex items-start justify-between mb-4">
          <div className="flex gap-gutter">
            <div className="w-16 h-16 rounded-xl border border-primary overflow-hidden shadow-xl shrink-0">
              <img className="w-full h-full object-cover" src={criminal.avatar} alt={criminal.name} />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface leading-tight">{criminal.name}</h3>
              <p className="font-data-mono text-status-critical text-[12px]">ID: {criminal.id}</p>
              <div className="flex gap-2 mt-1 flex-wrap">
                {criminal.tags.map((tag) => (
                  <span key={tag} className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button onClick={onClose} className="text-on-surface-variant hover:text-on-surface shrink-0">
            <Icon name="close" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">
        <section>
          <h4 className="font-label-caps text-on-surface-variant mb-4 uppercase tracking-widest flex items-center gap-2">
            <Icon name="info" className="text-[18px]" />
            Personal Dossier
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container p-3 rounded-lg border border-outline-variant">
              <p className="text-[10px] text-on-surface-variant uppercase mb-1">Age / Sex</p>
              <p className="text-body-sm font-bold">{criminal.age}</p>
            </div>
            <div className="bg-surface-container p-3 rounded-lg border border-outline-variant">
              <p className="text-[10px] text-on-surface-variant uppercase mb-1">Nationality</p>
              <p className="text-body-sm font-bold">{criminal.nationality}</p>
            </div>
            <div className="bg-surface-container p-3 rounded-lg border border-outline-variant col-span-2">
              <p className="text-[10px] text-on-surface-variant uppercase mb-1">Known Alias</p>
              <p className="text-body-sm font-bold">{criminal.aliases}</p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-label-caps text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
              <Icon name="list_alt" className="text-[18px]" />
              Connected Cases
            </h4>
            <span className="bg-surface-container-high px-2 py-0.5 rounded text-[10px] text-on-surface">
              {String(criminal.connectedCases.length).padStart(2, '0')}
            </span>
          </div>
          <div className="space-y-2">
            {criminal.connectedCases.map((c) => (
              <div
                key={c.id}
                className="flex items-center gap-3 p-3 bg-surface-container/50 border border-outline-variant rounded-lg hover:border-primary transition-colors cursor-pointer group"
              >
                <div className={`w-8 h-8 rounded flex items-center justify-center ${TONE_ICON_BG[c.tone]}`}>
                  <Icon name={c.icon} size="20px" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-body-sm font-bold truncate">{c.title}</p>
                  <p className="text-[10px] text-on-surface-variant">
                    {c.id} • {c.status}
                  </p>
                </div>
                <Icon
                  name="chevron_right"
                  className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h4 className="font-label-caps text-on-surface-variant mb-4 uppercase tracking-widest flex items-center gap-2">
            <Icon name="timeline" className="text-[18px]" />
            Activity Timeline
          </h4>
          <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2 before:top-0 before:bottom-0 before:w-px before:bg-outline-variant">
            {criminal.timeline.map((t) => (
              <div key={t.date} className="relative">
                <div
                  className={`absolute -left-[21px] top-1 w-3 h-3 rounded-full ring-4 ring-surface ${
                    t.active ? 'bg-primary' : 'bg-outline-variant'
                  }`}
                />
                <p className={`text-[10px] font-data-mono mb-1 ${t.active ? 'text-primary' : 'text-on-surface-variant'}`}>
                  {t.date}
                </p>
                <p className="text-body-sm font-bold text-on-surface">{t.title}</p>
                <p className="text-[12px] text-on-surface-variant">{t.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="p-6 bg-surface-container border-t border-outline-variant mt-auto">
        <button className="w-full bg-secondary text-on-secondary py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-secondary/10 hover:brightness-110 active:scale-95 transition-all">
          <Icon name="visibility" />
          Enter Surveillance View
        </button>
      </div>
    </div>
  )
}
