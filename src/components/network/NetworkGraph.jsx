import Icon from '../ui/Icon.jsx'

export default function NetworkGraph({ onSelectNode, selectedId }) {
  return (
    <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-surface-container-lowest to-surface">
      {/* Floating Controls */}
      <div className="absolute bottom-6 left-6 flex items-center gap-2 z-30">
        <div className="flex bg-surface-container-high/80 backdrop-blur border border-outline-variant rounded-lg p-1">
          <button className="p-2 hover:bg-surface-container-highest rounded text-on-surface-variant hover:text-primary transition-colors">
            <Icon name="zoom_in" />
          </button>
          <button className="p-2 hover:bg-surface-container-highest rounded text-on-surface-variant hover:text-primary transition-colors">
            <Icon name="zoom_out" />
          </button>
          <div className="w-px bg-outline-variant mx-1" />
          <button className="p-2 hover:bg-surface-container-highest rounded text-on-surface-variant hover:text-primary transition-colors">
            <Icon name="refresh" />
          </button>
        </div>
        <button className="bg-surface-container-high/80 backdrop-blur border border-outline-variant p-2 rounded-lg text-on-surface-variant hover:text-primary">
          <Icon name="fullscreen" />
        </button>
      </div>

      {/* Legend */}
      <div className="absolute top-6 left-6 z-30 hidden sm:flex flex-col gap-2">
        <div className="glass-panel px-4 py-3 rounded-xl flex flex-col gap-2">
          <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider mb-1">
            Graph Legend
          </p>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-status-critical shadow-[0_0_8px_rgba(229,57,53,0.5)]" />
            <span className="text-body-sm">Criminal Node</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_8px_rgba(162,201,255,0.5)]" />
            <span className="text-body-sm">Active Case</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-tertiary shadow-[0_0_8px_rgba(238,189,148,0.5)]" />
            <span className="text-body-sm">Linked Location</span>
          </div>
          <div className="h-px bg-outline-variant my-1" />
          <div className="flex items-center gap-3">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-body-sm">Direct Associate</span>
          </div>
          <div className="flex items-center gap-3 opacity-50">
            <div className="w-8 h-0.5 bg-outline border-t border-dashed" />
            <span className="text-body-sm">Tentative Link</span>
          </div>
        </div>
      </div>

      {/* Graph Nodes */}
      <div className="absolute inset-0 z-10">
        {/* Links */}
        <div className="absolute bg-primary/20 h-0.5 w-[300px] top-1/2 left-1/2 -translate-x-1/2 rotate-45 pointer-events-none" />
        <div className="absolute bg-primary/20 h-0.5 w-[200px] top-1/2 left-1/3 -translate-x-1/2 -rotate-12 pointer-events-none" />
        <div className="absolute bg-primary/20 h-0.5 w-[150px] top-1/4 left-1/2 -translate-x-1/2 rotate-90 pointer-events-none" />

        {/* Central Node */}
        <button
          onClick={() => onSelectNode('n1')}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-full animate-pulse" />
            <div
              className={`w-20 h-20 rounded-full border-4 overflow-hidden relative z-10 ${
                selectedId === 'n1' ? 'border-primary' : 'border-outline-variant'
              }`}
            >
              <img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=13" alt="Rahul Rao" />
            </div>
            <div className="absolute -top-2 -right-2 bg-status-critical text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-surface z-20">
              LVL 9
            </div>
          </div>
          <p className="text-center mt-3 font-bold text-primary text-body-sm whitespace-nowrap bg-surface-container/80 px-2 py-0.5 rounded border border-primary/20">
            RAHUL 'THE FIXER' RAO
          </p>
        </button>

        {/* Associate 1 */}
        <button
          onClick={() => onSelectNode('n2')}
          className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
        >
          <div
            className={`w-12 h-12 rounded-full border-2 overflow-hidden transition-all ${
              selectedId === 'n2' ? 'border-primary' : 'border-outline-variant hover:border-primary'
            }`}
          >
            <img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=32" alt="Amit K." />
          </div>
          <p className="text-center mt-2 text-[10px] text-on-surface-variant font-label-caps bg-surface-container/60 px-2 rounded">
            AMIT K.
          </p>
        </button>

        {/* Associate 2 */}
        <button
          onClick={() => onSelectNode('n3')}
          className="absolute bottom-1/4 right-1/3 translate-x-1/2 translate-y-1/2 group cursor-pointer"
        >
          <div
            className={`w-12 h-12 rounded-full border-2 overflow-hidden transition-all ${
              selectedId === 'n3' ? 'border-primary' : 'border-outline-variant hover:border-primary'
            }`}
          >
            <img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=48" alt="Sneha M." />
          </div>
          <p className="text-center mt-2 text-[10px] text-on-surface-variant font-label-caps bg-surface-container/60 px-2 rounded">
            SNEHA M.
          </p>
        </button>

        {/* Case Node */}
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 group cursor-pointer">
          <div className="w-10 h-10 rounded bg-secondary-container flex items-center justify-center border border-secondary shadow-[0_0_12px_rgba(51,148,241,0.3)]">
            <Icon name="description" className="text-white" filled />
          </div>
          <p className="text-center mt-2 text-[10px] text-secondary font-label-caps uppercase tracking-tighter">
            FIR #442/24
          </p>
        </div>
      </div>
    </div>
  )
}
