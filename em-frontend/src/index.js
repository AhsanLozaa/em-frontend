// // index.js
import React from "react";
import ReactDOM from "react-dom";
// import AppRouter from "./AppRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

// ReactDOM.render(
//   // <Provider store={store}>
//   <BrowserRouter>
//     {/* <ErrorBoundary> */}
//     <Routes>
//       <Route path="*" element={<App />} />
//     </Routes>
//     {/* </ErrorBoundary> */}
//     {/* <ToastContainer /> */}
//   </BrowserRouter>,
//   // </Provider>,
//   document.getElementById("root")
// );
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
