import React from 'react'
import MainCart from './MainCart'
import { getCart } from '@/serverActions/cart'
import Link from 'next/link'
import Instead from './Instead'

const page = async () => {
  const cart = await getCart();

  if (!cart.length) {
    return (
        <Instead />
    )
  }

  return <MainCart cart={cart} />
}

export default page