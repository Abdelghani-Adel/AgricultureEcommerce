import AdvertiseThree from "./AdvertiseThree";
import AdvertiseOne from "./AdvertiseOne";
import AdvertiseTwo from "./AdvertiseTwo";
import AgricultureBooks from "./AgricultureBooks";

const BooksSection = ({ order, cards_in_slide, structure }) => {
  const hideBooksSlider = structure.departments.books_slider.hidden;
  const booksSliderOrder = structure.departments.books_slider.position;

  const advOrder = structure.departments.adv.position;
  const adv_id = structure.departments.adv.adv_id;
  const hideAdv = structure.departments.adv.hidden;

  const bookSliderStyle = hideAdv ? "col-xs-12" : "col-lg-8 col-md-7 col-xs-12";
  const advStyle = hideBooksSlider ? "col-xs-12 full_width" : "col-lg-4 col-md-5 col-xs-12";

  return (
    <div className="col-12 section" style={{ order: `${order}` }} id="books_section">
      <div className="container-fluid">
        <div className="row">
          {!hideBooksSlider && (
            <div className={bookSliderStyle} style={{ order: `${booksSliderOrder}` }}>
              <AgricultureBooks
                cards_in_slide={cards_in_slide}
                order={structure.departments.books_slider.position}
              />
            </div>
          )}

          {!hideAdv && (
            <div className={advStyle} style={{ order: `${advOrder}` }}>
              {adv_id == 1 && <AdvertiseOne />}
              {adv_id == 2 && <AdvertiseTwo />}
              {adv_id == 3 && <AdvertiseThree />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksSection;
