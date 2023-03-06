import React, { Component } from "react";
import { Rating } from "../../../helper/helper";

const testimonial = [
  {
    id: 1,
    photo: "../img/people/4.jpg",
    name: "Jina Flock",
    designation: "Farmer",
    title: "Perfect service",
    rating: 4,
    para: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  },
  {
    id: 2,
    photo: "../img/people/3.jpg",
    name: "Miranda Blue",
    designation: "Chemist",
    title: "Competitive prices",
    rating: 5,
    para: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  },
  {
    id: 3,
    photo: "../img/people/2.jpg",
    name: "Feleciti Rolling",
    designation: "Farmer",
    title: "Great agents",
    rating: 3,
    para: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
  },
];

const Testimonial = () => {
  return (
    <div className="section section-padding pt-0">
      <div className="container">
        <div className="section-title">
          <h4 className="title">What Are People Saying</h4>
        </div>
        <div className="row">
          {testimonial.slice(0, 3).map((item, i) => (
            <div key={i} className="col-lg-4 col-md-12">
              <div className="testimonial">
                <div className="testimonial_body">
                  <h5>{item.title}</h5>
                  <div className="testimonial_rating--wrapper">
                    <div className="rating">{Rating(item.rating)}</div>
                  </div>
                  <p>{item.para.slice(0, 104)}</p>
                </div>
                <div className="testimonial_author">
                  <img src={process.env.PUBLIC_URL + "/" + item.photo} alt={item.name} />
                  <div className="testimonial-author--inner">
                    <h6>{item.name}</h6>
                    <span>{item.designation}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
