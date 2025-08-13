import { Routes, Route } from "react-router-dom";
import Authentication from "./path/Authentication";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./path/Dashboard";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Authentication/>}/>
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <Dashboard/>
                    </PrivateRoute>
                }
            />
        </Routes>
    );
}