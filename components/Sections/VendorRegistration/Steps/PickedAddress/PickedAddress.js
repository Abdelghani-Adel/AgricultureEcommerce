import { useCallback, useState } from "react";
import VendorRegisterAPI from "../../../../../services/VendorRegisterAPI";
import BillingAddressForm from "../../Reusable/BillingAddressForm/BillingAddressForm";
import SubmitStepButton from "../../Reusable/SubmitStepButton";

const API = new VendorRegisterAPI();

const PickedAddress = (props) => {
  const { vendorID } = props;
  const initialReqBody = {
    FAPartnerId: vendorID,
    Step_Id: 2,
  };
  const [requestBody, setRequestBody] = useState(initialReqBody);

  const inputChangeHandler = useCallback((e) => {
    setRequestBody({ ...requestBody, [e.target.name]: e.target.value });
  });

  const hydrateReqBody = useCallback((data) => {
    setRequestBody({ ...requestBody, ...data });
  });

  const submitHandler = (e) => {
    e.preventDefault();
    props.saveFunction(
      requestBody,
      "http://192.168.10.251:800/api/ECommerceSetting/upsPickedAddress"
    );
  };

  return (
    <div className="container mt-5">
      <form action="" method="POST" onSubmit={submitHandler}>
        <BillingAddressForm
          fieldChangeHandler={inputChangeHandler}
          hydrateReqBody={hydrateReqBody}
          vendorID={vendorID}
          EntityId={17}
          showPreviousAddress={true}
        />
        <SubmitStepButton />
      </form>
    </div>
  );
};

export default PickedAddress;
