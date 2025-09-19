import React from 'react'
import str from "../../../assets/image/str.png";
import mainImage from "../../../assets/image/main.png";
import men1 from "../../../assets/image/men1.jpg";
import men2 from "../../../assets/image/men2.jpg";
import men3 from "../../../assets/image/men3.jpg";
import leaf from '../../../assets/image/leaf.png'
import orange from '../../../assets/image/orange.png'
import img1 from '../../../assets/image/img1.png'
import img4 from '../../../assets/image/img4.png'
import "./HeaderSection.scss";

const HeaderSection = () => {
  return (
    <div className='header-section'>
        <div className='section-1'>
            <div className='child-div-1'>
            <h1>Just say goodbye to <br />  being thirsty. <button>Drink it Up <i className="arrow ri-arrow-right-line"></i></button> </h1>

            <p>Thirst <bold>quenching</bold> drink made just for you.</p>
            <div className='str'><img src={str} alt="" /></div>
            </div>

            <div className="header-bottom">
            <div className='bt-left'>
                <div className="left-img">
                <img className='img-1' src={men1} alt="" />
                <img className='img-2' src={men2} alt="" />
                <img className='img-2' src={men3} alt="" />
                </div>
                <h3>The drink you need this summer "</h3>
                <p>Product with great taste, and instant energy</p>
            </div>

            <div className='bt-center'>
                <div className='ctn-iamge'>
                <img src={mainImage} alt="" />
                </div>
            </div>
            
            <div className='bt-right'>
                <div>
                <i class="fa-solid fa-bolt"></i>
                <p>The drink of the nation.</p>
                <div className="btn">
                    <button className='btn-1'>Caffeine</button>
                    <button className='btn-2'>Citric acid</button><br />
                    <button className='btn-3'>lemon</button>
                    <button className='btn-4'>cane sugar</button>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="section-2">
            <div className='wrapper'>
            <div className='right-div'><img src={img4} alt="" /></div>
            <div className='center-div'>
                <img className='image-1' src={orange} alt="" />
                <img className='image-2' src={leaf} alt="" />
                <small> <i class="ri-sun-line"></i> Boost Energy</small>
                <h1>Turning fantasies into reality. </h1>
                <p>Full strength of Man is comes from naturally infused taurine.</p>

                <button>Drink it Up <i className="arrow ri-arrow-right-line"></i></button>
            </div>

            <div className='left-div'><img src={img1} alt="" /></div>

            
            
            </div>
        </div>


    </div>
  )
}

export default HeaderSection