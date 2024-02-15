'use client'

import { useCart } from '~/contexts/cart-context'

interface Props {
  productId: number
}

export function AddToCartButton({ productId }: Props) {
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(productId)
  }

  return (
    <button
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      type="button"
      onClick={handleAddToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}
