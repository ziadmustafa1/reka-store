'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCartStore } from '@/store/cart-store'
import { siteConfig } from '@/config/site'

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCartStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    useCartStore.persist.rehydrate()
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleCheckout = () => {
    const message = `مرحباً، أريد إتمام الطلب التالي:%0A%0A` +
      items.map(item => `- ${item.nameAr} (${item.quantity}x) - ${item.price * item.quantity} ج.م`).join('%0A') +
      `%0A%0Aالمجموع الكلي: ${totalPrice()} ج.م`
    
    window.open(`https://wa.me/2${siteConfig.whatsapp}?text=${message}`, '_blank')
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-md transform bg-white shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-primary-500" />
              سلة التسوق
              <span className="rounded-full bg-primary-100 px-2 py-0.5 text-xs text-primary-600">
                {items.length} منتجات
              </span>
            </h2>
            <button 
              onClick={closeCart}
              className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 rounded-full bg-slate-50 p-6">
                  <ShoppingBag className="h-12 w-12 text-slate-300" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">السلة فارغة</h3>
                <p className="mb-6 text-sm text-slate-600">لم تقم بإضافة أي منتجات للسلة بعد.</p>
                <button 
                  onClick={closeCart}
                  className="btn-primary"
                >
                  تصفح المنتجات
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-slate-100">
                      <Image
                        src={item.image}
                        alt={item.nameAr}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h4 className="font-medium text-slate-900 line-clamp-1">{item.nameAr}</h4>
                        <p className="text-sm text-slate-600">{item.price} ج.م</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 rounded-lg border border-slate-200 p-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="rounded p-1 hover:bg-slate-100 disabled:opacity-50"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-4 text-center text-xs font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="rounded p-1 hover:bg-slate-100"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-slate-100 bg-slate-50 p-6">
              <div className="mb-4 flex items-center justify-between text-lg font-bold text-slate-900">
                <span>المجموع</span>
                <span>{totalPrice()} ج.م</span>
              </div>
              <button 
                onClick={handleCheckout}
                className="btn-primary w-full justify-between"
              >
                <span>إتمام الطلب عبر واتساب</span>
                <ArrowRight className="h-5 w-5 rotate-180" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
