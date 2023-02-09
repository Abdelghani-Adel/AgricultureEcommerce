import Link from "next/Link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { AuthenticationAPI } from "../../services/AuthenticationAPI";
import { signIn, useSession } from "next-auth/react";

const authApi = new AuthenticationAPI();

const Login = (props) => {
  const router = useRouter();
  const [reqBody, setReqBody] = useState({ rememberMe: false });
  const [errors, setErrors] = useState();

  const inputChangeHandler = useCallback((e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setReqBody((prev) => ({ ...prev, [fieldName]: fieldValue }));
    setErrors();
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    const dbLookup = await authApi.Login(reqBody);

    if (dbLookup.token) {
      const res = await signIn("credentials", {
        email: reqBody.email,
        password: reqBody.password,
        callbackUrl: "http://localhost:8080/",
      });
    } else {
      setErrors(dbLookup);
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div className="auth-wrapper">
          <div
            className="auth-description bg-cover bg-center dark-overlay dark-overlay-2"
            style={{ backgroundImage: "url(../img/login_bg.jpg)" }}
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
              {errors && (
                <ul>
                  {Object.values(errors).map((err) => (
                    <li key={err}>{err}</li>
                  ))}
                </ul>
              )}

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
              <div className="d-flex align-content-center">
                <input className="form-check-input" type="checkbox" name="rememberMe" />
                <label className="form-check-label ms-1">Remember Me</label>
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
