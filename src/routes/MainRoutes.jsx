import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home'
import Shop from '../components/pages/Shop'
import Story from '../components/pages/Story'
import Blog from '../components/pages/Blog'
import Community from '../components/pages/Community'

const MainRoutes = () => {
  return (
    <div>
        <Routes >

            <Route path='/'  element={<Home/>}/>
            <Route path='/shop' element={<Shop />} />
            <Route path='/story' element={<Story />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/community' element={<Community />} />
            <Route />
            <Route />
        </Routes>
    </div>
  )
}

export default MainRoutes