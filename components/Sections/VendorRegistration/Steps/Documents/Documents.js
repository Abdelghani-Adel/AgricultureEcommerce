import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import InputField from "../../Reusable/InputField";
import SubmitStepButton from "../../Reusable/SubmitStepButton";

const Documents = (props) => {
  const { vendorID, finishRegistration } = props;
  const [files, setFiles] = useState([]);
  const lang = useSelector((state) => state.lang);

  const submitHandler = (e) => {
    e.preventDefault();

    const sendFile = async () => {
      const formData = new FormData();
      // the first parameter of append should be similar to your api endpoint field name
      files.forEach((file) => formData.append("files", file));
      formData.append("FAPartnerId", vendorID);

      const response = await fetch("/api/ECommerceSetting/savePartnerDocuments", {
        method: "POST",
        body: formData,
      });

      finishRegistration();
    };
    sendFile();
  };

  const inputChangeHandler = useCallback((e) => {
    setFiles((prev) => [...prev, e.target.files[0]]);
  });

  return (
    <div className="container mt-5">
      <form action="" method="POST" onSubmit={submitHandler}>
        <div className="row row-cols-1">
          <InputField
            inputType="file"
            title="Vendor.Commercial"
            fieldName=""
            changeHandler={inputChangeHandler}
            style="col-6"
          />
          <InputField
            inputType="file"
            title="Vendor.LicenseNo"
            fieldName=""
            changeHandler={inputChangeHandler}
            style="col-6"
          />
          <InputField
            inputType="file"
            title="Vendor.Logo"
            fieldName=""
            changeHandler={inputChangeHandler}
            style="col-6"
          />
        </div>

        <SubmitStepButton title="Vendor.Finish" />
      </form>
    </div>
  );
};

export default Documents;
