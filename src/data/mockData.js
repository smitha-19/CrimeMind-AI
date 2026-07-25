// Centralized mock data for CrimeMind AI
// All data here is fictional and used purely for UI demonstration.

export const kpiCards = [
  {
    id: 'todays-crimes',
    label: "Today's Crimes",
    value: '42',
    icon: 'event_note',
    trend: { direction: 'up', value: '12%', tone: 'success' },
    barColor: 'bg-primary',
    barWidth: '65%',
    iconColor: 'text-primary',
  },
  {
    id: 'active-firs',
    label: 'Active FIRs',
    value: '1,284',
    icon: 'gavel',
    trend: { direction: 'down', value: '4%', tone: 'warning' },
    barColor: 'bg-secondary',
    barWidth: '82%',
    iconColor: 'text-secondary',
  },
  {
    id: 'repeat-offenders',
    label: 'Repeat Offenders',
    value: '312',
    icon: 'person_alert',
    trend: { direction: 'up', value: '22%', tone: 'critical' },
    barColor: 'bg-tertiary',
    barWidth: '45%',
    iconColor: 'text-tertiary',
  },
  {
    id: 'high-risk-districts',
    label: 'High Risk Districts',
    value: '08',
    icon: 'location_on',
    trend: { label: 'Top 3' },
    barColor: 'bg-status-critical',
    barWidth: '70%',
    iconColor: 'text-status-critical',
  },
]

export const aiRiskScore = {
  label: 'AI Risk Score',
  value: 84,
  max: 100,
  status: 'CRITICAL',
}

export const crimeCategoryDistribution = [
  { label: 'Theft', value: 45, color: 'bg-primary' },
  { label: 'Assault', value: 30, color: 'bg-secondary' },
  { label: 'Cyber', value: 15, color: 'bg-tertiary' },
  { label: 'Others', value: 10, color: 'bg-status-warning' },
]

export const aiInsights = [
  {
    id: 1,
    tag: 'HIGH RISK PREDICTION',
    tagColor: 'text-status-critical',
    borderColor: 'border-status-critical',
    title: '92% Probable Escalation',
    description: 'Cluster identified in Shivamogga. Patterns match historical gang unrest signatures.',
    action: 'Deploy Intelligence',
  },
  {
    id: 2,
    tag: 'ANOMALY DETECTED',
    tagColor: 'text-status-warning',
    borderColor: 'border-status-warning',
    title: 'Synthetic Identity Surge',
    description: 'Spike in fraudulent document filings in Tech Zones. Potential cyber syndicate activity.',
  },
  {
    id: 3,
    tag: 'PATTERN MATCH',
    tagColor: 'text-primary',
    borderColor: 'border-primary',
    title: 'Repeat MO Identified',
    description: 'Vehicle theft pattern in Hubli matches unsolved cases from Q1. Suspect vehicle flagged.',
  },
]

export const latestFIRs = [
  {
    id: '#FIR-2023-9021',
    category: 'Aggravated Robbery',
    location: 'Indiranagar, BLR',
    officer: 'Insp. Rahul M.',
    status: 'Active',
  },
  {
    id: '#FIR-2023-8994',
    category: 'Drug Trafficking',
    location: 'Mangaluru Port',
    officer: 'S.I. Sneha Rao',
    status: 'Investigation',
  },
  {
    id: '#FIR-2023-8872',
    category: 'Cyber Fraud',
    location: 'Electronic City',
    officer: 'Insp. Karthik K.',
    status: 'Closed',
  },
  {
    id: '#FIR-2023-8850',
    category: 'Vehicle Theft',
    location: 'Hubli Junction',
    officer: 'S.I. Prakash P.',
    status: 'Active',
  },
  {
    id: '#FIR-2023-8790',
    category: 'Domestic Violence',
    location: 'Jayanagar, BLR',
    officer: 'S.I. Anita D.',
    status: 'Investigation',
  },
]

export const activityFeed = [
  {
    id: 1,
    icon: 'radio',
    iconBg: 'bg-primary-container',
    iconColor: 'text-primary',
    title: 'New Evidence Lodged',
    description: 'CCTV footage from #FIR-2023-9021 uploaded and auto-tagged by AI.',
    time: '2 mins ago',
  },
  {
    id: 2,
    icon: 'gavel',
    iconBg: 'bg-surface-container-highest',
    iconColor: 'text-on-surface-variant',
    title: 'Court Date Set',
    description: 'Case #6672/B (State vs. Reddy) hearing moved to District Court Hall 4.',
    time: '45 mins ago',
  },
  {
    id: 3,
    icon: 'emergency',
    iconBg: 'bg-status-critical/20',
    iconColor: 'text-status-critical',
    title: 'High Priority Alert',
    description: 'Vehicle KA-01-MG-1234 flagged at Toll Plaza NH4. Associated with #FIR-2023-8994.',
    time: '1 hour ago',
    critical: true,
  },
]

export const districts = [
  'All Districts',
  'Bengaluru Urban',
  'Mysuru',
  'Mangaluru',
  'Hubli-Dharwad',
  'Shivamogga',
  'Belagavi',
  'Kalaburagi',
  'Tumakuru',
]

export const crimeTypes = [
  'All Categories',
  'Theft',
  'Assault',
  'Cyber Fraud',
  'Drug Trafficking',
  'Vehicle Theft',
  'Domestic Violence',
  'Robbery',
]

export const officers = [
  {
    id: 'KSP-1001',
    name: 'ACP Vikrant Singh',
    role: 'Admin',
    station: 'City HQ, Bengaluru',
    status: 'Active',
    cases: 12,
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: 'KSP-1042',
    name: 'Insp. Rahul Mehta',
    role: 'Investigator',
    station: 'Indiranagar PS',
    status: 'Active',
    cases: 8,
    avatar: 'https://i.pravatar.cc/150?img=33',
  },
  {
    id: 'KSP-1078',
    name: 'S.I. Sneha Rao',
    role: 'Investigator',
    station: 'Mangaluru Port PS',
    status: 'Active',
    cases: 5,
    avatar: 'https://i.pravatar.cc/150?img=45',
  },
  {
    id: 'KSP-1103',
    name: 'Insp. Karthik Kumar',
    role: 'Analyst',
    station: 'Electronic City PS',
    status: 'On Leave',
    cases: 3,
    avatar: 'https://i.pravatar.cc/150?img=51',
  },
  {
    id: 'KSP-1150',
    name: 'S.I. Prakash Patil',
    role: 'Investigator',
    station: 'Hubli Junction PS',
    status: 'Active',
    cases: 9,
    avatar: 'https://i.pravatar.cc/150?img=14',
  },
  {
    id: 'KSP-1187',
    name: 'S.I. Anita Desai',
    role: 'Analyst',
    station: 'Jayanagar PS',
    status: 'Active',
    cases: 6,
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
]

export const reports = [
  {
    id: 'RPT-3391',
    title: 'Q3 Crime Analytics Summary — Bengaluru Urban',
    type: 'Crime Analytics Report',
    generatedBy: 'ACP Vikrant Singh',
    date: '2024-07-08',
    status: 'Ready',
  },
  {
    id: 'RPT-3388',
    title: 'Heatmap Density Report — Hubli-Dharwad',
    type: 'Heatmap Report',
    generatedBy: 'S.I. Prakash Patil',
    date: '2024-07-07',
    status: 'Ready',
  },
  {
    id: 'RPT-3379',
    title: 'Investigation Summary — FIR-2023-8994',
    type: 'Investigation Summary',
    generatedBy: 'S.I. Sneha Rao',
    date: '2024-07-05',
    status: 'Processing',
  },
  {
    id: 'RPT-3365',
    title: 'AI Assistant Conversation Log — Case 6672/B',
    type: 'Conversation History',
    generatedBy: 'Insp. Karthik Kumar',
    date: '2024-07-02',
    status: 'Ready',
  },
]

export const suggestedPrompts = [
  'Summarize crime trends in Bengaluru for the last month',
  'Which districts show highest repeat offender rates?',
  'Show predicted hotspots for next weekend',
  'List all active cases linked to vehicle theft rings',
]

export const relatedCases = [
  { id: '#FIR-2023-9021', title: 'Aggravated Robbery — Indiranagar' },
  { id: '#FIR-2023-8994', title: 'Drug Trafficking — Mangaluru Port' },
  { id: '#FIR-2023-8872', title: 'Cyber Fraud — Electronic City' },
]

export const networkNodes = [
  { id: 'n1', name: 'Rakesh Verma', role: 'Kingpin', risk: 'critical', x: 50, y: 30 },
  { id: 'n2', name: 'Deepak Shetty', role: 'Associate', risk: 'high', x: 25, y: 55 },
  { id: 'n3', name: 'Manoj Kumar', role: 'Financier', risk: 'high', x: 75, y: 55 },
  { id: 'n4', name: 'Ravi Naik', role: 'Courier', risk: 'medium', x: 15, y: 80 },
  { id: 'n5', name: 'Suresh Gowda', role: 'Courier', risk: 'medium', x: 40, y: 85 },
  { id: 'n6', name: 'Anil Reddy', role: 'Associate', risk: 'low', x: 65, y: 85 },
  { id: 'n7', name: 'Vijay Hegde', role: 'Contact', risk: 'low', x: 88, y: 75 },
]

export const networkEdges = [
  ['n1', 'n2'],
  ['n1', 'n3'],
  ['n2', 'n4'],
  ['n2', 'n5'],
  ['n3', 'n6'],
  ['n3', 'n7'],
]

export const selectedCriminal = {
  name: 'Rakesh Verma',
  alias: '"The Broker"',
  risk: 'Critical',
  connectedCases: 7,
  knownAssociates: 12,
  lastKnownLocation: 'Shivajinagar, Bengaluru',
  timeline: [
    { date: '2024-06-28', event: 'Flagged at Toll Plaza NH4' },
    { date: '2024-05-14', event: 'Named in FIR-2023-8994' },
    { date: '2024-02-02', event: 'Released on bail — Case 5521' },
  ],
}

export const districtStats = [
  { district: 'Bengaluru Urban', crimes: 412, riskLevel: 'High' },
  { district: 'Mysuru', crimes: 198, riskLevel: 'Medium' },
  { district: 'Mangaluru', crimes: 156, riskLevel: 'Medium' },
  { district: 'Hubli-Dharwad', crimes: 134, riskLevel: 'High' },
  { district: 'Shivamogga', crimes: 89, riskLevel: 'Critical' },
]

export const monthlyTrend = [30, 45, 38, 52, 48, 61, 55, 67, 58, 72, 64, 80]

export const notifications = [
  {
    id: 1,
    title: 'High Priority Alert',
    description: 'Vehicle KA-01-MG-1234 flagged at Toll Plaza NH4.',
    time: '2 mins ago',
    unread: true,
  },
  {
    id: 2,
    title: 'Report Ready',
    description: 'Q3 Crime Analytics Summary has finished generating.',
    time: '1 hour ago',
    unread: true,
  },
  {
    id: 3,
    title: 'New Officer Added',
    description: 'S.I. Anita Desai was added to Jayanagar PS.',
    time: 'Yesterday',
    unread: false,
  },
]
