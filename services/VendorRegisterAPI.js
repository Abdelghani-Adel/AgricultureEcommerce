class VendorRegisterAPI {
  async fetchRegistrationSteps() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/GetRegistartion_Step`
    );
    const data = await response.json();
    return data;
  }

  async fetchBusinessTypes() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/GetBusinessType`
    );
    const data = await response.json();
    return data;
  }

  async fetchCountries() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/GetEI_Country_Main`
    );
    const data = await response.json();
    return data;
  }

  async fetchGovernments(countryID) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/GetEI_Governorate`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Country_Id: countryID,
        }),
      }
    );
    const data = await response.json();
    return data;
  }

  async fetchCities(govID) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/GetEI_City_Main`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Gover_Id: govID,
        }),
      }
    );
    const data = await response.json();
    return data;
  }

  async fetchDestricts(cityID) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/GetEI_District`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          City_Id: cityID,
        }),
      }
    );
    const data = await response.json();
    return data;
  }

  async fetchAddresses(vendorID, EntityId) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/getAddressList`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          vendorId: vendorID,
          EntityId: EntityId,
        }),
      }
    );
    const data = await response.json();
    return data;
  }

  async fetchClassificationTree() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER}/api/EAdmin/GetClassificationTree`
    );
    const data = await response.json();
    return data;
  }

  async fetchCategories() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/getCategoriesWChd`
    );
    const data = await response.json();
    return data;
  }

  async saveAndContinue(requestBody, url) {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    console.log("response ", data);
    return data;
  }
}

export default VendorRegisterAPI;
