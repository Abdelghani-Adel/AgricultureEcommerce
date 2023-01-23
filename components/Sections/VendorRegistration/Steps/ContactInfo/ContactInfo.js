import { useCallback } from "react";
import { useEffect, useState } from "react";
import BillingAddressForm from "../../Reusable/BillingAddressForm/BillingAddressForm";
import InputField from "../../Reusable/InputField";
import SubmitStepButton from "../../Reusable/SubmitStepButton";

const initReqBody = {
  // FAContactId: 0,
  // FACompany_Id: 0,
  // FAEntityID: 0,
  // FASubCompany_Id: 0,
  // FAEntityItemId: 0,
  // PTitle_Id: 0,
  // ContactName: null,
  // ContactEmail: "string",
  // ContactMobile: "string",
  // DefaultContact: true,
  // EntryDate: "2023-01-22T15:45:07.158Z",
  // ComputerNameOrIP: "string",
  // User_Id: 0,
  // Active: true,
  // LastModified: "2023-01-22T15:45:07.158Z",
  First_Name: null,
  Last_Name: null,
  DOB: null,
  IdentityNo: null,
  IdentityNo_Exp: null,
  IdentityNo_IssuedCountry: null,
  // IdentityNo_Exp_str: "string",
  // Country_Id: 0,
  // City_Id: 0,
  // Gover_Id: 0,
  // District_Id: 0,
  // streetAdd: "string",
  // buildingNo: "string",
};

const ContactInfo = (props) => {
  const { vendorID } = props;
  const [requestBody, setRequestBody] = useState(initReqBody);

  useEffect(() => {}, []);

  const submitHandler = (e) => {
    e.preventDefault();
    props.saveFunction(
      requestBody,
      "http://192.168.10.251:800/api/ECommerceSetting/addPartnerContact"
    );
  };

  const fieldChangeHandler = useCallback((e) => {
    console.log("render");
    setRequestBody({ ...requestBody, [e.target.name]: e.target.value });
  });

  const hydrateReqBody = useCallback((data) => {
    setRequestBody({ ...requestBody, ...data });
  });

  return (
    <div className="container mt-5">
      <form action="" method="POST" onSubmit={submitHandler}>
        <div className="row justify-content-between row-cols-2">
          <InputField title="Title" fieldName="ContactName" changeHandler={fieldChangeHandler} />

          <InputField
            title="Identity No."
            fieldName="IdentityNo"
            changeHandler={fieldChangeHandler}
          />

          <InputField
            title="Identity Expiration Date"
            fieldName="IdentityNo_Exp"
            changeHandler={fieldChangeHandler}
          />

          <InputField
            title="Identity Issue Country"
            fieldName="IdentityNo_IssuedCountry"
            changeHandler={fieldChangeHandler}
            options={["Egypt", "USA"]}
            optionID="aa"
            optionTitle="aa"
          />

          <InputField
            title="First Name"
            fieldName="First_Name"
            changeHandler={fieldChangeHandler}
          />

          <InputField title="Last Name" fieldName="Last_Name" changeHandler={fieldChangeHandler} />

          <InputField title="DOB" fieldName="DOB" changeHandler={fieldChangeHandler} />
        </div>
        <BillingAddressForm
          fieldChangeHandler={fieldChangeHandler}
          hydrateReqBody={hydrateReqBody}
          vendorID={vendorID}
          showPreviousAddress={true}
        />

        <SubmitStepButton />
      </form>
    </div>
  );
};

export default ContactInfo;
