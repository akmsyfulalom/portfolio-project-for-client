
import React from 'react'

async function  getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts",
   { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 

const Blog = async() => {
  const data = await getData()
  console.log(data)
  return (
    <div>
      <h1>Blog</h1>
      <p>{data.length}</p>
     {
      data?.map(post => <div key={post.id}>{post.title }</div>)
     }
    </div>
  )
}

export default Blog
