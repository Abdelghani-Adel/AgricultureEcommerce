import CategoryNavItem from "./CategoryNavItem";

const HeaderNavItem = (props) => {
  const { link, lang } = props;

  return <CategoryNavItem lang={lang} link={link} />;
};

export default HeaderNavItem;
