import { notFound } from 'next/navigation'
import { products } from '@/data/products'
import { ProductDetailsView } from '@/components/views/product-details-view'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)
  if (!product) notFound()

  return <ProductDetailsView product={product} />
}
