import React from 'react'
// import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Hero from '../Section/Home/Hero'
import Service from '../Section/Home/Service'
import Skill from '../Section/Home/Skill'

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <Hero />
        <Service />
        <Skill />
      </div>
    </>
  )
}
