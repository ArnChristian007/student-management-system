import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import AuthProvider from "./routes/AuthProvider";
import App from "./routes/App";
import "./tailwind.css";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <AuthProvider>
            <App/>
        </AuthProvider>
    </BrowserRouter>
);