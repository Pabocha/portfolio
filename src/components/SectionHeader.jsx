export default function SectionHeader({ tag, title, highlight }) {
  return (
    <div className="reveal mb-12">
      <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">{tag}</p>
      <h2 className="font-display font-extrabold text-base-content mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.1 }}>
        {title}{' '}
        {highlight && <span className="grad-text">{highlight}</span>}
      </h2>
      <div className="w-14 h-[3px] rounded-full" style={{ background: 'linear-gradient(90deg, #7c3aed, #3b82f6)' }} />
    </div>
  )
}
