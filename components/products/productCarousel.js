import React, { Component } from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import ImageGallery from 'react-image-gallery';
import dynamic from 'next/dynamic';
const ImageGallery = dynamic(() => import('react-image-gallery'),{ssr: false})
import "react-image-gallery/styles/css/image-gallery.css";




export default class productCarousel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            images : [
                {
                  original: '../img/products/7.png',
                  thumbnail: '../img/products/7.png',
                },
                {
                    original: '../img/products/7.png',
                    thumbnail: '../img/products/7.png',
                  },
                  {
                    original: '../img/products/7.png',
                    thumbnail: '../img/products/7.png',
                  },
              ]
        }
    }
    render() {
       
        return (
             <ImageGallery items={this.state.images} thumbnailPosition="left" showNav={false} showFullscreenButton={false} showPlayButton={false}/>
        //     <Carousel showArrows={false} showIndicators={false}>
        //     <div>
        //         <img src="../img/products/7.png" />
                
        //     </div>
        //     <div>
        //     <img src="../img/products/8.png" />
              
        //     </div>
        //     <div>
        //     <img src="../img/products/9.png" />
              
        //     </div>
        // </Carousel>
        )
    }
}
