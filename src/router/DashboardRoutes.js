import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Ui/Navbar.component'
import VideoPlay from '../pages/Videos/VideoPlay.page'
import LoginPage from '../pages/Login/Login.page'
import HomePage from '../pages/Home/Home.page'

export const DashboardRoutes = () => {
    console.log('routes')
    return (
        <>  
            <Navbar/>
            <Switch>
                <Route exact path="/home" component={ HomePage }/>
                <Route exact path="/video/:videoId" component={ VideoPlay }/>
                <Route exact path="/login" component={ LoginPage }/>

                <Redirect to="/home" />
                
            </Switch>
        </>
    )
}
