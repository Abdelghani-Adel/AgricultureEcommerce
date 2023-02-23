import { Fragment } from "react";
import { withTranslation } from "react-multi-lang";

const InfoTab = (props) => {
  const active = props.selected === true;
  const showData = props.data && props.data.length > 0;
  return (
    <Fragment>
      {showData && (
        <li
          className={`nav-link mb-2 ${active ? "active" : ""} `}
          id={`${props.target}-tab`}
          data-bs-toggle="pill"
          data-bs-target={`#${props.target}`}
          type="button"
          role="tab"
          aria-controls={props.target}
          aria-selected={props.selected}
        >
          {props.t(props.translation)}
        </li>
      )}
    </Fragment>
  );
};

export default withTranslation(InfoTab);
