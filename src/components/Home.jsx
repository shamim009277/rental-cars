import React from 'react'
import Hero from './Hero'
import FeaturedCars from './FeaturedCars'
import VideoSection  from './VedioSection'
import Features from './Features'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <FeaturedCars/>
        <VideoSection/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default Home