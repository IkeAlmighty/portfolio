import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import RouterConfig from "./RouterConfig.jsx";

import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="m-2 p-2 max-w-[800px] mx-auto pb-[50px]">
      <div className="mb-10">
        <Navigation />
      </div>
      <RouterConfig />
      <Footer />
    </div>
  </BrowserRouter>
);
