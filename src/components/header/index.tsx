import Image from 'next/image'
import Link from 'next/link'

import { CartWidget } from './cart-widget'
import { SearchProductsForm } from './search-products-form'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link className="text-2xl font-extrabold text-white" href={'/'}>
          devstore
        </Link>

        <SearchProductsForm />
      </div>

      <div className="flex items-center gap-4 ">
        <CartWidget />

        <div className="h-4 w-px bg-zinc-700" />

        <Link className="flex items-center gap-2  hover:underline" href={'/'}>
          <span className="text-sm">Conta</span>

          <Image
            className="h-6 w-6 rounded-full"
            src="https://github.com/ivanvinicius.png"
            alt=""
            width={24}
            height={24}
          />
        </Link>
      </div>
    </header>
  )
}
