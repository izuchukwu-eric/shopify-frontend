import React from 'react'

const index = () => {
  return (  
    <div className="max-w-lg mx-auto my-8">
        <p className="text-2xl font-semibold my-6">Fun With AI</p>
        <h5>Enter prompt</h5>
        <textarea className="h-48 w-full border rounded-xl overflow-hidden resize-none focus:border-blue-500 ring-1 ring-transparent focus:ring-blue-500 focus:outline-none text-black p-2 transition ease-in-out duration-300">

        </textarea>
        <div className="flex justify-end">
            <button className="py-1 px-2 text-white bg-blue-600">Submit</button>
        </div>
    </div>
  )
}

export default index