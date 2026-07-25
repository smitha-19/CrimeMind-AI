export const personnelStats = [
  { id: 'total', icon: 'groups', iconBg: 'bg-primary/10', iconColor: 'text-primary', label: 'Total Personnel', value: '1,248', trend: '+2.4%', trendColor: 'text-status-success' },
  { id: 'analysts', icon: 'verified_user', iconBg: 'bg-status-success/10', iconColor: 'text-status-success', label: 'Active Analysts', value: '842', trend: 'Stable', trendColor: 'text-on-surface-variant' },
  { id: 'admins', icon: 'admin_panel_settings', iconBg: 'bg-status-warning/10', iconColor: 'text-status-warning', label: 'System Admins', value: '12', trend: '8 Slots Left', trendColor: 'text-on-surface-variant' },
  { id: 'flagged', icon: 'rule', iconBg: 'bg-status-critical/10', iconColor: 'text-status-critical', label: 'Security Flagged', value: '04', trend: '2 Failed', trendColor: 'text-status-critical' },
]

const ROLE_STYLES = {
  Investigator: 'bg-primary/10 text-primary border-primary/20',
  Analyst: 'bg-tertiary/10 text-tertiary border-tertiary/20',
  Admin: 'bg-status-warning/10 text-status-warning border-status-warning/20',
}

export function roleStyle(role) {
  return ROLE_STYLES[role] || 'bg-surface-container-highest text-on-surface-variant border-outline-variant'
}

export const personnel = [
  { id: 'KSP-7729-INV', initials: 'AK', name: 'Arun Kulkarni', unit: 'Cyber Crime Div.', role: 'Investigator', lastLogin: '12 mins ago', ip: '192.168.1.45' },
  { id: 'KSP-1102-ANL', initials: 'SD', name: 'Sushma Devi', unit: 'Network Intelligence', role: 'Analyst', lastLogin: '2 hours ago', ip: '10.0.0.12' },
  { id: 'KSP-0010-ADM', initials: 'RP', name: 'Ramesh Prasad', unit: 'System Security', role: 'Admin', lastLogin: 'Just now', ip: '172.16.2.1' },
  { id: 'KSP-9021-ANL', initials: 'ML', name: 'Meena Lakshmi', unit: 'Analytics Unit 3', role: 'Analyst', lastLogin: 'Yesterday', ip: '192.168.1.99' },
  { id: 'KSP-4432-INV', initials: 'VS', name: 'Vikram Singh', unit: 'Narcotics Bureau', role: 'Investigator', lastLogin: '3 days ago', ip: '10.12.0.5' },
]

export const activityLog = [
  {
    id: 1,
    tag: 'System Access',
    tagColor: 'text-primary',
    dotColor: 'bg-primary',
    time: '09:42:15',
    text: "A. Kulkarni initiated 'Heatmap Analysis' for Hubli-Dharwad region.",
    meta: 'PID: 7729112',
  },
  {
    id: 2,
    tag: 'Security Audit',
    tagColor: 'text-status-warning',
    dotColor: 'bg-status-warning',
    time: '09:12:04',
    text: 'R. Prasad updated firewall rules for investigative database access.',
    meta: 'Action: CFG_UPD',
  },
  {
    id: 3,
    tag: 'Data Sync',
    tagColor: 'text-status-success',
    dotColor: 'bg-status-success',
    time: '08:45:30',
    text: 'Automated Task: Sync completed with State Criminal Records (SCRB).',
    progress: 100,
  },
  {
    id: 4,
    tag: 'User Logout',
    tagColor: 'text-on-surface-variant',
    dotColor: 'bg-outline-variant',
    time: '08:21:12',
    text: 'S. Devi session ended after 4h 12m active duration.',
  },
]
