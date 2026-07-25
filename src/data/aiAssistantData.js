export const conversationGroups = [
  {
    label: 'Today',
    items: [
      { id: 'c1', title: 'Analyze Sarjapur Robbery Pattern', meta: '12:45 PM • 4 messages', active: true },
      { id: 'c2', title: 'Indiranagar Drug Peddling Linkage', meta: '10:20 AM • 12 messages' },
    ],
  },
  {
    label: 'Yesterday',
    items: [
      { id: 'c3', title: 'Election Safety Briefing Draft', meta: '04:15 PM • 8 messages' },
      { id: 'c4', title: 'Missing Persons: Hebbal Sector', meta: '09:00 AM • 3 messages' },
    ],
  },
  {
    label: 'Archive',
    items: [{ id: 'c5', title: 'Cyber Crime Node: Malleshwaram', meta: 'Mar 12 • 22 messages' }],
  },
]

export const initialMessages = [
  {
    id: 'm1',
    role: 'user',
    text: 'Check if there are any similarities between the robbery cases on Sarjapur Road.',
    time: '12:45 PM',
    status: 'Delivered',
  },
  {
    id: 'm2',
    role: 'ai',
    text: 'I have analyzed 5 cases reported in the Sarjapur Sector over the last 30 days. There is an 85% confidence score indicating a serial pattern.',
    dataCards: [
      { icon: 'schedule', iconColor: 'text-secondary', label: 'Peak Window', value: '22:00 - 01:30' },
      { icon: 'directions_bike', iconColor: 'text-status-critical', label: 'Modus Operandi', value: 'Grey Scooter / Knife-point' },
    ],
    summaryAction: 'Review Full File',
  },
]

export const suggestedAnalysis = [
  '"Which gangs use similar grey scooters in East Bengaluru?"',
  '"Correlate Sarjapur robberies with prison releases in Marathahalli."',
]

export const quickPrompts = [
  'Show heatmap for this pattern',
  'Cross-reference with Bellandur records',
  'Draft FIR summary',
]

export const relatedCasesDetailed = [
  {
    id: 'FIR-2024-891',
    severity: 'Critical',
    title: 'Attempted Robbery: Kaikondrahalli',
    similarity: '92% (Same MO, Time, Vehicle)',
  },
  {
    id: 'FIR-2024-742',
    severity: 'Moderate',
    title: 'Phone Snatching: HSR Layout',
    similarity: '68% (Same Vehicle, Different weapon)',
  },
]

export const regionalStats = {
  region: 'Sarjapur',
  riseThisMonth: '14%',
  suspectsActive: '08',
  patrolSaturation: 'Low',
  solvedRate: '34%',
}
