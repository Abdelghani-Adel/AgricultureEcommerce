import Link from "next/Link";

const PrivacyPolicy = (props) => {
  return (
    <p className="small">
      Your personal data will be used to process your order, support your
      experience throughout this website, and for other purposes described in
      our
      <Link className="btn-link" href="#">
        privacy policy.
      </Link>
    </p>
  );
};

export default PrivacyPolicy;
