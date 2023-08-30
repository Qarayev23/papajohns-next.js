'use client'

import Image from "next/image"

const NotFound = () => {
  return (
    <div className="w-full h-96 relative my-7">
        <Image src="/img/404.jpeg" fill alt="404 not found" />
    </div>
  )
}

export default NotFound