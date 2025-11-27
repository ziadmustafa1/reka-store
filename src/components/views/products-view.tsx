'use client'

import { useState, useEffect } from 'react'
import { ProductCard } from '@/components/ui/product-card'
import { ProductFilters } from '@/components/products/product-filters'
import { products } from '@/data/products'
import { useSearchParams } from 'next/navigation'

export function ProductsView() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('search') || ''
  
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000])

  // Reset filters when search changes
  useEffect(() => {
    if (searchQuery) {
      setSelectedCategory('all')
    }
  }, [searchQuery])

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesSearch = product.nameAr.includes(searchQuery) || 
                         product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.descriptionAr.includes(searchQuery)
    
    return matchesCategory && matchesPrice && matchesSearch
  })

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          جميع المنتجات
        </h1>
        <p className="mt-2 text-slate-600">
          تصفح مجموعتنا الكاملة من المنتجات المميزة
        </p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="lg:hidden mb-6">
            <details className="group rounded-2xl border border-slate-200 bg-white">
              <summary className="flex cursor-pointer items-center justify-between p-4 font-bold text-slate-900">
                <span>تصفية المنتجات</span>
                <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="border-t border-slate-100 p-4">
                <ProductFilters
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  priceRange={priceRange}
                  onPriceRangeChange={setPriceRange}
                />
              </div>
            </details>
          </div>
          <div className="hidden lg:block">
            <ProductFilters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
            />
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50 text-center">
              <p className="text-lg font-medium text-slate-900">
                لا توجد منتجات تطابق اختيارك
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setPriceRange([0, 5000])
                }}
                className="mt-4 text-sm text-primary-600 hover:underline"
              >
                إعادة تعيين الفلاتر
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
