import React, {Component} from 'react';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import Slider from 'react-slick';
 
    var settings = {
      dots: true,
      arrows: true
    };

class PhotoCarousel extends Component{
render(){
    return (
    <div className = "container">
      <Slider {...settings}>
        <div><img src={img1}/></div>
        <div><img src={img2}/></div>
        <div><img src={img3}/></div>
        <div><img src={img4}/></div>
        <div><img src={img5}/></div>
        <div><img src={img6}/></div>
      </Slider>
      
    </div>
    );
  }
};
export default PhotoCarousel