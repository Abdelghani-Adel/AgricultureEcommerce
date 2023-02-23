const SubmitStepButton = (props) => {
  const { title } = props;
  return (
    <div className="row justify-content-end">
      <div className="col-md-3 col">
        <button
          type="submit"
          className="andro_btn-custom btn-sm primary w-100"
          style={{ padding: "0" }}
        >
          {title ? title : "Save And Continue"}
        </button>
      </div>
    </div>
  );
};

export default SubmitStepButton;
