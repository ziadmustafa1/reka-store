import { Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function ContactSection() {
  return (
    <section id="contact" className="container-custom">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-indigo-600 px-6 py-20 text-center text-white shadow-2xl shadow-indigo-200 sm:px-16">
        <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/20 blur-3xl mix-blend-overlay animate-pulse-slow"></div>
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl mix-blend-overlay animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-amber-50 sm:text-5xl">
          هل لديك استفسار؟
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-primary-50 text-lg font-medium leading-relaxed opacity-90">
          فريق خدمة العملاء جاهز للرد على جميع استفساراتك ومساعدتك في اختيار المنتج المناسب.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`tel:${siteConfig.phone}`}
            className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-indigo-600 shadow-lg shadow-black/5 transition-all hover:scale-105 hover:bg-slate-50 hover:shadow-xl"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 transition-colors group-hover:bg-indigo-200">
              <Phone className="h-4 w-4" />
            </div>
            <span dir="ltr">{siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
