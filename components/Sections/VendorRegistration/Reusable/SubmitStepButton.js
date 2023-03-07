import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";

const SubmitStepButton = (props) => {
  const lang = useSelector((state) => state.lang);
  const { title } = props;
  return (
    <div className="row justify-content-end mt-3">
      <div className="col-md-3 col">
        <button
          type="submit"
          className="default_btn w-100"
          style={{ padding: "0" }}
          aria-label="Submit"
        >
          {props.t(`${title}`)}
        </button>
      </div>
    </div>
  );
};

export default withTranslation(SubmitStepButton);
