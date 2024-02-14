import { Skeleton } from '~/components/skeleton'

export default function HomeLoading() {
  return (
    <main className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Skeleton className="col-span-6 row-span-6 h-[854px]" />
      <Skeleton className="col-span-3 row-span-3" />
      <Skeleton className="col-span-3 row-span-3" />
    </main>
  )
}
