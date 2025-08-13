import { CiMail, CiLock, CiUser, CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { useState, useEffect, useRef } from "react";
import { auth } from "../../firebase/module";
import { animate } from "animejs";
import Input from "../components/auth/Input";
export default function Home() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [register, setRegister] = useState(false);
    const [check, setCheck] = useState(false);
    const [recover, setRecover] = useState(false);
    const [msgerr, setMsgErr] = useState(null);
    const slide = useRef(null);
    const handlerAuthentication = async (e) => {
        e.preventDefault();
        try {
            if (recover) {
                await sendPasswordResetEmail(auth, email);
                setMsgErr(<p className="text-green-500">Password reset email sent! Check your inbox.</p>);
            } else {
                if (register) {
                    if (!check) {
                        setMsgErr(<p className="text-red-500">You must accept the terms & conditions.</p>);
                        return;
                    }
                    else if (username === "") {
                        setMsgErr(<p className="text-red-500">Please type your username.</p>);
                        return;
                    }
                    await createUserWithEmailAndPassword(auth, email, password);
                    setMsgErr(<p className="text-green-500">Register Successfully! Please wait until its close.</p>);
                    setTimeout(() => {
                        setRegister(!register);
                        setMsgErr(null);
                    }, 1000);
                } else {
                    await signInWithEmailAndPassword(auth, email, password);
                }
            }
        } catch (error) {
            setMsgErr(<p className="text-red-500">{error.message}</p>);
        }
    }
    const clear = () => {
        setMsgErr(null);
        setUsername('');
        setEmail('');
        setPassword('');
    }
    useEffect(() => {
        document.title = "Authentication";
        if (!slide.current) return;
        animate(slide.current, {
            opacity: [0, 1],
            translateX: [-100, 0],
            duration: 1000,
            ease: 'outCubic'
        })
    }, [register, recover]);
    return (
        <div className="min-h-screen flex items-center justify-between flex-col text-sm sm:text-base md:text-md lg:text-lg text-gray-700">
            <div className="flex flex-1 items-center justify-center w-full px-3 overflow-hidden">
                <form ref={slide} className="shadow p-5 border border-gray-300 rounded-lg w-100" onSubmit={handlerAuthentication}>
                    {recover ? (
                        <>  
                            <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                                Forgot Password
                            </h1>
                            <p className="text-gray-500 mt-1">
                                Please input your email to verify
                            </p>
                            <Input
                                icon={<CiMail className="text-xl md:text-2xl lg:text-3xl"/>}
                                placeholder="Email"
                                type="email"
                                value={email}
                                func={setEmail}
                                isRequired
                            />
                            {msgerr}
                            <button type="submit" className="w-full bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white p-2 rounded-md mt-3">
                                Submit
                            </button>
                            <button
                                className="w-full bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-white p-2 rounded-md mt-3"
                                type="button"
                                onClick={() => {
                                    setRecover(!recover);
                                    clear();
                                }}>
                                Back
                            </button>
                        </>
                    ) : (
                        <>
                            <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                                {register ? 'Sign Up' : 'Sign In'}
                            </h1>
                            <p className="text-gray-500 mt-1">
                                {register ? 'Fill up all requirements.' : 'Welcome back! Please Sign In your account.'}
                            </p>
                            {register && (
                                <Input
                                    icon={<CiUser className="text-xl md:text-2xl lg:text-3xl"/>}
                                    placeholder="Username"
                                    type="text"
                                    value={username}
                                    func={setUsername}
                                />
                            )}
                            <Input
                                icon={<CiMail className="text-xl md:text-2xl lg:text-3xl"/>}
                                placeholder="Email"
                                type="email"
                                value={email}
                                func={setEmail}
                                isRequired
                            />
                            <Input
                                icon={<CiLock className="text-xl md:text-2xl lg:text-3xl"/>}
                                placeholder="Password"
                                type="password"
                                value={password}
                                func={setPassword}
                            />
                            {!register ? (
                                <button type="button" className="mt-3 text-gray-500 hover:underline focus:underline decoration-0" onClick={() => setRecover(!recover)}>
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
                            {msgerr}
                            <button type="submit" className="w-full bg-green-400 hover:bg-green-500 focus:bg-green-500 text-white p-2 rounded-md mt-3">
                                {register ? 'Sign Up' : 'Sign In'}
                            </button>
                            {!register ? (
                                <div className="flex items-center mt-3 justify-center gap-2">
                                    <p className="text-gray-500">New user?</p>
                                    <button
                                        className="text-blue-400 hover:text-blue-500 focus:text-blue-500"
                                        type="button"
                                        onClick={() => {
                                            setRegister(!register);
                                            clear();
                                        }}>
                                        Create New Account
                                    </button>
                                </div>
                            ) : (
                                <button
                                    className="w-full bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-white p-2 rounded-md mt-3"
                                    type="button"
                                    onClick={() => {
                                        setRegister(!register);
                                        clear();
                                    }}>
                                    Back
                                </button>
                            )}
                        </>
                    )}
                </form>
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