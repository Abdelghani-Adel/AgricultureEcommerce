
import {FaStar} from "react-icons/fa";
function Rating(rating) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<FaStar key={i}/>);
    }
    if (rating && rating > 0) {
        for (let i = 0; i <= rating - 1; i++) {
            stars[i] = <FaStar className="active" key={i} />;
        }
    }
    return stars;
}
export { Rating };
