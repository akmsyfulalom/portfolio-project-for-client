"use client"
import React from 'react'
import heroImage from "/public/contactPageImage.jpg"
import Image from 'next/image'
import Link from 'next/link'
import Music from './Music'


const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse ">
              <Image width={700} height={700} src={heroImage} className="max-w-sm rounded-lg" />
            <div>
            <h1 className="mb-5 text-2xl font-bold">Hello there</h1>
              <h1 className="text-5xl font-bold">I'm Alonzo Johnson</h1>
              <p className="py-3">I'm God's child! I'm a sinner fighting the good fight with Love and prayer.</p>
              <Link href="/about" className="btn btn-primary">Learn more</Link>
            </div>
        </div>
       
        
    </div>

   <Music/>

  </div>
  )
}

export default Hero



