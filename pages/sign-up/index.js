import { signIn } from "next-auth/react";
import Link from "next/Link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../redux/slices/loaderSlice";
import { AuthenticationAPI } from "../../services/AuthenticationAPI";
import { withTranslation } from "react-multi-lang";

const authApi = new AuthenticationAPI();

const SignUp = (props) => {
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
    <div className="section bg-white">
      <div className="container">
        <div className="row">
          <div
            className="col d-none d-md-flex auth-description bg-cover bg-center dark-overlay dark-overlay-2"
            style={{ backgroundImage: "url(../img/login_bg.jpg)" }}
          >
            <div className="auth-description-inner">
              <i className="flaticon-diet" />
              <h2>{props.t("Auth.Signup")}</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="col auth-form">
            <h2>{props.t("Auth.Signup")}</h2>
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
                  placeholder={props.t("Auth.Username")}
                  name="username"
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-light"
                  placeholder={props.t("Auth.Email")}
                  name="email"
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder={props.t("Auth.Password")}
                  name="password"
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder={props.t("Auth.PasswordConfirm")}
                  name="confirmPassword"
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder={props.t("Auth.PhoneNumber")}
                  name="phoneNumber"
                  onChange={inputChangeHandler}
                />
              </div>
              <button type="submit" className="default_btn m-auto">
                {props.t("Auth.Signup")}
              </button>

              <div className="auth-seperator">
                <span>OR</span>
              </div>

              <p>
                {props.t("Auth.AlreadyHave")} <Link href="/login">{props.t("Auth.Login")}</Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(SignUp);
