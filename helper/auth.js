export function getTokenDuration() {
  if (typeof window !== "undefined") {
    const storedExpirationDate = localStorage.getItem("Agri_Expiration");
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();

    const duration = expirationDate.getTime() - now.getTime();
    return duration;
  }
}

export function getAuthToken() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("Agri_Token");
    const authToken = `Bearer ${token}`;

    const tokenDuration = getTokenDuration();

    if (tokenDuration < 0) {
      return "EXPIRED";
    }
    return authToken;
  }
}
