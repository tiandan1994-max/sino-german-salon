import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { Shield, Star, Globe, Users } from 'lucide-react'

// 德资惠姐 – 财富顾问服务介绍
// 图片替换：将 惠姐.jpg 放入 /public/images/huijie-wealth.jpg

const services = [
  '规划个人、家庭及企业资产配置',
  '财富传承 · 病患预嘱 · 法律委托 · 遗嘱',
  '税务优化 · 消费贷款 · 保险房贷',
]

const values = [
  { icon: Shield, label: '专业可信' },
  { icon: Star, label: '量身定制' },
  { icon: Users, label: '值得信赖' },
  { icon: Globe, label: '中德视野·本地服务' },
]

export default function HuijieSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="财富顾问"
          title="德资惠姐"
          subtitle="Ihre Vermögensberaterin aus Reutlingen · 德国资产管理集团财富顾问"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info side */}
          <AnimatedSection direction="left">
            {/* Gold accent card */}
            <div className="relative bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 md:p-10 text-white shadow-2xl overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-500/5 rounded-full blur-xl" />

              <div className="relative">
                {/* Name */}
                <div className="mb-6">
                  <p className="text-gold-400/70 text-xs uppercase tracking-widest mb-2">
                    德国资产管理集团财富顾问
                  </p>
                  <h3 className="text-4xl font-bold text-gradient-gold mb-1">德资惠姐</h3>
                  <p className="text-white/50 text-sm italic">
                    Ihre Vermögensberaterin aus Reutlingen
                  </p>
                </div>

                <div className="w-8 h-0.5 bg-gold-500 mb-6" />

                {/* Services */}
                <div className="space-y-3 mb-8">
                  {services.map((s) => (
                    <div key={s} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                      <p className="text-white/80 text-sm leading-relaxed">{s}</p>
                    </div>
                  ))}
                </div>

                {/* Values grid */}
                <div className="grid grid-cols-2 gap-3">
                  {values.map((v) => (
                    <div
                      key={v.label}
                      className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5"
                    >
                      <v.icon size={14} className="text-gold-400 flex-shrink-0" />
                      <span className="text-white/70 text-xs">{v.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Photo side */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative">
              {/*
                TODO: Replace placeholder with actual photo
                Place 惠姐.jpg into /public/images/huijie-wealth.jpg
                Then replace the div below with:
                <div className="relative w-full aspect-[3/4] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/images/huijie-wealth.jpg" alt="德资惠姐" fill className="object-cover" />
                </div>
              */}
              <div
                className="w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl
                           bg-gradient-to-br from-amber-50 to-yellow-100 border-4 border-gold-400/30 relative"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center border-4 border-gold-400/60"
                    style={{ background: 'linear-gradient(135deg, #F0D48A, #C8972A)' }}
                  >
                    <span className="text-white font-bold text-4xl">惠</span>
                  </div>
                  <div className="text-center">
                    <p className="text-navy-900 font-bold text-xl mb-1">德资惠姐</p>
                    <p className="text-gold-600 text-sm font-medium">财富顾问</p>
                    <p className="text-slate-400 text-[10px] mt-3">
                      请将 惠姐.jpg 放入<br />/public/images/huijie-wealth.jpg
                    </p>
                  </div>
                </div>

                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/90 to-transparent p-5">
                  <p className="text-white font-bold">德资惠姐</p>
                  <p className="text-gold-400 text-xs">扫码咨询</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 md:right-4 bg-gold-500 text-navy-900 rounded-2xl px-4 py-3 shadow-gold">
                <p className="text-xs font-bold">专业可信</p>
                <p className="text-[10px] opacity-80">中德视野 · 本地服务</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
