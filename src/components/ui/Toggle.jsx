export default function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={onChange}
      className={`w-10 h-5 rounded-full relative p-0.5 flex items-center transition-colors shrink-0 ${
        checked ? 'bg-primary' : 'bg-surface-container-highest'
      }`}
    >
      <div
        className={`w-4 h-4 bg-on-primary rounded-full transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'}`}
      />
    </button>
  )
}
