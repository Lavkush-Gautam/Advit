import React from 'react'
import Blog from '../components/Blog'
const Blogs = () => {
  return (
    <div className='bg-[#F9F0D3]'>
      {/* Hero Section */}
      <div className="w-full flex h-[230px] bg-[#F9F0D3] items-center justify-center">
        <h1 className="text-gray-600 text-5xl mt-4 md:text-6xl font-bold">POST AND BLOGS</h1>
      </div>

      <Blog />
    </div>
  )
}

export default Blogs