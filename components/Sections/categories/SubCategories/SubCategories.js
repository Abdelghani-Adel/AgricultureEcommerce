import CategoryCard from "../../../Reusable_Components/Cards/CategoryCard";

const SubCategories = ({ categories }) => {
  return (
    <div className="section" id="sub_categories">
      <div className="container">
        <div className="row">
          {categories.map((subCategory) => (
            <CategoryCard
              key={subCategory.FAClassificationId}
              category={subCategory}
              style={"col-12 col-lg-3"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubCategories;
