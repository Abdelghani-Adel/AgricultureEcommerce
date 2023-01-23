import { useEffect, useState, useCallback } from "react";
import VendorRegisterAPI from "../../../../../services/VendorRegisterAPI";
import BillingAddressForm from "../../Reusable/BillingAddressForm/BillingAddressForm";
import SubmitStepButton from "../../Reusable/SubmitStepButton";

const API = new VendorRegisterAPI();

const PickedAddress = (props) => {
  const { vendorID } = props;
  const [requestBody, setRequestBody] = useState();

  // Hydrating the requestBody state with the incoming one
  useEffect(() => {
    const getVendorAddress = async () => {
      const data = await API.fetchAddresses(vendorID);
      setRequestBody({
        FAPartnerId: data[0].vendorID,
        Step_Id: 2,
      });
    };
    getVendorAddress();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    props.saveFunction(
      requestBody,
      "http://192.168.10.251:800/api/ECommerceSetting/upsPickedAddress"
    );
  };

  const fieldChangeHandler = useCallback((e) => {
    setRequestBody({ ...requestBody, [e.target.name]: e.target.value });
  });

  const hydrateReqBody = useCallback((data) => {
    setRequestBody({ ...requestBody, ...data });
  });

  return (
    <div className="container mt-5">
      <form action="" method="POST" onSubmit={submitHandler}>
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

export default PickedAddress;
