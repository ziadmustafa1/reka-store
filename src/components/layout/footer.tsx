'use client'

import Link from 'next/link'
import { Facebook, Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { useEffect, useState } from 'react'
import { Logo } from '@/components/ui/logo'

export function Footer() {
  const [year, setYear] = useState('2025')

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="border-t border-slate-100 bg-slate-50/50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <Logo className="scale-100 origin-right" />
            <p className="text-sm font-medium leading-relaxed text-slate-500 max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm ring-1 ring-slate-100 transition-all hover:bg-[#1877F2] hover:text-white hover:shadow-md hover:ring-[#1877F2]"
              >
                <Facebook className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm ring-1 ring-slate-100 transition-all hover:bg-[#E4405F] hover:text-white hover:shadow-md hover:ring-[#E4405F]"
              >
                <Instagram className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-slate-900">روابط سريعة</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li>
                <Link href="/" className="transition-colors hover:text-primary-600">الرئيسية</Link>
              </li>
              <li>
                <Link href="#products" className="transition-colors hover:text-primary-600">المنتجات</Link>
              </li>
              <li>
                <Link href="#contact" className="transition-colors hover:text-primary-600">اتصل بنا</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-slate-900">تواصل معنا</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <Phone className="h-4 w-4" />
                </div>
                <a href={`tel:${siteConfig.phone}`} dir="ltr" className="transition-colors hover:text-primary-600">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:info@reka-store.com" className="transition-colors hover:text-primary-600">info@reka-store.com</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>القاهرة، مصر</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-slate-900">اشترك في النشرة</h4>
            <p className="mb-4 text-sm font-medium text-slate-500">
              احصل على آخر العروض والمنتجات الجديدة.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="w-full rounded-xl border-0 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 transition-all placeholder:text-slate-400 focus:ring-2 focus:ring-primary-500"
              />
              <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600 text-primary-100 shadow-lg shadow-primary-500/20 transition-all hover:bg-primary-700 hover:shadow-primary-500/40 hover:scale-105">
                <span className="sr-only">Subscribe</span>
                <svg className="h-5 w-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm font-medium text-slate-500">
          <p className="flex items-center justify-center gap-1.5">
            © {year} {siteConfig.name}. صنع بحب <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> في مصر
          </p>
        </div>
      </div>
    </footer>
  )
}
