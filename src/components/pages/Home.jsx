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
import leaf from '../../assets/image/leaf.png'
import orange from '../../assets/image/orange.png'
import unnamed from '../../assets/image/unnamed.png'
import lastingEnergy1 from '../../assets/image/lasting-energy-1.png'
import lastingEnergy2 from '../../assets/image/lasting-energy-2.png'
import flower from '../../assets/image/flower.png'
import story from '../../assets/image/story.png'



const Home = () => {
  return (
    <div className='main-home'>
      <div className='header-section'>
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
          <div className='wrapper'>
              <div className='left-div'><img src={img1} alt="" /></div>

                <div className='center-div'>
                  <img className='image-1' src={orange} alt="" />
                  <img className='image-2' src={leaf} alt="" />
                  <small> <i class="ri-sun-line"></i> Boost Eneroy</small>
                  <h1>Turning fantasies &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; into reality. <button>Our Story <i class="ri-arrow-right-line"></i></button></h1>
                  <p>Elevate your energy, elevate your game</p>
                </div>
                <div className='rihgt-div'><img src={img4} alt="" /></div>
          </div>
        </div>
      </div>

      <div className="section-3">

        <h1>Taste the flover sensation</h1>
        <div className='Expire'>
          <img src={unnamed} alt="" />
          <p>From june to August, this is what we drink.</p>
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

      <div className="section-4">
        <div className="section4-main">
            <div className='section4-leftBox'>
              <div className="parent-1">
                  <span> <i class="ri-sun-line"></i> Boost Eneroy</span>
                  <h1>Drink your way to happiness</h1>
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
              <img src={lastingEnergy2} alt="" />
                <div className="">
                    <p>A special blend of Taurine, and Vitamins provide smooth long lasting energy</p>
                    <button>Our Story <i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
      </div>

      <div className="section-5">
        <div className="section5-parant">
          <div className="section5-child-1">
            <div className="sec5-imgIcon"><i class="fa-solid fa-quote-left"></i></div>
            <div className="sec5-textIcon">
              <span><i class="ri-heart-line"></i> our Story</span>
            </div>
            <div className="sec5-title">
              <h1>The benefits of a healthy drink are more important than ever in today's world, so we created one.</h1>
            </div>

            <div className="image-text">
              <div className="left-img">
                <img src={men1} alt="" />
              </div>
              <div className="right-text">
                <p>Rylic Jason</p>
                <span>Founder of Mana</span>
              </div>

            </div>
          </div>

          <div className="section5-child2">
            <img src={story} alt="" />
          </div>
        </div>
        
      </div>

      <div className="section-6">
        <div className="image-gallary">
          <div className="img-topText">
            <div className="title1">
                <span><i class="ri-global-line"></i> ON SOCIAL</span>
            </div>
            <div className="title2">
                <h1><i class="ri-instagram-line"></i> manamate</h1>
            </div>
          </div>
          <div className="imagesAll">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
          </div>
        </div>
      </div>



    </div>
  )
}

export default Home