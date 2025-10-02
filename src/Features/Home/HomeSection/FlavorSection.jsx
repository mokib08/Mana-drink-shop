import React from 'react'
import img1 from '../../../assets/image/img1.png'
import img2 from '../../../assets/image/img2.png'
import img3 from '../../../assets/image/img3.png'
import img4 from '../../../assets/image/img4.png'
import unnamed from '../../../assets/image/unnamed.png'
import './FlavorSection.scss'

const FlavorSection = () => {
  return (
    <div>
        <div className="section-3">   
                <div className="top-bar">
                  <h1>Taste the flover sensation</h1>
                  <div className='Expire'>
                      <img src={unnamed} alt="" />
                      <p>From june to August, this is what we drink.</p>
                  </div>
                </div>
    
                <div className="flavor-card">
                    <div className='card card-1'>
                        <span><i class="ri-star-s-fill"></i> 4.7</span>
                        <img src={img4} alt="" />
                        <button>Black Berry & Hibiscus</button>
                    </div>
                    <div className='card card-2'>
                        <span><i class="ri-star-s-fill"></i> 4.7</span>
                        <img src={img3} alt="" />
                        <button>Black Berry & Hibiscus</button>
                    </div>
                    <div className='card card-3'>
                        <span><i class="ri-star-s-fill"></i> 4.7</span>
                        <img src={img1} alt="" />
                        <button>Black Berry & Hibiscus</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default FlavorSection