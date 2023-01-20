const HeaderSearchFromLabel = (props) => {
  return (
    <label>
      <input
        type="checkbox"
        name={props.name}
        defaultValue={props.defaultValue}
      />
      {props.title}
      <i className="fas fa-check" />
    </label>
  );
};

export default HeaderSearchFromLabel;
