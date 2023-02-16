import Slider from "react-slick";
import Link from "next/Link";

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
];

const sliderSettings = {
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
        slidesToShow: 1,
      },
    },
  ],
};

const ProductsSlider = (props) => {
  return (
    <div className="col-6 col-lg-6 col-xs-12">
      <div className="andro_banner banner-1">
        <Slider className="andro_banner-slider" {...sliderSettings}>
          {bannerslider.map((item, i) => (
            <div key={i} className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <p>
                    Use code <strong className="custom-primary">{item.couponcode}</strong> during
                    checkout
                  </p>
                  <h5>
                    {" "}
                    {item.title} <span className="fw-400">{item.titlespan}</span>{" "}
                  </h5>
                  <p>{item.para}</p>
                  <Link href="/shop-v1" className="andro_btn-custom">
                    Shop Now
                  </Link>
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
  );
};

export default ProductsSlider;
