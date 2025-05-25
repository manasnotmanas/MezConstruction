import React from 'react'
import AboutServices from '../components/HomeAboutServices'
import OurProcess from '../components/HomeProcess'
import Portfolio from '../components/HomePortfolio'
import HeroSlider from '../components/HeroSectionAbout'

const Home = () => {
  return (
    <>
    <HeroSlider/>
    <AboutServices/>
    <OurProcess/>
    <Portfolio/>
    </>
  )
}

export default Home