import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react'

// 往期活动数据 – 与 PastEventsSection 中保持同步
// 未来可移至独立 data/events.ts 文件，从 CMS 或 API 拉取
const events: Record<
  string,
  {
    period: string
    date: string
    theme: string
    description: string
    time: string
    venue: string
    highlights: string[]
  }
> = {
  '2026-06': {
    period: '第五期',
    date: '2026年6月',
    theme: '中德能源合作：新能源转型中的商业机遇',
    time: '20:00 – 21:30（德国时间）',
    venue: '线上活动',
    description:
      '本期沙龙聚焦德国能源转型政策背景，邀请来自新能源领域的专业人士，深入探讨光伏、风能等领域的中德合作机遇与挑战。',
    highlights: [
      '德国《可再生能源法》2024年修订解读',
      '光伏组件中德供应链现状与机遇',
      '在德新能源企业融资与补贴申请实战',
    ],
  },
  '2026-05': {
    period: '第四期',
    date: '2026年5月',
    theme: '德国税务与法律：在德华人企业家必知指南',
    time: '20:00 – 21:30（德国时间）',
    venue: '线上活动',
    description:
      '邀请德国执业税务律师，针对在德华人企业主最关心的税务与法律问题进行深度解析，包括GmbH设立、VAT申报、劳动法要点等。',
    highlights: [
      'GmbH vs. UG：适合华人的公司架构选择',
      'Umsatzsteuer（增值税）申报要点',
      '雇佣德国员工的劳动法注意事项',
    ],
  },
  '2026-04': {
    period: '第三期',
    date: '2026年4月',
    theme: '从留学到创业：在德华人创业者的实战分享',
    time: '20:00 – 21:30（德国时间）',
    venue: '线上活动',
    description:
      '三位在德不同行业的华人创业者，分享了各自从留学生到企业主的完整历程，涵盖机遇捕捉、资金筹集、本地化经营等核心议题。',
    highlights: [
      '在德创业注册流程与常见误区',
      '如何获取德国政府创业补贴',
      '中德文化差异对企业经营的影响',
    ],
  },
  '2026-03': {
    period: '第二期',
    date: '2026年3月',
    theme: '财富管理与资产配置：在德华人家庭的财务规划',
    time: '20:00 – 21:30（德国时间）',
    venue: '线上活动',
    description:
      '主持人惠姐结合多年在德财富顾问经验，为在德华人家庭提供系统性财富规划建议，覆盖保险、房产、养老、遗产规划等核心议题。',
    highlights: [
      '德国养老金体系解析与补充规划',
      '保险配置：中德保险产品对比',
      '在德购房：自住 vs 投资的财务考量',
    ],
  },
}

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return Object.keys(events).map((slug) => ({ slug }))
}

export default function EventDetailPage({ params }: Props) {
  const event = events[params.slug]
  if (!event) notFound()

  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        {/* Back link */}
        <Link
          href="/#past-events"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-navy-800 text-sm mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          返回往期回顾
        </Link>

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 mb-2 block">
            {event.period} · {event.date}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 leading-snug">
            {event.theme}
          </h1>
          <div className="w-10 h-0.5 bg-gold-500 mb-6" />

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {event.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {event.time}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} />
              {event.venue}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-base leading-relaxed mb-10">{event.description}</p>

        {/* Highlights */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
          <h2 className="text-navy-900 font-bold text-base mb-4">本期亮点</h2>
          <ul className="space-y-3">
            {event.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                <span className="text-slate-600 text-sm">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/#registration"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold-500
                       hover:bg-gold-400 text-navy-900 font-semibold text-sm transition-all
                       duration-200 hover:-translate-y-0.5 hover:shadow-gold"
          >
            报名参加最新一期沙龙
          </Link>
        </div>
      </div>
    </div>
  )
}
