import { useState } from "react";
import CurrentStepTitle from "../../components/Sections/VendorRegistration/Reusable/CurrentStepTitle/CurrentStepTitle";
import RegistrationProgressBar from "../../components/Sections/VendorRegistration/Reusable/RegistrationProgressBar/RegistrationProgressBar";
import BusinessInformation from "../../components/Sections/VendorRegistration/steps/BusinessInformation/BusinessInformation";
import ContactInfo from "../../components/Sections/VendorRegistration/Steps/ContactInfo/ContactInfo";
import Documents from "../../components/Sections/VendorRegistration/Steps/Documents/Documents";
import PaymentInfo from "../../components/Sections/VendorRegistration/steps/PaymentInfo/PaymentInfo";
import PickedAddress from "../../components/Sections/VendorRegistration/steps/PickedAddress/PickedAddress";
import ProductInfo from "../../components/Sections/VendorRegistration/Steps/ProductInfo/ProductInfo";
import VendorRegisterAPI from "../../services/VendorRegisterAPI";

const vendorRegApi = new VendorRegisterAPI();

const VendorRegistration = (props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [registrationVendorID, setRegistrationVendorID] = useState();

  const saveAndContinue = (requestBody) => {
    const saveAndGoToNextStep = async () => {
      const data = await vendorRegApi.saveAndContinue(requestBody);
      !registrationVendorID && setRegistrationVendorID(data.idOut);
      setCurrentStep(currentStep + 1);
    };

    saveAndGoToNextStep();
  };

  const renderTheStep = () => {
    switch (currentStep) {
      case 1:
        return <BusinessInformation saveFunction={saveAndContinue} />;
      case 2:
        return <PickedAddress saveFunction={saveAndContinue} vendorID={registrationVendorID} />;
      case 3:
        return <PaymentInfo saveFunction={saveAndContinue} vendorID={registrationVendorID} />;
      case 4:
        return <ContactInfo saveFunction={saveAndContinue} vendorID={registrationVendorID} />;
      case 5:
        return <ContactInfo saveFunction={saveAndContinue} vendorID={registrationVendorID} />;
      case 6:
        return <Documents saveFunction={saveAndContinue} vendorID={registrationVendorID} />;
    }
  };

  return (
    <div className="container">
      <div className="section">
        <RegistrationProgressBar currentStep={currentStep} />
        <CurrentStepTitle currentStep={currentStep} />
        {renderTheStep()}
      </div>
    </div>
  );
};

export default VendorRegistration;
