import { useEffect, useCallback, useState } from "react";
import VendorRegisterAPI from "../../../../../services/VendorRegisterAPI";
import BillingAddressForm from "../../Reusable/BillingAddressForm/BillingAddressForm";
import InputField from "../../Reusable/InputField";
import SubmitStepButton from "../../Reusable/SubmitStepButton";

const initialRequestBody = {
  FAPartner_Type_Id: null,
  BusinessName: null,
  Country_Id: null,
  City_Id: null,
  Gover_Id: null,
  District_Id: null,
  FAPartnerId: 0,
  streetAdd: null,
  buildingNo: null,
  commercialReg: null,
  taxNo: null,
  phoneNum: null,
  ownBarcode: true,
  ownBrand: false,
  verifyCode: null,
  Step_Id: 1,
};

const vendorRegApi = new VendorRegisterAPI();

const BusinessInformation = (props) => {
  const [requestBody, setRequestBody] = useState(initialRequestBody);
  const [businessTypes, setBusinessTypes] = useState();

  // Hydrate businessTypes state from the database
  useEffect(() => {
    const getBusinessTypes = async () => {
      const data = await vendorRegApi.fetchBusinessTypes();
      setBusinessTypes(data);
    };
    getBusinessTypes();
  }, []);

  const checkboxHandler = (e) => {
    const selectedChoice = e.target.value;
    if (selectedChoice == "ownBarcode") {
      setRequestBody({ ...requestBody, ownBarcode: true, ownBrand: false });
    } else {
      setRequestBody({ ...requestBody, ownBarcode: false, ownBrand: true });
    }
  };

  const inputChangeHandler = useCallback((e) => {
    setRequestBody({ ...requestBody, [e.target.name]: e.target.value });
  });

  const submitHandler = (e) => {
    e.preventDefault();
    props.saveFunction(requestBody, "/api/ECommerceSetting/AddVendorBusinessInfo");
  };

  return (
    <div className="container mt-5">
      <form action="" method="POST" onSubmit={submitHandler}>
        <div className="row justify-content-between">
          <InputField
            title="Business Type"
            fieldName="FAPartner_Type_Id"
            changeHandler={inputChangeHandler}
            options={businessTypes}
            optionID="FAPartner_Type_Id"
            optionTitle="FAPartner_Type_Name"
          />
          <InputField
            title="Business Name"
            fieldName="BusinessName"
            changeHandler={inputChangeHandler}
          />
        </div>

        <BillingAddressForm fieldChangeHandler={inputChangeHandler} />

        {/* /////////////     COMMERCIAL   |   TAX     ///////////// */}
        <div className="row justify-content-between">
          <InputField
            title="Commercial Register No."
            fieldName="commercialReg"
            changeHandler={inputChangeHandler}
          />
          <InputField title="Tax No." fieldName="taxNo" changeHandler={inputChangeHandler} />
        </div>

        {/* /////////////     PHONE   |   VERIFY_CODE     ///////////// */}
        <div className="row align-items-center">
          <InputField
            title="Phone Number"
            fieldName="phoneNum"
            changeHandler={inputChangeHandler}
          />
          <InputField
            title="Verify Code"
            fieldName="verifyCode"
            changeHandler={inputChangeHandler}
          />
        </div>

        {/* /////////////     CHECKBOXES     ///////////// */}
        <div className="mt-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="checkbox"
              value="ownBarcode"
              onChange={checkboxHandler}
              checked
            />
            <label className="form-check-label">Do you have your own barcode ?</label>
          </div>
        </div>
        <div className="mt-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="checkbox"
              value="ownBrand"
              onChange={checkboxHandler}
            />
            <label className="form-check-label">Do you have your own brand ?</label>
          </div>
        </div>

        {/* /////////////     SAVE BUTTON     ///////////// */}
        <SubmitStepButton />
      </form>
    </div>
  );
};

export default BusinessInformation;
