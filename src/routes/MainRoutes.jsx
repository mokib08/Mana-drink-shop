import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Features/Home/Home'
import Shop from '../Features/Shop/Shop'
import Story from '../Features/Story/Story'
import Blog from '../Features/Blog/Blog'
import Community from '../Features/Community/Community'

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