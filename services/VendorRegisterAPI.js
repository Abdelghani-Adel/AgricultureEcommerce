class VendorRegisterAPI {
  async fetchRegistrationSteps() {
    const response = await fetch(
      "http://192.168.10.251:800/api/ECommerceSetting/GetRegistartion_Step"
    );
    const data = await response.json();
    return data;
  }

  async fetchBusinessTypes() {
    const response = await fetch("http://192.168.10.251:800/api/ECommerceSetting/GetBusinessType");
    const data = await response.json();
    return data;
  }

  async fetchCountries() {
    const response = await fetch(
      "http://192.168.10.251:800/api/ECommerceSetting/GetEI_Country_Main"
    );
    const data = await response.json();
    return data;
  }

  async fetchGovernments(countryID) {
    const response = await fetch(
      "http://192.168.10.251:800/api/ECommerceSetting/GetEI_Governorate",
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
    const response = await fetch("http://192.168.10.251:800/api/ECommerceSetting/GetEI_City_Main", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Gover_Id: govID,
      }),
    });
    const data = await response.json();
    return data;
  }

  async fetchDestricts(cityID) {
    const response = await fetch("http://192.168.10.251:800/api/ECommerceSetting/GetEI_District", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        City_Id: cityID,
      }),
    });
    const data = await response.json();
    return data;
  }

  async fetchAddresses(vendorID) {
    const response = await fetch("http://192.168.10.251:800/api/ECommerceSetting/getAddressList", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        vendorId: vendorID,
      }),
    });
    const data = await response.json();
    return data;
  }

  async saveAndContinue(requestBody) {
    const response = await fetch(
      "http://192.168.10.251:800/api/ECommerceSetting/AddVendorBusinessInfo",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      }
    );
    const data = await response.json();
    return data;
  }
}

export default VendorRegisterAPI;
