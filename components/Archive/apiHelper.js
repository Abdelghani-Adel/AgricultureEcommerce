// import Router from "next/router";
// import getAuthToken from "./auth";

// export const AuthHeaders = () => {
//   let token = getAuthToken();
//   return {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Headers": "Origin",
//     Authorization: token,
//   };
// };

// export const handleError = (error, dispatch) => {
//   if (error.response) {
//     if (error.response.status == 401) {
//       Router.push("/login");
//     }
//   }
// };
