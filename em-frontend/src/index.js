// // index.js
import React from "react";
import ReactDOM from "react-dom";
// import AppRouter from "./AppRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store/store";

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
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
