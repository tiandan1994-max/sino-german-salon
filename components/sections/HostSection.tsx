import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { BadgeCheck } from 'lucide-react'

// 主持人信息 – 惠姐（本期能源论坛主持人）
// 图片替换：将 能源论坛主持人.jpg 放入 /public/images/host-energy-forum.jpg

const highlights = [
  '旅德二十五年，拥有丰富的中德跨文化交流与工作经验',
  '曾担任中国政府外事活动主持人',
  '曾任世界五百强美资公司高级经理',
  '曾任德国大厂对华投资项目负责人、亚太区负责人',
  '曾任德国商学院及大学经济系讲师',
  '现任德国财富教练、企业顾问',
]

const tags = ['财富管理', '中德交流', '国际商务', '投资项目', '主持沟通']

export default function HostSection() {
  return (
    <section id="host" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="本期主持人"
          title="惠姐"
          subtitle="中德商圈沙龙主持人 · 德国财富教练 · 企业顾问"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-navy-800/10 to-gold-500/10 rounded-3xl" />
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/host-energy-forum.jpg"
                  alt="惠姐 – 中德商圈沙龙能源论坛主持人"
                  className="w-full h-full object-cover object-top"
                />
                {/* Bottom name overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/80 to-transparent p-6">
                  <p className="text-white font-bold text-lg">惠姐</p>
                  <p className="text-gold-400 text-sm">中德商圈沙龙 · 能源论坛主持人</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Bio */}
          <AnimatedSection direction="right" delay={0.15}>
            <div>
              {/* Title block */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-3xl font-bold text-navy-900">惠姐</h3>
                  <BadgeCheck size={22} className="text-gold-500" />
                </div>
                <p className="text-navy-700 font-medium">德国资产管理公司财富顾问</p>
                <p className="text-slate-500 text-sm">德国财富教练 · 企业顾问</p>
              </div>

              {/* Divider */}
              <div className="w-10 h-0.5 bg-gold-500 mb-6" />

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                    <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
