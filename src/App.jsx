import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <div className='main-app'>
      {/* <Navbar/> */}
      <MainRoutes />
    </div>
  )
}

export default App