import { withTranslation } from "react-multi-lang";

const CurrentStepTitle = (props) => {
  const { currentStep } = props;
  return (
    <div className="mt-4">
      <div className="row">
        <div className="col">
          <p className={`${currentStep != 1 && "d-none"}`}>{props.t("Vendor.BusinessInfo")}</p>
        </div>
        <div className="col">
          <p className={`${currentStep != 2 && "d-none"}`}>{props.t("Vendor.PickedAddress")}</p>
        </div>
        <div className="col">
          <p className={`${currentStep != 3 && "d-none"}`}>{props.t("Vendor.PaymentInfo")}</p>
        </div>
        <div className="col">
          <p className={`${currentStep != 4 && "d-none"}`}>{props.t("Vendor.ProductInfo")}</p>
        </div>
        <div className="col">
          <p className={`${currentStep != 5 && "d-none"}`}>{props.t("Vendor.ContactInfo")}</p>
        </div>
        <div className="col">
          <p className={`${currentStep != 6 && "d-none"}`}>{props.t("Vendor.Docs")}</p>
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

export default withTranslation(CurrentStepTitle);
