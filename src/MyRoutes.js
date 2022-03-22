import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Gaming from './Pages/Gaming'
import Music from './Pages/Music'
import Entertainment from './Pages/Entertainment'
import Utility from './Pages/Utility'
import Productivity from './Pages/Productivity'
import BotDetail from './Pages/BotDetail'



const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/gaming' element={<Gaming/>}/>
                <Route path='/music' element={<Music/>}/>
                <Route path='/entertainment' element={<Entertainment/>}/>
                <Route path='/utility' element={<Utility/>}/>
                <Route path='/productivity' element={<Productivity/>}/>
                <Route path='/botdetail/:id' element={<BotDetail/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes