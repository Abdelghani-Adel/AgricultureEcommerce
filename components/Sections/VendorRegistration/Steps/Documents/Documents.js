import { useEffect, useState } from "react";
import InputField from "../../Reusable/InputField";
import SubmitStepButton from "../../Reusable/SubmitStepButton";

const Documents = (props) => {
  const { vendorID } = props;
  const [requestBody, setRequestBody] = useState();

  useEffect(() => {});

  const submitHandler = (e) => {
    e.preventDefault();
    props.saveFunction(requestBody);
  };

  const fieldChangeHandler = (e) => {
    setRequestBody({ ...requestBody, [e.target.name]: e.target.value });
  };

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
