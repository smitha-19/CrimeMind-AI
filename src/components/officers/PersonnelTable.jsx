import Icon from '../ui/Icon.jsx'
import { roleStyle } from '../../data/officersData.js'

export default function PersonnelTable({ officers, onEdit }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left min-w-[720px]">
        <thead className="bg-surface-container-low/30">
          <tr>
            <th className="px-6 py-4 font-label-caps text-on-surface-variant font-medium tracking-widest text-[11px] border-b border-outline-variant">
              Officer Name
            </th>
            <th className="px-6 py-4 font-label-caps text-on-surface-variant font-medium tracking-widest text-[11px] border-b border-outline-variant">
              Service ID
            </th>
            <th className="px-6 py-4 font-label-caps text-on-surface-variant font-medium tracking-widest text-[11px] border-b border-outline-variant">
              Access Role
            </th>
            <th className="px-6 py-4 font-label-caps text-on-surface-variant font-medium tracking-widest text-[11px] border-b border-outline-variant">
              Last Login
            </th>
            <th className="px-6 py-4 font-label-caps text-on-surface-variant font-medium tracking-widest text-[11px] border-b border-outline-variant text-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant/30">
          {officers.map((o) => (
            <tr key={o.id} className="hover:bg-primary/5 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-primary border border-outline-variant">
                    {o.initials}
                  </div>
                  <div>
                    <p className="font-body-md font-semibold text-on-surface">{o.name}</p>
                    <p className="text-[11px] text-on-surface-variant">{o.unit}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 font-data-mono text-xs text-on-surface-variant">{o.id}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded text-[10px] font-label-caps border ${roleStyle(o.role)}`}>
                  {o.role}
                </span>
              </td>
              <td className="px-6 py-4">
                <p className="font-body-sm text-on-surface">{o.lastLogin}</p>
                <p className="text-[10px] text-on-surface-variant">IP: {o.ip}</p>
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => onEdit(o)}
                  className="p-2 text-on-surface-variant hover:text-primary transition-colors opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                >
                  <Icon name="edit" />
                </button>
                <button className="p-2 text-on-surface-variant hover:text-status-critical transition-colors opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                  <Icon name="block" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
