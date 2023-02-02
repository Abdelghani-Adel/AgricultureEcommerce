import Link from "next/Link";
import { useCallback, useState } from "react";
import { AuthenticationAPI } from "../../services/AuthenticationAPI";

const authApi = new AuthenticationAPI();

const SignUp = (props) => {
  const [reqBody, setReqBody] = useState();
  const [data, setData] = useState();

  const inputChangeHandler = useCallback((e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setReqBody((prev) => ({ ...prev, [fieldName]: fieldValue }));
    setData();
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await authApi.Register(reqBody);
    if (!res.token) {
      setData(res);
    }

    if (res.token) {
      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 1);

      localStorage.setItem("Agri_Token", res.token);
      localStorage.setItem("Agri_Expiration", expiration);
    }
  };
  return (
    <div className="section">
      <div className="container">
        <div className="auth-wrapper">
          <div
            className="auth-description bg-cover bg-center dark-overlay dark-overlay-2"
            style={{ backgroundImage: "url(assets/img/auth.jpg)" }}
          >
            <div className="auth-description-inner">
              <i className="flaticon-diet" />
              <h2>Sign up!</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="auth-form">
            <h2>Sign Up</h2>
            <form onSubmit={submitHandler}>
              {data && (
                <ul>
                  {Object.values(data).map((err) => (
                    <li key={err}>{err}</li>
                  ))}
                </ul>
              )}

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-light"
                  placeholder="Email Address"
                  name="email"
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  onChange={inputChangeHandler}
                />
              </div>
              <button type="submit" className="andro_btn-custom primary">
                Sign Up
              </button>

              <div className="auth-seperator">
                <span>OR</span>
              </div>

              <p>
                Already have an account? <Link href="/login">Login</Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
