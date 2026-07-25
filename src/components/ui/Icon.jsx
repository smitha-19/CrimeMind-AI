export default function Icon({ name, className = '', filled = false, size }) {
  const style = {
    fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
    ...(size ? { fontSize: size } : {}),
  }
  return (
    <span className={`material-symbols-outlined ${className}`} style={style}>
      {name}
    </span>
  )
}
