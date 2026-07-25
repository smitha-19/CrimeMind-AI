import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon.jsx'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface p-6">
      <div className="text-center max-w-md">
        <Icon name="report" className="text-status-warning mb-4" size="56px" />
        <h1 className="font-headline-xl text-headline-xl mb-2">404 — Page Not Found</h1>
        <p className="text-on-surface-variant mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-lg font-bold hover:brightness-110 transition-all"
        >
          <Icon name="dashboard" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  )
}
