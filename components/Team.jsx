import React from 'react'

const team = [
    {
        image : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
        name : "John Doe",
        position : "CEO",

    },
    {
        image : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
        name : "John Doe",
        position : "CEO",

    },
    {
        image : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
        name : "John Doe",
        position : "CEO",

    },
    {
        image : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
        name : "John Doe",
        position : "CEO",

    },
    {
        image : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
        name : "John Doe",
        position : "CEO",

    },
    {
        image : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
        name : "John Doe",
        position : "CEO",

    },
    {
        image : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
        name : "John Doe",
        position : "CEO",

    },
    {
        image : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
        name : "John Doe",
        position : "CEO",

    },
    {
        image : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
        name : "John Doe",
        position : "CEO",

    },
    {
        image : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
        name : "John Doe",
        position : "CEO",

    },
    {
        image : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
        name : "John Doe",
        position : "CEO",

    },
    {
        image : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
        name : "John Doe",
        position : "CEO",

    }

]

function Team() {
  return (
    <div id='team' className="px-4 py-16 mx-auto scroll-smooth sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-28">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
       
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">MEET THE TEAM</span>
          </span>{' '}
         
        </h2>
       
      </div>
      <div className="grid grid-cols-2 gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg lg:grid-cols-4">
        {team.map((item, index) => (
            <div className="flex" key={index}>
          <img
            className="object-cover w-20 h-20 mr-4 rounded-full shadow"
            src={item.image}
            alt="Person"
          />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-bold">{item.name}</p>
            <p className="text-sm text-gray-800">{item.position}</p>
          </div>
        </div>
        ))
            }
        
      </div>
    </div>
  )
}

export default Team
