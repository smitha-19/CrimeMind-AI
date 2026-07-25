import { useNavigate } from 'react-router-dom'
import Icon from '../ui/Icon.jsx'

export default function QuickActions() {
  const navigate = useNavigate()

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 flex flex-col gap-4 z-40">
      <button
        className="group hidden sm:flex items-center gap-3 bg-surface-container-high hover:bg-primary hover:text-on-primary border border-outline-variant p-3 rounded-full shadow-2xl transition-all duration-300"
        onClick={() => navigate('/reports')}
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold px-0 group-hover:px-2 whitespace-nowrap">
          Generate Report
        </span>
        <Icon name="description" />
      </button>
      <button
        className="flex items-center gap-3 bg-primary text-on-primary px-5 sm:px-6 py-3 sm:py-4 rounded-full shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
        onClick={() => navigate('/ai-assistant')}
      >
        <span className="font-bold hidden sm:inline">Ask CrimeMind</span>
        <Icon name="smart_toy" />
      </button>
    </div>
  )
}
