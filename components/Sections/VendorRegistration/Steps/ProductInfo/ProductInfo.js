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
    categories: [0],
  };

  const [requestBody, setRequestBody] = useState(initReqBody);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [classifications, setClassifications] = useState([]);

  useEffect(() => {
    const fetchClassification = async () => {
      const data = await vendorRegApi.fetchClassificationTree();
      setClassifications(data);
      console.log(data);
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

  const fieldChangeHandler = (e) => {
    const category_id = e.target.value;
    const categories = requestBody.categories;

    const updatedCategories = categories.includes(category_id)
      ? categories.filter((id) => id != category_id)
      : categories.concat(category_id);

    setRequestBody({ ...requestBody, categories: [...updatedCategories] });
  };

  return (
    <div className="container mt-5">
      <form action="" method="POST" onSubmit={submitHandler}>
        <div className="row row-cols-3">
          {classifications.map((classification, index) => (
            <Classification
              key={index}
              classification={classification}
              changeHandler={fieldChangeHandler}
            />
          ))}
        </div>
        <SubmitStepButton />
      </form>
    </div>
  );
};

export default ProductInfo;
