import { useCallback } from "react";
import { useEffect, useState } from "react";
import InputField from "../../Reusable/InputField";
import SubmitStepButton from "../../Reusable/SubmitStepButton";

const Documents = (props) => {
  const { vendorID, finishRegistration } = props;
  const [files, setFiles] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // the first parameter of append should be similar to your api endpoint field name
    files.forEach((file) => formData.append("files", file));
    formData.append("FAPartnerId", 15);

    const sendFile = async () => {
      const response = await fetch(
        "http://192.168.10.251:800/api/ECommerceSetting/savePartnerDocuments",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      console.log(data);

      finishRegistration();
    };
    sendFile();
  };

  const fieldChangeHandler = useCallback((e) => {
    setFiles((prev) => [...prev, e.target.files[0]]);
  });

  return (
    <div className="container mt-5">
      <form action="" method="POST" onSubmit={submitHandler}>
        <div className="row row-cols-1">
          <InputField
            inputType="file"
            title="Commercial Register"
            fieldName=""
            changeHandler={fieldChangeHandler}
            style="col-6"
          />
          <InputField
            inputType="file"
            title="License NO."
            fieldName=""
            changeHandler={fieldChangeHandler}
            style="col-6"
          />
          <InputField
            inputType="file"
            title="Logo"
            fieldName=""
            changeHandler={fieldChangeHandler}
            style="col-6"
          />
        </div>

        <SubmitStepButton title="Finish" />
      </form>
    </div>
  );
};

export default Documents;
