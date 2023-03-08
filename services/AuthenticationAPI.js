import { getCookie } from "../helper/Cookies/CookiesHandlers";

export class AuthenticationAPI {
  async Register(reqBody) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/Auth/Register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });

    const result = await res.json();
    return result;
  }

  async Login(reqBody) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/Auth/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: reqBody.email,
        password: reqBody.password,
        rememberMe: reqBody.rememberMe,
      }),
    });

    const result = await res.json();
    return result;
  }
}

export function getTokenDuration() {
  if (typeof window !== "undefined") {
    const storedExpirationDate = getCookie("next-auth-token-expiry");
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();

    const duration = expirationDate.getTime() - now.getTime();
    const ramainDays = duration / 86400000;

    // console.log(ramainDays, "days remaining");
    return ramainDays;
  }
}
