import { signIn } from "next-auth/react";
import Link from "next/Link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../redux/slices/loaderSlice";
import { AuthenticationAPI } from "../../services/AuthenticationAPI";

const authApi = new AuthenticationAPI();

const SignUp = (props) => {
  const router = useRouter();
  const [reqBody, setReqBody] = useState();
  const [errors, setErrors] = useState();
  const dispatch = useDispatch();

  const inputChangeHandler = useCallback((e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setReqBody((prev) => ({ ...prev, [fieldName]: fieldValue }));
    setErrors();
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(loaderActions.showLoader());

    const dblookup = await authApi.Register(reqBody);
    if (!dblookup.token) {
      setErrors(dblookup);
    }

    if (dblookup.token) {
      const res = await signIn("credentials", {
        email: dblookup.user.email,
        password: dblookup.user.password,
        callbackUrl: "/",
      });
    }

    dispatch(loaderActions.hideLoader());
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
              <h2>Sign up!</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="auth-form">
            <h2>Sign Up</h2>
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
