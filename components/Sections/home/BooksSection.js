import AdvertiseThree from "./AdvertiseThree";
import AgricultureBooks from "./AgricultureBooks";

const BooksSection = ({ order }) => {
  return (
    <div className="col-12" style={{ order: `${order}` }}>
      <div className="section pt-0 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-xs-12">
              <AgricultureBooks />
            </div>

            <AdvertiseThree />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksSection;
