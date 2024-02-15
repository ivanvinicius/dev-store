'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface CartContextProps {
  item: CartItem[]
  addToCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextProps)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.productId === productId)

      if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return { ...item, productId: productId + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...state, { productId, quantity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ item: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
