export const analyticsKpis = [
  {
    id: 'total-firs',
    label: 'Total FIRs',
    value: '14,282',
    icon: 'description',
    iconColor: 'text-primary',
    trend: { direction: 'down', value: '4.2%', tone: 'success' },
    footnote: 'Vs. previous 30 days',
  },
  {
    id: 'detection-rate',
    label: 'Detection Rate',
    value: '68.4%',
    icon: 'verified',
    iconColor: 'text-secondary',
    trend: { direction: 'up', value: '1.8%', tone: 'success' },
    footnote: 'KSP Benchmark: 65%',
  },
  {
    id: 'risk-index',
    label: 'Risk Index',
    value: '4.2',
    icon: 'warning',
    iconColor: 'text-status-warning',
    trend: { direction: 'up', value: '0.5%', tone: 'critical' },
    footnote: 'Moderate alert level',
  },
]

export const monthlyTrendBars = [
  { month: 'JAN', height: 40 },
  { month: 'FEB', height: 55 },
  { month: 'MAR', height: 45 },
  { month: 'APR', height: 70 },
  { month: 'MAY', height: 60 },
  { month: 'JUN', height: 85 },
  { month: 'JUL', height: 95, highlight: true },
  { month: 'AUG', height: 65 },
]

export const distributionBreakdown = [
  { label: 'Cyber Crime', value: 42.5, color: 'bg-primary' },
  { label: 'Financial Fraud', value: 28.1, color: 'bg-secondary' },
  { label: 'Public Nuisance', value: 15.4, color: 'bg-tertiary' },
  { label: 'Others', value: 14.0, color: 'bg-outline' },
]

export const districtComparison = [
  { district: 'Bengaluru City', cases: '4,821', percent: 85 },
  { district: 'Mysuru City', cases: '2,140', percent: 45 },
  { district: 'Mangaluru City', cases: '1,890', percent: 38 },
  { district: 'Belagavi', cases: '1,245', percent: 25 },
  { district: 'Hubballi-Dharwad', cases: '940', percent: 18 },
]

export const repeatOffenders = [
  { id: 'KSP-74291', priors: '3 Prior Offenses', risk: 92, status: 'Surveillance', tone: 'critical' },
  { id: 'KSP-11082', priors: '5 Prior Offenses', risk: 78, status: 'Monitoring', tone: 'warning' },
  { id: 'KSP-33941', priors: '2 Prior Offenses', risk: 45, status: 'Low Risk', tone: 'success' },
]
