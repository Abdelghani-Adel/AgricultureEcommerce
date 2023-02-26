import Link from "next/Link";
import React, { Fragment } from "react";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";

const SideCategoriesList = (props) => {
  const links = useSelector((state) => state.navbarLinks);

  return (
    <Fragment>
      <h5 className="txt-primary">All Categories</h5>
      <div className="tagcloud">
        {links &&
          links.map((category) => (
            <Link
              onClick={props.toggleSideCategoriesTags}
              key={category.FAClassificationId}
              href={`/categories/${category.FAClassificationSlug}?id=${category.FAClassificationId}`}
            >
              {category.FAClassificationName}
            </Link>
          ))}
      </div>
    </Fragment>
  );
};

export default withTranslation(SideCategoriesList);
