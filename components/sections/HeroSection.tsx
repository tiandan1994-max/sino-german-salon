'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { ChevronDown } from 'lucide-react'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] },
})

export default function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToEvent = () => {
    document.querySelector('#event')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToReg = () => {
    document.querySelector('#registration')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #040B17 0%, #0A1E3D 45%, #0D2E5E 100%)',
      }}
    >
      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />

      {/* German flag stripe – subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-black/60" />
        <div className="flex-1 bg-red-700/80" />
        <div className="flex-1 bg-yellow-500/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo badge */}
        <motion.div {...fadeUp(0.1)} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold-500/40 bg-white/5 backdrop-blur-sm">
            <div className="w-6 h-6 rounded-full border border-gold-500 flex items-center justify-center">
              <span className="text-gold-500 font-bold text-[9px]">中德</span>
            </div>
            <span className="text-gold-400/90 text-xs uppercase tracking-[0.2em] font-medium">
              Sino-German Business Circle Salon
            </span>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          {...fadeUp(0.25)}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4"
          style={{ fontFamily: '"Noto Sans SC", sans-serif' }}
        >
          中德商圈沙龙
        </motion.h1>

        {/* Gold divider */}
        <motion.div {...fadeUp(0.35)} className="flex items-center justify-center gap-4 mb-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-500" />
          <div className="w-2 h-2 rounded-full bg-gold-500" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-500" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-gold-400 text-lg md:text-2xl font-light tracking-[0.15em] mb-3"
        >
          连接资源 · 共享智慧 · 共创价值
        </motion.p>

        <motion.p
          {...fadeUp(0.5)}
          className="text-white/55 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed"
        >
          以专业内容与高质量社交，搭建中德之间值得信赖的交流平台
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.6)} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" onClick={scrollToEvent} className="px-8 py-3.5 text-base">
            查看本期活动
          </Button>
          <Button variant="outline" onClick={scrollToReg} className="px-8 py-3.5 text-base">
            立即报名
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.75)}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {[
            { num: '5+', label: '已举办沙龙期数' },
            { num: '200+', label: '在德华人会员' },
            { num: '30+', label: '行业领域覆盖' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gradient-gold">{s.num}</p>
              <p className="text-white/40 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors flex flex-col items-center gap-1"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  )
}
