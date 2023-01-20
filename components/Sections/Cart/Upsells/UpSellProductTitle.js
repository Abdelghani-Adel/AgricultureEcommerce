import Link from "next/Link";

const UpSellProductTitle = (props) => {
  const { itemID, itemTitle } = props;
  return (
    <h5 className="andro_product-title">
      <Link href={"/product-single/" + itemID}> {itemTitle} </Link>
    </h5>
  );
};

export default UpSellProductTitle;
