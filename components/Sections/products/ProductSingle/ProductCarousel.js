import React, { Fragment, useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";

const ProductCarousel = (props) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const images = props.item ? props.item.imgs : [];
    setImages(images);
  }, []);

  return (
    <Fragment>
      <h5 className="text-center"></h5>
      <ImageGallery
        items={images}
        thumbnailPosition="left"
        disableThumbnailScroll={true}
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </Fragment>
  );
};

export default ProductCarousel;
