import Link from "next/Link";
import Error from "next/error";

const Page = (props) => {
  return (
    <div className="page_not_found">
      <div className="section">
        <div className="container">
          <div className="andro_404-container">
            <img src="assets/img/404.jpg" alt="" />
            <h1>Page Not Found</h1>
            <p>
              The page you are trying to access could not be found. Please try looking for something
              else
            </p>
            <Link href="/" className="btn btn-success mt-3">
              Go To Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
