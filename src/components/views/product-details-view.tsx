'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Star, Check, ShieldCheck, Truck } from 'lucide-react'
import { useCartStore } from '@/store/cart-store'
import { siteConfig } from '@/config/site'
import { Product } from '@/types/product'

interface ProductDetailsViewProps {
  product: Product
}

export function ProductDetailsView({ product }: ProductDetailsViewProps) {
  const { addItem } = useCartStore()

  return (
    <div className="container-custom py-8 lg:py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <Link href="/" className="hover:text-primary-600">الرئيسية</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-primary-600">المنتجات</Link>
        <span>/</span>
        <span className="text-slate-900">{product.nameAr}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
            <Image
              src={product.image}
              alt={product.nameAr}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Details */}
        <div>
          <div className="mb-6">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                {product.categoryAr}
              </span>
              {product.inStock ? (
                <span className="flex items-center gap-1 text-xs font-medium text-green-600">
                  <Check className="h-3 w-3" />
                  متوفر
                </span>
              ) : (
                <span className="text-xs font-medium text-red-600">
                  غير متوفر
                </span>
              )}
            </div>
            
            <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              {product.nameAr}
            </h1>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-bold text-slate-900">{product.rating}</span>
                <span className="text-sm text-slate-600">(50 تقييم)</span>
              </div>
            </div>

            <div className="mb-8 flex items-end gap-4">
              <span className="text-4xl font-bold text-primary-600">
                {product.price} ج.م
              </span>
              {product.oldPrice && (
                <span className="mb-1 text-xl text-slate-500 line-through">
                  {product.oldPrice} ج.م
                </span>
              )}
            </div>

            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              {product.descriptionAr}
            </p>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => addItem(product)}
                className="btn-primary flex-1 py-4 text-lg"
              >
                <ShoppingCart className="h-6 w-6" />
                إضافة للسلة
              </button>
              <a
                href={`https://wa.me/2${siteConfig.whatsapp}?text=أريد شراء ${product.nameAr}`}
                target="_blank"
                rel="noreferrer"
                className="btn-outline flex-1 py-4 text-lg"
              >
                طلب عبر واتساب
              </a>
            </div>

            <div className="grid gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <Truck className="h-6 w-6 text-primary-500" />
                <div>
                  <h4 className="font-bold text-slate-900">شحن سريع</h4>
                  <p className="text-sm text-slate-600">توصيل لجميع المحافظات</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-primary-500" />
                <div>
                  <h4 className="font-bold text-slate-900">ضمان الجودة</h4>
                  <p className="text-sm text-slate-600">منتجات أصلية 100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
