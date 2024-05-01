import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    {/* Home Page components */}
        <Hero />
        <HomeCards /> {/* Wrapper Component */}
        <JobListings isHome = {true} /> {/* The file that loops through the array in the json file */}
        <ViewAllJobs /> 
    </>
  )
}

export default HomePage