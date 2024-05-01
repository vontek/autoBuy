import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './carouse.module.css'
import Banner from '../../assets/banner1.jpg'
import Banner2 from '../../assets/banner2.jpg'
import Banner3 from '../../assets/banner3.jpg'

const Carousels = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 200,
        adaptiveHeight: true
      };
  return (
    
         <Slider {...settings} className={style.container}>
     <div className={style.cont}>
        <img src={Banner} className={style.img} alt=''/>
        <div className={style.context}>
            <h2 className={style.header} >Audi</h2>
            <p className={style.par}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ad molestiae itaque eos quae quas excepturi illo quia tempore pariatur, vero dolores deleniti, beatae ipsa? Ipsum impedit autem magni error!</p>
        </div>
      </div>
     <div className={style.cont}>
        <img src={Banner2} className={style.img} alt=''/>
        <div className={style.context}>
            <h2 className={style.header} >Audi</h2>
            <p className={style.par}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ad molestiae itaque eos quae quas excepturi illo quia tempore pariatur, vero dolores deleniti, beatae ipsa? Ipsum impedit autem magni error!</p>
        </div>
      </div>
     <div className={style.cont}>
        <img src={Banner3} className={style.img} alt=''/>
        <div className={style.context}>
            <h2 className={style.header} >Audi</h2>
            <p className={style.par}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ad molestiae itaque eos quae quas excepturi illo quia tempore pariatur, vero dolores deleniti, beatae ipsa? Ipsum impedit autem magni error!</p>
        </div>
      </div>
     <div className={style.cont}>
        <img src='/images/banner1.jpg' className={style.img} alt=''/>
        <div className={style.context}>
            <h2 className={style.header} >Audi</h2>
            <p className={style.par}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ad molestiae itaque eos quae quas excepturi illo quia tempore pariatur, vero dolores deleniti, beatae ipsa? Ipsum impedit autem magni error!</p>
        </div>
      </div>
     <div className={style.cont}>
        <img src='/images/banner3.jpg' className={style.img} alt=''/>
        <div className={style.context}>
            <h2 className={style.header} >Audi</h2>
            <p className={style.par}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ad molestiae itaque eos quae quas excepturi illo quia tempore pariatur, vero dolores deleniti, beatae ipsa? Ipsum impedit autem magni error!</p>
        </div>
      </div>
    </Slider>
    
    
  )
}

export default Carousels