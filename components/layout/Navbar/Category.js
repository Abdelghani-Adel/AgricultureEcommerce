import React, { Component ,useState ,useEffect } from "react";
import Link from "next/Link";
import Categories from "../../../data/category.json";
import { withTranslation } from "react-multi-lang";

const Category = (props) => {

  const [data, setData]=useState();

  useEffect(()=>{
    async function fetchData() {
      // const res = await fetch(
      //   'https://proton.api.atomicassets.io/atomicmarket/v1/sales'
      // );
      const data = Categories;
      setData(data)
    }
    fetchData()
  },[]);
  console.log("data " ,data);
  return (
    <>
     {data && data.map((cat ,index)=>{
        return (
          <li
          key={index}
          className={`menu-item ${
            cat.child ? "menu-item-has-children" : ""
          } `}
          
        >
         
          <Link href={"categories/" + cat.slug}>{cat.title}</Link>
        </li>     
        )
      })}
      {/* <li className="andro_category-mm-item">
        <Link href="#">{props.t("Categories.Ingrediants")}</Link>
      </li>
      <li className="andro_category-mm-item">
        <Link href="#">{props.t("Categories.Organic")}</Link>
      </li>
      <li className="andro_category-mm-item">
        <Link href="#">{props.t("Categories.Farms")}</Link>
      </li>
      <li className="andro_category-mm-item">
        <Link href="#">{props.t("Categories.Supplements")}</Link>
      </li> */}
    </>
  );
};

export default withTranslation(Category);
