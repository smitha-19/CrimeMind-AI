import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '../ui/Icon.jsx'
import { useAuth } from '../../context/AuthContext.jsx'
import { notifications } from '../../data/mockData.js'

export default function Topbar({ onMenuClick }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [notifOpen, setNotifOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const notifRef = useRef(null)
  const profileRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false)
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const unreadCount = notifications.filter((n) => n.unread).length

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-sidebar-width h-topbar-height bg-surface/80 backdrop-blur-md border-b border-outline-variant shadow-sm flex items-center justify-between px-4 sm:px-container-padding z-30">
      <div className="flex items-center gap-3 flex-1">
        <button
          className="lg:hidden text-on-surface-variant hover:text-on-surface"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <Icon name="menu" />
        </button>
        <div className="relative w-full max-w-md hidden sm:block">
          <Icon
            name="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]"
          />
          <input
            className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-16 text-body-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none"
            placeholder="Search criminal records, FIR numbers, or AI insights..."
            type="text"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 font-data-mono text-[10px] text-on-surface-variant bg-surface px-1.5 py-0.5 rounded border border-outline-variant hidden md:inline-block">
            CMD+K
          </kbd>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-6">
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            className="sm:hidden text-on-surface-variant hover:text-primary cursor-pointer transition-colors"
            aria-label="Search"
          >
            <Icon name="search" />
          </button>

          <div className="relative" ref={notifRef}>
            <button
              className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors relative"
              onClick={() => setNotifOpen((v) => !v)}
              aria-label="Notifications"
            >
              <Icon name="notifications" />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-status-critical rounded-full border-2 border-surface" />
              )}
            </button>
            {notifOpen && (
              <div className="absolute right-0 mt-3 w-80 bg-surface-container-low border border-outline-variant rounded-xl shadow-2xl overflow-hidden z-50">
                <div className="p-4 border-b border-outline-variant font-title-lg text-title-lg font-bold">
                  Notifications
                </div>
                <div className="max-h-80 overflow-y-auto custom-scrollbar divide-y divide-outline-variant/30">
                  {notifications.map((n) => (
                    <div key={n.id} className="p-4 hover:bg-surface-container-high transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-body-sm font-bold">{n.title}</p>
                        {n.unread && <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />}
                      </div>
                      <p className="text-[12px] text-on-surface-variant mt-1">{n.description}</p>
                      <span className="font-data-mono text-[10px] text-on-surface-variant mt-2 block">
                        {n.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors"
            onClick={() => navigate('/settings')}
            aria-label="Settings"
          >
            <Icon name="settings" />
          </button>
        </div>

        <button
          className="hidden md:flex bg-primary-container text-primary font-label-caps px-4 py-2 rounded-lg hover:bg-primary-container/80 transition-all"
          onClick={() => navigate('/reports')}
        >
          Generate Report
        </button>

        <div className="relative" ref={profileRef}>
          <button
            className="flex items-center gap-3 border-l border-outline-variant pl-3 sm:pl-6"
            onClick={() => setProfileOpen((v) => !v)}
          >
            <div className="text-right hidden sm:block">
              <p className="font-body-sm text-body-sm font-bold">{user?.name || 'ACP Vikrant Singh'}</p>
              <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider">
                {user?.role || 'Unit Head'}
              </p>
            </div>
            <img
              className="w-10 h-10 rounded-full border border-outline object-cover"
              src={
                user?.avatar ||
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBP_gko_hCNb7ynRxzNY1zu4KttTlYw7q7xFPDGD9Ncj6Y0wyY0BaKo0KY4LwwHGY5hV00mPoSp_ARBBCcxSCEnnMibvw67P9hkF9nfvM0e_8XslY7Mw3DE89Qy4d9sPNBllHOBReMvLa2VBhkIGsPts-U-B7kWIKKuV7LKk_OL3eyhkc-gsX4OFNonG6gdJ9LJnQiGtDO59-7DozAdPANmqCtMp2Vg9IWhtdJvpS0YZBRSGpi_Zxh9'
              }
              alt="User avatar"
            />
          </button>
          {profileOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-surface-container-low border border-outline-variant rounded-xl shadow-2xl overflow-hidden z-50">
              <div className="p-4 border-b border-outline-variant">
                <p className="text-body-sm font-bold">{user?.name}</p>
                <p className="text-[11px] text-on-surface-variant">{user?.serviceId}</p>
              </div>
              <button
                className="w-full flex items-center gap-2 px-4 py-3 text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                onClick={() => {
                  setProfileOpen(false)
                  navigate('/settings')
                }}
              >
                <Icon name="person" size="18px" />
                Profile Settings
              </button>
              <button
                className="w-full flex items-center gap-2 px-4 py-3 text-body-sm text-status-critical hover:bg-surface-container-high transition-colors"
                onClick={() => {
                  logout()
                  navigate('/login')
                }}
              >
                <Icon name="logout" size="18px" />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
