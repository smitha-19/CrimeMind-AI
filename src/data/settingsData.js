export const settingsTabs = [
  { id: 'profile', label: 'Profile', icon: 'person' },
  { id: 'security', label: 'Security', icon: 'lock' },
  { id: 'notifications', label: 'Notifications', icon: 'notifications' },
  { id: 'appearance', label: 'Appearance', icon: 'palette' },
  { id: 'system', label: 'System', icon: 'dns' },
]

export const notificationPreferences = [
  { id: 'critical-alerts', label: 'Critical Risk Alerts', description: 'Immediate push notifications for AI-flagged critical events.', enabled: true },
  { id: 'fir-updates', label: 'FIR Status Updates', description: 'Get notified when a case status changes.', enabled: true },
  { id: 'weekly-digest', label: 'Weekly Intelligence Digest', description: 'A summary email of district-wide trends every Monday.', enabled: false },
  { id: 'system-maintenance', label: 'System Maintenance Notices', description: 'Scheduled downtime and platform update alerts.', enabled: true },
]

export const activeSessions = [
  { id: 1, device: 'Chrome on Windows', location: 'Bengaluru, IN', lastActive: 'Active now', current: true },
  { id: 2, device: 'CrimeMind Mobile App', location: 'Mysuru, IN', lastActive: '3 hours ago' },
  { id: 3, device: 'Firefox on Ubuntu', location: 'Hubli, IN', lastActive: '2 days ago' },
]
