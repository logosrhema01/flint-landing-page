import React from 'react'

function Hero() {
  return (
    <div className="-mt-16 bg-white py-28 h-4/6 md:h-5/6 lg:h-5/7 sm:py-16 lg:py-20 hero-bg">
  <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
  
    <section className="flex flex-col justify-between gap-6 lg:flex-row sm:gap-10 md:gap-16">
      {/* content - start */}
      <div className="flex flex-col items-center justify-center xl:w-5/12 lg:items-start sm:text-center lg:text-left lg:py-12 xl:py-24">
        <h1 className="mb-8 text-4xl font-bold text-black-800 sm:text-5xl md:text-6xl md:mb-12">
          RIDE
        </h1>
        <p className="mb-8 leading-relaxed text-gray-500 lg:w-4/5 xl:text-lg md:mb-12">
         START RIDING WITH FLINT!
        </p>
        <p className='mb-8 leading-relaxed text-gray-800 lg:w-3/4 xl:text-lg md:mb-12'>
          Earn money on your schedule
        </p>
     
      </div>
      {/* content - end */}
     
    </section>
  </div>
</div>

  )
}

export default Hero