import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { ArrowRight } from 'lucide-react'

// 往期活动数据 – 可按需添加
// 图片替换：将往期照片放入 /public/images/past-events/ 目录
const pastEvents = [
  {
    slug: '2026-06',
    period: '第五期',
    date: '2026年6月',
    theme: '中德能源合作：新能源转型中的商业机遇',
    summary: '聚焦德国能源转型政策，探讨光伏、风能领域的中德合作机遇，吸引近80名参会者。',
    tags: ['能源', '新能源', '政策解读'],
    gradient: 'from-sky-600 to-blue-700',
  },
  {
    slug: '2026-05',
    period: '第四期',
    date: '2026年5月',
    theme: '德国税务与法律：在德华人企业家必知指南',
    summary: '邀请德国税务律师深度解析在德经营的税务规划、劳动法与公司架构设置。',
    tags: ['税务', '法律', '企业合规'],
    gradient: 'from-navy-700 to-navy-900',
  },
  {
    slug: '2026-04',
    period: '第三期',
    date: '2026年4月',
    theme: '从留学到创业：在德华人创业者的实战分享',
    summary: '三位在德创业华人分享了从留学到创立企业的心路历程，现场互动热烈。',
    tags: ['创业', '留学', '分享交流'],
    gradient: 'from-emerald-600 to-teal-700',
  },
  {
    slug: '2026-03',
    period: '第二期',
    date: '2026年3月',
    theme: '财富管理与资产配置：在德华人家庭的财务规划',
    summary: '德国资深财富顾问惠姐主持，为在德华人家庭提供系统性财富规划建议。',
    tags: ['财富管理', '资产配置', '家庭理财'],
    gradient: 'from-amber-600 to-orange-700',
  },
]

export default function PastEventsSection() {
  return (
    <section id="past-events" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="往期回顾"
          title="历期沙龙精彩回顾"
          subtitle="每一期沙龙都是一次思想碰撞与资源链接的宝贵机会"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastEvents.map((event, i) => (
            <AnimatedSection key={event.slug} delay={0.1 * i}>
              <div
                className="group relative bg-white rounded-2xl overflow-hidden shadow-card
                           hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Color header band */}
                <div className={`h-36 bg-gradient-to-br ${event.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  {/* Period badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-white/30">
                      {event.period}
                    </span>
                  </div>
                  {/* Date */}
                  <div className="absolute bottom-4 right-4 text-white/70 text-xs">{event.date}</div>

                  {/*
                    TODO: Add past event photo
                    Place photo into /public/images/past-events/{event.slug}.jpg
                    Then add:
                    <Image src={`/images/past-events/${event.slug}.jpg`} alt={event.theme} fill className="object-cover" />
                    over the gradient div above
                  */}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-navy-900 font-bold text-base mb-2 leading-snug group-hover:text-navy-700 transition-colors">
                    {event.theme}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{event.summary}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more */}
                  <a
                    href={`/events/${event.slug}`}
                    className="inline-flex items-center gap-1 text-navy-700 hover:text-gold-600 text-sm font-medium transition-colors group/link"
                  >
                    查看详情
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
