import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./routes/Home";
import "./tailwind.css";

function Root() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    );
}
createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Root/>
    </BrowserRouter>
);