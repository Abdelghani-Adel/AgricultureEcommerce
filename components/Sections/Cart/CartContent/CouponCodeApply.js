import { withTranslation } from "react-multi-lang";

const CouponCodeApply = (props) => {
  return (
    <div className="row mt-4">
      <div className="col-lg-5">
        <div className="form-group mb-0">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder={props.t("Cart.EnterCoupon")}
              aria-label="Coupon Code"
            />
            <div className="input-group-append">
              <button className="default_btn input_btn-right" type="button" aria-label="Apply">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation(CouponCodeApply);
