import Link from "next/Link";
import Image from "next/image";

const CategoryItemThumb = (props) => {
  const { item } = props;
  return (
    <div className="andro_product-thumb">
      <Link href={"/products/" + item.slug}>
        <Image src={"../assets/img/products/7.png"} alt={item.title} />
      </Link>
    </div>
  );
};

export default CategoryItemThumb;
