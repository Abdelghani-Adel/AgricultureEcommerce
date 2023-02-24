import OptionsGroup from "./Option";

const FilterOptions = (props) => {
  const { options } = props;
  return (
    <>
      {options.map((option) => (
        <OptionsGroup key={option.optionId} option={option} />
      ))}
    </>
  );
};

export default FilterOptions;
