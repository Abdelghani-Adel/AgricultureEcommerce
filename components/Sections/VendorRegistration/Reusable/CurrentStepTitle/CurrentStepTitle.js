const CurrentStepTitle = (props) => {
  const { currentStep } = props;
  return (
    <div className="col-10 mt-4">
      <div className="row">
        <div className="col">
          <p className={`${currentStep != 1 && "d-none"}`}>Business Information</p>
        </div>
        <div className="col">
          <p className={`${currentStep != 2 && "d-none"}`}>Picked Address</p>
        </div>
        <div className="col">
          <p className={`${currentStep != 3 && "d-none"}`}>Payment Information</p>
        </div>
        <div className="col">
          <p className={`${currentStep != 4 && "d-none"}`}>Product Information</p>
        </div>
        <div className="col">
          <p className={`${currentStep != 5 && "d-none"}`}>Contact Information</p>
        </div>
        <div className="col">
          <p className={`${currentStep != 6 && "d-none"}`}>Documents</p>
        </div>
      </div>
      <div className="titleBar row">
        <span className={`col ${currentStep == 1 && "active"}`}></span>
        <span className={`col ${currentStep == 2 && "active"}`}></span>
        <span className={`col ${currentStep == 3 && "active"}`}></span>
        <span className={`col ${currentStep == 4 && "active"}`}></span>
        <span className={`col ${currentStep == 5 && "active"}`}></span>
        <span className={`col ${currentStep == 6 && "active"}`}></span>
      </div>
    </div>
  );
};

export default CurrentStepTitle;
