import React from 'react'


const services = [
    {
        title : 'Growth',
        description : 'Filler text is dummy text which has no meaning however looks very similar to real text.'
    },
    {
        title : 'Security',
        description : 'Filler text is dummy text which has no meaning however looks very similar to real text.'
    },
    {
        title : 'Cloud',
        description : 'Filler text is dummy text which has no meaning however looks very similar to real text.'
    },
]

function Services() {
  return (
    <div id='services' className="py-6 bg-white sm:py-8 lg:py-28 scroll-smooth">
  <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
    {/* text - start */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6">
        SERVICES
      </h2>
     
    </div>
    {/* text - end */}
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 md:gap-8">
      {
        services.map((service, index) => (
           
      <div className="flex flex-col p-4 border rounded-lg md:p-6" key={index}>
        <h3 className="mb-2 text-lg font-semibold md:text-xl">{service.title}</h3>
        <p className="mb-4 text-gray-500">
         { service.description}
        </p>
        
      </div>
   

        )
        )
      }
    
    </div>
  </div>
</div>

  )
}

export default Services