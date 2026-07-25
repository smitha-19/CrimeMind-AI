import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar.jsx'
import Topbar from '../components/layout/Topbar.jsx'
import QuickActions from '../components/layout/QuickActions.jsx'

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body-md selection:bg-primary/30">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Topbar onMenuClick={() => setSidebarOpen(true)} />

      <main className="lg:ml-sidebar-width pt-topbar-height min-h-screen overflow-x-hidden">
        <Outlet />
      </main>

      <QuickActions />
    </div>
  )
}
