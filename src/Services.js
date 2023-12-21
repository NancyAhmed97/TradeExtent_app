import axios from "axios";
// import {  useDispatch } from "react-redux";
// import { logout } from "./Redux/Authorization";
export const baseUrl = "https://softbxt.com/tradeextent/api/v2/";
// const  token= localStorage.getItem("token") 
// export const PostResource = (path, data, onSuccess, onFail, reqAuth) => {
//   // const dispatch = useDispatch();
// const x= localStorage.getItem("token")
// console.log(x);
//   const requestData = {
//     method: "post",
//     url: baseUrl + path,
//     headers: {},
//     data,
//   };

//   if (reqAuth) {
//     requestData.headers = {
//       Authorization: "Bearer " + token,
//     };
//   }
//   axios(requestData)
//     .then((res) => {
//       onSuccess(res.data);
//     })
//     .catch((err) => {
//       onFail(err.response);
//       console.log(err.response);
//       if(err.response===201){
//         // dispatch(logout(0));

//       }
//     });
// };

// export const GetResource = (path, onSuccess, onFail,reqAuth) => {
//   const requestData = {
//     method: "get",
//     url: baseUrl + path,
//   };

//   if (reqAuth) {
//     requestData.headers = {
//       Authorization: "Bearer " + token,
//     };
//   }

//   axios(requestData)
//     .then((res) => {
//       onSuccess(res.data);
//     })
//     .catch((error) => {
//       onFail(error.response);
//     });
// };