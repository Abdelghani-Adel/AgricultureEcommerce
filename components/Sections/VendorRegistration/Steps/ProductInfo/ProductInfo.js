import { useCallback } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VendorRegisterAPI from "../../../../../services/VendorRegisterAPI";
import InputField from "../../Reusable/InputField";
import SubmitStepButton from "../../Reusable/SubmitStepButton";
import Classification from "./Classification";

const vendorRegApi = new VendorRegisterAPI();

const ProductInfo = (props) => {
  const lang = useSelector((state) => state.lang);
  const { vendorID } = props;
  const initReqBody = {
    FAPartnerId: vendorID,
    Step_Id: 4,
    categories: [],
  };

  const [requestBody, setRequestBody] = useState(initReqBody);
  const [classifications, setClassifications] = useState([]);

  // Hydrate classifications and categories state from the database
  useEffect(() => {
    const fetchClassification = async () => {
      const data = await vendorRegApi.fetchClassificationTree(lang);
      setClassifications(data);
    };
    fetchClassification();
  }, [lang]);

  const submitHandler = (e) => {
    e.preventDefault();
    props.saveFunction(requestBody, "/api/ECommerceSetting/addPartnerCategories");
  };

  const inputChangeHandler = useCallback((e) => {
    const category_id = e.target.value;
    const categories = requestBody.categories;

    const updatedCategories = categories.includes(category_id)
      ? categories.filter((id) => id != category_id)
      : categories.concat(category_id);

    setRequestBody({ ...requestBody, categories: [...updatedCategories] });
  });

  return (
    <div className="container mt-5">
      <form action="" method="POST" onSubmit={submitHandler}>
        <div className="row row-cols-5 g-4">
          {classifications.map((classification) => (
            <div className="col" key={classification.FAClassificationId}>
              <div className="classification">
                <Classification
                  classification={classification}
                  changeHandler={inputChangeHandler}
                />
              </div>
            </div>
          ))}
        </div>
        <SubmitStepButton title="Vendor.Save" />
      </form>
    </div>
  );
};

export default ProductInfo;
