import React from 'react';

// Importing the component for a single list.
import JobListing from './JobListing';
import {useState, useEffect} from 'react'; 
import Spinner from './Spinner';



// We are creating a listing component which will be able to loop through the array in the json file.
// We loop through it creating a list using the map method

const JobListings = ({isHome = false}) => {
  const [jobs, setJobs] = useState([]) //Set the useState to an empty array so that it can fetch the API
  const [loading, setloading] = useState(true) //Set spiner when it is fetching

  // useEffcet allows you to perform side effects on your component
  // It also a React Hook that lets you synchronize a component with an external system. 
  // Takes in a functon and a dependency array:  useEffect (() => {},[])
  // dependency array: when the value of the value in it changes the useEffet will run. It loops through array, if there is a value in it, therer will be a never ending loop
  useEffect (() => {
    //  Async ensures that the function returns a promise and wraps non-promises in it, while await works only inside the async function.
    // We are doing a fetch on rendering
    const fetchJobs = async () => { 
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      }catch (error) {
        console.log('Error fetching data', error);
      }finally {
        setloading (false)
      }
    };

    fetchJobs ()

  }, []) 


    
  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {/* Creating the loop using the map method and calling the attribute 'job' */}
            {/* 1. Rendering the joblisting component in the JobListings component loop.
                1. It must have a key since it is a list
                3. Then we pass in  a job prop(attribute)*/}

            {loading ? (<Spinner loading = {loading} />): (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <JobListing key = {job.id} job = {job}/>
                ))}
              </div>
 
            )}
            
        
      </div>
    </section>
  )
}

export default JobListings;


// WHEN WE USED AN ARRAY
/* Importing the job array from the job.json file
import jobs from '../jobs.json';
const jobListings = isHome ? jobs.slice(0,3) : jobs;
// Creating a variable to loop over only three of the list in the array. 
// const recentJobs = jobs.slice(0,3)
*/