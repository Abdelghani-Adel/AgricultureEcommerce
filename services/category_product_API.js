export default class ProductsApi {
  async fetchProductSlugs() {
    const response = await fetch("");
    const data = await response.json();
    return data;
  }

  async fetchProductList() {
    const response = await fetch("");
    const data = await response.json();
    return data;
  }
}

export class CategoryApi {
  async fetchCategorySlugs() {
    const res = await fetch("http://192.168.10.251:800/api/ECommerceSetting/GetCategoriesMenu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lang: "en",
        FAClassification_ParentId: 81,
      }),
    });
    const data = await res.json();
    return data;
  }

  async fetchCategoryProducts(lang, cate_id) {
    const response = await fetch(
      "http://192.168.10.251:800/api/ECommerceSetting/getItemMainByCategory",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lang: lang,
          Cate_Id: cate_id,
          limit: 6,
          start: 1,
        }),
      }
    );

    const data = await response.json();
    return data;
  }
}
