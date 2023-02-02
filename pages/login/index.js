import Link from "next/Link";
import { useCallback } from "react";
import { useState } from "react";
import { AuthenticationAPI } from "../../services/AuthenticationAPI";

const authApi = new AuthenticationAPI();

const Login = (props) => {
  const [reqBody, setReqBody] = useState({ rememberMe: false });
  const [data, setData] = useState();

  const inputChangeHandler = useCallback((e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setReqBody((prev) => ({ ...prev, [fieldName]: fieldValue }));
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await authApi.Login(reqBody);

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
              <h2>Welcome Back!</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="auth-form">
            <h2>Log in</h2>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
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
              <div class="d-flex align-content-center">
                <input class="form-check-input" type="checkbox" name="rememberMe" />
                <label class="form-check-label ms-1">Remember Me</label>
              </div>
              <Link href="#">Forgot Password?</Link>
              <button type="submit" className="andro_btn-custom primary">
                Login
              </button>

              <div className="auth-seperator">
                <span>OR</span>
              </div>

              <p>
                Don't have an account? <Link href="/sign-up">Create One</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
