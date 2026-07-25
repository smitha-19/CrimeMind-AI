import Icon from './Icon.jsx'

export default function Modal({ open, onClose, title, subtitle, icon = 'shield_lock', children, footer }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative bg-surface border border-outline-variant w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        <div className="p-6 border-b border-outline-variant flex items-center justify-between bg-surface-container-high/50 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/20 rounded-lg text-primary">
              <Icon name={icon} />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md">{title}</h3>
              {subtitle && <p className="font-body-sm text-on-surface-variant">{subtitle}</p>}
            </div>
          </div>
          <button className="text-on-surface-variant hover:text-on-surface transition-colors" onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar">{children}</div>
        {footer && <div className="p-6 border-t border-outline-variant bg-surface-container-high/30 shrink-0">{footer}</div>}
      </div>
    </div>
  )
}
