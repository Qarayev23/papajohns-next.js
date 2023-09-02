import { Metadata } from 'next'
import BasketPage from './basketPage'

export const metadata: Metadata = {
    title: 'Papa Johns | Basket',
}
const Page = () => {
  return (
   <BasketPage />
  )
}

export default Page