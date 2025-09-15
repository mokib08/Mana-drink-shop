import React from 'react'
import logo from '../../assets/image/logo.png'
import './Footer.scss'

const Footer = () => {
    return (
        <div>
            <div className='footer-top'>
                <div className="footer-icon">
                    <img src={logo} alt="" />
                    <p> We carefully crafted each can with all the benefits for the right time!</p>
                </div>
                <div className="footer-title">
                    <div className="left-content">
                        <div className="content-list">
                            <li className='head-title'>Home</li>
                            <li>Our Story</li>
                            <li>Flavor</li>
                        </div>
                        <div className="content-list">
                            <li className='head-title'>About Us</li>
                            <li>Review</li>
                            <li>Community</li>
                        </div>
                    </div>
                    <div className="left-content">
                        <div className="content-list">
                            <li className='head-title'>Consumosion</li>
                            <h2>1.6 ML</h2>
                        </div>
                        <div className="content-list">
                            <li className='head-title'>Shop</li>
                            <li>Blackberry</li>
                            <li>Tropical</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className="footer-social">
                    <i class="ri-facebook-line"></i>
                    <i class="ri-instagram-line"></i>
                    <i class="ri-linkedin-line"></i>
                    <i class="ri-twitter-x-line"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer