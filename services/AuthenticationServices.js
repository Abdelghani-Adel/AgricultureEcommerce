import { cookiesActions } from "../redux/slices/cookiesAvailSlice";
import store from "../redux/store";

export async function Register(reqBody) {
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

export async function AuthLogin(reqBody) {
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

export function AuthLogout() {
  localStorage.removeItem("Agri_Expiration");
  localStorage.removeItem("Agri_Token");
  localStorage.removeItem("Agri_User");
  window.location.replace("/");
}

export async function getAuthHeaders() {
  const token = localStorage.getItem("Agri_Token");
  const authToken = `Bearer ${token}`;
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin",
    Authorization: authToken,
  };
}

export function getTokenDuration() {
  if (typeof window !== "undefined") {
    const storedExpirationDate = localStorage.getItem("Agri_Expiration");
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();

    const duration = expirationDate.getTime() - now.getTime();
    return duration;
  }
}

export function getAgriUser() {
  if (typeof window !== "undefined") {
    const storedAgriUser = localStorage.getItem("Agri_User");

    if (storedAgriUser) {
      return storedAgriUser;
    } else {
      return null;
    }
  }
}

export function getAuthToken() {
  if (typeof window !== "undefined") {
    if (!navigator.cookieEnabled) {
      store.dispatch(cookiesActions.changeAvailability(false));
      return;
    }

    const token = localStorage.getItem("Agri_Token");
    const authToken = `Bearer ${token}`;

    if (!token) {
      return;
    }

    const tokenDuration = getTokenDuration();
    if (tokenDuration < 0) {
      return "EXPIRED";
    }

    return authToken;
  }
}
