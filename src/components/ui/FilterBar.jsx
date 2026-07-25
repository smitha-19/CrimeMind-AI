import Icon from '../ui/Icon.jsx'

export default function FilterBar({ filters, onExport }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {filters.map((filter) => (
        <div key={filter.label} className="flex flex-col gap-1.5">
          <label className="font-label-caps text-label-caps text-outline ml-1">{filter.label}</label>
          <select className="bg-surface-container-high border border-outline-variant rounded-lg px-3 py-2 text-on-surface text-body-sm focus:ring-1 focus:ring-primary outline-none min-w-[160px]">
            {filter.options.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
      ))}
      {onExport && (
        <button
          onClick={onExport}
          className="flex items-center gap-2 bg-surface-container-highest border border-outline-variant text-on-surface px-4 py-2 rounded-lg font-label-caps text-label-caps self-end h-[42px] hover:bg-surface-variant transition-colors"
        >
          <Icon name="ios_share" size="18px" />
          Export
        </button>
      )}
    </div>
  )
}
