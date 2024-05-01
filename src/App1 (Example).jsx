import React from 'react'

const App = () => {
  const name = 'John'
  const x = 10
  const y = 20
  const names = ['Lizer', 'Tony', 'Prince', 'Stephen']
  const LoggedIn = false;

  //Putting the CSS style in a variable
  const styles = {
    color: 'pink',
    fontSize: '55px'
  }



  return (
    <>
      <div className='text-5xl'>App</div>
      
      {/* In styling CSS */}
      <p style={{color: 'red', fontSize: '24px'}}> Hello {name} </p>

      {/* Calling the style when you have put it in a variable */}
      <p style={styles} > Hello Lizer </p>

      <p> The sum of {x} and {y} is {x + y}</p>

      {/* LOOP: Loop needs a special key */}
      <ul>
        {names.map((name, index) => (
          <li key = {index}>{name}</li>
        ))}
      </ul>

      {/* Conditionals: Various ways to write them */}
      {LoggedIn ? <h1>Hello John</h1>: <h1>Hello Guest</h1>}
      {LoggedIn ? <h1>Hello John</h1>: ''}
      {LoggedIn && <h1>Hello John</h1>}

    </>
    
  )
}


export default App






























// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
