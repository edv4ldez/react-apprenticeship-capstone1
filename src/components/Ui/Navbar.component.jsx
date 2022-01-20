import React, { useState } from 'react';
import AddCategory from '../ListVideos/AddCategory.component';
import SwitchButton from './SwitchButton.component';
import { Link, NavLink, useHistory} from 'react-router-dom'

import './Ui.styles.css';
import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';

//import { Link } from 'react-router-dom';

function Navbar() {

    const [isToggle, setIsToggle] = useState(false); 
    
    function handleToggle() {
        setIsToggle((prevState) => !prevState);
    }

    return (
        <nav className="topnav">
            <div 
                className="navbar-toggle-menu"
                onClick={handleToggle}
            >
                <i className="fa fa-bars" />
            </div>

            <NavbarHead>
               <NavbarContent/>
            </NavbarHead>
            { isToggle && (
                <NavbarToggle>
                    <NavbarContent/>
                </NavbarToggle>
            )}
        </nav>
    );
}

function NavbarContent() { 

    const history = useHistory();
    const { authenticated, logout } = useAuth();

    function deAuthenticate(event) {
        event.preventDefault();
        logout();
        history.push('/');
    }

    return (
        <>
            <Link 
                className = "navbar-text" 
                to="/"
                id='home'
            >
                <i className="fa fa-home" />
                    Home 
            </Link>
            <div>
                <NavbarContainer>
                    
                    {
                        authenticated 
                        &&
                        (<NavLink 
                            activeClassName="active"
                            className="navbar-text"
                            exact 
                            to="/secret"
                        >
                            <i className="fa fa-star"/>
                            Favorites     
                        </NavLink>)
                    }
                    <SwitchButton/>
                    <AddCategory/>
                    {
                        authenticated ? (
                        <NavLink 
                            activeClassName="active"
                            className="navbar-text"
                            exact 
                            to="/"
                            onClick={deAuthenticate}
                        >
                            <i className="fa fa-arrow-right" />
                            Logout 
                        </NavLink>
                        ) : (
                        <NavLink 
                            activeClassName="active"
                            className="navbar-text"
                            exact 
                            to="/login"
                        >
                            <i className="fa fa-arrow-right" />
                            Login 
                        </NavLink>
                        )        
                    }
                </NavbarContainer>
            </div>
        </>
    )
}

const NavbarHead = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {    
        display: none;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: flex-start;
    }
      
`;

const NavbarToggle = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;


    @media screen and (max-width: 768px) {
        align-items: flex-end;
    }
`;

const NavbarContainer = styled.ul`
    display: flex;
    align-items: center;
    padding-left: 0;
    margin: 0;


    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding-top: 0px;
        align-items: flex-end;
    }      
`;

export default Navbar;
