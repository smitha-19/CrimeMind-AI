import { useState } from 'react'
import Icon from '../components/ui/Icon.jsx'
import Toggle from '../components/ui/Toggle.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { settingsTabs, notificationPreferences, activeSessions } from '../data/settingsData.js'

function SectionCard({ title, description, children }) {
  return (
    <div className="bg-surface-container-low border border-outline-variant rounded-xl p-6">
      <h3 className="font-title-lg text-title-lg font-bold mb-1">{title}</h3>
      {description && <p className="text-body-sm text-on-surface-variant mb-6">{description}</p>}
      <div className={description ? '' : 'mt-6'}>{children}</div>
    </div>
  )
}

function ProfileSection({ user }) {
  return (
    <div className="space-y-6">
      <SectionCard title="Profile Information" description="Update your personal details and service information.">
        <div className="flex items-center gap-4 mb-6">
          <img src={user?.avatar} alt={user?.name} className="w-16 h-16 rounded-full border border-outline object-cover" />
          <div>
            <button className="px-4 py-2 bg-surface-container-high border border-outline-variant rounded-lg text-body-sm font-bold hover:bg-surface-variant transition-colors">
              Change Photo
            </button>
            <p className="text-[11px] text-on-surface-variant mt-2">JPG or PNG. Max size 2MB.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="font-label-caps text-label-caps text-on-surface-variant">Full Name</label>
            <input
              defaultValue={user?.name}
              className="w-full bg-surface-container-high border border-outline-variant rounded-lg px-4 py-2.5 text-on-surface focus:ring-2 focus:ring-primary/50 outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="font-label-caps text-label-caps text-on-surface-variant">Service ID</label>
            <input
              defaultValue={user?.serviceId}
              disabled
              className="w-full bg-surface-container-high border border-outline-variant rounded-lg px-4 py-2.5 text-on-surface-variant outline-none opacity-70"
            />
          </div>
          <div className="space-y-2">
            <label className="font-label-caps text-label-caps text-on-surface-variant">Role / Designation</label>
            <input
              defaultValue={user?.role}
              className="w-full bg-surface-container-high border border-outline-variant rounded-lg px-4 py-2.5 text-on-surface focus:ring-2 focus:ring-primary/50 outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="font-label-caps text-label-caps text-on-surface-variant">Email Address</label>
            <input
              defaultValue="vikrant.singh@ksp.gov.in"
              className="w-full bg-surface-container-high border border-outline-variant rounded-lg px-4 py-2.5 text-on-surface focus:ring-2 focus:ring-primary/50 outline-none"
            />
          </div>
        </div>
        <button className="mt-6 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-bold hover:brightness-110 transition-all">
          Save Changes
        </button>
      </SectionCard>
    </div>
  )
}

function SecuritySection() {
  return (
    <div className="space-y-6">
      <SectionCard title="Change Password" description="Choose a strong password you don't use elsewhere.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2 sm:col-span-2">
            <label className="font-label-caps text-label-caps text-on-surface-variant">Current Password</label>
            <input
              type="password"
              className="w-full bg-surface-container-high border border-outline-variant rounded-lg px-4 py-2.5 text-on-surface focus:ring-2 focus:ring-primary/50 outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="font-label-caps text-label-caps text-on-surface-variant">New Password</label>
            <input
              type="password"
              className="w-full bg-surface-container-high border border-outline-variant rounded-lg px-4 py-2.5 text-on-surface focus:ring-2 focus:ring-primary/50 outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="font-label-caps text-label-caps text-on-surface-variant">Confirm New Password</label>
            <input
              type="password"
              className="w-full bg-surface-container-high border border-outline-variant rounded-lg px-4 py-2.5 text-on-surface focus:ring-2 focus:ring-primary/50 outline-none"
            />
          </div>
        </div>
        <button className="mt-6 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-bold hover:brightness-110 transition-all">
          Update Password
        </button>
      </SectionCard>

      <SectionCard title="Two-Factor Authentication" description="Add an extra layer of security to your account.">
        <div className="flex items-center justify-between p-4 bg-surface-container-high rounded-lg">
          <div className="flex items-center gap-3">
            <Icon name="verified_user" className="text-status-success" />
            <div>
              <p className="text-body-sm font-bold">Authenticator App</p>
              <p className="text-[11px] text-on-surface-variant">Enabled since Jan 2026</p>
            </div>
          </div>
          <Toggle checked={true} onChange={() => {}} />
        </div>
      </SectionCard>

      <SectionCard title="Active Sessions" description="Devices currently signed in to your account.">
        <div className="space-y-3">
          {activeSessions.map((s) => (
            <div key={s.id} className="flex items-center justify-between p-3 bg-surface-container-high rounded-lg">
              <div className="flex items-center gap-3">
                <Icon name="devices" className="text-on-surface-variant" />
                <div>
                  <p className="text-body-sm font-bold flex items-center gap-2">
                    {s.device}
                    {s.current && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-status-success/10 text-status-success border border-status-success/20">
                        This device
                      </span>
                    )}
                  </p>
                  <p className="text-[11px] text-on-surface-variant">
                    {s.location} • {s.lastActive}
                  </p>
                </div>
              </div>
              {!s.current && (
                <button className="text-status-critical text-body-sm font-bold hover:underline">Revoke</button>
              )}
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}

function NotificationsSection() {
  const [prefs, setPrefs] = useState(notificationPreferences)
  return (
    <SectionCard title="Notification Preferences" description="Choose what you want to be notified about.">
      <div className="space-y-4">
        {prefs.map((p) => (
          <div key={p.id} className="flex items-center justify-between p-4 bg-surface-container-high rounded-lg gap-4">
            <div>
              <p className="text-body-sm font-bold">{p.label}</p>
              <p className="text-[12px] text-on-surface-variant">{p.description}</p>
            </div>
            <Toggle
              checked={p.enabled}
              onChange={() =>
                setPrefs((prev) => prev.map((item) => (item.id === p.id ? { ...item, enabled: !item.enabled } : item)))
              }
            />
          </div>
        ))}
      </div>
    </SectionCard>
  )
}

function AppearanceSection() {
  const [theme, setTheme] = useState('dark')
  return (
    <SectionCard title="Appearance" description="Customize how CrimeMind AI looks on your device.">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { id: 'dark', label: 'Dark', icon: 'dark_mode' },
          { id: 'light', label: 'Light', icon: 'light_mode' },
          { id: 'system', label: 'System', icon: 'contrast' },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`flex flex-col items-center gap-2 p-6 rounded-xl border transition-all ${
              theme === t.id ? 'border-primary bg-primary-container/20' : 'border-outline-variant bg-surface-container-high'
            }`}
          >
            <Icon name={t.icon} className={theme === t.id ? 'text-primary' : 'text-on-surface-variant'} size="28px" />
            <span className="text-body-sm font-bold">{t.label}</span>
          </button>
        ))}
      </div>
    </SectionCard>
  )
}

function SystemSection() {
  return (
    <SectionCard title="System Information" description="Platform status and environment details.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-surface-container-high rounded-lg">
          <p className="text-[10px] text-on-surface-variant uppercase mb-1">Platform Version</p>
          <p className="font-data-mono text-on-surface">v2.4.1-hackathon</p>
        </div>
        <div className="p-4 bg-surface-container-high rounded-lg">
          <p className="text-[10px] text-on-surface-variant uppercase mb-1">Environment</p>
          <p className="font-data-mono text-status-warning">Demo / Mock Data</p>
        </div>
        <div className="p-4 bg-surface-container-high rounded-lg">
          <p className="text-[10px] text-on-surface-variant uppercase mb-1">API Status</p>
          <p className="font-data-mono text-status-success flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-status-success" /> Not Connected (Frontend Only)
          </p>
        </div>
        <div className="p-4 bg-surface-container-high rounded-lg">
          <p className="text-[10px] text-on-surface-variant uppercase mb-1">Last Sync</p>
          <p className="font-data-mono text-on-surface">N/A</p>
        </div>
      </div>
    </SectionCard>
  )
}

export default function Settings() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="p-4 sm:p-container-padding">
      <div className="mb-8">
        <h2 className="font-headline-xl text-headline-xl text-on-surface mb-1">Settings</h2>
        <p className="text-on-surface-variant font-body-sm">Manage your account, security, and platform preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-gutter">
        {/* Tab navigation */}
        <nav className="lg:w-64 shrink-0">
          <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {settingsTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-container/20 text-primary font-bold border-l-4 border-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                }`}
              >
                <Icon name={tab.icon} filled={activeTab === tab.id} />
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Tab content */}
        <div className="flex-1 min-w-0">
          {activeTab === 'profile' && <ProfileSection user={user} />}
          {activeTab === 'security' && <SecuritySection />}
          {activeTab === 'notifications' && <NotificationsSection />}
          {activeTab === 'appearance' && <AppearanceSection />}
          {activeTab === 'system' && <SystemSection />}
        </div>
      </div>
    </div>
  )
}
