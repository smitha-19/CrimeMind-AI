import { NavLink } from 'react-router-dom'
import Icon from '../ui/Icon.jsx'

const NAV_ITEMS = [
  { to: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
  { to: '/ai-assistant', label: 'AI Assistant', icon: 'smart_toy' },
  { to: '/crime-analytics', label: 'Crime Analytics', icon: 'analytics' },
  { to: '/crime-heatmap', label: 'Crime Heatmap', icon: 'map' },
  { to: '/criminal-network', label: 'Criminal Network', icon: 'hub' },
  { to: '/reports', label: 'Reports', icon: 'description' },
  { to: '/officers', label: 'Users', icon: 'group' },
  { to: '/settings', label: 'Settings', icon: 'settings' },
]

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-screen w-sidebar-width border-r border-outline-variant bg-surface flex flex-col py-base z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="px-6 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center shrink-0">
              <Icon name="security" className="text-primary" filled />
            </div>
            <div>
              <h1 className="font-headline-md text-headline-md font-bold text-primary tracking-tight leading-none">
                CrimeMind AI
              </h1>
              <p className="font-label-caps text-[10px] text-on-surface-variant tracking-widest uppercase">
                KSP Intelligence Unit
              </p>
            </div>
          </div>
          <button
            className="lg:hidden text-on-surface-variant hover:text-on-surface"
            onClick={onClose}
            aria-label="Close menu"
          >
            <Icon name="close" />
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1 overflow-y-auto custom-scrollbar">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all active:scale-95 ${
                  isActive
                    ? 'text-primary font-bold border-r-4 border-primary bg-primary-container/20'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon name={item.icon} filled={isActive} />
                  <span className="font-body-md text-body-md">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="px-3 mt-auto space-y-4 pt-4">
          <button className="w-full py-4 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-primary/10">
            <Icon name="bolt" size="20px" />
            Ask CrimeMind
          </button>
          <a
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface transition-colors"
            href="#"
          >
            <Icon name="help" />
            <span className="font-body-md text-body-md">Help Center</span>
          </a>
        </div>
      </aside>
    </>
  )
}
