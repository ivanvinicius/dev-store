import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { api } from '~/data/api'
import { Product } from '~/data/types/product'

export const metadata: Metadata = { title: 'home' }

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const parsedProducts = await response.json()

  return parsedProducts
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <main className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        className="group relative col-span-6 row-span-6 flex items-center justify-center overflow-hidden rounded-lg bg-zinc-900  "
        href={`/product/${highlightedProduct.slug}`}
      >
        <Image
          className="transition-transform duration-200 group-hover:scale-105"
          src={highlightedProduct.image}
          alt=""
          width={830}
          height={830}
          quality={100}
        />

        <div className="absolute bottom-28 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">{highlightedProduct.title}</span>
          <span className="flex h-full flex-shrink-0 items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => (
        <Link
          key={product.id}
          className="group relative col-span-3 row-span-3 flex items-center justify-center overflow-hidden rounded-lg bg-zinc-900 "
          href={`/product/${product.slug}`}
        >
          <Image
            className="transition-transform duration-200 group-hover:scale-105"
            src={product.image}
            alt=""
            width={415}
            height={415}
          />

          <div className="absolute bottom-12 right-12 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="truncate text-sm">{product.title}</span>
            <span className="flex h-full flex-shrink-0 items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      ))}
    </main>
  )
}
