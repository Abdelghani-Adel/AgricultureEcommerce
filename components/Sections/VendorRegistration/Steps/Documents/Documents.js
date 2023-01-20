import { useEffect, useState } from "react";
import InputField from "../../Reusable/InputField";

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
        <div className="row row-cols-2">
          <InputField />
        </div>
      </form>
    </div>
  );
};

export default Documents;
