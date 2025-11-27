import { ProductCard } from '@/components/ui/product-card'
import { products } from '@/data/products'

export function FeaturedProductsSection() {
  return (
    <section id="products" className="container-custom scroll-mt-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          منتجاتنا المميزة
        </h2>
        <p className="mx-auto max-w-2xl text-slate-600">
          تصفح أحدث المنتجات والعروض الحصرية في متجرنا
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
