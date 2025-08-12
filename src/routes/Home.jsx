import { CiMail, CiLock, CiUser, CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { useState, useEffect, useRef } from "react";
import { animate } from "animejs";
export default function Home() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false);
    const [check, setCheck] = useState(false);
    const slide = useRef(null);
    useEffect(() => {
        if (!slide.current) return;
        animate(slide.current, {
            opacity: [0, 1],
            translateX: [-100, 0],
            duration: 1000,
            ease: 'outCubic'
        })
    }, [register]);
    console.log(check);
    return (
        <div className="min-h-screen flex items-center justify-between flex-col text-sm sm:text-base md:text-md lg:text-lg text-gray-700">
            <div className="flex flex-1 items-center justify-center w-full px-3 overflow-hidden">
                <div ref={slide} className="shadow p-5 border border-gray-300 rounded-lg w-100">
                    <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                        {register ? 'Sign Up' : 'Sign In'}
                    </h1>
                    <p className="text-gray-500 mt-1">
                        {register ? 'Fill up all requirements.' : 'Welcome back! Please Sign In your account.'}
                    </p>
                    {register && (
                        <div className="flex items-center w-full border border-gray-400 p-2 rounded-md mt-3">
                            <CiUser className="text-xl md:text-2xl lg:text-3xl"/>
                            <input
                                className="w-full outline-none ml-2"
                                placeholder="Username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    )}
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
                    {!register ? (
                        <button className="mt-3 text-gray-500 hover:underline focus:underline decoration-0">
                            Forgot Password?
                        </button>
                    ) : (
                        <div className="flex items-center mt-3 gap-2 text-gray-500">
                            <input
                                className="h-4 w-4 lg:w-5 lg:h-5"
                                type="checkbox"
                                checked={check}
                                onChange={(e) => setCheck(e.target.checked)}
                            />
                            <label>Accept all terms & conditions.</label>
                        </div>
                    )}
                    <button className="w-full bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white p-2 rounded-md mt-3">
                        {register ? 'Sign Up' : 'Sign In'}
                    </button>
                    {!register ? (
                        <div className="flex items-center mt-3 justify-center gap-2" onClick={() => setRegister(!register)}>
                            <p className="text-gray-500">New user?</p>
                            <button className="text-blue-400 hover:text-blue-500 focus:bg-blue-500">Create New Account</button>
                        </div>
                    ) : (
                        <button className="w-full bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-white p-2 rounded-md mt-3" onClick={() => setRegister(!register)}>
                            Back
                        </button>
                    )}
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