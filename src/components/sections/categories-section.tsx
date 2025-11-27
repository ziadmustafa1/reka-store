import Link from 'next/link'
import { Laptop, Shirt, Watch, Home, Dumbbell, Sparkles } from 'lucide-react'

const categories = [
  { id: 'electronics', label: 'إلكترونيات', icon: Laptop, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 'fashion', label: 'أزياء', icon: Shirt, color: 'text-pink-500', bg: 'bg-pink-50' },
  { id: 'accessories', label: 'إكسسوارات', icon: Watch, color: 'text-amber-500', bg: 'bg-amber-50' },
  { id: 'home', label: 'منزل', icon: Home, color: 'text-green-500', bg: 'bg-green-50' },
  { id: 'sports', label: 'رياضة', icon: Dumbbell, color: 'text-red-500', bg: 'bg-red-50' },
  { id: 'beauty', label: 'جمال', icon: Sparkles, color: 'text-purple-500', bg: 'bg-purple-50' },
]

export function CategoriesSection() {
  return (
    <section className="container-custom">
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
          تسوق حسب الفئة
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products?category=${category.id}`} // Note: We'll need to handle this query param in ProductsPage too if we want direct linking
            className="group flex flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary-100"
          >
            <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${category.bg} ${category.color}`}>
              <category.icon className="h-7 w-7" />
            </div>
            <span className="font-medium text-slate-900 group-hover:text-primary-600">
              {category.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
