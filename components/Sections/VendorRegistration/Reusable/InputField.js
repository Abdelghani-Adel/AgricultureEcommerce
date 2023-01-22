const InputField = (props) => {
  const {
    changeHandler,
    title,
    fieldName,
    options,
    optionID,
    optionTitle,
    firstOptionChoosen,
    inputType,
    style,
  } = props;

  const inputStyle = `form-control form-control-lg bg-light`;
  return (
    <div className={style ? style : "col"}>
      <div className="form-group">
        <label>{title}</label>

        {/* Normal input NOT select */}
        {!optionID && (
          <input
            type={inputType ? inputType : "text"}
            className={inputStyle}
            name={fieldName}
            onChange={changeHandler}
            required
          />
        )}

        {/* Select input */}
        {optionID && (
          <select className={inputStyle} name={fieldName} onChange={changeHandler} required>
            {!firstOptionChoosen && (
              <option selected disabled value="">
                Choose {title}
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

export default InputField;
