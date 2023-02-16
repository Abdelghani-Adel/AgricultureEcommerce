import React, { Fragment, useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

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
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </Fragment>
  );
};

export default ProductCarousel;
