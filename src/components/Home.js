import React, { Component } from 'react'
import './home.css'
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <div className="backdrop">
                    <Link to='/men' class="nav-link">
                        <div className="nav-image-container">
                            <div className="nav-image"> <img src="/img/men.jpg" alt="men"/> </div>
                            <div className="nav-details">
                                <div className='title'> Fashion </div>
                                <div className='title-2'> FOR HIM TO ROCK </div>
                                <div className='title-3'> UPTO 40% OFF </div>
                                <div className='explore'> + EXPLORE </div>
                            </div>
                        </div>
                    </Link>
                    <Link to='/women' class="nav-link">
                        <div className="nav-image-container-left">
                            <div className="nav-details-left">
                                <div className='title'> TOPWEAR </div>
                                <div className='title-2'> FOR HER </div>
                                <div className='title-3'> Exciting Offers </div>
                                <div className='explore'> + EXPLORE </div>
                            </div>
                            <div className="nav-image"> <img src="/img/women.jpg" alt="men"/> </div>
                            
                        </div>
                    </Link>
                    <Link to='/kids' class="nav-link">
                        <div className="nav-image-container">
                            <div className="nav-image"> <img src="/img/kids.jpg" alt="men"/> </div>
                            <div className="nav-details">
                                <div className='title'> WARDROBE </div>
                                <div className='title-2'> REFRESH FOR KIDS </div>
                                <div className='title-3'> Grab for your kid now </div>
                                <div className='explore'> + EXPLORE </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
