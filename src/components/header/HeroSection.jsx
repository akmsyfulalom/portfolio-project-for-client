import React from 'react'

const HeroSection = () => {
  return (
 
    <div className="hero min-h-screen" style={{backgroundImage: 'url("https://images.pexels.com/photos/8044162/pexels-photo-8044162.jpeg?auto=compress&cs=tinysrgb")'}} >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-lg">
        <h1 className="mb-5 text-2xl font-bold">Hello there</h1>
        <h1 className="mb-5 text-5xl font-bold">I am Alonzo Johnson</h1>
        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  
  )
}

export default HeroSection
