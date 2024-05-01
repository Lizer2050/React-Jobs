import React from 'react'

// Importing the routing package
import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom';

// Importing sections that will be on the app
import MainLayout from './Layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

// CREATING THE APP
const App = () => {

  // We are creating the function "addJob" here so that we can create, insert, delete to the Api, in the App component through the addjob function.
  /* 
  const res = await fetch ('/api/jobs', : Sends post request to the '/api/jobs'
  method: 'POST', : Specifies that the method we are passing to the Api is POST
  headers: {'Content-Type': 'application/json',}, : Show the content type of our body
  body : JSON.stringify (newJob), : Converts the newJob object to json format 
  */

  // ADD NEW JOB
  const addJob = async (newJob) => {
    // Manipulation
    const res = await fetch ('/api/jobs', {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify (newJob),
    }) 

    return;
  }

  // DELETE JOB
  const deleteJob = async (id) => {
    const res = await fetch (`/api/jobs/${id}`, {
      method: 'DELETE',
    }); 
    return;
  }

  // UPDATE JOB
  const updateJob = async (job) => {
    const res = await fetch (`api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify (job),
    });
  
    return;
  }


  
  // CREATING THE ROUTER
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element = {<MainLayout />}> 

        <Route index element = {<HomePage />} /> 

        <Route path = '/jobs' element = {<JobsPage />} />

        
        <Route 
          path = '/edit-job/:id' 
          element = {<EditJobPage updateJobSubmit = {updateJob} />} 
          loader = {jobLoader} />

        <Route 
          path = '/jobs/:id' 
          element = {<JobPage deleteJob = {deleteJob}/>} 
          loader = {jobLoader}/>


        <Route path = 'add-job' 
          element = {<AddJobPage addJobSubmit = {addJob} />} />

        <Route path = '*' element = {<NotFoundPage />} />
        
      </Route> 
    
    
    )
  );


  return <RouterProvider router={router} />;    
};


export default App;











// STATE: We have the component state, global state relate to the entire app.
// Compnnet state: 



  // return (
  //   <>
  //   <Navbar />
  //   <Hero />
  //   <HomeCards /> {/* Wrapper Component */}
  //   <JobListings /> {/* The file that loops through the array in the json file */}
  //   <ViewAllJobs />
  //   </>
  // )


  
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import HomeCards from './components/HomeCards';
// import JobListings from './components/JobListings';
// import ViewAllJobs from './components/ViewAllJobs';


/* addJobSubmit = {addJob} 
This is an example of calling a function in a component. 
*/






















{/* // import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} classNameName="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} classNameName="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div classNameName="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p classNameName="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App */}
