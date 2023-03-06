const HeaderSearchFromLabel = (props) => {
  const { category } = props;

  const onClickHandler = (e) => {
    props.catChangeHandler(category);
  };

  return <li onClick={onClickHandler}>{category.FAClassificationName}</li>;
};

export default HeaderSearchFromLabel;
