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
      if (notifRef.current && !notifRef.current.contains(e.target))
        setNotifOpen(false)

      if (profileRef.current && !profileRef.current.contains(e.target))
        setProfileOpen(false)
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
        >
          <Icon name="menu" />
        </button>

        <div className="relative w-full max-w-md hidden sm:block">
          <Icon
            name="search"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]"
          />

          <input
            className="w-full bg-surface-container-low rounded-full py-2 pl-10 pr-16 outline-none"
            placeholder="Search criminal records, FIR numbers, or AI insights..."
          />
        </div>
      </div>


      <div className="flex items-center gap-4">

        <button
          className="text-on-surface-variant hover:text-primary"
          onClick={() => navigate('/settings')}
        >
          <Icon name="settings" />
        </button>


        {/* Profile */}
        <div className="relative" ref={profileRef}>

          <button
            className="flex items-center gap-3 border-l border-outline-variant pl-4"
            onClick={() => setProfileOpen((v) => !v)}
          >

            <div className="text-right hidden sm:block">

              <p className="font-body-sm font-bold">
                {user?.name || "Smitha Keneeth A"}
              </p>

              <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">
                {user?.role || "Team Leader"}
              </p>

            </div>


            <img
              className="w-10 h-10 rounded-full border object-cover"
              src={
                user?.avatar ||
                "https://api.dicebear.com/9.x/notionists/svg?seed=Smitha"
              }
              alt="User avatar"
            />

          </button>



          {profileOpen && (

            <div className="absolute right-0 mt-3 w-56 bg-surface-container-low border rounded-xl shadow-xl">

              <div className="p-4 border-b">

                <p className="font-bold">
                  {user?.name || "Smitha Keneeth A"}
                </p>

                <p className="text-[11px] text-on-surface-variant">
                  {user?.serviceId || "24205099"}
                </p>

              </div>


              <button
                className="w-full px-4 py-3 text-left hover:bg-surface-container-high"
                onClick={() => navigate('/settings')}
              >
                <Icon name="person" size="18px" />
                Profile Settings
              </button>


              <button
                className="w-full px-4 py-3 text-left text-status-critical hover:bg-surface-container-high"
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