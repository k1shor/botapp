import React from 'react'
import { BrowserRouter, Route, Switch as Routes } from 'react-router-dom'
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
                <Route exact path='/' component={Home}/>
                <Route exact path='/gaming' component={Gaming}/>
                <Route exact path='/music' component={Music}/>
                <Route exact path='/entertainment' component={Entertainment}/>
                <Route exact path='/utility' component={Utility}/>
                <Route exact path='/productivity' component={Productivity}/>
                <Route exact path='/botdetail' component={BotDetail}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes