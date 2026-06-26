import AnimatedSection from '@/components/ui/AnimatedSection'
import { MessageCircle, Mail, CheckCircle2 } from 'lucide-react'

// 报名二维码替换：将微信报名二维码图片放入 /public/images/wechat-qr.png

const benefits = [
  '获得活动腾讯会议/Zoom链接',
  '加入中德商圈沙龙会员群',
  '获取本期嘉宾演讲资料',
  '优先获得下期活动通知',
]

export default function RegistrationSection() {
  return (
    <section
      id="registration"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #040B17 0%, #0A1E3D 50%, #0D2E5E 100%)',
      }}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            立即参与
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            报名参加本期沙龙
          </h2>
          <div className="w-10 h-0.5 bg-gold-500 mx-auto mb-5" />
          <p className="text-white/60 text-base max-w-xl mx-auto">
            扫描下方微信二维码，或发送邮件联系我们完成报名
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* QR Code */}
          <AnimatedSection direction="left">
            <div className="flex flex-col items-center">
              {/*
                TODO: Replace with actual WeChat QR code
                Place QR image into /public/images/wechat-qr.png
                Then replace the placeholder div with:
                <Image src="/images/wechat-qr.png" alt="微信报名二维码" width={220} height={220} className="rounded-2xl" />
              */}
              <div className="w-52 h-52 bg-white rounded-2xl flex flex-col items-center justify-center shadow-2xl mb-4 p-4">
                {/* QR placeholder grid */}
                <div
                  className="w-full h-full grid rounded-xl overflow-hidden opacity-30"
                  style={{
                    backgroundImage:
                      'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '8px 8px',
                  }}
                />
                <div className="absolute flex flex-col items-center">
                  <MessageCircle size={28} className="text-navy-800 mb-1" />
                  <p className="text-navy-800 text-xs font-semibold text-center">
                    微信报名二维码
                    <br />
                    <span className="text-[9px] font-normal opacity-60">请替换为实际二维码</span>
                  </p>
                </div>
              </div>
              <p className="text-white/50 text-xs flex items-center gap-1.5">
                <MessageCircle size={12} />
                扫码添加微信，备注"沙龙报名"
              </p>
            </div>
          </AnimatedSection>

          {/* Info + Email */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">报名须知</h3>
              <p className="text-white/50 text-sm mb-6">
                活动免费参加，报名成功后将在活动前一天发送会议链接。
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-gold-400 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>

              {/* Email CTA */}
              <a
                href="mailto:info@sg-salon.de?subject=报名%20中德商圈沙龙第六期"
                className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full
                           bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-sm
                           transition-all duration-200 hover:-translate-y-0.5 hover:shadow-gold"
              >
                <Mail size={15} />
                发送邮件报名
              </a>

              <p className="text-white/30 text-xs text-center mt-4">
                info@sg-salon.de · 回复即确认报名
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
