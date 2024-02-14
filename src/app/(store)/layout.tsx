import { LayoutType } from '~/app/layout'
import { Header } from '~/components/header'

export default function StoreLayout({ children }: LayoutType) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8 ">
      <Header />
      {children}
    </div>
  )
}
