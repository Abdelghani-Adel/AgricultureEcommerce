import Link from "next/Link";
import React from "react";
import { withTranslation } from "react-multi-lang";
import Slider from "react-slick";
import Image from "next/image";

const bannerslider = [
  {
    photo: "/assets/img/products/10.png",
    offerTitle: "30% Discount",
    offerDesc: "Buy before 28/02/2022",
    couponcode: "ORGANIC991",
    title: "40% Sale",
    titlespan: "On Select Products",
    para: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit",
  },
  {
    photo: "/assets/img/products/11.png",
    offerTitle: "Buy 1 get 2",
    offerDesc: "Buy before 28/02/2022",
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

function SpecialOffers(props) {
  return (
    <div className="col-6 col-lg-2 col-xs-12 special_offer text-center">
      <div className="card special_offer--inner">
        <div className="card-header">Special Offers</div>
        <div>
          <Slider {...sliderSettings}>
            {bannerslider.map((item, i) => (
              <div key={i} className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-10 ps-4 pe-4">
                    <div className="special_offer--thumb position-relative">
                      <Image
                        src={item.photo}
                        alt="Product Offer"
                        fill
                        sizes="100%"
                        style={{ objectFit: "contain" }}
                        priority
                      />
                    </div>
                    <h6 className="m-0 mt-2">{item.offerTitle}</h6>
                    <p className="m-0">{item.offerDesc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="card-footer">{props.t("Products.ViewAll")}</div>
      </div>
    </div>
  );
}
export default withTranslation(SpecialOffers);
