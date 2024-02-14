import { Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link className="text-2xl font-extrabold text-white" href={'/'}>
          devstore
        </Link>

        <form className="flex w-80 items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
          <Search className="h-5 w-5 text-zinc-500" />

          <input
            className="flex-1  bg-transparent text-sm outline-none placeholder:text-zinc-500"
            placeholder="Buscar produtos..."
          />
        </form>
      </div>

      <div className="flex items-center gap-4 ">
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" />
          <span className="text-sm">Carrinho (0)</span>
        </div>

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
