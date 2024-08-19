import React from 'react'
import Hero from '../components/About/Hero'
import { Shop } from '../components/About/Shop'
import { Save } from '../components/About/Save'
import { Bottom } from '../components/About/Bottom'
import NewAbout from './NewAbout'

const AboutUs = () => {
  return (
    <>
    <NewAbout />
    <Hero />
    <Shop />
    <Save />
    <Bottom />
    </>
  )
}

export default AboutUs