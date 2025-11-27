export interface Product {
  id: string
  name: string
  nameAr: string
  description: string
  descriptionAr: string
  price: number
  oldPrice?: number
  category: string
  categoryAr: string
  image: string
  rating: number
  inStock: boolean
  featured?: boolean
}

export type ProductCategory = 'electronics' | 'fashion' | 'accessories' | 'home' | 'sports' | 'beauty'
