import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {ThemeProvider} from 'styled-components';

//import AuthProvider from '../providers/Auth';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import NotFound from '../pages/NotFound';
import SecretPage from '../pages/Secret';
import Layout from "../components/Layout";
import Navbar from "../components/Ui/Navbar.component";
import VideoPlay from "../pages/Videos/VideoPlay.page";
import { useAuth } from "../providers/Auth";
import Private from "../components/Private/Private.component";
import { darkTheme, GlobalStyles, lightTheme } from "../theme";

function AppRouter() {
    //const {user} = useContext(AuthContext);
    const { isChecked } = useAuth();
    
    return (
        <ThemeProvider theme={isChecked ? lightTheme: darkTheme}>
        <GlobalStyles/>    
        <Router>    
            <Navbar/>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/login">
                        <LoginPage />
                    </Route>
                    <Route exact path="/videos/:videosId">
                        <VideoPlay />
                    </Route>
                    <Private exact path="/secret">
                        <SecretPage />
                    </Private>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Layout>    
        </Router>
        </ThemeProvider>
    )
}

export default AppRouter;
