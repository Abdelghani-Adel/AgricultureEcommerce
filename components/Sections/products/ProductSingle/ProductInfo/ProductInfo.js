import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductInfoActions from "./ProductInfoActions";
import ProductInfoHeader from "./ProductInfoHeader";
import ProductInfoInput from "./ProductInfoInput";

const ProductInfo = ({ item, wrapperPosition }) => {
  const [product, setProduct] = useState(item);
  const [quantity, setQuantity] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef();

  const UOMchangeHandler = (e) => {
    setItem({ ...item, FAUOMID: e.target.value });
  };

  const quantityHandler = (e) => {
    const type = e.currentTarget.dataset.type;

    if (type == "minus") {
      if (quantity == 1) {
        return;
      }
      setQuantity((prev) => prev - 1);
    } else {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (window.pageXOffset >= ref.current.offsetTop + ref.current.offsetHeight) {
      console.log("got it");
    }
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className={`product_single--info ${scrollPosition > 276.7 ? "Sticky" : ""}`}>
      <ProductInfoHeader item={product} />
      <hr className="m-0 mt-2 mb-2" />
      <ProductInfoInput
        item={product}
        quantity={quantity}
        quantityHandler={quantityHandler}
        UOMchangeHandler={UOMchangeHandler}
      />
      <hr className="m-0 mt-2 mb-2" />
      <ProductInfoActions item={product} quantity={quantity} />
    </div>
  );
};

export default ProductInfo;
