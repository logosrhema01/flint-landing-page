import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/layout'
import Services from '../components/Services'
import Team from '../components/Team'

function Home(Component, pageProps) {
  return (
   <>
     <Layout>
     <Hero/>
     <Services/>
     <Team/>
     
   
     </Layout>
   </>
  )
}

export default Home
