import React from 'react'
import './Home.scss'
import str from '../../assets/image/str.png'
import img1 from '../../assets/image/img1.png'
import img2 from '../../assets/image/img2.png'
import img3 from '../../assets/image/img3.png'
import img4 from '../../assets/image/img4.png'
import men1 from '../../assets/image/men1.jpg'
import men2 from '../../assets/image/men2.jpg'
import men3 from '../../assets/image/men3.jpg'

const Home = () => {
  return (
    <div className='main-home'>
      <div className='section-1'>
        <div className='child-div-1'>
          <h1>Just say goodbye to <br /> <div className='str'><img src={str} alt="" /></div> being thirsty. <button>Drink it Up <i className="arrow ri-arrow-right-line"></i></button> </h1>

          <p>Thirst <bold>quenching</bold> drink made just for you.</p>
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
                 <img className='ctn-img-1' src={img3} alt="" />
                  <img className='ctn-img-2' src={img1} alt="" />
                  <img className='ctn-img-3' src={img4} alt="" />
              </div>
            </div>
            <div className='bt-right'>
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

     <div className="section-2">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <p>Boost Eneroy</p>
          <h1>Turning fantasies into reality. <button>Our Story icon</button></h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, voluptatibus dignissimos.</p>
        </div>
        <div><img src={img4} alt="" /></div>
     </div>

    </div>
  )
}

export default Home