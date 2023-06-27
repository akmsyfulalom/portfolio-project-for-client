import React from 'react'
import shortAboutImage from "/public/shortAboutImage.jpg"
import Image from 'next/image'
import Link from 'next/link'

const ShortAbout = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl md:grid md:grid-cols-2 md:gap-4 my-20">
    <figure className="md:col-span-1"><Image width={400} height={400} src={shortAboutImage} alt="Album"/></figure>
    <div className="card-body">
      <h2 className="card-title">Biography</h2>
      <div>
      <p className="my-5">A highly versatile artist, Rachel is an American singer who got her start her career in the 2000s.</p>
      <span className="my-5">Born on April 22, 1986, in El Centro, California, Rachel rose to stardom as part of a singing act with brother Ban Calen in the 2000s, hitting No. 1 with the single «Make Me Happy. Rachel had established a solo career of her own as well, having chart-toppers like Gypsies, Tramps and Thieves, Half-Breed and Dark Lady. Rachel also found more music success with rock oriented tracks in the 15s and a global dance hit Believe and My Dreams in the late 16s. She released Closer to the Truth, her first studio album in 10 years, in 2016, which offered fans more dance hits.</span>
      <p>Alonzo Johnson</p>
      <p>Azo4life</p>
      </div>
      <Link href="/about" className="btn btn-primary">Know more</Link>
    </div>
 
   
  
  </div>
  )
}

export default ShortAbout
