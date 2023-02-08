import { withTranslation } from "react-multi-lang";

const BillingAddressInput = (props) => {
  const requiredField = props.requiredField;
  const fieldName = props.fieldName;
  const transTitle = props.transTitle;
  const transTitle2 = props.transTitle2;
  const fieldWidth = props.fieldWidth;
  const defaultValue = props.defaultValue;
  const disabled = props.disabled;

  return (
    <div className={`form-group col-xl-${fieldWidth}`}>
      <label>
        {props.t(`${transTitle}`)}
        {requiredField && <span className="text-danger">*</span>}
      </label>
      <input
        type="text"
        placeholder={props.t(`${transTitle2 ? transTitle2 : transTitle}`)}
        name={fieldName}
        className="form-control"
        required={requiredField}
        defaultValue={defaultValue ? defaultValue : ""}
        disabled={disabled ? true : false}
      />
    </div>
  );
};

export default withTranslation(BillingAddressInput);
