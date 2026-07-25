export const criminalProfiles = {
  n1: {
    name: 'Rahul Rao',
    alias: "The Fixer",
    aliases: 'The Fixer, RR, Shadow-04',
    id: 'KSP-ND-88219',
    avatar: 'https://i.pravatar.cc/150?img=13',
    tags: ['Organized Crime', 'High Risk'],
    age: '34 / Male',
    nationality: 'Indian',
    level: 9,
    connectedCases: [
      { id: 'FIR #102/2024', title: 'Bank Robbery - JP Nagar', status: 'Active', icon: 'gavel', tone: 'critical' },
      { id: 'FIR #442/2024', title: 'Money Laundering Shell', status: 'Under Investigation', icon: 'payments', tone: 'warning' },
    ],
    timeline: [
      { date: 'MAR 14, 2024', title: 'Spotted in Mysore', description: 'Last ping from burner device 99x-12 in South Region.', active: true },
      { date: 'FEB 28, 2024', title: 'Associate Meeting', description: 'CCTV match with Sneha M. at Hebbal Metro.' },
    ],
  },
  n2: {
    name: 'Amit Kumar',
    alias: 'AMIT K.',
    aliases: 'Amit K., The Runner',
    id: 'KSP-ND-88220',
    avatar: 'https://i.pravatar.cc/150?img=32',
    tags: ['Narcotics', 'Medium Risk'],
    age: '28 / Male',
    nationality: 'Indian',
    level: 6,
    connectedCases: [
      { id: 'FIR #221/2024', title: 'Narcotics Transport', status: 'Active', icon: 'gavel', tone: 'critical' },
    ],
    timeline: [
      { date: 'MAR 02, 2024', title: 'Vehicle flagged', description: 'Grey scooter flagged near Sarjapur toll.', active: true },
    ],
  },
  n3: {
    name: 'Sneha M.',
    alias: 'SNEHA M.',
    aliases: 'Sneha M., Ghost Ledger',
    id: 'KSP-ND-88221',
    avatar: 'https://i.pravatar.cc/150?img=48',
    tags: ['Financial Fraud', 'High Risk'],
    age: '31 / Female',
    nationality: 'Indian',
    level: 7,
    connectedCases: [
      { id: 'FIR #442/2024', title: 'Money Laundering Shell', status: 'Under Investigation', icon: 'payments', tone: 'warning' },
    ],
    timeline: [
      { date: 'FEB 28, 2024', title: 'Associate Meeting', description: 'CCTV match with Rahul Rao at Hebbal Metro.', active: true },
    ],
  },
}

export const networkStats = { nodes: '1,204', links: '4.2k' }

export const aiNetworkInsight = (
  "Rahul Rao's connection to Sneha M. is strengthening. Financial flows suggest a potential new operation in Mangaluru next week."
)
