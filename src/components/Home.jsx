import React from 'react'
import Hero from './Hero'
import FeaturedCars from './FeaturedCars'
import VideoSection  from './VedioSection'
import Features from './Features'

const Home = () => {
  return (
    <div>
        <Hero/>
        <FeaturedCars/>
        <VideoSection/>
        <Features/>
    </div>
  )
}

export default Home