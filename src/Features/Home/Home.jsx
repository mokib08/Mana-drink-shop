import React from 'react'
import ImageGallery from './HomeSection/ImageGallary'
import Footer from '../../components/Footer/Footer'
import HeaderSection from './HomeSection/HeaderSection'
import FlavorSection from './HomeSection/FlavorSection'
import EnergySection from './HomeSection/EnergySection'
import StorySection from './HomeSection/StorySection'
import './Home.scss'


const Home = () => {
  return (
    <div className='main-home'>
   
      <HeaderSection />
      <FlavorSection />
      <EnergySection />
      <StorySection />
      <ImageGallery />
      <Footer />

    </div>
  )
}

export default Home