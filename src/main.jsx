import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ResponsiveContainer from './components/ResponsiveContainer';


createRoot(document.getElementById("root")).render(
  <StrictMode>
   <ResponsiveContainer>
   <BrowserRouter>
      <App />
    </BrowserRouter>
</ResponsiveContainer>
  </StrictMode>,
);
