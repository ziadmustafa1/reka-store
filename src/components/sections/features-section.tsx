import { Phone, CheckCircle, Truck, ShieldCheck } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section className="container-custom">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Truck, title: 'توصيل سريع', desc: 'شحن لجميع المحافظات', color: 'bg-blue-50 text-blue-600 border-blue-100' },
          { icon: ShieldCheck, title: 'ضمان الجودة', desc: 'منتجات أصلية 100%', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
          { icon: Phone, title: 'دعم فني', desc: 'خدمة عملاء متميزة', color: 'bg-purple-50 text-purple-600 border-purple-100' },
          { icon: CheckCircle, title: 'أفضل الأسعار', desc: 'عروض وخصومات حصرية', color: 'bg-amber-50 text-amber-600 border-amber-100' },
        ].map((feature, idx) => (
          <div key={idx} className="group flex items-center gap-5 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
            <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${feature.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
              <feature.icon className="h-8 w-8" />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-bold text-slate-900">{feature.title}</h3>
              <p className="text-sm font-medium text-slate-500">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
