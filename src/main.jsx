import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";

import AuthProvider from "./provider/AuthProvider.jsx";
import { ToastHeader } from "react-bootstrap";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   <ToastHeader position='top-center' reverseOrder={false} />
   </AuthProvider>
  </StrictMode>
);
