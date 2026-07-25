import { useState } from 'react'
import Icon from '../components/ui/Icon.jsx'
import { hotspots, heatBlooms, aiPredictionPoints, heatmapDistrictStats } from '../data/heatmapData.js'
import { districts } from '../data/mockData.js'

const TONE_STYLES = {
  critical: { border: 'border-status-critical', badge: 'bg-status-critical/10 text-status-critical' },
  warning: { border: 'border-status-warning', badge: 'bg-status-warning/10 text-status-warning' },
  success: { border: 'border-status-success', badge: 'bg-status-success/10 text-status-success' },
}

export default function CrimeHeatmap() {
  const [showPredictions, setShowPredictions] = useState(true)
  const [categories, setCategories] = useState({ property: true, violent: true, narcotics: false })
  const [timeValue, setTimeValue] = useState(75)

  return (
    <div className="h-[calc(100vh-theme(spacing.topbar-height))] relative bg-surface overflow-hidden">
      {/* Simulated Map Layer */}
      <div className="w-full h-full relative overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-container to-surface-container-lowest opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-on-surface-variant/20 font-bold uppercase tracking-[1em] text-lg sm:text-xl select-none">
            Karnataka
          </span>
        </div>

        {/* Heatmap Overlay SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1000 1000"
        >
          <defs>
            <radialGradient cx="50%" cy="50%" id="heat-red" r="50%">
              <stop offset="0%" stopColor="#E53935" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#E53935" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="50%" cy="50%" id="heat-orange" r="50%">
              <stop offset="0%" stopColor="#FFB300" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFB300" stopOpacity="0" />
            </radialGradient>
            <radialGradient cx="50%" cy="50%" id="heat-blue" r="50%">
              <stop offset="0%" stopColor="#3394f1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3394f1" stopOpacity="0" />
            </radialGradient>
          </defs>
          {heatBlooms.map((b, i) => (
            <circle key={i} cx={b.cx} cy={b.cy} r={b.r} fill={`url(#${b.gradient})`} />
          ))}
        </svg>

        {/* AI Pulsing Predictions */}
        {showPredictions && (
          <div className="absolute inset-0 pointer-events-none">
            {aiPredictionPoints.map((p, i) => (
              <div
                key={i}
                className="absolute w-12 h-12 flex items-center justify-center"
                style={{ top: p.top, left: p.left }}
              >
                <div
                  className="absolute w-full h-full bg-status-critical rounded-full pulse-prediction"
                  style={{ animationDelay: p.delay }}
                />
                <div className="w-3 h-3 bg-status-critical rounded-full border border-white shadow-lg" />
              </div>
            ))}
          </div>
        )}

        {/* Left Panel: Filters */}
        <div className="absolute hidden md:flex top-4 left-4 w-72 glass-panel rounded-xl p-5 z-20 flex-col gap-6">
          <div>
            <h3 className="font-label-caps text-primary mb-4">Intelligence Filters</h3>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-2 block">
                  District
                </label>
                <select className="w-full bg-surface-container-high border-none rounded-lg text-sm focus:ring-1 focus:ring-primary py-2 px-3">
                  {districts.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-2 block">
                  Crime Category
                </label>
                <div className="space-y-2">
                  {[
                    { key: 'property', label: 'Property Crimes' },
                    { key: 'violent', label: 'Violent Crimes' },
                    { key: 'narcotics', label: 'Narcotics' },
                  ].map((c) => (
                    <label key={c.key} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        checked={categories[c.key]}
                        onChange={() => setCategories((prev) => ({ ...prev, [c.key]: !prev[c.key] }))}
                        className="rounded bg-surface-container-highest border-none text-primary focus:ring-0 focus:ring-offset-0"
                        type="checkbox"
                      />
                      <span className="text-sm text-on-surface group-hover:text-primary transition-colors">
                        {c.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-outline-variant">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-on-surface">Toggle AI Predictions</span>
              <button
                onClick={() => setShowPredictions((v) => !v)}
                className={`w-10 h-5 rounded-full relative p-0.5 flex items-center transition-colors ${
                  showPredictions ? 'bg-primary' : 'bg-surface-container-highest'
                }`}
              >
                <div
                  className={`w-4 h-4 bg-on-primary rounded-full transition-transform ${
                    showPredictions ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
            <div className="p-3 bg-primary-container/20 border border-primary/20 rounded-lg">
              <p className="text-[11px] text-primary leading-relaxed">
                <Icon name="info" className="text-[14px] mr-1" />
                Currently showing predicted high-risk zones for the next 24 hours based on historical FIR patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel: Statistics */}
        <div className="absolute hidden lg:flex top-4 right-4 w-80 glass-panel rounded-xl p-5 z-20 flex-col gap-6 max-h-[calc(100%-100px)]">
          <div className="overflow-y-auto custom-scrollbar">
            <h3 className="font-label-caps text-primary mb-4">District Statistics</h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-surface-container-high/50 p-3 rounded-lg border border-outline-variant">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase">Active FIRs</p>
                <p className="font-data-mono text-xl text-on-surface mt-1">{heatmapDistrictStats.activeFirs}</p>
              </div>
              <div className="bg-surface-container-high/50 p-3 rounded-lg border border-outline-variant">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase">Hotspots</p>
                <p className="font-data-mono text-xl text-primary mt-1">{heatmapDistrictStats.hotspotCount}</p>
              </div>
            </div>
            <h4 className="text-xs font-bold text-on-surface-variant mb-3 flex items-center justify-between uppercase">
              Top Hotspots
              <Icon name="trending_up" className="text-sm" />
            </h4>
            <div className="space-y-2">
              {hotspots.map((h) => {
                const tone = TONE_STYLES[h.tone]
                return (
                  <div
                    key={h.id}
                    className={`flex items-center justify-between p-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors border-l-4 ${tone.border}`}
                  >
                    <div>
                      <p className="text-sm font-semibold text-on-surface">{h.name}</p>
                      <p className="text-[10px] text-on-surface-variant">Predicted Risk: {h.risk}%</p>
                    </div>
                    <span className={`text-xs font-data-mono px-2 py-0.5 rounded ${tone.badge}`}>{h.level}</span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex items-center gap-3 p-3 bg-primary/10 border border-primary/20 rounded-xl">
              <Icon name="shield" className="text-primary text-[32px]" />
              <div>
                <p className="text-xs font-bold text-on-surface">Resource Allocation</p>
                <p className="text-[10px] text-on-surface-variant leading-tight">
                  AI recommends shifting 4 patrols to Central Bengaluru.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legend & Time Slider */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[85%] lg:w-[65%] z-30">
          <div className="glass-panel rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 shadow-2xl">
            <div className="flex items-center gap-4 sm:gap-6 sm:pr-8 sm:border-r border-outline-variant flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-status-critical shadow-[0_0_8px_#E53935]" />
                <span className="text-[10px] font-label-caps text-on-surface-variant uppercase">Critical</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-status-warning shadow-[0_0_8px_#FFB300]" />
                <span className="text-[10px] font-label-caps text-on-surface-variant uppercase">High</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_8px_#a2c9ff]" />
                <span className="text-[10px] font-label-caps text-on-surface-variant uppercase">Moderate</span>
              </div>
            </div>

            <div className="flex-1 flex items-center gap-4 w-full">
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <Icon name="play_arrow" />
              </button>
              <div className="flex-1 relative pt-1">
                <div className="flex justify-between text-[9px] font-data-mono text-outline-variant mb-1 uppercase">
                  <span>24h Ago</span>
                  <span className="hidden sm:inline">12h Ago</span>
                  <span className="text-primary font-bold">Now (Live)</span>
                  <span className="hidden sm:inline">+12h Forecast</span>
                </div>
                <input
                  className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                  max="100"
                  min="0"
                  type="range"
                  value={timeValue}
                  onChange={(e) => setTimeValue(e.target.value)}
                />
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-outline-variant">
              <button className="w-8 h-8 flex items-center justify-center bg-surface-container-high rounded text-on-surface hover:text-primary transition-colors">
                <Icon name="add" size="20px" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-surface-container-high rounded text-on-surface hover:text-primary transition-colors">
                <Icon name="remove" size="20px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
