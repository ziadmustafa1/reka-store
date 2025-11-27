import { ShoppingBag } from 'lucide-react'

export function Logo({ className = "", iconClassName = "h-6 w-6" }: { className?: string, iconClassName?: string }) {
  return (
    <div className={`flex items-center gap-2.5 font-bold ${className}`}>
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rotate-12 rounded-2xl bg-indigo-100 transition-transform duration-500 group-hover:rotate-45" />
        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 transition-all duration-300 group-hover:scale-110 group-hover:shadow-indigo-300">
          <ShoppingBag className={iconClassName} strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-black tracking-tight text-slate-900">REKA</span>
        <span className="text-[0.65rem] font-bold tracking-[0.2em] text-indigo-600">STORE</span>
      </div>
    </div>
  )
}
