const RegistrationProgressBar = (props) => {
  const { currentStep } = props;
  return (
    <div className="col-12 ">
      <ul className="registeration-progress row">
        <li className="col">
          <span className={`step-wrapper ${currentStep >= 1 && "step-done-wrapper"}`}>
            <span className="step-number">1</span>
          </span>
        </li>
        <li className="col">
          <span className={`step-wrapper ${currentStep >= 2 && "step-done-wrapper"}`}>
            <span className="step-number">2</span>
          </span>
        </li>
        <li className="col">
          <span className={`step-wrapper ${currentStep >= 3 && "step-done-wrapper"}`}>
            <span className="step-number">3</span>
          </span>
        </li>
        <li className="col">
          <span className={`step-wrapper ${currentStep >= 4 && "step-done-wrapper"}`}>
            <span className="step-number">4</span>
          </span>
        </li>
        <li className="col">
          <span className={`step-wrapper ${currentStep >= 5 && "step-done-wrapper"}`}>
            <span className="step-number">5</span>
          </span>
        </li>
        <li className="col">
          <span className={`step-wrapper ${currentStep >= 6 && "step-done-wrapper"}`}>
            <span className="step-number">6</span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default RegistrationProgressBar;
