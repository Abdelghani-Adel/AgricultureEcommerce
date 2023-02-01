export class AuthenticationAPI {
  async Register(reqBody) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/Register`, {
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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/Login`, {
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
