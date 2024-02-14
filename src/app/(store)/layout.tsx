import { LayoutType } from '~/app/layout'
import { Header } from '~/components/header'

export default function StoreLayout({ children }: LayoutType) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
