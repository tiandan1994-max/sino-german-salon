import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: '中德商圈沙龙 | Sino-German Business Circle Salon',
  description:
    '以专业内容与高质量社交，搭建中德之间值得信赖的交流平台。面向在德华人企业家、职业经理人及跨文化从业者的高端商务交流社群。',
  keywords:
    '中德商圈沙龙, 在德华人商业, 中德合作, Sino-German Business, 德国华人, 跨文化商务',
  openGraph: {
    title: '中德商圈沙龙',
    description: '连接资源 · 共享智慧 · 共创价值',
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: '中德商圈沙龙',
    description: '连接资源 · 共享智慧 · 共创价值',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+SC:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
