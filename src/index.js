import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Main from "./page/Main";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { ThemeProvider } from "./context/ThemeContext"; // ThemeProvider 추가

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Header />
        <Main />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
