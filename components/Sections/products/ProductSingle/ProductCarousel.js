import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ImageGallery from "react-image-gallery";
import dynamic from "next/dynamic";
import { Fragment } from "react";
// const ImageGallery = dynamic(() => import("react-image-gallery"), { ssr: false });
import "react-image-gallery/styles/css/image-gallery.css";

export default class ProductCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
      
      // [
      //   {
      //     original: "../assets/img/products/7.png",
      //     thumbnail: "../assets/img/products/7.png",
      //   },
      //   {
      //     original: "../assets/img/products/7.png",
      //     thumbnail: "../assets/img/products/7.png",
      //   },
      //   {
      //     original: "../assets/img/products/7.png",
      //     thumbnail: "../assets/img/products/7.png",
      //   },
      // ],
    };
  }
  
  componentDidMount =()=>{
    this.setState({
      images:this.props.item ? this.props.item.imgs : []
    })
  }
  componentDidUpdate =(prevProps)=>{
    if(this.props.item != prevProps.item){
      this.setState({
        images:this.props.item ? this.props.item.imgs : []
      })
    }
  }
  render() {
    return (
      <Fragment>
        <h5 className="text-center"></h5>
        <ImageGallery
          items={this.state.images}
          thumbnailPosition="left"
          showNav={false}
          showFullscreenButton={false}
          showPlayButton={false}
        />
        {/* <Carousel showArrows={false} showIndicators={false}>
          <div>
            <img src="../assets/img/products/7.png" />
          </div>
          <div>
            <img src="../assets/img/products/8.png" />
          </div>
          <div>
            <img src="../assets/img/products/9.png" />
          </div>
        </Carousel> */}
      </Fragment>
    );
  }
}
