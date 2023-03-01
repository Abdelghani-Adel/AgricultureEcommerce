import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import SocialShare from "../../../Reusable_Components/SocialShare";

const ProductCarousel = (props) => {
  const router = useRouter();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const images = props.item ? props.item.imgs : [];
    setImages(images);
  }, []);

  return (
    <div className="product_single--carousel">
      <h5 className="text-center"></h5>
      <SocialShare url={`${process.env.NEXT_PUBLIC_CURRENT_HOST}${router.asPath}`} />
      <ImageGallery
        items={images}
        thumbnailPosition="left"
        disableThumbnailScroll={true}
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </div>
  );
};

export default ProductCarousel;
