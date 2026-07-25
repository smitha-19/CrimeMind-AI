import Badge from '../ui/Badge.jsx'

export default function LatestFirTable({ data }) {
  return (
    <div className="col-span-12 lg:col-span-8 bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden flex flex-col">
      <div className="p-6 border-b border-outline-variant flex justify-between items-center">
        <h2 className="font-title-lg text-title-lg font-bold">Latest FIR Filings</h2>
        <button className="text-primary text-body-sm font-bold">View Full Registry</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-surface-container-highest/50 font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest">
              <th className="px-6 py-4">FIR Number</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Reporting Officer</th>
              <th className="px-6 py-4 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/30">
            {data.map((fir) => (
              <tr key={fir.id} className="hover:bg-surface-container-high transition-colors group">
                <td className="px-6 py-4 font-data-mono text-primary">{fir.id}</td>
                <td className="px-6 py-4 text-body-sm">{fir.category}</td>
                <td className="px-6 py-4 text-body-sm">{fir.location}</td>
                <td className="px-6 py-4 text-body-sm">{fir.officer}</td>
                <td className="px-6 py-4 text-right">
                  <Badge status={fir.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
