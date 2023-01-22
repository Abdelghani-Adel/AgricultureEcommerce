import { useEffect, useState } from "react";
import VendorRegisterAPI from "../../../../../services/VendorRegisterAPI";
import BillingAddressForm from "../../Reusable/BillingAddressForm/BillingAddressForm";
import InputField from "../../Reusable/InputField";
import SubmitStepButton from "../../Reusable/SubmitStepButton";

const vendorRegApi = new VendorRegisterAPI();
const initialRequestBodyValues = {
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

const BusinessInformation = (props) => {
  const [businessTypes, setBusinessTypes] = useState(null);
  const [requestBody, setRequestBody] = useState(initialRequestBodyValues);

  useEffect(() => {
    const fetchBusinessTypes = async () => {
      const data = await vendorRegApi.fetchBusinessTypes();
      setBusinessTypes(data);
    };
    fetchBusinessTypes();
  });

  const checkBoxHandler = (e) => {
    const selectedChoice = e.target.value;
    if (selectedChoice == "ownBarcode") {
      setRequestBody({ ...requestBody, ownBarcode: true, ownBrand: false });
    } else {
      setRequestBody({ ...requestBody, ownBarcode: false, ownBrand: true });
    }
  };

  const fieldChangeHandler = (e) => {
    setRequestBody({ ...requestBody, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.saveFunction(
      requestBody,
      "http://192.168.10.251:800/api/ECommerceSetting/AddVendorBusinessInfo"
    );
  };

  return (
    <div className="container mt-5">
      <form action="" method="POST" onSubmit={submitHandler}>
        <div className="row justify-content-between">
          <InputField
            title="Business Type"
            fieldName="FAPartner_Type_Id"
            changeHandler={fieldChangeHandler}
            options={businessTypes}
            optionID="FAPartner_Type_Id"
            optionTitle="FAPartner_Type_Name"
          />
          <InputField
            title="Business Name"
            fieldName="BusinessName"
            changeHandler={fieldChangeHandler}
          />
        </div>

        <BillingAddressForm fieldChangeHandler={fieldChangeHandler} />

        {/* /////////////     COMMERCIAL   |   TAX     ///////////// */}
        <div className="row justify-content-between">
          <InputField
            title="Commercial Register No."
            fieldName="commercialReg"
            changeHandler={fieldChangeHandler}
          />
          <InputField title="Tax No." fieldName="taxNo" changeHandler={fieldChangeHandler} />
        </div>

        {/* /////////////     PHONE   |   VERIFY_CODE     ///////////// */}
        <div className="row align-items-center">
          <InputField
            title="Phone Number"
            fieldName="phoneNum"
            changeHandler={fieldChangeHandler}
          />
          <InputField
            title="Verify Code"
            fieldName="verifyCode"
            changeHandler={fieldChangeHandler}
          />
        </div>

        {/* /////////////     CHECKBOXES     ///////////// */}
        <div className="row mt-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="checkbox"
              value="ownBarcode"
              onChange={checkBoxHandler}
              checked
            />
            <label className="form-check-label">Do you have your own barcode ?</label>
          </div>
        </div>
        <div className="row mt-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="checkbox"
              value="ownBrand"
              onChange={checkBoxHandler}
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
