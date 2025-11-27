'use client'

import Image from 'next/image'
import { ShoppingCart, Star, Eye } from 'lucide-react'
import { Product } from '@/types/product'
import { useCartStore } from '@/store/cart-store'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore()

  const discount = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
    : 0

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-slate-100">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
        {discount > 0 && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white shadow-sm">
            خصم {discount}%
          </span>
        )}
        {product.featured && (
          <span className="absolute right-3 top-3 z-10 rounded-full bg-amber-400 px-2 py-1 text-xs font-bold text-white shadow-sm">
            مميز
          </span>
        )}
        
        {/* Placeholder Image if real image fails or for dev */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-300">
          <ShoppingCart className="h-12 w-12 opacity-20" />
        </div>
        
        {/* Actual Image */}
        <Image
          src={product.image}
          alt={product.nameAr}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <button
            onClick={() => addItem(product)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-600 shadow-lg transition-transform hover:scale-110 hover:bg-primary-50"
            title="إضافة للسلة"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
          <Link
            href={`/products/${product.id}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-lg transition-transform hover:scale-110 hover:bg-slate-50"
            title="عرض التفاصيل"
          >
            <Eye className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-primary-600">
            {product.categoryAr}
          </span>
          <div className="flex items-center gap-1 text-amber-400">
            <Star className="h-3 w-3 fill-current" />
            <span className="text-xs font-bold text-slate-600">{product.rating}</span>
          </div>
        </div>

        <Link href={`/products/${product.id}`} className="group-hover:text-primary-600 transition-colors">
          <h3 className="mb-1 text-lg font-bold text-slate-900 line-clamp-1">
            {product.nameAr}
          </h3>
        </Link>
        
        <p className="mb-4 text-sm text-slate-600 line-clamp-2 flex-1">
          {product.descriptionAr}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-xs text-slate-500 line-through">
                {product.oldPrice} ج.م
              </span>
            )}
            <span className="text-lg font-bold text-primary-600">
              {product.price} ج.م
            </span>
          </div>
          
          <button
            onClick={() => addItem(product)}
            className="flex items-center gap-1 rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-primary-600 hover:text-white"
          >
            <ShoppingCart className="h-3 w-3" />
            إضافة
          </button>
        </div>
      </div>
    </div>
  )
}
