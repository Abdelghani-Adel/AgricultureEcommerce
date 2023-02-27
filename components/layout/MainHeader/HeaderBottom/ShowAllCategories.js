import { Fragment, useState } from "react";
import SideCategoriesList from "./SideCategoriesList";
import classNames from "classnames";
import { withTranslation } from "react-multi-lang";

const ShowAllCategories = (props) => {
  const [showSideCategoriesTags, setShowSideCategoriesTags] = useState();
  const toggleSideCategoriesTags = () => setShowSideCategoriesTags(!showSideCategoriesTags);

  return (
    <Fragment>
      <aside
        className={classNames("andro_aside andro_aside-right", {
          open: showSideCategoriesTags,
        })}
      >
        <SideCategoriesList toggleSideCategoriesTags={toggleSideCategoriesTags} />
      </aside>

      {/* Dark overlay shown when displaying the right sub categories */}
      <div className="andro_aside-overlay aside-trigger-right" onClick={toggleSideCategoriesTags} />

      {/* Toggler for side sub categories menu */}
      <div className="menu_toggler" onClick={toggleSideCategoriesTags}>
        <span />
        <span />
        <span />
      </div>
    </Fragment>
  );
};

export default withTranslation(ShowAllCategories);
