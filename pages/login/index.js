import Link from "next/Link";
import { useRouter } from "next/router";
import { Fragment, useCallback, useState } from "react";
import { AuthenticationAPI } from "../../services/AuthenticationAPI";
import { signIn, useSession } from "next-auth/react";
import Loader from "../../components/Reusable_Components/Loader";
import { useDispatch } from "react-redux";
import { loaderActions } from "../../redux/slices/loaderSlice";
import { withTranslation } from "react-multi-lang";

const authApi = new AuthenticationAPI();

const Login = (props) => {
  const [reqBody, setReqBody] = useState({ rememberMe: false });
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

    const dbLookup = await authApi.Login(reqBody);

    if (dbLookup.token) {
      const res = await signIn("credentials", {
        email: reqBody.email,
        password: reqBody.password,
        callbackUrl: "/",
      });
    } else {
      setErrors(dbLookup);
    }

    dispatch(loaderActions.hideLoader());
  };

  return (
    <Fragment>
      <div className="section bg-white">
        <div className="container">
          <div className="row">
            <div
              className="d-none d-md-flex auth-description bg-cover bg-center dark-overlay dark-overlay-2"
              style={{ backgroundImage: "url(../img/login_bg.jpg)" }}
            >
              <div className="auth-description-inner">
                <i className="flaticon-diet" />
                <h2>Welcome Back!</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="auth-form">
              <h2>{props.t("Auth.Login")}</h2>
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
                <div className="d-flex align-content-center">
                  <input className="form-check-input" type="checkbox" name="rememberMe" />
                  <label className="form-check-label ms-1">{props.t("Auth.Remember")}</label>
                </div>
                <Link href="#">{props.t("Auth.Forget")}</Link>
                <button type="submit" className="default_btn m-auto">
                  {props.t("Auth.Login")}
                </button>

                <div className="auth-seperator">
                  <span>OR</span>
                </div>

                <p>
                  {props.t("Auth.DontHave")} <Link href="/sign-up">{props.t("Auth.Create")}</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withTranslation(Login);
