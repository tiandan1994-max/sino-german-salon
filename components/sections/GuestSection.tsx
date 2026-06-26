import SectionHeader from '@/components/ui/SectionHeader'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { ExternalLink, GraduationCap, Building2, Award } from 'lucide-react'

// 本期嘉宾：钟文君博士
// 图片替换：将嘉宾照片放入 /public/images/guest-zhong-wenjun.jpg

const guest = {
  name: '钟文君',
  title: '博士',
  role: '创始人 · 董事长',
  organization: '德中堂 HerbaSinica Hilsdorf GmbH',
  location: '德国',
  tags: ['中医药', '植物生理学', '欧洲市场', '创业', '中德合作'],
  credentials: [
    {
      icon: GraduationCap,
      label: '学术背景',
      content: '1994年获德国拜罗伊特大学植物生理学博士学位',
    },
    {
      icon: Building2,
      label: '企业创立',
      content: '1996年创立德中堂 HerbaSinica Hilsdorf GmbH，致力于中药饮片欧洲推广',
    },
    {
      icon: Award,
      label: '行业职务',
      content: '德国联邦医药管理署 BfArM 药典委员会委员，参与 ISO 中医药专委会工作',
    },
  ],
  intro: `钟文君博士是一位兼具科研背景、企业家精神与文化使命感的女性创业者。她长期专注于中药植物的田间栽培、产地加工、质量控制与国际贸易，在传统中医药如何进入欧洲市场、符合德国及欧盟医药监管标准方面积累了深厚而独特的经验。

她不仅将中医药产品带入德国市场，更推动了传统中医药在欧洲从"经验医学"走向"规范化、标准化、专业化"的历程。`,
  talkTheme: '中医药在欧洲：传承、标准化与国际化发展之路',
}

export default function GuestSection() {
  return (
    <section id="guest" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="本期特邀嘉宾"
          title="钟文君博士"
          subtitle="德中堂 HerbaSinica Hilsdorf GmbH 创始人 · 董事长"
        />

        {/* Talk theme banner */}
        <AnimatedSection delay={0.05}>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-navy-900 rounded-2xl px-6 py-4 flex items-center gap-4">
              <div className="w-1 h-10 bg-gold-500 rounded-full flex-shrink-0" />
              <div>
                <p className="text-gold-400/70 text-xs uppercase tracking-widest mb-0.5">本期分享主题</p>
                <p className="text-white font-semibold">{guest.talkTheme}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Photo column */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="relative">
              {/*
                TODO: Replace placeholder with actual guest photo
                Place guest photo into /public/images/guest-zhong-wenjun.jpg
                Then replace the div below with:
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/guest-zhong-wenjun.jpg" alt="钟文君博士" fill className="object-cover" />
                </div>
              */}
              <div
                className="w-full aspect-[3/4] max-w-xs mx-auto rounded-2xl overflow-hidden shadow-xl
                           bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 relative"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                  <div className="w-24 h-24 rounded-full bg-white/10 border-4 border-white/20 flex items-center justify-center">
                    <span className="text-white/60 text-3xl font-bold">钟</span>
                  </div>
                  <div className="text-center">
                    <p className="text-white/80 font-bold text-lg">钟文君博士</p>
                    <p className="text-gold-400/70 text-xs mt-1">嘉宾照片待上传</p>
                  </div>
                </div>
                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                  <p className="text-white font-bold text-sm">钟文君 博士</p>
                  <p className="text-gold-400 text-xs">HerbaSinica Hilsdorf GmbH</p>
                </div>
              </div>

              {/* Tags below photo */}
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {guest.tags.map((tag) => (
                  <span key={tag} className="tag-pill text-navy-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Bio column */}
          <AnimatedSection direction="right" delay={0.15} className="lg:col-span-3">
            <div>
              {/* Name + title */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="text-3xl font-bold text-navy-900">{guest.name}</h3>
                  <span className="text-gold-600 font-medium text-lg">{guest.title}</span>
                </div>
                <p className="text-navy-700 font-medium">{guest.role}</p>
                <p className="text-slate-500 text-sm">{guest.organization}</p>
              </div>

              <div className="w-10 h-0.5 bg-gold-500 mb-6" />

              {/* Intro paragraphs */}
              {guest.intro.split('\n\n').map((para, i) => (
                <p key={i} className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                  {para}
                </p>
              ))}

              {/* Credentials */}
              <div className="mt-6 space-y-3">
                {guest.credentials.map((cred) => (
                  <div
                    key={cred.label}
                    className="flex items-start gap-4 bg-white rounded-xl p-4 border border-slate-100 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <cred.icon size={16} className="text-navy-700" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-navy-600 uppercase tracking-wide mb-0.5">
                        {cred.label}
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed">{cred.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="#registration"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-800 hover:bg-navy-700
                             text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <ExternalLink size={14} />
                  报名参加本期沙龙
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
