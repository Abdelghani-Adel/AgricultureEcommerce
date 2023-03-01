// import Link from "next/Link";
// import { useState } from "react";

// const Quickview = () => {
//   const [clicks, setClicks] = useState(1);

//   const IncrementItem = () => setClicks(clicks + 1);
//   const DecreaseIem = () => (clicks < 1 ? setClicks(0) : setClicks(clicks - 1));
//   const ChangeHandler = (e) => setClicks(e.target.value);

//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-5">
//           <img
//             src={process.env.PUBLIC_URL + "/assets/img/products/9.png"}
//             alt="product"
//           />
//         </div>
//         <div className="col-md-7">
//           <div className="andro_product-single-content">
//             <div className="andro_rating-wrapper">
//               <div className="andro_rating">
//                 <i className="fa fa-star active" />
//                 <i className="fa fa-star active" />
//                 <i className="fa fa-star active" />
//                 <i className="fa fa-star active" />
//                 <i className="fa fa-star" />
//               </div>
//               <span>4 Stars</span>
//             </div>
//             <h3> Tomatoes </h3>
//             <div className="andro_product-price">
//               <span>8$</span>
//               <span>14$</span>
//             </div>
//             <p className="andro_product-excerpt">
//               Cras ultricies ligula sed magna dictum porta. Curabitur non nulla
//               sit amet nisl tempus convallis quis ac lectus.
//             </p>
//             <form className="andro_product-atc-form">
//               <div className="andro_product-variation-wrapper">
//                 <div className="form-group">
//                   <select className="form-control" name="amount">
//                     <option value>Select Amount</option>
//                     <option value={1}>1 Kilo</option>
//                     <option value={2}>2 Kilos</option>
//                     <option value={3}>3 Kilos</option>
//                     <option value={4}>4 Kilos</option>
//                   </select>
//                 </div>
//                 <div className="form-group">
//                   <select className="form-control" name="breed">
//                     <option value>Select a Breed</option>
//                     <option value="italian">Italian</option>
//                     <option value="egyptian">Egyptian</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="qty-outter">
//                 <Link to="/product-single/1" className="andro_btn-custom">
//                   Buy Now
//                 </Link>
//                 <div className="qty">
//                   <span
//                     className="qty-subtract"
//                     onClick={this.DecreaseItem}
//                     data-type="minus"
//                     data-field
//                   >
//                     <i className="fa fa-minus" />
//                   </span>
//                   <input
//                     type="text"
//                     name="clicks"
//                     value={this.state.clicks}
//                     onChange={this.handleChange.bind(this)}
//                   />
//                   <span
//                     className="qty-add"
//                     onClick={this.IncrementItem}
//                     data-type="plus"
//                     data-field
//                   >
//                     <i className="fa fa-plus" />
//                   </span>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quickview;
