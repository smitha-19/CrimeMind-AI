import { useState } from 'react'
import Icon from '../components/ui/Icon.jsx'
import NetworkFilterPanel from '../components/network/NetworkFilterPanel.jsx'
import NetworkGraph from '../components/network/NetworkGraph.jsx'
import CriminalDetailPanel from '../components/network/CriminalDetailPanel.jsx'
import { criminalProfiles, aiNetworkInsight } from '../data/networkData.js'

const MOBILE_VIEWS = [
  { id: 'filters', label: 'Filters', icon: 'tune' },
  { id: 'graph', label: 'Graph', icon: 'hub' },
  { id: 'details', label: 'Details', icon: 'badge' },
]

export default function CriminalNetwork() {
  const [selectedId, setSelectedId] = useState('n1')
  const [mobileView, setMobileView] = useState('graph')

  const selectedCriminal = selectedId ? criminalProfiles[selectedId] : null

  function handleSelectNode(id) {
    setSelectedId(id)
    setMobileView('details')
  }

  return (
    <div className="h-[calc(100vh-theme(spacing.topbar-height))] flex flex-col">
      <div className="lg:hidden flex border-b border-outline-variant bg-surface-container-lowest">
        {MOBILE_VIEWS.map((v) => (
          <button
            key={v.id}
            onClick={() => setMobileView(v.id)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-body-sm font-bold transition-colors ${
              mobileView === v.id ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant'
            }`}
          >
            <Icon name={v.icon} size="18px" />
            {v.label}
          </button>
        ))}
      </div>

      <div className="flex-1 flex overflow-hidden relative">
        <NetworkFilterPanel className={mobileView === 'filters' ? 'flex' : 'hidden lg:flex'} />
        <div className={`flex-1 relative ${mobileView === 'graph' ? 'flex' : 'hidden lg:flex'}`}>
          <NetworkGraph onSelectNode={handleSelectNode} selectedId={selectedId} />
        </div>
        <CriminalDetailPanel
          criminal={selectedCriminal}
          onClose={() => setSelectedId(null)}
          className={mobileView === 'details' ? 'flex' : 'hidden lg:flex'}
        />

        {/* AI Insight Floating Drawer */}
        <div className="hidden xl:block fixed bottom-6 right-[400px] z-40">
          <div className="glass-panel p-4 rounded-2xl max-w-xs shadow-2xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <p className="font-label-caps text-primary text-[10px] uppercase">AI Insight</p>
            </div>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">{aiNetworkInsight}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
