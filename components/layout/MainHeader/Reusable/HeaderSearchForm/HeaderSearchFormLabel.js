import Link from "next/link";

const HeaderSearchFromLabel = (props) => {
  const { category } = props;
  return (
    <Link href={`/categories/${category.FAClassificationSlug}?id=${category.FAClassificationId}`}>
      {category.FAClassificationName}
    </Link>
  );
};

export default HeaderSearchFromLabel;
