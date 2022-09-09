import React from 'react'
import Navbar from './NavBar'
import Hero from './Hero'
import Getstarted from './Getstarted'
import ServiceSection from './ServiceSection'
import Testimonials from './Testimonials'
import Contact from './Contact'
export default function Layout() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Getstarted/>
    <ServiceSection/>
    <Testimonials/>
    <Contact/>
    </>
  )
}
