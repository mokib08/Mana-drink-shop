import React from 'react'
import men1 from "../../../assets/image/men1.jpg";
import story from '../../../assets/image/story.png'
import './StorySection.scss'

const StorySection = () => {
  return (
    <div>
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
    </div>
  )
}

export default StorySection