import React from 'react'

// Creating Card as a prop. The Card component in like the container for the attributes
// The 'children' represent the elements we wrap
// We add a class to make specfic changes.

const Cards = ({children, bg = 'bg-gray-100' // Set default bg color
}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}> 
        {children}
    </div>
  )
}

// with the '${bg}' It allows the elements to declare its preferrd color

export default Cards