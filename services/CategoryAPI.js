export class CategoryApi {
  async GetCategoriesMenu() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/GetCategoriesMenu`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lang: "ar",
          FAClassification_ParentId: 81,
        }),
      }
    );
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
          lang: "ar",
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
