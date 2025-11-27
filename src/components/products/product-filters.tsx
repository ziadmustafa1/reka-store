'use client'

import { useState } from 'react'
import { Filter, X } from 'lucide-react'
import { ProductCategory } from '@/types/product'

interface ProductFiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  priceRange: [number, number]
  onPriceRangeChange: (range: [number, number]) => void
}

const categories: { id: ProductCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'الكل' },
  { id: 'electronics', label: 'إلكترونيات' },
  { id: 'fashion', label: 'أزياء' },
  { id: 'accessories', label: 'إكسسوارات' },
  { id: 'home', label: 'منزل' },
  { id: 'sports', label: 'رياضة' },
  { id: 'beauty', label: 'جمال' },
]

export function ProductFilters({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
}: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 font-medium text-slate-700 shadow-sm hover:bg-slate-50 lg:hidden"
      >
        <Filter className="h-4 w-4" />
        تصفية المنتجات
      </button>

      <div
        className={`fixed inset-y-0 left-0 z-40 w-80 transform bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out lg:static lg:block lg:w-64 lg:transform-none lg:rounded-2xl lg:border lg:border-slate-100 lg:shadow-sm ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <h3 className="text-lg font-bold text-slate-900">الفلاتر</h3>
          <button onClick={() => setIsOpen(false)}>
            <X className="h-5 w-5 text-slate-500" />
          </button>
        </div>

        <div className="space-y-8">
          {/* Categories */}
          <div>
            <h3 className="mb-4 font-bold text-slate-900">الفئات</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category.id} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`flex h-5 w-5 items-center justify-center rounded border transition-colors ${selectedCategory === category.id ? 'bg-primary-600 border-primary-600' : 'border-slate-300 group-hover:border-primary-500'}`}>
                    {selectedCategory === category.id && (
                      <div className="h-2.5 w-2.5 rounded-sm bg-white" />
                    )}
                  </div>
                  <input
                    type="radio"
                    name="category"
                    className="hidden"
                    checked={selectedCategory === category.id}
                    onChange={() => onCategoryChange(category.id as string)}
                  />
                  <span className={`text-sm transition-colors ${selectedCategory === category.id ? 'font-medium text-primary-600' : 'text-slate-600 group-hover:text-slate-900'}`}>
                    {category.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="mb-4 font-bold text-slate-900">السعر</h3>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-primary-600"
              />
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>{priceRange[0]} ج.م</span>
                <span>{priceRange[1]} ج.م</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
