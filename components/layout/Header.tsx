'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: '关于沙龙', href: '#about' },
  { label: '主持人', href: '#host' },
  { label: '本期嘉宾', href: '#guest' },
  { label: '本期活动', href: '#event' },
  { label: '往期回顾', href: '#past-events' },
  { label: '立即报名', href: '#registration', highlight: true },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo mark – a circular badge */}
          <div className="w-9 h-9 rounded-full border-2 border-gold-500 flex items-center justify-center">
            <span className="text-gold-500 font-bold text-sm leading-none">中德</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-white font-semibold text-sm leading-tight tracking-wide">
              中德商圈沙龙
            </p>
            <p className="text-gold-400/70 text-[10px] tracking-widest uppercase leading-none">
              Sino-German Business Circle
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.highlight ? (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="ml-4 px-4 py-1.5 rounded-full bg-gold-500 hover:bg-gold-400
                           text-navy-900 text-sm font-semibold transition-all duration-200
                           hover:shadow-gold hover:-translate-y-0.5"
              >
                {link.label}
              </button>
            ) : (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-3 py-1.5 text-white/80 hover:text-white text-sm font-medium
                           transition-colors duration-150 rounded-lg hover:bg-white/10"
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  link.highlight
                    ? 'bg-gold-500 text-navy-900 font-semibold mt-2'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
