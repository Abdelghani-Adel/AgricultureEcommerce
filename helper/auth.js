import { getSession } from "next-auth/react";

export async function getAuthToken() {
  if (typeof window !== "undefined") {
    const session = await getSession();
    const token = session != null && session.user != null ? session.token : "";

    const authToken = `Bearer ${token}`;
    return authToken;
  }
}

export async function getAuthHeaders() {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin",
    Authorization: await getAuthToken(),
  };
}
