import Link from "next/Link";
import React, { useEffect, useState } from "react";
import { CategoryApi } from "../../../../services/CategoryAPI";

const CategoryAPI = new CategoryApi();

const SideCategoriesList = (props) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const getCategories = async () => {
      const categories = await CategoryAPI.GetCategoriesMenu();
      setCategories(categories);
    };
    getCategories();
  }, []);
  return (
    <div className="sidebar d-block">
      <div className="sidebar-widget widget-categories-icons">
        <h5 className="widget-title">Popular Categories</h5>
        <div className="row"></div>
      </div>
      <div className="sidebar-widget">
        <h5 className="widget-title">Popular Tags</h5>
        <div className="tagcloud">
          {categories &&
            categories.map((category) => (
              
              <Link
                onClick={props.toggleSideCategoriesTags}
                 key={category.FAClassificationId}
                 href={`/categories/${category.FAClassificationSlug}?id=${category.FAClassificationId}`}
              >
                
                {category.FAClassificationName}
                
              </Link>
            ))}

          {/* <Link href="#">Ingredients</Link>
          <Link href="#">Organic</Link>
          <Link href="#">Farms</Link>
          <Link href="#">Supplements</Link> */}
        </div>
      </div>
    </div>
  );
};

export default SideCategoriesList;
