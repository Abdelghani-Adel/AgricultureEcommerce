import { useEffect, useRef, useState } from "react";
import ProductInfoActions from "./ProductInfoActions";
import ProductInfoHeader from "./ProductInfoHeader";
import ProductInfoInput from "./ProductInfoInput";

const ProductInfo = ({ item, parentPosition }) => {
  const [itemBeingBought, setItemBeingBought] = useState(item);
  const [itemBeingBoughtQTY, setItemBeingBoughtQTY] = useState(1);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [parentPos, setParentPosition] = useState(parentPosition);
  const [isBottom, setIsBottom] = useState("");
  const ref = useRef();

  const quantityHandler = (newQty) => {
    if (newQty < 1 || isNaN(newQty)) {
      return;
    }
    setItemBeingBoughtQTY(newQty);
  };

  const UOMchangeHandler = (e) => {
    setItemBeingBought({ ...item, FAUOMID: e.target.value });
  };

  // const handleScroll = () => {
  //   const childDimentions = ref.current.getBoundingClientRect();

  //   // const parentBottom = window.innerHeight - parentPos.top - parentPos.height;
  //   // const childBottom = window.innerHeight - childDimentions.top - childDimentions.height;

  //   console.log("parentBottom", parentPosition.bottom);
  //   console.log("childBottom", childDimentions.bottom);

  //   if (parentPosition.bottom <= childDimentions.bottom) {
  //     setIsBottom("stop");
  //   } else {
  //     setIsBottom("");
  //   }

  //   setScrollPosition(window.pageYOffset);
  // };

  // useEffect(() => {
  //   setParentPosition(parentPosition);
  // }, [parentPosition]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [parentPosition]);

  return (
    // <div ref={ref} className={`product_single--info ${scrollPosition > 276.7 ? "Sticky5" : ""}`}>
    <div ref={ref} className={`product_single--info `}>
      <ProductInfoHeader item={itemBeingBought} />
      <hr className="m-0 mt-2 mb-2" />
      <ProductInfoInput
        item={itemBeingBought}
        quantity={itemBeingBoughtQTY}
        quantityHandler={quantityHandler}
        UOMchangeHandler={UOMchangeHandler}
      />
      <ProductInfoActions item={itemBeingBought} quantity={itemBeingBoughtQTY} />
    </div>
  );
};

export default ProductInfo;
