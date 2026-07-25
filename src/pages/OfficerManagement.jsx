import { useState } from 'react'
import Icon from '../components/ui/Icon.jsx'
import Modal from '../components/ui/Modal.jsx'
import PersonnelTable from '../components/officers/PersonnelTable.jsx'
import ActivityLogPanel from '../components/officers/ActivityLogPanel.jsx'
import { personnelStats, personnel, activityLog } from '../data/officersData.js'

const TABS = ['All Users', 'Administrators', 'Investigative Unit']

export default function OfficerManagement() {
  const [activeTab, setActiveTab] = useState('All Users')
  const [editingOfficer, setEditingOfficer] = useState(null)
  const [addModalOpen, setAddModalOpen] = useState(false)

  return (
    <div className="p-4 sm:p-container-padding flex flex-col lg:flex-row gap-gutter">
      {/* Left: User Table */}
      <div className="flex-1 space-y-gutter min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Personnel Directory</h2>
            <p className="font-body-md text-on-surface-variant">Manage and monitor active intelligence unit access.</p>
          </div>
          <button
            onClick={() => setAddModalOpen(true)}
            className="bg-primary text-on-primary font-title-lg px-6 py-3 rounded-xl flex items-center space-x-2 shadow-lg shadow-primary/10 hover:shadow-primary/30 transition-all active:scale-95 self-start sm:self-auto"
          >
            <Icon name="person_add" />
            <span>Add New Officer</span>
          </button>
        </div>

        {/* Dashboard Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter mb-gutter">
          {personnelStats.map((s) => (
            <div key={s.id} className="bg-surface-container border border-outline-variant p-5 rounded-2xl flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className={`p-2 ${s.iconBg} rounded-lg`}>
                  <Icon name={s.icon} className={s.iconColor} />
                </div>
                <span className={`font-data-mono text-[11px] ${s.trendColor}`}>{s.trend}</span>
              </div>
              <div className="mt-4">
                <p className="font-label-caps text-on-surface-variant">{s.label}</p>
                <p className="font-headline-xl text-primary mt-1">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Personnel Table */}
        <div className="bg-surface-container border border-outline-variant rounded-2xl overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-outline-variant flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-surface-container-high/50">
            <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg font-label-caps text-xs whitespace-nowrap transition-colors ${
                    activeTab === tab
                      ? 'bg-primary/10 border border-primary/20 text-primary'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-colors">
                <Icon name="filter_list" />
              </button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-colors">
                <Icon name="download" />
              </button>
            </div>
          </div>

          <PersonnelTable officers={personnel} onEdit={setEditingOfficer} />

          <div className="p-4 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-3 bg-surface-container-low/30">
            <p className="font-body-sm text-on-surface-variant">Showing 1-5 of 1,248 officers</p>
            <div className="flex items-center space-x-2">
              <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container-highest transition-all opacity-50" disabled>
                <Icon name="chevron_left" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-primary text-on-primary rounded-lg font-data-mono text-xs">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest rounded-lg font-data-mono text-xs transition-all">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest rounded-lg font-data-mono text-xs transition-all">
                3
              </button>
              <button className="p-2 border border-outline-variant rounded-lg hover:bg-surface-container-highest transition-all">
                <Icon name="chevron_right" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ActivityLogPanel items={activityLog} />

      {/* Edit Permissions Modal */}
      <Modal
        open={!!editingOfficer}
        onClose={() => setEditingOfficer(null)}
        title="Manage Access Control"
        subtitle={editingOfficer ? `Officer: ${editingOfficer.name} (${editingOfficer.id})` : ''}
        footer={
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => setEditingOfficer(null)}
              className="px-5 py-2.5 rounded-xl border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => setEditingOfficer(null)}
              className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-bold hover:brightness-110 transition-all"
            >
              Save Changes
            </button>
          </div>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
          <div className="space-y-2">
            <label className="font-label-caps text-on-surface-variant text-[11px]">Department</label>
            <select className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary/50 outline-none">
              <option>{editingOfficer?.unit}</option>
              <option>Cyber Crime Division</option>
              <option>Network Intelligence</option>
              <option>Narcotics Bureau</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="font-label-caps text-on-surface-variant text-[11px]">Access Role</label>
            <select className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary/50 outline-none">
              <option>{editingOfficer?.role}</option>
              <option>Investigator</option>
              <option>Analyst</option>
              <option>Admin</option>
            </select>
          </div>
        </div>
        <div className="space-y-3">
          <label className="font-label-caps text-on-surface-variant text-[11px]">Module Permissions</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['Crime Analytics', 'Criminal Network', 'Reports', 'AI Assistant'].map((perm) => (
              <label key={perm} className="flex items-center gap-3 p-3 bg-surface-container border border-outline-variant rounded-xl cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded text-primary focus:ring-primary" />
                <span className="text-body-sm text-on-surface">{perm}</span>
              </label>
            ))}
          </div>
        </div>
      </Modal>

      {/* Add Officer Modal */}
      <Modal
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        title="Add New Officer"
        subtitle="Provision a new intelligence unit account"
        icon="person_add"
        footer={
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => setAddModalOpen(false)}
              className="px-5 py-2.5 rounded-xl border border-outline-variant text-on-surface-variant hover:bg-surface-container-high transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => setAddModalOpen(false)}
              className="px-5 py-2.5 rounded-xl bg-primary text-on-primary font-bold hover:brightness-110 transition-all"
            >
              Create Officer
            </button>
          </div>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
          <div className="space-y-2">
            <label className="font-label-caps text-on-surface-variant text-[11px]">Full Name</label>
            <input className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary/50 outline-none" placeholder="e.g. Insp. Kavya Reddy" />
          </div>
          <div className="space-y-2">
            <label className="font-label-caps text-on-surface-variant text-[11px]">Service ID</label>
            <input className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary/50 outline-none" placeholder="KSP-XXXX-XXX" />
          </div>
        </div>
      </Modal>
    </div>
  )
}
