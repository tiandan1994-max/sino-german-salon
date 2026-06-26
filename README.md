# 中德商圈沙龙 官方网站

**Sino-German Business Circle Salon** — 连接资源 · 共享智慧 · 共创价值

---

## 快速启动

```bash
# 1. 进入项目目录
cd sino-german-salon

# 2. 安装依赖
npm install

# 3. 本地开发
npm run dev
# 访问 http://localhost:3000

# 4. 生产构建
npm run build && npm run start
```

---

## 图片替换指南

项目中所有图片均为占位符，请将真实图片放入 `public/images/` 目录：

| 文件名 | 用途 | 来源 |
|--------|------|------|
| `host-energy-forum.jpg` | 惠姐 – 能源论坛主持人照片 | 能源论坛主持人.jpg |
| `huijie-wealth.jpg` | 惠姐 – 财富顾问宣传照 | 惠姐.jpg |
| `guest-zhong-wenjun.jpg` | 钟文君博士照片 | 待上传 |
| `wechat-qr.png` | 报名微信二维码 | 待上传 |
| `past-events/2026-06.jpg` | 第五期活动照片 | 待上传 |
| `past-events/2026-05.jpg` | 第四期活动照片 | 待上传 |

替换完成后，在对应组件文件中取消注释 `<Image>` 标签，并删除占位符 `<div>`。

---

## 项目结构

```
sino-german-salon/
├── app/
│   ├── layout.tsx              # 根布局 + SEO metadata
│   ├── page.tsx                # 首页（组合所有 Section）
│   ├── globals.css             # 全局样式
│   └── events/[slug]/page.tsx  # 往期活动详情页（动态路由）
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # 粘性导航栏（含移动端菜单）
│   │   └── Footer.tsx          # 页脚
│   ├── sections/               # 首页各版块
│   │   ├── HeroSection.tsx     # 首屏 Banner
│   │   ├── AboutSection.tsx    # 关于沙龙
│   │   ├── HostSection.tsx     # 主持人介绍（惠姐 · 能源论坛）
│   │   ├── HuijieSection.tsx   # 德资惠姐 · 财富顾问
│   │   ├── GuestSection.tsx    # 本期嘉宾（钟文君博士）
│   │   ├── CurrentEventSection.tsx  # 本期活动 + 时间轴
│   │   ├── PastEventsSection.tsx    # 往期回顾卡片
│   │   └── RegistrationSection.tsx  # 报名方式
│   └── ui/
│       ├── AnimatedSection.tsx  # 滚动入场动画容器
│       ├── Button.tsx           # 通用按钮
│       └── SectionHeader.tsx    # 章节标题组件
│
└── public/images/               # 图片资源（需手动放入）
```

---

## 新增活动期数

1. 在 `app/events/[slug]/page.tsx` 的 `events` 对象中添加新条目（key 格式：`YYYY-MM`）
2. 在 `components/sections/PastEventsSection.tsx` 的 `pastEvents` 数组中添加对应卡片数据
3. 将封面图片放入 `public/images/past-events/YYYY-MM.jpg`

---

## 技术栈

- **Next.js 14** App Router
- **TypeScript**
- **Tailwind CSS**（自定义 navy / gold 色系）
- **Framer Motion**（滚动动画）
- **Lucide React**（图标）

---

## 部署建议

推荐部署至 [Vercel](https://vercel.com)（Next.js 原生支持，零配置）：

```bash
npm install -g vercel
vercel
```

或构建为静态文件后部署至任意 CDN：
在 `next.config.mjs` 中添加 `output: 'export'`，然后运行 `npm run build`。
