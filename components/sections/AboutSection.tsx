import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Target, Lightbulb, Handshake } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: '平台定位',
    desc: '面向在德华人企业家、职业经理人及跨文化从业者，打造高质量的专业交流社群。',
  },
  {
    icon: Lightbulb,
    title: '关注主题',
    desc: '聚焦企业发展、财富管理、法律税务、能源趋势、跨境合作等中德商界核心议题。',
  },
  {
    icon: Handshake,
    title: '核心价值',
    desc: '洞察趋势 · 连接人脉 · 促进合作 · 实现成长。以诚信与专业赢得信赖。',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="关于我们"
          title="中德商圈沙龙"
          subtitle="以专业内容与高质量社交，搭建中德之间值得信赖的交流平台。"
        />

        {/* Founding story */}
        <AnimatedSection delay={0.1} className="max-w-3xl mx-auto mb-16 text-center">
          <div className="bg-gradient-to-br from-navy-50 to-blue-50 rounded-3xl p-8 md:p-10 border border-navy-100/60">
            <p className="text-navy-900 text-base md:text-lg leading-relaxed font-medium mb-6">
              大家好，成立这个沙龙的目的是为德国华人商业活动保驾护航，平台资源共享，信息经验交流，打造一个和谐美好的华人线上线下社群，互帮互助，互通有无。
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              将来也能给德国社会一个积极正面的形象，为华裔发声，为祖国祝福，为德国社会也贡献群体的力量！
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              沙龙会定期举办线上线下活动、嘉宾访谈、研讨会，希望大家踊跃参与，贡献力量，闪闪发光！
            </p>
          </div>
        </AnimatedSection>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={0.15 * (i + 1)}>
              <div
                className="group relative bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover
                           border border-slate-100 hover:border-navy-200 transition-all duration-300
                           hover:-translate-y-1 cursor-default"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-navy-800 flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors duration-300">
                  <pillar.icon size={22} className="text-white" />
                </div>
                {/* Gold accent line */}
                <div className="w-8 h-0.5 bg-gold-500 mb-4 group-hover:w-12 transition-all duration-300" />
                <h3 className="text-navy-900 font-bold text-lg mb-3">{pillar.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
