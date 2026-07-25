import Icon from '../ui/Icon.jsx'
import { reportPreviewMeta } from '../../data/reportsData.js'

export default function ReportPreview({ report, className = '' }) {
  if (!report) return null

  return (
    <aside className={`w-full lg:w-96 flex flex-col gap-gutter ${className}`}>
      <div className="glass-panel border border-outline-variant rounded-xl flex flex-col lg:sticky lg:top-[calc(theme(spacing.topbar-height)+theme(spacing.gutter))]">
        <div className="p-6 border-b border-outline-variant">
          <h2 className="font-headline-md text-on-surface mb-1">Report Preview</h2>
          <p className="text-on-surface-variant text-body-sm">{report.title}</p>
        </div>
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="relative group rounded-lg overflow-hidden border border-outline-variant mb-6 bg-surface-container-lowest aspect-[3/4] flex items-center justify-center">
            <Icon name={report.icon} className={`${report.iconColor} opacity-20`} size="72px" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
            <button className="absolute inset-0 m-auto w-12 h-12 h-fit self-center bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-on-surface border border-white/20 hover:bg-white/20 transition-all">
              <Icon name="zoom_in" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider mb-1">Pages</p>
                <p className="text-on-surface font-bold">{reportPreviewMeta.pages}</p>
              </div>
              <div>
                <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider mb-1">Size</p>
                <p className="text-on-surface font-bold">{reportPreviewMeta.size}</p>
              </div>
            </div>
            <div>
              <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider mb-1">
                Executive Summary Snippet
              </p>
              <p className="text-on-surface-variant text-body-sm leading-relaxed italic">
                "{reportPreviewMeta.summary}"
              </p>
            </div>
            <div>
              <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-wider mb-2">
                Confidence Level
              </p>
              <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full" style={{ width: `${reportPreviewMeta.confidence}%` }} />
              </div>
              <p className="text-right text-[12px] text-primary mt-1 font-bold">
                {reportPreviewMeta.confidence}% Intelligence Accuracy
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-surface-container-highest/50 border-t border-outline-variant flex flex-col gap-3">
          <button className="w-full bg-primary text-on-primary font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:brightness-105 transition-all">
            <Icon name="download" />
            Download PDF
          </button>
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-surface-container-high text-on-surface border border-outline-variant py-2 rounded-lg flex items-center justify-center gap-2 text-body-sm hover:bg-surface-variant transition-colors">
              <Icon name="share" size="18px" />
              Share
            </button>
            <button className="bg-surface-container-high text-on-surface border border-outline-variant py-2 rounded-lg flex items-center justify-center gap-2 text-body-sm hover:bg-surface-variant transition-colors">
              <Icon name="print" size="18px" />
              Print
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
