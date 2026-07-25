import { useState } from 'react'
import Icon from '../ui/Icon.jsx'

export default function ConversationHistory({ groups, activeId, onSelect, className = '' }) {
  const [filter, setFilter] = useState('')

  return (
    <section className={`w-full lg:w-80 border-r border-outline-variant flex flex-col bg-surface-container-lowest ${className}`}>
      <div className="p-4 border-b border-outline-variant">
        <h2 className="font-title-lg text-title-lg font-bold mb-4">Conversations</h2>
        <div className="relative">
          <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" />
          <input
            className="w-full bg-surface-container-high border-none rounded-lg py-2 pl-9 pr-4 text-body-sm text-on-surface focus:ring-1 focus:ring-primary/50 outline-none"
            placeholder="Filter history..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
        {groups.map((group) => {
          const items = group.items.filter((i) => i.title.toLowerCase().includes(filter.toLowerCase()))
          if (items.length === 0) return null
          return (
            <div key={group.label}>
              <p className="px-3 py-2 mt-2 first:mt-0 font-label-caps text-label-caps text-on-surface-variant/60">
                {group.label}
              </p>
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelect(item.id)}
                  className={`w-full flex flex-col gap-1 p-3 rounded-xl text-left transition-all group ${
                    item.id === activeId
                      ? 'bg-primary-container/20 border-r-2 border-primary'
                      : 'hover:bg-surface-container-high'
                  }`}
                >
                  <span
                    className={`font-body-md truncate ${
                      item.id === activeId ? 'font-semibold text-on-surface' : 'text-on-surface group-hover:text-primary'
                    }`}
                  >
                    {item.title}
                  </span>
                  <span className="text-[11px] text-on-surface-variant uppercase tracking-tighter">{item.meta}</span>
                </button>
              ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}
