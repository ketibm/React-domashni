import React from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Home from "./router/Home";
import SignUp from "./router/SignUp";
import Login from "./router/Login";
import AuthProvider from "./hooks/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes path="*">
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
