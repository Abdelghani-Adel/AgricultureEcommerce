import { Fragment } from "react";

const InfoDesc = (props) => {
  return (
    <Fragment>
      <span dangerouslySetInnerHTML={{ __html: props.desc }}></span>
    </Fragment>
  );
};

export default InfoDesc;
