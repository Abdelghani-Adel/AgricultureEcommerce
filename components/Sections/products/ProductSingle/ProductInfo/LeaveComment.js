import { useState } from "react";
import { toast } from "react-toastify";
import { withTranslation } from "react-multi-lang";
import { useSelector } from "react-redux";

const LeaveComment = (props) => {
  const [comment, setComment] = useState("");
  const lang = useSelector((state) => state.lang);

  const changeHandler = (e) => {
    setComment(e.target.value);
  };

  const submitHandler = () => {
    setComment("");
    toast.info("Thank you for your comment~");
  };

  return (
    <div className="leave_comment mt-4 product_single--info">
      <h5 className="text-center">{lang && props.t("Products.LeaveComment")}</h5>
      <div className="form-group">
        {/* <label for="exampleFormControlTextarea1">Leave a comment</label> */}
        <textarea
          className="form-control bg-white"
          id="exampleFormControlTextarea1"
          rows="3"
          value={comment}
          onChange={changeHandler}
        ></textarea>
        <button className="default_btn ms-auto mt-2" onClick={submitHandler}>
          {lang && props.t("Products.Submit")}
        </button>
      </div>
    </div>
  );
};

export default withTranslation(LeaveComment);
