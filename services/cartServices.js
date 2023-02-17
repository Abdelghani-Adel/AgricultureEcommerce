import { getAuthHeaders } from "../helper/auth";

export async function fetchCurrency() {
  const currencyRequest = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/api/ECommerceSetting/getCurrBase`
  );
  const currency = await currencyRequest.json();
  return currency;
}

export async function fetchCartDetailsFromDB(lang) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/Booking/getCartItem`, {
    method: "POST",
    headers: await getAuthHeaders(),
    body: JSON.stringify({ lang: lang }),
  });

  const cartData = await res.json();
  return cartData;
}

export async function editCartItem(editedCartItem, Cart_Id, lang, Cust_Id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/Booking/addToCart`, {
    method: "POST",
    headers: await getAuthHeaders(),
    body: JSON.stringify({
      success: true,
      Message: "string",
      totalPrice: 0,
      Cart_Ref: "string",
      Cust_Id: Cust_Id,
      Cart_Id: Cart_Id,
      lang: lang,
      items: [editedCartItem],
    }),
  });

  const cartDetails = await res.json();
  return cartDetails;
}

export async function deleteCartItem(item, Cart_Id, lang) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/Booking/deleteFromCart`, {
    method: "POST",
    headers: await getAuthHeaders(),
    body: JSON.stringify({ ...item, Cart_Id: Cart_Id, lang: lang }),
  });
  const cartDetails = await res.json();
  console.log(cartDetails);
  return cartDetails;
}

export async function UPSSalesOrder(reqBody) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/api/Booking/UPSSalesOrder`, {
    method: "POST",
    headers: await getAuthHeaders(),
    body: JSON.stringify(reqBody),
  });

  const data = await res.json();
  return data;
}
