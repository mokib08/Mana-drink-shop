import React, { useEffect, useRef } from 'react';
import productImg1 from '../../assets/image/product-img-1.jpg'
import productImg2 from '../../assets/image/product-img-2.jpg'
import productImg3 from '../../assets/image/product-img-3.jpg'
import productImg4 from '../../assets/image/product-img-4.jpg'
import productImg5 from '../../assets/image/product-img-5.jpg'
import productImg6 from '../../assets/image/product-img-6.jpg'
import productImg7 from '../../assets/image/product-img-7.jpg'
import productImg8 from '../../assets/image/product-img-8.jpg'
import './ImageGallery.scss';




const ImageGallery = () => {
  
      const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 250; // কত px করে স্ক্রল করবে
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

 

  return (
     <div className="section-6">
      <div className="img-topText">
        <div className="title1">
            <span><i class="ri-global-line"></i> ON SOCIAL</span>
        </div>
        <div className="title2">
            <h1><i class="ri-instagram-line"></i> manamate</h1>
        </div>
      </div>

      <div className="parent-div" ref={scrollRef}>
        <div className="child-div">
          <img src={productImg1} alt="" />
        </div>
        <div className="child-div">
          <img src={productImg2} alt="" />
        </div>
        <div className="child-div">
          <img src={productImg3} alt="" />
        </div>
        <div className="child-div">
          <img src={productImg4} alt="" />
        </div>
        <div className="child-div">
          <img src={productImg5} alt="" />
        </div>
        <div className="child-div">
          <img src={productImg6} alt="" />
        </div>
        <div className="child-div">
          <img src={productImg7} alt="" />
        </div>
        <div className="child-div">
          <img src={productImg8} alt="" />
        </div>
      </div>

      <div className="arrow-icon">
        <i
          className="fa-solid fa-arrow-left"
          onClick={() => scroll("left")}
        ></i>
        <i
          className="fa-solid fa-arrow-right"
          onClick={() => scroll("right")}
        ></i>
      </div>
    </div>
  );
};

export default ImageGallery;