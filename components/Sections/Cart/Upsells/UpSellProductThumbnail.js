import Link from "next/Link";

const UpSellProductThumbnail = (props) => {
  const { item } = props;
  return (
    <div className="andro_product-thumb">
      <Link href={"/product-single/" + item.id}>
        <img src={item.img} alt={item.title} />
      </Link>
    </div>
  );
};

export default UpSellProductThumbnail;
