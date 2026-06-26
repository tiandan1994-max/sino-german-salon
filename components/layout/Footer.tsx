export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/60 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <div className="w-8 h-8 rounded-full border border-gold-500/60 flex items-center justify-center">
                <span className="text-gold-500 font-bold text-xs">中德</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">中德商圈沙龙</p>
                <p className="text-white/40 text-[10px] uppercase tracking-wider">
                  Sino-German Business Circle Salon
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm max-w-xs">
              连接资源 · 共享智慧 · 共创价值
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 text-sm">
            <div>
              <p className="text-white/30 text-xs uppercase tracking-wider mb-3">导航</p>
              <ul className="space-y-2">
                {['关于沙龙', '主持人', '本期嘉宾', '本期活动', '往期回顾'].map((item) => (
                  <li key={item}>
                    <span className="hover:text-white cursor-pointer transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/30 text-xs uppercase tracking-wider mb-3">联系</p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:info@sg-salon.de"
                    className="hover:text-white transition-colors"
                  >
                    info@sg-salon.de
                  </a>
                </li>
                <li className="text-white/50">微信扫码咨询</li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} 中德商圈沙龙 Sino-German Business Circle Salon. All rights reserved.</p>
          <p>以专业内容与高质量社交，搭建中德之间值得信赖的交流平台</p>
        </div>
      </div>
    </footer>
  )
}
