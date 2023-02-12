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
        <SideCategoriesList toggleSideCategoriesTags={toggleSideCategoriesTags}/>
      </aside>

      {/* Dark overlay shown when displaying the right sub categories */}
      <div className="andro_aside-overlay aside-trigger-right" onClick={toggleSideCategoriesTags} />

      {/* Toggler for side sub categories menu */}
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
