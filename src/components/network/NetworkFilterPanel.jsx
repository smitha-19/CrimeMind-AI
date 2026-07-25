import Icon from '../ui/Icon.jsx'
import { networkStats } from '../../data/networkData.js'

export default function NetworkFilterPanel({ className = '' }) {
  return (
    <div
      className={`w-full lg:w-80 h-full border-r border-outline-variant bg-surface-container-lowest p-6 flex-col gap-gutter z-20 overflow-y-auto custom-scrollbar ${className}`}
    >
      <div>
        <h2 className="font-title-lg text-title-lg text-on-surface mb-4">Network Filters</h2>
        <div className="space-y-4">
          <div>
            <label className="font-label-caps text-on-surface-variant mb-2 block uppercase">Entity Search</label>
            <div className="relative">
              <Icon
                name="search"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant"
              />
              <input
                className="w-full bg-surface-container text-body-sm border border-outline-variant rounded-lg pl-10 pr-4 py-2 focus:ring-1 focus:ring-primary outline-none"
                placeholder="Individual or Case #"
                type="text"
              />
            </div>
          </div>
          <div>
            <label className="font-label-caps text-on-surface-variant mb-2 block uppercase">Crime Category</label>
            <select className="w-full bg-surface-container text-body-sm border border-outline-variant rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary outline-none text-on-surface appearance-none">
              <option>All Types</option>
              <option>Organized Crime</option>
              <option>Narcotics</option>
              <option>Financial Fraud</option>
              <option>Cyber Crime</option>
            </select>
          </div>
          <div>
            <label className="font-label-caps text-on-surface-variant mb-2 block uppercase">Time Window</label>
            <div className="flex flex-col gap-2">
              <button className="text-left px-3 py-2 rounded-lg bg-primary-container text-primary font-body-sm flex justify-between items-center">
                Last 6 Months
                <Icon name="check" className="text-[16px]" />
              </button>
              <button className="text-left px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-body-sm transition-colors">
                Last 2 Years
              </button>
              <button className="text-left px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-body-sm transition-colors">
                Custom Range
              </button>
            </div>
          </div>
          <div>
            <label className="font-label-caps text-on-surface-variant mb-2 block uppercase">
              Relationship Strength
            </label>
            <input
              className="w-full accent-primary bg-surface-container-high h-1.5 rounded-lg appearance-none cursor-pointer"
              type="range"
            />
            <div className="flex justify-between mt-2 font-data-mono text-[10px] text-on-surface-variant uppercase">
              <span>Loose</span>
              <span>Direct</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="p-4 bg-surface-container border border-outline-variant rounded-xl">
          <p className="font-label-caps text-primary mb-2 flex items-center gap-2">
            <Icon name="query_stats" className="text-[18px]" />
            Network Stats
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[20px] font-bold text-on-surface">{networkStats.nodes}</p>
              <p className="text-[10px] text-on-surface-variant uppercase">Nodes</p>
            </div>
            <div>
              <p className="text-[20px] font-bold text-on-surface">{networkStats.links}</p>
              <p className="text-[10px] text-on-surface-variant uppercase">Links</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
