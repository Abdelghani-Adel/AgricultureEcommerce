import { Fragment, useState } from "react";
import SideCategoriesList from "../Reusable/SideCategoriesList";
import classNames from "classnames";

const SideCategoriesToggler = (props) => {
  const [showSideCategoriesTags, setShowSideCategoriesTags] = useState();
  const toggleSideCategoriesTags = () => setShowSideCategoriesTags(!showSideCategoriesTags);

  return (
    <Fragment>
      <aside
        className={classNames("andro_aside andro_aside-right", {
          open: showSideCategoriesTags,
        })}
      >
        <SideCategoriesList />
      </aside>

      <div className="andro_aside-overlay aside-trigger-right" onClick={toggleSideCategoriesTags} />

      <div
        className="aside-toggler aside-trigger-right desktop-toggler"
        onClick={toggleSideCategoriesTags}
      >
        <span />
        <span />
        <span />
      </div>
    </Fragment>
  );
};

export default SideCategoriesToggler;
