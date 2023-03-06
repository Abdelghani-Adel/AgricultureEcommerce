import Slider from "react-slick";
import Link from "next/Link";
import Image from "next/image";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";
import Adv1 from "../../../public/img/adv1.jpg";

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
  dots: false,
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

const AdvertiseOne = (props) => {
  const lang = useSelector((state) => state.lang);
  return (
    <div className="andro_banner adv_1 border_1">
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
                {lang && (
                  <Link href="/shop-v1" className="default_btn">
                    {props.t("Home.ShopNow")}
                  </Link>
                )}
              </div>
              <div className="col-lg-6 d-none d-lg-block position-relative">
                <Image
                  src={Adv1}
                  alt="Advertise"
                  className="p-2 border-raduis_12"
                  sizes="(min-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default withTranslation(AdvertiseOne);
