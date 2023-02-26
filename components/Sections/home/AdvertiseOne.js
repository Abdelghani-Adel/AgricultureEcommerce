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

const AdvertiseOne = () => {
  return (
    <div className="andro_banner adv_1">
      <Slider className="andro_banner-slider" {...sliderSettings}>
        {bannerslider.map((item, i) => (
          <div key={i} className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <p>
                  Use code <strong className="custom-primary">{item.couponcode}</strong> during
                  checkout
                </p>
                <h5>
                  {item.title} <span className="fw-400">{item.titlespan}</span>{" "}
                </h5>
                <p>{item.para}</p>
                <Link href="/shop-v1" className="default_btn">
                  Shop Now
                </Link>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img
                  src={
                    "https://fastly.picsum.photos/id/988/500/420.jpg?hmac=Y0eqwuZAPCMDPwBcL9AIhDwVNSWV-IenkzC5M5jeKek"
                  }
                  alt={item.title}
                  className="border_1 border_primary p-3"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AdvertiseOne;
