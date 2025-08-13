import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/module";
export default function Dashboard() {
    const navigate = useNavigate();
    const handlerLogout = async () => {
        await signOut(auth);
        navigate("/");
    }
    return (
        <div className="h-screen items-center justify-center flex">
            <button className="bg-blue-400 px-3 py-2 text-white rounded-lg" onClick={() => handlerLogout()}>
                Logout
            </button>
        </div>
    );
}