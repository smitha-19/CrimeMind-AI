import Icon from '../components/ui/Icon.jsx'
import FilterBar from '../components/ui/FilterBar.jsx'
import { districts, crimeTypes } from '../data/mockData.js'
import {
  analyticsKpis,
  monthlyTrendBars,
  distributionBreakdown,
  districtComparison,
  repeatOffenders,
} from '../data/analyticsData.js'

const TREND_COLOR = { success: 'text-status-success', critical: 'text-status-critical' }
const RISK_TONE = {
  critical: { bar: 'bg-status-critical', text: 'text-status-critical', badge: 'bg-status-critical/10 text-status-critical border-status-critical/20' },
  warning: { bar: 'bg-status-warning', text: 'text-status-warning', badge: 'bg-status-warning/10 text-status-warning border-status-warning/20' },
  success: { bar: 'bg-status-success', text: 'text-status-success', badge: 'bg-status-success/10 text-status-success border-status-success/20' },
}

export default function CrimeAnalytics() {
  const filters = [
    { label: 'Date Range', options: ['Last 30 Days', 'Last Quarter', 'Year to Date', 'Custom Range'] },
    { label: 'District', options: districts },
    { label: 'Police Station', options: ['All Stations', 'Cubbon Park', 'Koramangala', 'Indiranagar'] },
    { label: 'Crime Type', options: crimeTypes },
  ]

  return (
    <div className="p-4 sm:p-container-padding">
      {/* Filters Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-gutter mb-8">
        <div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-1">Crime Intelligence Analytics</h2>
          <p className="text-on-surface-variant font-body-sm">
            Real-time data synthesis across Karnataka's policing jurisdictions
          </p>
        </div>
        <FilterBar filters={filters} onExport={() => {}} />
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* KPI Row */}
        {analyticsKpis.map((kpi) => (
          <div key={kpi.id} className="col-span-12 sm:col-span-6 md:col-span-3 bg-surface-container rounded-xl p-6 border border-outline-variant shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <span className="font-label-caps text-label-caps text-outline">{kpi.label}</span>
              <Icon name={kpi.icon} className={kpi.iconColor} />
            </div>
            <div className="flex items-end gap-3">
              <span className="font-display-lg text-display-lg text-on-surface leading-none">{kpi.value}</span>
              <div className={`flex items-center font-data-mono text-data-mono mb-1 ${TREND_COLOR[kpi.trend.tone]}`}>
                <Icon name={kpi.trend.direction === 'up' ? 'arrow_upward' : 'arrow_downward'} className="text-sm" />
                <span>{kpi.trend.value}</span>
              </div>
            </div>
            <p className="text-on-surface-variant text-body-sm mt-4">{kpi.footnote}</p>
          </div>
        ))}

        {/* AI Prediction */}
        <div className="col-span-12 sm:col-span-6 md:col-span-3 bg-primary-container rounded-xl p-6 border border-primary/20 shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <span className="font-label-caps text-label-caps text-on-primary-container">AI Prediction</span>
              <Icon name="bolt" className="text-on-primary-container" filled />
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-primary mb-1">High Recidivism</span>
              <p className="text-on-primary-container/80 text-body-sm">
                Cybercrime clusters predicted in North Bengaluru for Week 42.
              </p>
            </div>
            <button className="mt-4 text-primary font-label-caps text-label-caps flex items-center gap-1 hover:underline">
              View Model Details <Icon name="chevron_right" className="text-sm" />
            </button>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <Icon name="psychology" size="120px" />
          </div>
        </div>

        {/* Monthly Crime Trend */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container rounded-xl p-6 border border-outline-variant shadow-lg min-h-[400px]">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-title-lg text-title-lg text-on-surface">Monthly Crime Trend</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="font-label-caps text-label-caps text-outline">Current Year</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-outline-variant" />
                <span className="font-label-caps text-label-caps text-outline">Previous Year</span>
              </div>
            </div>
          </div>
          <div className="w-full h-64 relative flex items-end justify-between gap-1 mt-12 px-2">
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-primary/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-16 h-[2px] bg-primary/30 w-full" />
            {monthlyTrendBars.map((bar) => (
              <div key={bar.month} className="flex-1 flex flex-col justify-end items-center gap-2 h-full group">
                <div
                  className={`w-full rounded-t-sm transition-all ${
                    bar.highlight
                      ? 'bg-primary shadow-[0_-8px_16px_rgba(181,199,234,0.3)]'
                      : 'bg-primary/20 group-hover:bg-primary/40'
                  }`}
                  style={{ height: `${bar.height}%` }}
                />
                <span
                  className={`font-data-mono text-data-mono ${bar.highlight ? 'text-primary font-bold' : 'text-outline'}`}
                >
                  {bar.month}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Crime Distribution Donut */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container rounded-xl p-6 border border-outline-variant shadow-lg">
          <h3 className="font-title-lg text-title-lg text-on-surface mb-8">Crime Distribution</h3>
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48 rounded-full border-[16px] border-outline-variant flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[16px] border-primary border-t-transparent border-r-transparent rotate-45" />
              <div className="absolute inset-0 rounded-full border-[16px] border-secondary border-b-transparent border-l-transparent -rotate-12" />
              <div className="text-center">
                <span className="block font-headline-md text-headline-md text-on-surface">62%</span>
                <span className="font-label-caps text-label-caps text-outline uppercase">Dominant</span>
              </div>
            </div>
            <div className="w-full mt-8 space-y-3">
              {distributionBreakdown.map((d) => (
                <div key={d.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${d.color}`} />
                    <span className="text-body-sm text-on-surface-variant">{d.label}</span>
                  </div>
                  <span className="font-data-mono text-data-mono">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* District Comparison */}
        <div className="col-span-12 lg:col-span-7 bg-surface-container rounded-xl p-6 border border-outline-variant shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-title-lg text-title-lg text-on-surface">District Wise Comparison</h3>
            <Icon name="more_horiz" className="text-outline cursor-pointer hover:text-primary" />
          </div>
          <div className="space-y-6">
            {districtComparison.map((d) => (
              <div key={d.district} className="space-y-2">
                <div className="flex justify-between text-body-sm">
                  <span className="text-on-surface">{d.district}</span>
                  <span className="font-data-mono text-primary">{d.cases} Cases</span>
                </div>
                <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${d.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Repeat Offender Analysis */}
        <div className="col-span-12 lg:col-span-5 bg-surface-container rounded-xl border border-outline-variant shadow-lg overflow-hidden flex flex-col">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center">
            <h3 className="font-title-lg text-title-lg text-on-surface">High-Risk Repeat Offenders</h3>
            <button className="text-primary font-label-caps text-label-caps flex items-center gap-1 hover:brightness-110">
              View All <Icon name="open_in_new" className="text-sm" />
            </button>
          </div>
          <div className="flex-1 overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[420px]">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="px-6 py-3 font-label-caps text-label-caps text-outline">Offender ID</th>
                  <th className="px-6 py-3 font-label-caps text-label-caps text-outline">Risk Score</th>
                  <th className="px-6 py-3 font-label-caps text-label-caps text-outline">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {repeatOffenders.map((o) => {
                  const tone = RISK_TONE[o.tone]
                  return (
                    <tr key={o.id} className="hover:bg-surface-container-high transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant">
                            <Icon name="person" size="18px" />
                          </div>
                          <div>
                            <div className="font-data-mono text-data-mono text-on-surface">{o.id}</div>
                            <div className="text-[11px] text-on-surface-variant uppercase">{o.priors}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 w-16 bg-surface-container-highest rounded-full overflow-hidden">
                            <div className={`h-full ${tone.bar}`} style={{ width: `${o.risk}%` }} />
                          </div>
                          <span className={`font-data-mono text-data-mono ${tone.text}`}>{o.risk}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 border rounded font-label-caps text-[10px] uppercase ${tone.badge}`}>
                          {o.status}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
