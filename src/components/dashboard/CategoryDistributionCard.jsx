export default function CategoryDistributionCard({ data, total = '1.2k' }) {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-surface-container-low border border-outline-variant rounded-xl p-6 h-[360px] sm:h-[400px] flex flex-col">
      <h2 className="font-title-lg text-title-lg font-bold mb-6">Category Dist.</h2>
      <div className="flex-1 flex flex-col items-center justify-center relative">
        <div className="w-40 h-40 rounded-full border-[12px] border-surface-container-high relative flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full border-[12px] border-primary"
            style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 40%)' }}
          />
          <div className="text-center">
            <span className="font-headline-md text-headline-md font-bold">{total}</span>
            <p className="font-label-caps text-[10px] text-on-surface-variant">TOTAL</p>
          </div>
        </div>
        <div className="mt-8 w-full space-y-2">
          {data.map((item) => (
            <div key={item.label} className="flex items-center justify-between text-body-sm">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${item.color}`} /> {item.label}
              </div>
              <span className="font-data-mono">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
