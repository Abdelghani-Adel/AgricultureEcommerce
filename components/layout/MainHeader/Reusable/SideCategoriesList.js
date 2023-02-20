import Link from "next/Link";
import React, { useEffect, useState } from "react";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";
import { fetchCategoriesMenu } from "../../../../services/categoryServices";

const SideCategoriesList = (props) => {
  const links = useSelector((state) => state.navbarLinks);

  return (
    <div className="sidebar d-block">
      <div className="sidebar-widget widget-categories-icons">
        <h5 className="widget-title">Popular Categories</h5>
        <div className="row"></div>
      </div>
      <div className="sidebar-widget">
        <h5 className="widget-title">Popular Tags</h5>
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
      </div>
    </div>
  );
};

export default withTranslation(SideCategoriesList);
