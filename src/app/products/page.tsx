import { Suspense } from 'react'
import { ProductsView } from '@/components/views/products-view'

export default function ProductsPage() {
  return (
    <div className="container-custom py-8 lg:py-12">
      <Suspense fallback={<div className="flex h-96 items-center justify-center"><div className="h-8 w-8 animate-spin rounded-full border-4 border-primary-600 border-t-transparent"></div></div>}>
        <ProductsView />
      </Suspense>
    </div>
  )
}
