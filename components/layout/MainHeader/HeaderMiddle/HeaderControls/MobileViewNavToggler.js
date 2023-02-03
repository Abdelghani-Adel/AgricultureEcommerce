import { useEffect } from "react";
import { useState } from "react";
import HeaderNav from "../../Reusable/Navigation/HeaderNav";
import Link from "next/Link";
import { CategoryApi } from "../../../../../services/CategoryAPI";

const categoryApi = new CategoryApi();

const MobileViewNavToggler = (props) => {
  const [navIsShown, setNavIsShown] = useState(false);

  const clickHandler = () => setNavIsShown(!navIsShown);

  const [categories, setCategories] = useState();

  useEffect(() => {
    const getCategories = async () => {
      const categories = await categoryApi.GetCategoriesMenu();
      setCategories(categories);
    };
    getCategories();
  }, []);

  return (
    <>
      <div className="aside-toggler aside-trigger-left" onClick={clickHandler}>
        <span />
        <span />
        <span />
      </div>

      {navIsShown && (
        <div className="mobilemenu-overlay" onClick={clickHandler}>
          <div className="mobile_nav">
            <h4 className="text-center text-white">Categories</h4>
            <div className="tagcloud">
              {categories &&
                categories.map((category) => (
                  <Link
                    key={category.FAClassificationId}
                    href={`/categories/${category.FAClassificationSlug}?id=${category.FAClassificationId}`}
                  >
                    {category.FAClassificationName}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileViewNavToggler;
