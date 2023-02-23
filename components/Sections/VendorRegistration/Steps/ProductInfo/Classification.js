const Classification = (props) => {
  const { classification, style, changeHandler } = props;
  return (
    <div className="col">
      <div className={`form-check ${style}`}>
        <input
          className="form-check-input"
          type="checkbox"
          value={classification.FAClassificationId}
          onChange={changeHandler}
        />
        <label className="form-check-label">{classification.FAClassificationName}</label>
      </div>

      {classification.ClassificationChildren.length > 0 && (
        <div className={style}>
          {classification.ClassificationChildren.map((classification) => (
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
