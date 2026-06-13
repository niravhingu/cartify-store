import React from 'react'

function ReviewCard({review1}) {
  return (
    <div className="bg-black shadow-lg rounded-2xl p-6 text-center hover:scale-105 duration-300">

      <h3 className="text-xl text-white font-bold mb-3 ">
        {review1.name}
      </h3>

      <p className="text-white">
        {review1.rating}
      </p>
       <p className="text-white">
        {review1.comment}
      </p>

    
    </div>
  )
}

export default ReviewCard   