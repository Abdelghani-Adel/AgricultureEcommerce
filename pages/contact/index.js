import React, { Component, Fragment } from "react";
import { Accordion, Card, NavLink } from "react-bootstrap";
import Link from "next/link";

// Locations
const locationbox = [
  {
    photo: "assets/img/locations/1.jpg",
    title: "Find Us In",
    titlespan: "Greece",
    para: "Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.",
  },
  {
    photo: "assets/img/locations/2.jpg",
    title: "Find Us In",
    titlespan: "New York",
    para: "Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.",
  },
];
// Info
const contactinfo = [
  {
    icon: "flaticon-call",
    title: "Call Center",
    para: "You can call us on 01000000000",
  },
  {
    icon: "flaticon-email",
    title: "Mail Us",
    para: "You can mail us at info@zera3amarket.com",
  },
  //   {
  //     icon: "flaticon-location",
  //     title: "Nearest Branch",
  //     para: "",
  //   },
];

const Contact = () => {
  return (
    // <h1>Contact</h1>
    <Fragment>
      {/* Locations Start */}
      {/* <div className="section section-padding">
        <div className="container">
          <div className="row">
            {locationbox.map((item, i) => (
              <div key={i} className="col-md-6">
                <div className="andro_cta">
                  <Link href="#">
                    <img src={item.photo} alt="location" />
                    <div className="andro_cta-content">
                      <h4 className="text-white">
                        {item.title} <span className="fw-400">{item.titlespan}</span>{" "}
                      </h4>
                      <p className="text-white mb-0">{item.para}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* Locations Start */}
      {/* Icons Start */}
      <div className="section section-padding">
        <div className="container">
          <div className="row">
            {contactinfo.map((item, i) => (
              <div key={i} className="col-lg-4">
                <div className="andro_icon-block">
                  <Link href="#">
                    <i className={item.icon} />
                    <h5>{item.title}</h5>
                    <p>{item.para}</p>
                  </Link>
                  {/* <svg xmlns="http://www.w3.org/2000/svg">
                    <rect height={500} width={500} className="andro_svg-stroke-shape-anim" />
                  </svg> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Icons End */}
      {/* FAQ & Contact Form Start */}
      <div className="section pt-0">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-5 mb-lg-30">
              <div className="section-title">
                <h4 className="title">FAQ</h4>
              </div>
              <Accordion defaultActiveKey="0" className="with-gap">
                <Card>
                  <Accordion.Collapse eventKey="0" className="collapseparent">
                    <Card.Body>
                      Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget
                      tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo,
                      lacinia eget consectetur sed, convallis at tellus.
                    </Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
                    <Accordion.Toggle as={NavLink} variant="link" eventKey="0">
                      What is Organista?
                    </Accordion.Toggle>
                  </Card.Header>
                </Card>
                <Card>
                  <Accordion.Collapse eventKey="1" className="collapseparent">
                    <Card.Body>
                      Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget
                      tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo,
                      lacinia eget consectetur sed, convallis at tellus.
                    </Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
                    <Accordion.Toggle as={NavLink} variant="link" eventKey="1">
                      Getting Started with Organista
                    </Accordion.Toggle>
                  </Card.Header>
                </Card>
                <Card>
                  <Accordion.Collapse eventKey="2" className="collapseparent">
                    <Card.Body>
                      Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget
                      tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo,
                      lacinia eget consectetur sed, convallis at tellus.
                    </Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
                    <Accordion.Toggle as={NavLink} variant="link" eventKey="2">
                      Do i have the latest version?
                    </Accordion.Toggle>
                  </Card.Header>
                </Card>
                <Card>
                  <Accordion.Collapse eventKey="3" className="collapseparent">
                    <Card.Body>
                      Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget
                      tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo,
                      lacinia eget consectetur sed, convallis at tellus.
                    </Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
                    <Accordion.Toggle as={NavLink} variant="link" eventKey="3">
                      How many times can I use Organista?
                    </Accordion.Toggle>
                  </Card.Header>
                </Card>
                <Card>
                  <Accordion.Collapse eventKey="4" className="collapseparent">
                    <Card.Body>
                      Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget
                      tincidunt nibh pulvinar a. Proin eget tortor risus. Vivamus magna justo,
                      lacinia eget consectetur sed, convallis at tellus.
                    </Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
                    <Accordion.Toggle as={NavLink} variant="link" eventKey="4">
                      How to migrate my website?
                    </Accordion.Toggle>
                  </Card.Header>
                </Card>
              </Accordion>
            </div> */}
            <div className="col-lg-12">
              <div className="section-title">
                <h4 className="title">Contact Us</h4>
              </div>
              <form method="post">
                <div className="row">
                  <div className="form-group col-lg-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                      name="fname"
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                      name="lname"
                    />
                  </div>
                  <div className="form-group col-lg-12">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control"
                      name="email"
                    />
                  </div>
                  <div className="form-group col-lg-12">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control"
                      name="subject"
                    />
                  </div>
                  <div className="form-group col-lg-12">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Type your message"
                      rows={8}
                    />
                  </div>
                </div>
                <button type="submit" className="default_btn" name="button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ & Contact Form End */}
    </Fragment>
  );
};

export default Contact;
