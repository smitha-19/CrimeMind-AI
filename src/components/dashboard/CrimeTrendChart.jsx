export default function CrimeTrendChart() {
  return (
    <div className="col-span-12 lg:col-span-6 bg-surface-container-low border border-outline-variant rounded-xl p-6 h-[360px] sm:h-[400px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-title-lg text-title-lg font-bold">Crime Trends</h2>
          <p className="text-on-surface-variant text-body-sm">
            Visualizing incident reports across Karnataka over 30 days
          </p>
        </div>
        <select className="bg-surface border border-outline-variant text-body-sm rounded px-3 py-1 outline-none">
          <option>Last 30 Days</option>
          <option>Last 6 Months</option>
        </select>
      </div>
      <div className="flex-1 relative">
        <div className="absolute inset-0 flex items-end justify-between px-2 gap-4">
          <div className="w-full h-[60%] border-b-2 border-primary/20 relative group">
            <div className="absolute bottom-0 w-full h-[80%] bg-gradient-to-t from-primary/10 to-transparent" />
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path
                d="M0,80 Q25,20 50,60 T100,30"
                fill="none"
                stroke="#b5c7ea"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M0,90 Q25,40 50,80 T100,50"
                fill="none"
                stroke="#a2c9ff"
                strokeDasharray="4"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex justify-between font-data-mono text-[10px] text-on-surface-variant pt-4">
          <span>WK 1</span>
          <span>WK 2</span>
          <span>WK 3</span>
          <span>WK 4</span>
        </div>
      </div>
    </div>
  )
}
