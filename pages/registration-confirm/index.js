import Link from "next/link";

const RegistrationConfirm = (props) => {
  return (
    <div className="section">
      <div className="container">
        <h4 className="text-center">Thank you for registration.</h4>
        <p className="text-center">We will contact you soon.</p>
        <div className="text-center">
          <button className="btn btn-success" aria-label="Home">
            <Link href="/" className="text-white">
              HOME PAGE
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationConfirm;
