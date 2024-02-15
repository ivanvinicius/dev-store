import { LayoutType } from '~/app/layout'
import { Header } from '~/components/header'
import { CartProvider } from '~/contexts/cart-context'

export default function StoreLayout({ children }: LayoutType) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8 ">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}

/**
 * O cart provider é um (client component) e o layout é um (server component).
 * Todos os elementos que estão dentro do cart provider vão continuar sendo
 * (server component), tendo como requisito serem um CHILDREN do (client component).
 * Sendo essa a unica forma de usar (server component) dentro de (client component).
 */
