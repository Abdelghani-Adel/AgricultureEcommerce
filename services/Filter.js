export async function searchCategory(string, classificationID) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/getSearchMainCMB`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchKey: string,
        FAClassificationId: classificationID,
      }),
    }
  );

  const data = await res.json();
  return data;
}

export async function getSearchItem(id, flag) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/getItemSearchMain`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lang: "ar",
        Cate_Id: id,
        Cust_Id: 0,
        limit: 20,
        start: 0,
        itemCateFlg: flag,
      }),
    }
  );

  const data = await res.json();

  return data;
}
