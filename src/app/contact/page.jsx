import React from 'react'
import contactPageImage from "/public/contactPageImage.jpg"
import Image from 'next/image'
import SocialCard from '@/components/homePageComponents/SocialCard'

const Contact = () => {
  return (
    <div className="z-0">
       <h1 className="text-4xl text-center lg:mt-20 md:mt-12 my-6">Contact</h1>
      <div className="card flex-col-reverse  lg:card-side bg-base-100  lg:grid lg:grid-cols-6 gap-10 mb-20  lg:mx-48 mx-5">
    <div className="card-body p-0 col-start-1 col-end-4">
      <div className="card flex-shrink-0  bg-base-100">
      <div className="card-body p-0">
        <div>
        <h2 className="card-title">Contact me for any query!</h2>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
            <label className="label">
           <span className="label-text">Email</span>

          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
           <label className="label">
           <span className="label-text">Message</span>
           </label>
           <textarea className="textarea textarea-bordered w-full h-32" placeholder="message"></textarea>
        </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    <figure className="col-start-4 col-end-7 z-0 " ><Image width={600} height={600} src={contactPageImage} alt="contact image"/></figure>
  
  </div>

{/* Social cards */}

    <SocialCard/>

    </div>
  )
}

export default Contact
