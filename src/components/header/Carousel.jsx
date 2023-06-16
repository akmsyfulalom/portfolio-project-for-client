import React from 'react'

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src="https://images.pexels.com/photos/8044111/pexels-photo-8044111.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://images.pexels.com/photos/8044220/pexels-photo-8044220.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://images.pexels.com/photos/6436036/pexels-photo-6436036.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
    </div>
  )
}

export default Carousel
