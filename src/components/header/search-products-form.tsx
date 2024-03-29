'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'

export function SearchProductsForm() {
  const router = useRouter()
  const searchParams = useSearchParams() // Pega o parâmetro URL, seta valor no input
  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)
    const query = data.q

    if (!query) return

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      className="flex w-80 items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
      onSubmit={handleSearch}
    >
      <Search className="h-5 w-5 text-zinc-500" />

      <input
        className="flex-1  bg-transparent text-sm outline-none placeholder:text-zinc-500"
        name="q"
        defaultValue={query ?? ''}
        placeholder="Buscar produtos..."
      />
    </form>
  )
}
