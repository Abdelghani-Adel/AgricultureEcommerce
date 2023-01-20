import { useEffect, useState } from "react";
import VendorRegisterAPI from "../../../../../services/VendorRegisterAPI";
import BillingAddressForm from "../../Reusable/BillingAddressForm/BillingAddressForm";
import SubmitStepButton from "../../Reusable/SubmitStepButton";

const API = new VendorRegisterAPI();

const PickedAddress = (props) => {
  const { vendorID } = props;
  const [requestBody, setRequestBody] = useState();

  // Hydrating the requestBody state with the incoming one
  useEffect(() => {
    const fetchAddress = async () => {
      const data = await API.fetchAddresses(vendorID); // will be props.vendorID
      setRequestBody({
        Country_Id: data[0].Country_Id,
        City_Id: data[0].City_Id,
        Gover_Id: data[0].Gover_Id,
        District_Id: data[0].District_Id,
        streetAdd: data[0].FullAddress,
        buildingNo: data[0].BuildingNo,
        FAPartnerId: data[0].vendorID,
        Step_Id: 2,
      });
    };
    fetchAddress();
  });

  const submitHandler = (e) => {
    e.preventDefault();
    props.saveFunction(requestBody);
  };

  const fieldChangeHandler = (e) => {
    setRequestBody({ ...requestBody, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <form action="" method="POST" onSubmit={submitHandler}>
        <BillingAddressForm
          fieldChangeHandler={fieldChangeHandler}
          vendorID={vendorID}
          showPreviousAddress={true}
        />
        <SubmitStepButton />
      </form>
    </div>
  );
};

export default PickedAddress;
