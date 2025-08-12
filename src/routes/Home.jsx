import { CiMail, CiLock, CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { useState } from "react";
export default function Home() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false);
    return (
        <div className="min-h-screen flex items-center justify-between flex-col text-sm sm:text-base md:text-md lg:text-lg text-gray-700">
            <div className="flex flex-1 items-center justify-center w-full px-3">
                <div className="shadow p-5 border border-gray-300 rounded-lg w-100">
                    <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">Sign In</h1>
                    <p className="text-gray-500 mt-1">Welcome back! Please Sign In your account.</p>
                    <div className="flex items-center w-full border border-gray-400 p-2 rounded-md mt-3">
                        <CiMail className="text-xl md:text-2xl lg:text-3xl"/>
                        <input
                            className="w-full outline-none ml-2"
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center w-full border border-gray-400 p-2 rounded-md mt-3">
                        <CiLock className="text-xl md:text-2xl lg:text-3xl"/>
                        <input
                            className="w-full outline-none ml-2"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="mt-3 text-gray-500 hover:underline hover:decoration-0">
                        Forgot Password?
                    </button>
                    <button className="w-full bg-green-400 hover:bg-green-500 text-white p-2 rounded-md mt-3">
                        Sign In
                    </button>
                    <div className="flex items-center mt-3 justify-center gap-2">
                        <p className="text-gray-500">New user?</p>
                        <button className="text-blue-400 hover:text-blue-500">Create New Account</button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-700 p-5 w-full flex flex-col items-center justify-center text-white">
                <p>&copy; {new Date().getFullYear()} ArnDev. All rights reserved</p>
                <div className="mt-2 flex items-center gap-2">
                    <a href="https://www.facebook.com/arnchristian.rosales.9/">
                        <CiFacebook className="text-xl md:text-2xl lg:text-3xl hover:text-blue-400"/>
                    </a>
                    <a href="https://www.instagram.com/asah.irei/profilecard/?igsh=MXc3b2NpODZlMjR0cQ%3D%3D&fbclid=IwZXh0bgNhZW0CMTAAAR4_uRpHXsjoV3Q0s2A9BC_HXRFD5D7E35QQl8erg9ZU7jWIFyq6ARUtCuzLkw_aem_I3mkqKtXxLg2OTHOAWZLcQ">
                        <CiInstagram className="text-xl md:text-2xl lg:text-3xl hover:text-blue-400"/>
                    </a>
                    <a href="https://x.com/HikawaRaye">
                        <CiTwitter className="text-xl md:text-2xl lg:text-3xl hover:text-blue-400"/>
                    </a>
                </div>
            </div>
        </div>
    );
}