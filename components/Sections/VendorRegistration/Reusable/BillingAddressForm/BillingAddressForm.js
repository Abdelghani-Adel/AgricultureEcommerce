import InputField from "../InputField";
import { useEffect, useState, Fragment, useCallback } from "react";
import VendorRegisterAPI from "../../../../../services/VendorRegisterAPI";

const vendorRegApi = new VendorRegisterAPI();

const BillingAddressForm = (props) => {
  const { fieldChangeHandler, hydrateReqBody, vendorID, showPreviousAddress } = props;
  const [addresses, setAddresses] = useState();
  const [countries, setCountries] = useState(null);
  const [governments, setGovernments] = useState();
  const [cities, setCities] = useState();
  const [districts, setDistricts] = useState();
  const [showAddingForm, setShowAddingForm] = useState(!showPreviousAddress);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await vendorRegApi.fetchCountries();
      setCountries(data);
    };
    const fetchAddress = async () => {
      const data = await vendorRegApi.fetchAddresses(vendorID);
      setAddresses(data);
    };

    showPreviousAddress ? fetchAddress() : fetchCountries();
  }, []);

  useEffect(() => {
    if (addresses && addresses.length > 0) {
      const address = {
        Country_Id: addresses[0].Country_Id,
        City_Id: addresses[0].City_Id,
        Gover_Id: addresses[0].Gover_Id,
        District_Id: addresses[0].District_Id,
        streetAdd: addresses[0].FullAddress,
        buildingNo: addresses[0].BuildingNo,
      };
      hydrateReqBody(address);
    }
  }, [addresses]);

  // When click on "add new address", show the form and fetch the governments based on countryID
  const showAddingNewAddressForm = () => {
    const fetchGovernments = async () => {
      const data = await vendorRegApi.fetchGovernments(1); // need dynamic countryID
      setGovernments(data);
      setShowAddingForm(true);
    };
    fetchGovernments();
  };

  const countryChangeHandler = useCallback((e) => {
    const countryID = e.target.value;
    const fetchGovernments = async () => {
      const data = await vendorRegApi.fetchGovernments(countryID);
      setGovernments(data);
    };

    fieldChangeHandler(e);
    fetchGovernments();
  });

  const governmentChangeHandler = useCallback((e) => {
    const govID = e.target.value;
    const fetchCities = async () => {
      const data = await vendorRegApi.fetchCities(govID);
      setCities(data);
    };

    fieldChangeHandler(e);
    fetchCities();
  });

  const cityChangeHandler = useCallback((e) => {
    const cityID = e.target.value;
    const fetchDestricts = async () => {
      const data = await vendorRegApi.fetchDestricts(cityID);
      setDistricts(data);
    };

    fieldChangeHandler(e);
    fetchDestricts();
  });

  return (
    <Fragment>
      {/* /////////////     DropDown with previous address     ///////////// */}
      {showPreviousAddress && (
        <div className="row">
          <InputField
            title="Your Address"
            fieldName="EI_Add_Id"
            changeHandler={fieldChangeHandler}
            options={addresses}
            optionID="EI_Add_Id"
            optionTitle="FullAddress"
            firstOptionChoosen={true}
          />
        </div>
      )}

      {/* /////////////     add new address ?     ///////////// */}
      {showPreviousAddress && !showAddingForm && (
        <div className="row">
          <div className="col">
            <p className="text-primary cursor-pointer" onClick={showAddingNewAddressForm}>
              Add New Address ?
            </p>
          </div>
        </div>
      )}

      {/* /////////////     Billing_Address_Form Inputs     ///////////// */}
      {showAddingForm && (
        <div className="row row-cols-2">
          {!showPreviousAddress && (
            <InputField
              title="Country"
              fieldName="Country_Id"
              changeHandler={countryChangeHandler}
              options={countries}
              optionID="Country_Id"
              optionTitle="CountryName_EN"
            />
          )}

          <InputField
            title="Government"
            fieldName="Gover_Id"
            changeHandler={governmentChangeHandler}
            options={governments}
            optionID="Gover_Id"
            optionTitle="GoverName_EN"
          />

          <InputField
            title="City"
            fieldName="City_Id"
            changeHandler={cityChangeHandler}
            options={cities}
            optionID="City_Id"
            optionTitle="CityName_EN"
          />

          <InputField
            title="Supported Areas"
            fieldName="District_Id"
            changeHandler={fieldChangeHandler}
            options={districts}
            optionID="District_Id"
            optionTitle="DistrictName_EN"
          />

          <InputField
            title="Street Address"
            fieldName="streetAdd"
            changeHandler={fieldChangeHandler}
          />

          <InputField
            title="Building No."
            fieldName="buildingNo"
            changeHandler={fieldChangeHandler}
          />
        </div>
      )}
    </Fragment>
  );
};

export default BillingAddressForm;

/*
  // Component Reusable scenarios:-
    [1] show_input_form && hide_previous_address && hide_addNewAddress_button
      - You can use this reusable component for input billing address for the first time
        So, you only show the form and hide the PreviousEnteredAddress
        and hide the 'add new address?' button, it's useless in this case becaus you are
        already adding one and the form is already shown.
    [2] hide_input_form && show_previous_address && show_addNewAddress_button
      - You can use this reusable component for giving the user the option to add new address
        and show the previous address to him,
        So, you hide the form temporarely until the user wants to add new address and he clicked
        the 'add new address?' button, so you hide the button and show the form for him.

  // Component Expected Props:-
    [1] fieldChangeHanderl => ()
      - will be used onChange field to sent the input data to the parent component, then the parent
        component will hydrate the requestBody stored in its state.
    [2] vendorID => number
      - will be used to fetchAddresses that assigned to the registering vendor, and show that
        addreses in a droplist to him.
      - will be invoked only once at the first cycle of rendering, so I've used useEffect without 
        dependencies.
    [3] showPreviousAddress = boolean
      - if not passed as props: so it's considered as false
      - if true => show dropdown of the previous addresses
                => showAddingForm will be false and hidden
*/
