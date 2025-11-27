'use client'

import Link from 'next/link'
import { Phone, ShoppingBag, Menu, Search } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { useCartStore } from '@/store/cart-store'
import { useEffect, useState } from 'react'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { useRouter } from 'next/navigation'
import { Logo } from '@/components/ui/logo'

export function Header() {
  const { openCart, totalItems } = useCartStore()
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300">
        <div className="w-full max-w-7xl rounded-3xl border border-white/50 bg-white/80 px-4 py-3 shadow-2xl shadow-slate-200/50 backdrop-blur-2xl ring-1 ring-slate-900/5 transition-all duration-300 hover:bg-white/90 hover:shadow-slate-200/80 md:px-6">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="group shrink-0 transition-transform hover:scale-105">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 mx-6">
              <Link href="/" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">
                الرئيسية
              </Link>
              <Link href="/products" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">
                المنتجات
              </Link>
              <Link href="/#contact" className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">
                تواصل معنا
              </Link>
            </nav>

            {/* Search Bar - Desktop */}
            <form onSubmit={handleSearch} className="flex-1 max-w-md mx-auto hidden md:block">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="ابحث عن منتج..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border-0 bg-slate-100/50 py-2.5 pr-4 pl-12 text-sm font-medium text-slate-800 outline-none ring-1 ring-transparent transition-all placeholder:text-slate-400 focus:bg-white focus:ring-indigo-200 focus:shadow-lg focus:shadow-indigo-500/5 hover:bg-slate-100"
                />
                <div className="absolute left-1.5 top-1.5 bottom-1.5 aspect-square rounded-xl bg-white shadow-sm flex items-center justify-center transition-transform group-focus-within:scale-105 group-focus-within:text-indigo-600 text-slate-400">
                  <Search className="h-4 w-4" />
                </div>
              </div>
            </form>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              {/* Mobile Search Toggle */}
              <button 
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                className="md:hidden p-2.5 text-slate-600 hover:bg-slate-100 hover:text-indigo-600 rounded-full transition-colors"
              >
                <Search className="h-6 w-6" />
              </button>

              <button 
                onClick={openCart}
                className="relative rounded-full p-2.5 text-slate-600 hover:bg-slate-100 hover:text-indigo-600 transition-all hover:scale-105"
              >
                <ShoppingBag className="h-6 w-6" />
                {mounted && totalItems() > 0 && (
                  <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-sm animate-fade-in border-2 border-white">
                    {totalItems()}
                  </span>
                )}
              </button>

              <a
                href={`tel:${siteConfig.phone}`}
                className="hidden lg:flex items-center gap-2 rounded-full bg-indigo-50 px-5 py-2.5 text-sm font-bold text-indigo-600 transition-all hover:bg-indigo-100 hover:scale-105 hover:shadow-md hover:shadow-indigo-100"
              >
                <Phone className="h-4 w-4" />
                <span dir="ltr">{siteConfig.phone}</span>
              </a>
              
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-slate-600 hover:text-indigo-600 transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isMobileSearchOpen && (
            <div className="mt-4 border-t border-slate-100 pt-4 md:hidden animate-in slide-in-from-top-2">
              <form onSubmit={handleSearch}>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="ابحث عن منتج..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full rounded-2xl border-0 bg-slate-100/50 py-3 pr-4 pl-12 text-sm font-medium text-slate-800 outline-none ring-1 ring-transparent transition-all placeholder:text-slate-400 focus:bg-white focus:ring-indigo-200 focus:shadow-lg focus:shadow-indigo-500/5 hover:bg-slate-100"
                  />
                  <button type="submit" className="absolute left-1.5 top-1.5 bottom-1.5 aspect-square rounded-xl bg-indigo-600 text-white shadow-sm flex items-center justify-center transition-transform active:scale-95">
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-32 px-6 md:hidden animate-in fade-in slide-in-from-bottom-10">
          <nav className="flex flex-col gap-6 text-center">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-slate-900 hover:text-indigo-600"
            >
              الرئيسية
            </Link>
            <Link 
              href="/products" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-slate-900 hover:text-indigo-600"
            >
              المنتجات
            </Link>
            <a 
              href={`tel:${siteConfig.phone}`}
              className="text-2xl font-bold text-slate-900 hover:text-indigo-600"
            >
              اتصل بنا
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 mx-auto rounded-full bg-slate-100 px-8 py-3 text-sm font-bold text-slate-600 hover:bg-slate-200"
            >
              إغلاق
            </button>
          </nav>
        </div>
      )}

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-32" />
      <CartDrawer />
    </>
  )
}
