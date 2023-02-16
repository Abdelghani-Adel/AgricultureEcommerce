import Link from "next/Link";
import { useEffect, useState } from "react";
import { fetchCategoriesMenu } from "../../../../../services/categoryServices";

const MobileViewNavToggler = (props) => {
  const [navIsShown, setNavIsShown] = useState(false);

  const clickHandler = () => setNavIsShown(!navIsShown);

  const [categories, setCategories] = useState();

  useEffect(() => {
    const getCategories = async () => {
      const categories = await fetchCategoriesMenu("ar");
      setCategories(categories);
    };
    getCategories();
  }, []);

  return (
    <>
      <div className="header_control aside-toggler" onClick={clickHandler}>
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
