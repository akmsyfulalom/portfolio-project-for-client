import React from 'react'
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch( `https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!res.ok) {
     return notFound()
  }
 
  return res.json()
}


const BlogPost = async({params}) => {
  const data = await getData(params.id)
  return (
    <div>
      <h1>data</h1>
      <p>{data.title}</p>
    </div>
  )
}

export default BlogPost
