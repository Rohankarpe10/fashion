import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logoo.png'
import styled from 'styled-components';
import {ButtonContainer} from './Button'; 


export default class Navbar extends Component {
    render() {
        return (
            <Navigation className="navbar navbar-expand-sm navbar-dark px-sm-5" >

            <Link to='/home'>
                <img src={logo} alt="store"
                className="navbar-brand" height='70'  />
            </Link>

            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to='/men' className="nav-link">
                        Men
                    </Link>
                </li>
            </ul>

            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to='/women' className="nav-link">
                        Women
                    </Link>
                </li>
            </ul>

            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to='/kids' className="nav-link">
                        Kids
                    </Link>
                </li>
            </ul>

            <Link to='/cart' className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                        <i className="fas fa-shopping-cart" />
                    </span>                  
                </ButtonContainer>
            </Link>
            </Navigation>
        )
    }
}

const Navigation = styled.nav`
background:var(--mainCyan);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.6rem;
    text-transform:capitalize;
    &:hover{
        font-size:2.1rem;
        color:var(--mainBlue) !important;
    }
`;


