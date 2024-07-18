'use client'
import React,{useState, useEffect} from "react"
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import {app} from '@/app/config';

import { useRouter } from "next/navigation";

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('')
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [otpSent, setOtpSent] = useState(false);

    const auth = getAuth(app);
    const router = useRouter();

    useEffect (() => {
        window.RecaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
            'size' : 'normal',
            'callback' : (response) => {

            }, 
            'expired-callback' : () => {

            }
        })
    }, [auth])

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    }

    

    const handleSendOtp = async () => {
        // e.preventDefault();
        try{
            // const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g,     '')}`
            // const rawPhoneNumber = '9423515112'; // Example raw phone number
            const countryCode = '+91'; // Example country code for India
            const formattedPhoneNumber = `${countryCode}${phoneNumber}`;
            const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNumber, window.RecaptchaVerifier)
            setConfirmationResult(confirmation);
            setOtpSent(true)
            setPhoneNumber('')
            alert('OTP has been sent')
        }
        catch(error){
            console.log(error)
        }
    }

    const handleOtpSubmit = async () => {
        try{
            await confirmationResult.confirm(otp);
            setOtp('');
            router.push('/')
        }
        catch(error){
            console.log(error)
        }
    }


    return (
        <div>
            {!otpSent ? (
                <div id = "recaptcha-container"></div>
            ): null}

            <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter Your Phone Number With Country Code"
                className="border border-gray-500 p-2 rounded-md"
            />
            <input
                type="text"
                value={otp}
                onChange={handleOtpChange}
                placeholder="Enter Your Otp"
                className="border border-gray-500 p-2 rounded-md"
            />
            
            <button
                onClick={otpSent ? handleOtpSubmit : handleSendOtp}
                className={`bg-${otpSent ? 'green' : 'blue'}-500 text-white p-2 rounded-md m-2`}
                style={{backgroundColor : otpSent ? 'green' : 'blue'}}
            >
                {otpSent ? 'Submit OTP' : 'Send OTP'}
            </button>

        </div>
    )

}