import Link from "next/Link";

const SignUp = (props) => {
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
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-light"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
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
