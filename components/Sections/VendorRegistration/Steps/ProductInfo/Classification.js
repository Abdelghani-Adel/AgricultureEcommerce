const Classification = (props) => {
  const { classification, style, changeHandler } = props;
  return (
    <div className="col">
      <div class={`form-check ${style}`}>
        <input
          class="form-check-input"
          type="checkbox"
          value={classification.FAClassificationId}
          onChange={changeHandler}
        />
        <label class="form-check-label">{classification.FAClassificationName}</label>
      </div>

      {classification.ClassificationChildren.length > 0 && (
        <div className={style}>
          {classification.ClassificationChildren.map((classification, index) => (
            <Classification
              key={index}
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
