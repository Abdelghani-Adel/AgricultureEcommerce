import { useSession, getSession } from "next-auth/react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment, useCallback } from "react";
import { withTranslation } from "react-multi-lang";
import BillingAddressForm from "../../VendorRegistration/Reusable/BillingAddressForm/BillingAddressForm";
import BillingAddressInput from "./BillingAddressInput";

const BillingAddress = (props) => {
  const [session, setSession] = useState();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session.user.user);
    };
    fetchSession();
  }, []);

  const hydrateReqBodyWithAddress = useCallback((address) => {
    setReqBody({ ...requestBody, ...address });
  });

  return (
    <Fragment>
      {session && (
        <div className="col-xl-7">
          <h4>{props.t("Checkout.BillingDetails")}</h4>
          <div className="row">
            <BillingAddressInput
              requiredField={true}
              fieldName="userName"
              transTitle="Username"
              fieldWidth="6"
              defaultValue={session.username}
              disabled={true}
            />

            <BillingAddressInput
              requiredField={true}
              fieldName="email"
              transTitle="Checkout.Email"
              fieldWidth="6"
              defaultValue={session.email}
              disabled={true}
            />

            <BillingAddressInput
              requiredField={true}
              fieldName="phone"
              transTitle="Checkout.Phone"
              fieldWidth="6"
              defaultValue={session.phoneNumber}
              disabled={true}
            />

            <BillingAddressForm
              fieldChangeHandler={props.inputChangeHandler}
              hydrateReqBody={hydrateReqBodyWithAddress}
              vendorID={session.custId}
              showPreviousAddress={true}
            />

            {/* <BillingAddressCountry />

        <BillingAddressInput
          requiredField={true}
          fieldName="addr-1"
          transTitle="Checkout.StAddress1"
          fieldWidth="6"
        />
        <BillingAddressInput
          requiredField={false}
          fieldName="addr-2"
          transTitle="Checkout.StAddress2"
          transTitle2="Checkout.Optional"
          fieldWidth="6"
        />
        <BillingAddressInput
          requiredField={true}
          fieldName="town"
          transTitle="Checkout.TownCity"
          fieldWidth="6"
        /> */}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default withTranslation(BillingAddress);
