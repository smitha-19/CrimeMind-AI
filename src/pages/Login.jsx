import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Icon from '../components/ui/Icon.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')

  const from = location.state?.from?.pathname || '/dashboard'

  function handleSubmit(e) {
    e.preventDefault()
    if (!username.trim() || !password.trim()) {
      setError('Please enter both your Service ID and password.')
      return
    }
    setError('')
    login({ username, rememberMe })
    navigate(from, { replace: true })
  }

  return (
    <div className="bg-primary-container text-on-surface font-body-md min-h-screen flex flex-col lg:flex-row">
      {/* Left Side: Login Form */}
      <main className="w-full lg:w-[480px] min-h-screen flex flex-col justify-center items-center p-6 sm:p-container-padding bg-surface-container-lowest z-10 relative">
        <div className="w-full max-w-md space-y-8">
          {/* Logo & Brand Section */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 rounded-xl bg-surface-card flex items-center justify-center shadow-lg border border-outline-variant overflow-hidden p-2">
              <Icon name="shield_person" className="text-primary-container" size="40px" filled />
            </div>
            <div className="space-y-1">
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">CrimeMind AI</h1>
              <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                KSP Intelligence Unit Portal
              </p>
            </div>
          </div>

          {/* Login Card */}
          <div className="bg-surface-card dark:bg-surface-container rounded-xl p-6 sm:p-8 shadow-2xl border border-outline-variant/30 space-y-6">
            <div className="space-y-2">
              <h2 className="font-headline-md text-headline-md text-on-surface">Secure Access</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Authorized Personnel Only. Please verify your identity.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="username">
                  Username / Service ID
                </label>
                <div className="relative">
                  <Icon
                    name="badge"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]"
                  />
                  <input
                    className="w-full h-12 pl-10 pr-4 rounded-lg bg-surface-container-low border border-outline-variant text-on-surface placeholder:text-outline focus:outline-none focus:border-primary transition-all auth-input"
                    id="username"
                    placeholder="e.g. KSP_99482"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant" htmlFor="password">
                  Security Password
                </label>
                <div className="relative">
                  <Icon
                    name="lock"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]"
                  />
                  <input
                    className="w-full h-12 pl-10 pr-4 rounded-lg bg-surface-container-low border border-outline-variant text-on-surface placeholder:text-outline focus:outline-none focus:border-primary transition-all auth-input"
                    id="password"
                    placeholder="••••••••"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                </div>
              </div>

              {error && (
                <p className="text-status-critical text-body-sm bg-status-critical/10 border border-status-critical/20 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <div className="flex items-center justify-between py-1">
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    className="w-4 h-4 rounded border-outline-variant bg-surface-container-low text-primary focus:ring-offset-surface focus:ring-primary"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                    Remember Me
                  </span>
                </label>
                <a className="font-body-sm text-body-sm text-primary hover:underline decoration-primary/30" href="#">
                  Forgot Password?
                </a>
              </div>

              <button
                className="w-full h-12 bg-primary text-on-primary font-headline-md text-body-md rounded-lg flex items-center justify-center space-x-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-primary/10"
                type="submit"
              >
                <Icon name="login" size="20px" filled />
                <span>Secure Login</span>
              </button>
            </form>

            <div className="pt-4 border-t border-outline-variant/30 text-center">
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Trouble logging in? <a className="text-primary font-medium hover:underline" href="#">Contact System Admin</a>
              </p>
            </div>
          </div>

          {/* Status Footer */}
          <div className="flex items-center justify-center space-x-6 text-on-surface-variant/40">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-status-success animate-pulse" />
              <span className="font-label-caps text-[10px]">Server: Optimal</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="verified_user" size="14px" />
              <span className="font-label-caps text-[10px]">AES-256 Encrypted</span>
            </div>
          </div>
        </div>
      </main>

      {/* Right Side: Immersive Visual Section */}
      <aside className="hidden lg:flex flex-1 relative bg-primary-container overflow-hidden items-center justify-center">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 w-full max-w-2xl px-12 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="font-display-lg text-display-lg text-primary-fixed leading-tight">
              Vigilance Powered by Intelligence.
            </h2>
            <p className="text-on-primary-container font-body-md text-headline-md max-w-lg mx-auto opacity-80 leading-relaxed">
              Transforming raw crime data into actionable foresight. Welcome to the Command Center of the Future.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel-light p-6 rounded-2xl flex flex-col items-start text-left space-y-3 group hover:border-primary/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <Icon name="hub" />
              </div>
              <h3 className="font-headline-md text-body-md text-on-surface">Network Analysis</h3>
              <p className="font-body-sm text-on-surface-variant">
                Reveal hidden links between criminal entities across multi-source intelligence.
              </p>
            </div>
            <div className="glass-panel-light p-6 rounded-2xl flex flex-col items-start text-left space-y-3 group hover:border-primary/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                <Icon name="analytics" />
              </div>
              <h3 className="font-headline-md text-body-md text-on-surface">Predictive Heatmaps</h3>
              <p className="font-body-sm text-on-surface-variant">
                Deploy resources more effectively using AI-driven crime density forecasts.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 glass-panel-light p-4 rounded-xl border-outline-variant/20 shadow-2xl animate-bounce-slow">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center overflow-hidden">
                <Icon name="network_intelligence" className="text-primary" />
              </div>
              <div className="text-left">
                <div className="font-label-caps text-label-caps text-primary">LIVE SCANNER</div>
                <div className="font-data-mono text-data-mono text-on-surface text-[11px]">
                  78.4% RISK DETECTED AT NODE B7
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] animate-pulse-slow" />
      </aside>
    </div>
  )
}
