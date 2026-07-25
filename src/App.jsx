import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from './layouts/AppLayout.jsx'
import ProtectedRoute from './router/ProtectedRoute.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import AIAssistant from './pages/AIAssistant.jsx'
import CrimeAnalytics from './pages/CrimeAnalytics.jsx'
import CrimeHeatmap from './pages/CrimeHeatmap.jsx'
import CriminalNetwork from './pages/CriminalNetwork.jsx'
import Reports from './pages/Reports.jsx'
import OfficerManagement from './pages/OfficerManagement.jsx'
import Settings from './pages/Settings.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<Login />} />

      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/crime-analytics" element={<CrimeAnalytics />} />
        <Route path="/crime-heatmap" element={<CrimeHeatmap />} />
        <Route path="/criminal-network" element={<CriminalNetwork />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/officers" element={<OfficerManagement />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
