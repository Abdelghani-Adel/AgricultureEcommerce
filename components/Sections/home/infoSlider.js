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
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
       

    )
}
