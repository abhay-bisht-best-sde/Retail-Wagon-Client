"use client"
import dynamic from 'next/dynamic'
import React, { useMemo } from 'react'

const CartPage = () => {

  const Cart = useMemo(() => dynamic(() => import("./components/CartComponent"), {
    ssr: false
  }), [])

  return <Cart />
}

export default CartPage