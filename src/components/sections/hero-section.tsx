import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag, Star } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-8 lg:pt-16">
      <div className="container-custom relative z-10">
        <div className="rounded-4xl bg-slate-50 px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-24 relative overflow-hidden border border-slate-100 shadow-sm">
          {/* Decorative Blobs */}
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary-100/50 blur-3xl mix-blend-multiply" />
          <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-accent-100/50 blur-3xl mix-blend-multiply" />
          
          <div className="grid items-center gap-12 lg:grid-cols-2 relative z-10">
            {/* Content */}
            <div className="max-w-2xl text-center lg:text-right">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-primary-700 shadow-sm ring-1 ring-slate-200/50">
                <span className="flex h-2 w-2">
                  <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
                </span>
                متجر ريكا ستور
              </div>

              <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-tight">
                اكتشف عالم من <br />
                <span className="text-primary-600">المنتجات العصرية</span>
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-slate-700">
                وجهتك الأولى للتسوق الإلكتروني. نقدم لك أفضل المنتجات بجودة عالية وأسعار لا تقبل المنافسة، مع خدمة توصيل سريعة لجميع المحافظات.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="/products"
                  className="btn-primary w-full min-w-[180px] py-4 text-lg shadow-lg shadow-primary-500/20 sm:w-auto"
                >
                  <ShoppingBag className="h-5 w-5" />
                  تسوق الآن
                </Link>
                <a
                  href={`https://wa.me/2${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline w-full min-w-[180px] py-4 text-lg bg-white hover:bg-slate-50 sm:w-auto"
                >
                  تواصل معنا
                </a>
              </div>

              <div className="mt-10 flex items-center justify-center gap-6 border-t border-slate-200 pt-8 lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2 space-x-reverse">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 relative overflow-hidden">
                         <Image 
                           src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                           alt="User" 
                           fill 
                           className="object-cover"
                         />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-slate-700">
                    <span className="font-bold text-slate-900">+1000</span> عميل يثق بنا
                  </div>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/5">
                <Image
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop"
                  alt="Product Showcase"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur-sm ring-1 ring-slate-900/5 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      <Star className="h-6 w-6 fill-current" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500">تقييم العملاء</p>
                      <p className="text-lg font-bold text-slate-900">4.9/5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
