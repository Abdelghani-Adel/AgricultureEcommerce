import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";

const InputField = (props) => {
  const lang = useSelector((state) => state.lang);

  const {
    changeHandler,
    title,
    fieldName,
    options,
    optionID,
    optionTitle,
    firstOptionChoosen,
    inputType,
    style: customeStyle,
  } = props;

  const inputStyle = `form-control bg-light`;

  return (
    <div className={customeStyle ? customeStyle : "col"}>
      <div className="form-group">
        <label>
          {props.t(`${title}`)}
          <span className="text-danger">*</span>
        </label>

        {/* Normal input NOT select */}
        {!options && !optionID && (
          <input
            type={inputType ? inputType : "text"}
            className={inputStyle}
            name={fieldName}
            onChange={changeHandler}
            placeholder={`${props.t("Vendor.Enter")} ${props.t(`${title}`)}`}
            required
          />
        )}

        {/* If the input type is SELECT */}
        {optionID && (
          <select className={inputStyle} name={fieldName} onChange={changeHandler} required>
            {!firstOptionChoosen && (
              <option selected disabled value="">
                {props.t("Address.Choose")} {props.t(`${title}`)}
              </option>
            )}
            {options &&
              options.map((option, i) => (
                <option key={i} value={option[optionID]}>
                  {option[optionTitle]}
                </option>
              ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default withTranslation(InputField);
