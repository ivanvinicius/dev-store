import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <main className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        className="group relative col-span-6 row-span-6 flex items-center justify-center overflow-hidden rounded-lg bg-zinc-900  "
        href={'/'}
      >
        <Image
          className="transition-transform duration-200 group-hover:scale-105"
          src="/camiseta-dowhile.png"
          alt=""
          width={830}
          height={830}
          quality={100}
        />

        <div className="absolute bottom-28 right-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">Camiseta do while 2022</span>
          <span className="flex h-full flex-shrink-0 items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 129
          </span>
        </div>
      </Link>

      {/*  */}

      <Link
        className="group relative col-span-3 row-span-3 flex items-center justify-center overflow-hidden rounded-lg bg-zinc-900 "
        href={'/'}
      >
        <Image
          className="transition-transform duration-200 group-hover:scale-105"
          src="/moletom-ia-side.png"
          alt=""
          width={415}
          height={415}
        />

        <div className="absolute bottom-12 right-12 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">
            Moletom ia side da rocketseat
          </span>
          <span className="flex h-full flex-shrink-0 items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 129
          </span>
        </div>
      </Link>

      {/*  */}

      <Link
        className="group relative col-span-3 row-span-3 flex items-center justify-center overflow-hidden rounded-lg bg-zinc-900 "
        href={'/'}
      >
        <Image
          className="transition-transform duration-200 group-hover:scale-105"
          src="/moletom-ia-devs.png"
          alt=""
          width={415}
          height={415}
        />

        <div className="absolute bottom-12 right-12 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">Moletom ia para devs</span>
          <span className="flex h-full flex-shrink-0 items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 129
          </span>
        </div>
      </Link>
    </main>
  )
}
