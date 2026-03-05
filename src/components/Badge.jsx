import "./Badge.css"

export default function Badge({ children, variant, color }) {
  return (
    <span className={`badge ${color} ${variant}`}> {children}</span >
  )
}