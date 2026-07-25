export default function Card({ children, className = '', as: Component = 'div', ...props }) {
  return (
    <Component
      className={`bg-surface-container-low border border-outline-variant rounded-xl ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
