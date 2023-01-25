import Link from "next/Link";

const CategoryItemThumb = (props) => {
  const { item } = props;
  return (
    <div className="andro_product-thumb">
      <Link href={"/products/" + item.slug}>
        <img src={"../" + item.img} alt={item.title} />
      </Link>
    </div>
  );
};

export default CategoryItemThumb;
