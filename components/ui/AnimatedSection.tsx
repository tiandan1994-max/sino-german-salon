'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const initial = {
    opacity: 0,
    y: direction === 'up' ? 40 : 0,
    x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
