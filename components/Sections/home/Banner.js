import React, { Component } from 'react';
import Link from 'next/Link';
import Slider from 'react-slick';
import { FaThLarge } from "react-icons/fa";
import Category from './Category';
import InfoSlider from "./InfoSlider";
import {withTranslation} from "react-multi-lang";
const bannerslider = [
    {
        photo: "../img/products/2.png",
        couponcode: "ORGANIC991",
        title: "40% Sale",
        titlespan: "On Select Products",
        para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit",
    },
    {
        photo: "../img/products/12.png",
        couponcode: "ORGANIC991",
        title: "40% Sale",
        titlespan: "On Select Products",
        para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit",
    },
]

class Banner extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            dotsClass: "slick-dots d-flex",
            autoplay: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        {/* Menu Start */}
                        <div className="col-lg-3">
                            <div className="andro_category-mm">
                                <div className="andro_category-mm-header">
                                    <h6> <FaThLarge />{this.props.t("Navbar.Categories")}</h6>
                                </div>
                                <div className="andro_category-mm-body">
                                    {/* <Category /> */}
                                </div>
                            </div>
                        </div>
                        {/* Menu End */}
                        {/* Banner Start */}
                        <div className="col-lg-9">
                            <div className="info_slider andro_banner banner-1">
                                <InfoSlider />
                            </div>
                            {/* style={{height:"calc(100% - 50px)"}} */}
                            <div className="row">
                                <div className="col-lg-8 col-xs-12">
                                <div className="andro_banner banner-1">
                                <Slider className="andro_banner-slider" {...settings}>
                                    {bannerslider.map((item, i) => (
                                        <div key={i} className="container-fluid">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <p>Use code <strong className="custom-primary">{item.couponcode}</strong> during checkout</p>
                                                    <h1> {item.title} <span className="fw-400">{item.titlespan}</span> </h1>
                                                    <p>{item.para}</p>
                                                    <Link href="/shop-v1" className="andro_btn-custom">Shop Now</Link>
                                                </div>
                                                <div className="col-lg-6 d-none d-lg-block">
                                                    <img src={"../" + item.photo} alt={item.title} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                                </div>
                                <div className="col-lg-4 col-xs-12">
                                    <img src="../img/advertise.png" alt ="agriculture_advertise"/>
                                    
                                    <img src="../img/video.png" alt ="agriculture_advertise" style={{marginTop:"10px"}}/>
                                    <img src="../img/advertise.png" alt ="agriculture_advertise" style={{marginTop:"10px"}}/>
                                    </div>
                            </div>
                           
                        </div>
                        {/* Banner End */}
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation(Banner);

