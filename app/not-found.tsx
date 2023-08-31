'use client'

import Image from "next/image"

const NotFound = () => {
  return (
    <div className="w-96 h-60 relative mx-auto my-24">
        <Image src="/img/404.jpeg" fill alt="404 not found" />
    </div>
  )
}

export default NotFound