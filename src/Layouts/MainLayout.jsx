import React from 'react'
import { Outlet } from 'react-router-dom' // Creating an outlet for the pages in the mainlayout 
import Navbar from '../components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
  return (
    <>
    {/* Must be arranged in order of design */}
     <Navbar />
     <Outlet />
     <ToastContainer />
     
    </>
  )
}

export default MainLayout