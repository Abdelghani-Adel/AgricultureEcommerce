import { useCallback } from "react";
import { useEffect, useState } from "react";
import VendorRegisterAPI from "../../../../../services/VendorRegisterAPI";
import InputField from "../../Reusable/InputField";
import SubmitStepButton from "../../Reusable/SubmitStepButton";
import Classification from "./Classification";

const vendorRegApi = new VendorRegisterAPI();

const ProductInfo = (props) => {
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
      const data = await vendorRegApi.fetchClassificationTree();
      setClassifications(data);
    };
    fetchClassification();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    props.saveFunction(
      requestBody,
      "http://192.168.10.251:800/api/ECommerceSetting/addPartnerCategories"
    );
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
        <div className="row row-cols-3">
          {classifications.map((classification) => (
            <Classification
              key={classification.FAClassificationId}
              classification={classification}
              changeHandler={inputChangeHandler}
            />
          ))}
        </div>
        <SubmitStepButton />
      </form>
    </div>
  );
};

export default ProductInfo;
