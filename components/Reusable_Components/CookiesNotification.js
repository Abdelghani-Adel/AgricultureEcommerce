import { Fragment } from "react";
import { useSelector } from "react-redux";

const CookiesNotification = () => {
  const isCookiesEnabled = useSelector((state) => state.cookiesAvail);
  return (
    <Fragment>
      {/* {isCookiesEnabled == false && (
        <div className="cookie-notification">
          <p>
            Cookies on your browser are disabled, a lot of our features will not work as expected.
          </p>

          <h5>Please, enable cookies in your browser</h5>
        </div>
      )} */}
    </Fragment>
  );
};

export default CookiesNotification;
