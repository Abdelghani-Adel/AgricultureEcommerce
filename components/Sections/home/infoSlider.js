import React from 'react';
import Slider from 'react-slick';
const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    dotsClass: "slick-dots d-flex",
    autoplay: true,
    // responsive: [
    //     {
    //         breakpoint: 991,
    //         settings: {
    //             slidesToShow: 2,
    //         }
    //     },
    //     {
    //         breakpoint: 575,
    //         settings: {
    //             slidesToShow: 1,
    //         }
    //     }
    // ]
};
export default function InfoSlider() {
    return (
       
            <Slider className="andro_banner-slider" {...settings}>
                <div style={{
                    backgroundImage: `url(../public/img/slider_01.jpg)`,
                    // backgroundImage: `url(${externalImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '500px',
                }}>
                    <h3>1</h3>
                   {/* <img src="../img/slider_01.jpg"/> */}
                </div>
                <div style={{
                    backgroundImage: `url(../public/img/slider_02.jpg)`,
                    // backgroundImage: `url(${externalImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '500px',
                }}>
                <h3>2</h3>
                {/* <img src="../img/slider_02.jpg"/> */}
                </div>
                
            </Slider>
       

    )
}
