import Link from "next/link";

const HeaderSearchFromLabel = (props) => {
  const { category } = props;
  return (
    <Link
      href={{
        pathname: `/categories/${category.FAClassificationSlug}`,
        query: { id: `${category.FAClassificationId}` },
      }}
      as={`/categories/${category.FAClassificationSlug}`}
    >
      {category.FAClassificationName}
    </Link>
  );
};

export default HeaderSearchFromLabel;
