import { useState } from 'react'
import Icon from '../components/ui/Icon.jsx'
import ReportsTable from '../components/reports/ReportsTable.jsx'
import ReportPreview from '../components/reports/ReportPreview.jsx'
import { reportActionCards, generatedReports } from '../data/reportsData.js'

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState(generatedReports[0])

  return (
    <div className="p-4 sm:p-gutter flex flex-col lg:flex-row gap-gutter">
      {/* Left Content Area */}
      <div className="flex-1 flex flex-col gap-gutter max-w-6xl">
        {/* Top Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
          {reportActionCards.map((card) => (
            <div
              key={card.id}
              className={`p-6 rounded-xl relative overflow-hidden group cursor-pointer hover:border-primary transition-all border border-outline-variant ${
                card.variant === 'primary' ? 'bg-primary-container' : 'bg-surface-container'
              }`}
            >
              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    card.variant === 'primary'
                      ? 'bg-primary text-on-primary'
                      : `bg-surface-container-high ${card.iconColor}`
                  }`}
                >
                  <Icon name={card.icon} />
                </div>
                <h3
                  className={`font-headline-md text-headline-md mb-1 ${
                    card.variant === 'primary' ? 'text-primary' : 'text-on-surface'
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-body-sm ${
                    card.variant === 'primary' ? 'text-on-primary-container' : 'text-on-surface-variant'
                  }`}
                >
                  {card.description}
                </p>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon name={card.bgIcon || card.icon} className="text-9xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Filters and Table Container */}
        <div className="bg-surface-container border border-outline-variant rounded-xl flex flex-col flex-1 shadow-sm">
          <div className="p-4 border-b border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <h2 className="font-headline-md text-on-surface px-2">Generated Reports</h2>
              <div className="hidden sm:block h-6 w-px bg-outline-variant" />
              <div className="flex gap-2">
                <button className="bg-surface-container-high text-on-surface-variant px-3 py-1.5 rounded-full text-body-sm flex items-center gap-2 hover:text-on-surface">
                  <Icon name="filter_list" size="18px" />
                  Filter
                </button>
                <button className="bg-surface-container-high text-on-surface-variant px-3 py-1.5 rounded-full text-body-sm flex items-center gap-2 hover:text-on-surface">
                  <Icon name="calendar_today" size="18px" />
                  Date Range
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-on-surface-variant text-[12px] font-label-caps uppercase mr-2">Sort by:</p>
              <select className="bg-transparent border-none text-on-surface text-body-sm focus:ring-0 cursor-pointer">
                <option>Latest First</option>
                <option>Oldest First</option>
                <option>Report Type</option>
              </select>
            </div>
          </div>

          <ReportsTable reports={generatedReports} selectedId={selectedReport?.id} onSelect={setSelectedReport} />

          <div className="p-4 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-3 mt-auto">
            <p className="text-on-surface-variant text-body-sm">Showing 1-4 of 42 reports</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-high text-on-surface-variant">
                Previous
              </button>
              <button className="px-3 py-1 bg-primary text-on-primary rounded font-bold">1</button>
              <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-high text-on-surface-variant">
                2
              </button>
              <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-high text-on-surface-variant">
                3
              </button>
              <button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-container-high text-on-surface-variant">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <ReportPreview report={selectedReport} />
    </div>
  )
}
