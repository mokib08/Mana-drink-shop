import React from 'react'
import flower from '../../../assets/image/flower.png'
import lastingEnergy1 from '../../../assets/image/lasting-energy-1.png'
import lastingEnergy2 from '../../../assets/image/lasting-energy-2.png'
import './EnergySection.scss'

const EnergySection = () => {
  return (
    <div>
        <div className="section-4">
            <div className="section4-main">
                <div className='section4-leftBox'>
                <div className="parent-1">
                    <span> <i class="ri-sun-line"></i> Boost Eneroy</span>
                    <h1>Drink your <br /> way to happiness</h1>
                    <h3>Get you energy on every sip</h3>
                    <p>A gentle wave of energy to active you without Jittering.</p>
                </div>
                <div className="parent-2">
                    <div className='child-div'>
                    <img className='flower' src={flower} alt="" />
                    {/* <img src="" alt="" /> */}
                    <img className='bg-img' src={lastingEnergy1} alt="" />
                    <button>Drink it Up <i className="arrow ri-arrow-right-line"></i></button>
                    </div>
                </div>
                </div>
    
                <div className='section4-rightBox'>
                    <div className='rightBox-parent'>
                         <div className="image">
                            <img src={lastingEnergy2} alt="" />
                        </div>
                        <div className="description">
                            <p>A special blend of Taurine, and Vitamins provide smooth long lasting energy</p>
                            <button>Our Story <i class="ri-arrow-right-line"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default EnergySection