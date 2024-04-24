import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import {
//   BrowserRouter,
//   Route,
//   Router,
//   RouterProvider,
//   Routes,
//   createBrowserRouter,
// } from 'react-router-dom'
// import RootNavigator from './router/RootNavigator.jsx'
// import Home from './router/Home.jsx'
// import Login from './router/Login.jsx'
// import Signup from './router/Signup.jsx'
// import AuthProvider from './hooks/AuthProvider.jsx'

// the old way
//https://www.robinwieruch.de/react-router-private-routes/

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootNavigator />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//       {
//         path: "/sign-up",
//         element: <SignUp />,
//       },
//     ]
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
