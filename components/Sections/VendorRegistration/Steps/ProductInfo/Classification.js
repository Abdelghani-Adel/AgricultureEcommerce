const Classification = (props) => {
  const { classification, style, changeHandler } = props;
  const children = classification.ClassificationChildren;
  return (
    <div>
      <div className={`form-check ${style}`}>
        <input
          className="form-check-input"
          type="checkbox"
          value={classification.FAClassificationId}
          onChange={changeHandler}
        />
        <label className={`form-check-label ${children ? "fw-bolder" : "fw-light"}`}>
          {classification.FAClassificationName}
        </label>
      </div>

      {children && children.length > 0 && (
        <div className={style}>
          {children.map((classification) => (
            <Classification
              key={classification.FAClassificationId}
              style="ms-3"
              classification={classification}
              changeHandler={changeHandler}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Classification;
