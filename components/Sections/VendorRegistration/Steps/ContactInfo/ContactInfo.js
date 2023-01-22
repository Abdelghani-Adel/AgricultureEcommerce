import { useEffect, useState } from "react";
import BillingAddressForm from "../../Reusable/BillingAddressForm/BillingAddressForm";
import InputField from "../../Reusable/InputField";
import SubmitStepButton from "../../Reusable/SubmitStepButton";

const initReqBody = {
  FAContactId: 0,
  FACompany_Id: 0,
  FAEntityID: 0,
  FASubCompany_Id: 0,
  FAEntityItemId: 0,
  PTitle_Id: 0,
  ContactName: "string",
  ContactEmail: "string",
  ContactMobile: "string",
  DefaultContact: true,
  EntryDate: "2023-01-22T15:45:07.158Z",
  ComputerNameOrIP: "string",
  User_Id: 0,
  Active: true,
  LastModified: "2023-01-22T15:45:07.158Z",
  First_Name: "string",
  Last_Name: "string",
  DOB: "string",
  IdentityNo: "string",
  IdentityNo_Exp: "2023-01-22T15:45:07.158Z",
  IdentityNo_IssuedCountry: 0,
  IdentityNo_Exp_str: "string",
  Country_Id: 0,
  City_Id: 0,
  Gover_Id: 0,
  District_Id: 0,
  streetAdd: "string",
  buildingNo: "string",
};

const ContactInfo = (props) => {
  const { vendorID } = props;
  const [requestBody, setRequestBody] = useState();

  useEffect(() => {});

  const submitHandler = (e) => {
    e.preventDefault();
    props.saveFunction(
      requestBody,
      "http://192.168.10.251:800/api/ECommerceSetting/addPartnerContact"
    );
  };

  const fieldChangeHandler = (e) => {
    setRequestBody({ ...requestBody, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <form action="" method="POST" onSubmit={submitHandler}>
        <div className="row justify-content-between row-cols-2">
          <InputField title="Title" fieldName="" changeHandler={fieldChangeHandler} />
          <InputField title="Identity No." fieldName="" changeHandler={fieldChangeHandler} />
          <InputField
            title="Identity Expiration Date"
            fieldName=""
            changeHandler={fieldChangeHandler}
          />
          <InputField
            title="Identity Issue Country"
            fieldName=""
            changeHandler={fieldChangeHandler}
            options={["Egypt", "USA"]}
            optionID="aa"
            optionTitle="aa"
          />
          <InputField title="First Name" fieldName="" changeHandler={fieldChangeHandler} />
          <InputField title="Last Name" fieldName="" changeHandler={fieldChangeHandler} />
          <InputField title="DOB" fieldName="" changeHandler={fieldChangeHandler} />
        </div>
        <BillingAddressForm
          fieldChangeHandler={fieldChangeHandler}
          vendorID={15}
          showPreviousAddress={true}
        />
        <SubmitStepButton />
      </form>
    </div>
  );
};

export default ContactInfo;
