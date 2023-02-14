import InputField from "../InputField";
import { useEffect, useState, Fragment, useCallback } from "react";
import VendorRegisterAPI from "../../../../../services/VendorRegisterAPI";

const vendorRegApi = new VendorRegisterAPI();

const BillingAddressForm = (props) => {
  const { fieldChangeHandler, hydrateReqBody, vendorID, EntityId } = props;

  const [showPreviousAddress, setShowPreviousAddress] = useState();
  const [showAddingForm, setShowAddingForm] = useState();

  const [addresses, setAddresses] = useState();
  const [countries, setCountries] = useState();
  const [governments, setGovernments] = useState();
  const [cities, setCities] = useState();
  const [districts, setDistricts] = useState();

  useEffect(() => {
    const fetchAddresses = async () => {
      // Check if there are previous address
      const addresses = await vendorRegApi.fetchAddresses(vendorID, EntityId);

      // If no previous address found, don't show empty droplist, show the adding form
      if (addresses.length == 0) {
        setShowPreviousAddress(false);
        setShowAddingForm(true);

        const countries = await vendorRegApi.fetchCountries();
        setCountries(countries);
      }

      // if previous address found, show it and hide adding form temporarely,
      // also set the addresses state to be shown in the droplist
      // also hydrate the parent's request body state with the first previous address found
      if (addresses.length > 0) {
        // console.log(addresses);
        setShowPreviousAddress(true);
        setShowAddingForm(false);
        setAddresses(addresses);

        hydrateReqBody(addresses[0]);
      }
    };

    fetchAddresses();
  }, []);

  const showAddingNewAddressForm = useCallback(async () => {
    const countries = await vendorRegApi.fetchCountries();
    setCountries(countries);
    setShowAddingForm(true);
  });

  const countryChangeHandler = useCallback(async (e) => {
    const countryID = e.target.value;
    const governments = await vendorRegApi.fetchGovernments(countryID);
    setGovernments(governments);

    // update the parent's requestBody
    fieldChangeHandler(e);
  });

  const governmentChangeHandler = useCallback(async (e) => {
    const govID = e.target.value;
    const cities = await vendorRegApi.fetchCities(govID);
    setCities(cities);

    // update the parent's requestBody
    fieldChangeHandler(e);
  });

  const cityChangeHandler = useCallback(async (e) => {
    const cityID = e.target.value;
    const districts = await vendorRegApi.fetchDestricts(cityID);
    setDistricts(districts);

    // update the parent's requestBody
    fieldChangeHandler(e);
  });

  return (
    <Fragment>
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

      {showPreviousAddress && !showAddingForm && (
        <div className="row">
          <div className="col">
            <p className="text-primary cursor-pointer" onClick={showAddingNewAddressForm}>
              Add New Address ?
            </p>
          </div>
        </div>
      )}

      {showAddingForm && (
        <div className="row row-cols-2">
          <InputField
            title="Country"
            fieldName="Country_Id"
            changeHandler={countryChangeHandler}
            options={countries}
            optionID="Country_Id"
            optionTitle="CountryName_EN"
          />

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
