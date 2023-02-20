import { getSession } from "next-auth/react";
import { getAuthHeaders } from "../helper/auth";

export async function fetchBestProducts(lang) {
  const session = await getSession();
  const Cust_Id = session ? session.user.custId : 0;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/getItemMainByBestProducts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lang: lang, Cate_Id: 0, Cust_Id: Cust_Id, limit: 10, start: 0 }),
    }
  );

  const data = await res.json();
  const products = data.data;
  return products;
}

export async function fetchBooksItems(lang) {
  const session = await getSession();
  const Cust_Id = session ? session.user.custId : 0;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/getBooksItems`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lang: lang,
        Cate_Id: 0,
        Cust_Id: Cust_Id,
        limit: 10,
        start: 0,
      }),
    }
  );

  const books = await res.json();
  return books.data;
}

export async function fetchItemDetails(Item_Id, lang) {
  const productDetails = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/getItemsDetails`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Item_Id: Item_Id,
        lang: lang,
      }),
    }
  );

  const details = await productDetails.json();
  return details[0];
}

export async function UPSproductLikes(requestBody) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/api/Booking/UPSProducts_Reviews_Like`,
    {
      method: "POST",
      headers: await getAuthHeaders(),
      body: JSON.stringify(requestBody),
    }
  );

  const result = await res.json();
  console.log(result);
}
