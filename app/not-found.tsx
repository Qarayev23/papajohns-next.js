'use client'

import Image from "next/image"

const NotFound = () => {
  return (
    <div style={{
      width:'100%',
      height:'400px',
      position:"relative"
    }}>
        <Image src="/img/404.jpeg" fill alt="404 not found" />
    </div>
  )
}

export default NotFound