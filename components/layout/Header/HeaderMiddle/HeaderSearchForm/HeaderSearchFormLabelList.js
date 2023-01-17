import HeaderSearchFromLabel from "./HeaderSearchFormLabel";

const HeaderSearchFormLabelList = (props) => {
  return (
    <div className="andro_search-adv-cats">
      <span>All Categories</span>
      <div className="sub-menu">
        <div className="andro_dropdown-scroll">
          <HeaderSearchFromLabel
            name="category1"
            defaultValue="food"
            title="Food"
          />
          <HeaderSearchFromLabel
            name="category2"
            defaultValue="home-care"
            title="Home Care"
          />
          <HeaderSearchFromLabel
            name="category3"
            defaultValue="keto"
            title="Keto"
          />
          <HeaderSearchFromLabel
            name="category4"
            defaultValue="baskets"
            title="Baskets"
          />
          <HeaderSearchFromLabel
            name="category5"
            defaultValue="supplements"
            title="Supplements"
          />
          <HeaderSearchFromLabel
            name="category6"
            defaultValue="baby-kids"
            title="Baby &amp; Kids care"
          />
          <HeaderSearchFromLabel
            name="category7"
            defaultValue="serum"
            title="Serum"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderSearchFormLabelList;
