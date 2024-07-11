import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { greenToast, redToast, userApi } from '../api/Api';
import { useUserContext } from '../context/Context';
import UseHelmet from '../utils/UseHelmet';


const TwoFector = () => {


    const inputRefs = useRef([]);
    const [code, setCode] = useState('');
    const [saveTFA, setSaveTFA] = useState(false);


    const location = useLocation()
    const query = new URLSearchParams(location.search);
    const email = query.get('email')
    const { setUser } = useUserContext()
    const navigate = useNavigate()
    const tokenTwoFA = localStorage.getItem('tokenTwoFA');
    const [resendTime, setResendTime] = useState(60);
    const [optLoading, setOptLoading] = useState(false);
    const [allowResend, setAllowResend] = useState(true);


    const HandleCheckOTP = async (e) => {
        e.preventDefault();
        if (!email) return alert('provide email pls.')
        if (!tokenTwoFA) return alert('send otp again.')
        if (code.length !== 6) return alert('provide token pls.')
        const { data, status } = await userApi.post(`/verifyOTP`, { email, otp: code.join(''), tokenTwoFA, twoFectorAuthSave: saveTFA })
        if (status === 201) {
            greenToast('login successful')
            localStorage.removeItem('tokenTwoFA')
            localStorage.setItem('token', data?.token)
            setUser(data.user)
            navigate('/')
        } else {
            redToast(data.err)
        }
    }

    const OTPsent = async () => {
        if (!email) return alert('provide email pls.')
        setAllowResend(false)
        setOptLoading(true)
        const { data, status } = await userApi.get(`/otpSent/${email}`,)
        if (status === 200) {

            countdown()
            localStorage.setItem('tokenTwoFA', data.tokenTwoFA)
            localStorage.setItem('sent', 'ok')
        }
        setOptLoading(false)
    }


    useEffect(() => {
        if (!localStorage.getItem('sent')) {
            OTPsent()
        }
    }, []);

    const handlePaste = (e) => {
        const paste = e.clipboardData.getData('text');

        if (paste.length === 6 && !isNaN(paste)) {
            setCode(paste.split(''))
            paste.split('').forEach((char, index) => {
                inputRefs.current[index].value = char;
            });
            inputRefs.current[5].focus();
            e.preventDefault();
        }
    };

    const handleChange = (e, index) => {
        const value = e.target.value.slice(0, 1);
        if (!isNaN(value) && value !== '') {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);


            if (e.target.value !== '' && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const countdown = () => {
        let sec = resendTime;

        const intervalId = setInterval(() => {
            sec--
            setResendTime(prev => prev - 1)
            if (sec === 1) {
                setAllowResend(true)
                setResendTime(60)
                clearInterval(intervalId);
            }
        }, 1000);
    }


    return (
        <div className=' h-screen w-full flex justify-center items-center'>
            <UseHelmet param={'two-fector'} title={'Two-Factor Authentication (2FA) for Pure Checker | Secure Login'} description={'Enable two-factor authentication (2FA) on Pure Checker for an extra layer of security. Protect your account with an additional verification step.'} />
            <div className="flex flex-col items-center p-10 py-20 bg-white rounded-lg shadow-md max-w-md border-2 border-blue-200 mx-auto">
                <img src="/3.jpg" alt="Logo" className=" h-12 mb-6" />
                <div className="text-lg font-semibold mb-3">Enter Authentication App Code</div>
                <p className="text-sm text-gray-600 mb-4 text-center">
                    Your six-digit code can be found in your  <span></span>.
                </p>
                <div className="flex space-x-2 mb-6">
                    {[...Array(6)].map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            onChange={(e) => handleChange(e, index)}
                            onPaste={handlePaste}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            ref={(el) => (inputRefs.current[index] = el)}
                            className="w-14 h-14 border border-gray-300 text-center text-xl rounded focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    ))}
                </div>
                <div className=' w-full flex gap-x-2 items-center justify-end'>
                    {
                        resendTime < 60 &&
                        <p className=' text-xl opacity-60 font-[600]'>0:{resendTime}</p>
                    }
                    <button onClick={OTPsent} disabled={allowResend ? false : true} className=' font-medium disabled:opacity-50 flex items-center gap-x-2'>resend again {optLoading && <PuffLoader size={25} />} </button>
                </div>
                <div className=' py-3 flex items-center gap-3 w-[100%] '>
                    <input id='check' value={saveTFA} onChange={() => setSaveTFA(!saveTFA)} type="checkbox" className='' />
                    <label htmlFor="check" className=' cursor-pointer'> save your account?</label>

                </div>
                <button
                    className="bg-primary text-white px-4 py-2 rounded mb-4 w-full disabled:opacity-50"
                    onClick={HandleCheckOTP}
                    disabled={code.length < 6 ? true : false}
                >
                    Confirm
                </button>
                <div className="flex justify-between w-full text-primary">
                    <Link to={'/login'} className=' hover:underline'>Back</Link>
                </div>
            </div>
        </div>
    );
};

export default TwoFector;
