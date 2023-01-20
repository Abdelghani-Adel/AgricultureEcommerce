const AreaInput = (props) => {
  const { districts, changeHandler } = props;
  return (
    <div className="form-group col-md-4">
      <label htmlFor="exampleFormControlSelect1">Supported Area</label>
      <select
        className="form-control form-control-lg bg-light"
        name="District_Id"
        onChange={changeHandler}
        required
      >
        <option selected disabled value="">
          Select Areas
        </option>
        {districts &&
          districts.map((district) => (
            <option value={district.District_Id}>{district.DistrictName_EN}</option>
          ))}
      </select>
    </div>
  );
};

export default AreaInput;
