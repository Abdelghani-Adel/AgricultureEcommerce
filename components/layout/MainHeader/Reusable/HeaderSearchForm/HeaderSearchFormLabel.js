import Link from "next/Link";

const HeaderSearchFromLabel = (props) => {
  const { category } = props;
  return (
    <Link
      href={{
        pathname: `/categories/${category.FAClassificationSlug}`,
        query: { id: `${category.FAClassificationId}` },
      }}
    >
      {category.FAClassificationName}
    </Link>
  );
};

export default HeaderSearchFromLabel;
