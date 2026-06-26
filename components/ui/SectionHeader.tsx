import AnimatedSection from './AnimatedSection'

interface Props {
  tag?: string
  title: string
  subtitle?: string
  light?: boolean   // true = white text (for dark backgrounds)
  center?: boolean
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  light = false,
  center = true,
}: Props) {
  return (
    <AnimatedSection className={`mb-14 ${center ? 'text-center' : ''}`}>
      {tag && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${
            light ? 'text-gold-400' : 'text-gold-600'
          }`}
        >
          {tag}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      <div className={`w-10 h-0.5 bg-gold-500 mb-5 ${center ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-white/70' : 'text-slate-500'}`}
        >
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
