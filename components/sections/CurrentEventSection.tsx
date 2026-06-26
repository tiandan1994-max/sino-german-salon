import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Calendar, Clock, MapPin, Video, ChevronRight } from 'lucide-react'

const eventInfo = {
  title: '中医药在欧洲：传承、标准化与国际化发展之路',
  subtitle: '中德商圈沙龙 第六期 · 能源与健康专场',
  date: '2026年7月4日（周五）',
  time: '20:00 – 21:30（德国时间）',
  venue: '线上活动',
  platform: '腾讯会议 / Zoom（报名后发送链接）',
  description:
    '本期沙龙特邀德中堂创始人钟文君博士，深度分享她在德国深耕三十年的创业历程，探讨传统中医药如何在欧洲市场找到立足之地，以专业、诚信与品质赢得信任。',
}

const agenda: { time: string; title: string; desc: string; highlight?: boolean }[] = [
  {
    time: '19:50',
    title: '嘉宾入场 & 网络连接检查',
    desc: '请提前10分钟进入会议室进行技术确认',
  },
  {
    time: '20:00',
    title: '开场欢迎 & 主持人介绍',
    desc: '主持人惠姐开场，介绍沙龙理念与本期主题',
    highlight: true,
  },
  {
    time: '20:10',
    title: '嘉宾主讲：钟文君博士',
    desc: '从求学德国到创业德中堂：中医药在欧洲的标准化与国际化之路',
    highlight: true,
  },
  {
    time: '20:50',
    title: '深度访谈环节',
    desc: '主持人与嘉宾就创业初心、行业挑战、未来机遇展开深度对话',
  },
  {
    time: '21:15',
    title: '观众互动问答',
    desc: '参会者向嘉宾提问，分享交流心得与资源',
  },
  {
    time: '21:25',
    title: '主持人总结 & 下期预告',
    desc: '惠姐总结本期精华，预告下期沙龙主题',
  },
]

export default function CurrentEventSection() {
  return (
    <section id="event" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="本期活动"
          title={eventInfo.title}
          subtitle={eventInfo.subtitle}
        />

        {/* Event meta cards */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { icon: Calendar, label: '日期', value: eventInfo.date },
              { icon: Clock, label: '时间', value: eventInfo.time },
              { icon: MapPin, label: '形式', value: eventInfo.venue },
              { icon: Video, label: '平台', value: eventInfo.platform },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-4 md:p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <item.icon size={14} className="text-gold-600" />
                  <span className="text-slate-400 text-xs uppercase tracking-wide">{item.label}</span>
                </div>
                <p className="text-navy-900 text-sm font-medium leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Description + Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Description */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold text-navy-900 mb-4">活动介绍</h3>
              <div className="w-8 h-0.5 bg-gold-500 mb-5" />
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
                {eventInfo.description}
              </p>

              {/* CTA button */}
              <a
                href="#registration"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-500
                           hover:bg-gold-400 text-navy-900 font-semibold text-sm transition-all
                           duration-200 hover:-translate-y-0.5 hover:shadow-gold"
              >
                立即报名参加
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </AnimatedSection>

          {/* Timeline */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-3">
            <h3 className="text-xl font-bold text-navy-900 mb-8">活动流程</h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

              <div className="space-y-6">
                {agenda.map((item, i) => (
                  <div key={i} className="flex gap-4 md:gap-6 group">
                    {/* Time */}
                    <div className="w-20 flex-shrink-0 text-right pt-1">
                      <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-gold-600 transition-colors">
                        {item.time}
                      </span>
                    </div>

                    {/* Dot */}
                    <div className="relative flex-shrink-0 hidden md:block">
                      <div
                        className={`w-3 h-3 rounded-full mt-1.5 border-2 transition-all duration-200 group-hover:scale-125 ${
                          item.highlight
                            ? 'bg-gold-500 border-gold-400'
                            : 'bg-white border-slate-300 group-hover:border-gold-400'
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 pb-6 border-b border-slate-100 last:border-0 ${
                        item.highlight ? 'opacity-100' : 'opacity-80 hover:opacity-100'
                      } transition-opacity`}
                    >
                      <p
                        className={`font-semibold text-sm mb-1 ${
                          item.highlight ? 'text-navy-900' : 'text-slate-700'
                        }`}
                      >
                        {item.title}
                        {item.highlight && (
                          <span className="ml-2 text-[10px] bg-gold-100 text-gold-700 px-2 py-0.5 rounded-full font-medium uppercase tracking-wide">
                            重点
                          </span>
                        )}
                      </p>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
