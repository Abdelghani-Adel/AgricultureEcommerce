import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { withTranslation } from "react-multi-lang";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductCard from "../../Sections/products/ProductCardList/ProductCard/ProductCard";

const defaultSliderSettings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const ProductSlider = (props) => {
  const [products, setProducts] = useState([]);
  const [sliderSettings, setSliderSettings] = useState(defaultSliderSettings);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
    setProducts(props.products);
    setSliderSettings((prev) => {
      return { ...prev, slidesToShow: props.slidesToShow };
    });
  }, []);

  const next = () => {
    nav1.slickNext();
  };
  const previous = () => {
    nav1.slickPrev();
  };

  return (
    <div className="section pt-0 andro_fresh-arrivals">
      <div className="container-fluid">
        <div className="section-title flex-title">
          <h4 className="title">{props.t(`${props.translateTitle}`)}</h4>

          <div className="andro_arrows">
            <div className="slick-arrow slider-prev" onClick={previous}>
              <FaArrowLeft />
            </div>
            <div className="slick-arrow slider-prev" onClick={next}>
              <FaArrowRight />
            </div>
          </div>
        </div>
        <Slider
          asNavFor={nav2}
          className="andro_fresh-arrivals-slider"
          ref={slider1}
          {...sliderSettings}
        >
          {products && products.length > 0
            ? products.map((product, i) => <ProductCard product={product} key={i} />)
            : null}
        </Slider>
      </div>
    </div>
  );
};

export default withTranslation(ProductSlider);
