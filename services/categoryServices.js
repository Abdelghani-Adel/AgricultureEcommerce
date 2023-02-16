export async function fetchCategoriesMenu(lang) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/GetCategoriesMenu`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lang: lang,
        FAClassification_ParentId: 81,
      }),
    }
  );
  const menues = await res.json();
  console.log(menues);
  return menues;
}

export async function fetchSubCategories(categoryId, lang) {
  const subCategoriesRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/GetCategoriesMenu`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lang: lang,
        FAClassification_ParentId: categoryId,
      }),
    }
  );
  const subCategories = await subCategoriesRes.json();
  return subCategories;
}

export async function fetchCategoryProducts(categoryId, lang) {
  const productsRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/getItemMainByCategory`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lang: lang,
        Cate_Id: categoryId,
        limit: 6,
        start: 1,
      }),
    }
  );
  const products = await productsRes.json();
  console.log(products);
  return products;
}
