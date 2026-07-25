import KpiCard from '../components/dashboard/KpiCard.jsx'
import AiRiskScoreCard from '../components/dashboard/AiRiskScoreCard.jsx'
import CrimeTrendChart from '../components/dashboard/CrimeTrendChart.jsx'
import CategoryDistributionCard from '../components/dashboard/CategoryDistributionCard.jsx'
import AiInsightsCard from '../components/dashboard/AiInsightsCard.jsx'
import LatestFirTable from '../components/dashboard/LatestFirTable.jsx'
import ActivityFeed from '../components/dashboard/ActivityFeed.jsx'
import {
  kpiCards,
  aiRiskScore,
  crimeCategoryDistribution,
  aiInsights,
  latestFIRs,
  activityFeed,
} from '../data/mockData.js'

export default function Dashboard() {
  return (
    <div className="p-4 sm:p-container-padding">
      {/* Top KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter mb-gutter">
        {kpiCards.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
        <AiRiskScoreCard {...aiRiskScore} />
      </div>

      {/* Middle Section: Charts & AI Summary */}
      <div className="grid grid-cols-12 gap-gutter mb-gutter">
        <CrimeTrendChart />
        <CategoryDistributionCard data={crimeCategoryDistribution} />
        <AiInsightsCard insights={aiInsights} />
      </div>

      {/* Bottom Section: Alerts & Tables */}
      <div className="grid grid-cols-12 gap-gutter">
        <LatestFirTable data={latestFIRs} />
        <ActivityFeed items={activityFeed} />
      </div>
    </div>
  )
}
