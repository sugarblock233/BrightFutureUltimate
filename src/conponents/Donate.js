import React, { useState, useRef, useEffect } from 'react';
import './css/style.css';
import logo from './images/BrightFutureLogo05.png';
import backgroundImage from "./images/background_image (3).png";
import paypal from "./images/paypal.png";
import congratulation from "./images/congratulation.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import visa from "./images/paymenticons/visa.svg";
import alipay from "./images/paymenticons/alipay.svg";
import mastercard from "./images/paymenticons/mastercard.svg";
import jcb from "./images/paymenticons/jcb.svg";
import unionpay from "./images/paymenticons/unionpay.svg";
import diners from "./images/paymenticons/diners.svg";
import discover from "./images/paymenticons/discover.svg";
import paypal2 from "./images/paymenticons/paypal.svg";
import hipercard from "./images/paymenticons/hipercard.svg";
import elo from "./images/paymenticons/elo.svg";

function Donate() {
    // for the first step and second step
    const [isFirstElementVisible, setIsFirstElementVisible] = useState(true);

    const handleClick = () => {
        setIsFirstElementVisible(!isFirstElementVisible);
    };

    // now I think out an idea that to use another state to control the third step - finish step
    const [isSecondElementVisible, setIsSecondElementVisible] = useState(true);
    const handleClick2 = () => {
        setIsSecondElementVisible(!isSecondElementVisible);
    }


    const [selectedPayment, setSelectedPayment] = useState('credit');

    const [inputValue, setInputValue] = useState('');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const [inputValue2, setInputValue2] = useState('');
    const [isDropdownVisible2, setIsDropdownVisible2] = useState(false);
    const dropdownRef2 = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const handleOptionClick = (value) => {
        setInputValue(value);
        setIsDropdownVisible(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownVisible(false);
            }
            if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
                setIsDropdownVisible2(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef, dropdownRef2]); // 注意这里添加了 dropdownRef2

    const handleOptionClick2 = (value) => {
        setInputValue2(value); // 修改为 setInputValue2
        setIsDropdownVisible2(false); // 修改为 setIsDropdownVisible2
    };


    // check the information user input
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [postal, setPostal] = useState('');
    const [street, setStreet] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
    };

    const isEmpty = (value) => {
        return value.trim() === '';
    };

    const handleSubmit = () => {
        if (isEmpty(firstName)) {
            alert('Firstname can not be empty!');
            return;
        }
        if (isEmpty(lastName)) {
            alert('Lastname can not be empty!');
            return;
        }
        if (isEmpty(inputValue)){
            alert('Amount can not be empty!');
            return;
        }
        if (isEmpty(inputValue2)){
            alert('Intent can not be empty!');
            return;
        }
        if (isEmpty(country)){
            alert('Country can not be empty!');
            return;
        }
        if (isEmpty(state)){
            alert('State can not be empty!');
            return;
        }
        if (isEmpty(postal)){
            alert('Postal can not be empty!');
            return;
        }
        if (isEmpty(street)){
            alert('Street can not be empty!');
            return;
        }
        if (!email) {
            alert('Email can not be empty！');
            return;
        }
        if (!isValidEmail(email)) {
            alert('Email form wrong！');
            return;
        }

        console.log('Next Page');
        handleClick();
    };

    const handleAnonymousSubmit = () => {
        if (isEmpty(inputValue)){
            alert('Amount can not be empty!');
            return;
        }
        if (isEmpty(inputValue2)){
            alert('Intent can not be empty!');
            return;
        }

        console.log('Next Page');
        handleClick();
    };


    return (
        <>
            <meta charSet="UTF-8" />
            <title>Donate</title>
            <link href="../dist/style.css" rel="stylesheet" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap"
                rel="stylesheet"
            />
            <div className="w-full fixed -z-10">
                <img src={backgroundImage} alt="Background"
                     className="w-full h-full blur-3xl bg-transparent bg-no-repeat bg-cover"/>
            </div>
            <br></br>
            <div className="flex flex-row">
                <div className="flex flex-col basis-1/5">
                    <p></p>
                </div>
                <div className="flex flex-col basis-3/5 flex-grow-0">
                    <div className="">
                        <div>
                            <h1 className="text-4xl font-bold">Donate</h1>
                            <p></p>
                        </div>
                        <hr />
                        <br />
                        {isFirstElementVisible ? (
                        <div>
                            <div className="flex flex-col w-full h-fit bg-gray-50 shadow-2xl border-2 border-gray-100 rounded-t-2xl">
                                <div>
                                    <div>
                                        <h1 className="text-2xl font-bold px-4 py-4 bg-blue-700 rounded-t-2xl text-white">
                                            Step 1: Donation Details
                                        </h1>
                                    </div>
                                    <div className="flex flex-row">
                                        <div className="px-4 py-4 flex flex-row w-full">
                                            <div className="basis-1/3 flex flex-row px-2">
                                                <p className="text-lg font-bold px-1">Firstname:</p>
                                                <input
                                                    type="text"
                                                    value={firstName}
                                                    onChange={handleInputChange(setFirstName)}
                                                    className="px-2 py-2 text-sm bg-white rounded-md shadow" />
                                            </div>
                                            <div className="basis-1/3 flex flex-row px-2">
                                                <p className="text-lg font-bold px-1">Lastname:</p>
                                                <input
                                                    type="text"
                                                    value={lastName}
                                                    onChange={handleInputChange(setLastName)}
                                                    className="px-2 py-2 text-sm bg-white rounded-md shadow" />
                                            </div>
                                            <div className="basis-1/3 flex flex-row px-4">
                                                <button onClick={handleAnonymousSubmit} className="bg-blue-400 rounded-md px-2 text-base text-white hover:bg-blue-500">
                                                    Donate anonymously?
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row px-4 py-4 w-full">
                                        <div className="basis-3/10 flex flex-row px-2 w-full">
                                            <p className="text-lg font-bold px-1">Email:</p>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={handleEmailChange}
                                                className="px-2 py-2 text-sm bg-white rounded-md shadow" />
                                        </div>
                                        <div className="basis-3/10 flex flex-row px-2">
                                            <p className="text-lg font-bold px-1">Amount:</p>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="px-2 py-2 text-sm bg-white rounded-md shadow"
                                                    value={inputValue}
                                                    onChange={(e) => setInputValue(e.target.value)}
                                                />
                                                <button
                                                    className="absolute inset-y-0 right-0 px-2 bg-gray-100 rounded-md"
                                                    onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                                                >
                                                    ﹀
                                                </button>
                                                {isDropdownVisible && (
                                                    <div
                                                        className="absolute z-10 bg-white shadow-2xl rounded-md w-full"
                                                        ref={dropdownRef}>
                                                        <div className="px-2 bg-gray-100 w-full mr-4 shadow-2xl cursor-pointer"
                                                             onClick={() => handleOptionClick('€10')}>€10
                                                        </div>
                                                        <div className="px-2 bg-gray-100 w-full mr-4 shadow-2xl cursor-pointer"
                                                             onClick={() => handleOptionClick('€20')}>€20
                                                        </div>
                                                        <div className="px-2 bg-gray-100 w-full mr-4 shadow-2xl cursor-pointer"
                                                             onClick={() => handleOptionClick('€50')}>€50
                                                        </div>
                                                        <div className="px-2 bg-gray-100 w-full mr-4 shadow-2xl cursor-pointer"
                                                             onClick={() => handleOptionClick('€100')}>€100
                                                        </div>
                                                        <div className="px-2 bg-gray-100 w-full mr-4 shadow-2xl cursor-pointer"
                                                             onClick={() => handleOptionClick('€500')}>€500
                                                        </div>
                                                        <div className="px-2 bg-gray-100 w-full mr-4 shadow-2xl cursor-pointer"
                                                             onClick={() => handleOptionClick('€1000')}>€1000
                                                        </div>
                                                        <div className="px-2 bg-gray-100 w-full mr-4 shadow-2xl cursor-pointer"
                                                             onClick={() => handleOptionClick('2000')}>€2000
                                                        </div>
                                                        <div className="px-2 bg-gray-100 w-full mr-4 shadow-2xl cursor-pointer"
                                                             onClick={() => handleOptionClick('€5000')}>€5000
                                                        </div>

                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="basis-2/5 flex flex-row px-2 w-full">
                                            <p className="text-lg font-bold px-1">Intent:</p>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    className="px-2 py-2 text-sm bg-white rounded-md shadow"
                                                    value={inputValue2}
                                                    onChange={(e) => setInputValue2(e.target.value)}
                                                />
                                                <button
                                                    className="absolute inset-y-0 right-0 px-2 bg-gray-100 rounded-md"
                                                    onClick={() => setIsDropdownVisible2(!isDropdownVisible2)}
                                                >
                                                    ﹀
                                                </button>
                                                {isDropdownVisible2 && (
                                                    <div
                                                        className="absolute z-10 bg-white shadow-2xl rounded-md w-full"
                                                        ref={dropdownRef2}>
                                                        <div
                                                            className="px-2 bg-gray-100 w-full mr-4 shadow-2xl cursor-pointer"
                                                            onClick={() => handleOptionClick2('Scholarship')}>Scholarship
                                                        </div>
                                                        <div
                                                            className="px-2 bg-gray-100 w-full mr-4 shadow-2xl cursor-pointer"
                                                            onClick={() => handleOptionClick2('Fund')}>Fund
                                                        </div>

                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row px-4 py-4 w-full">
                                    <div className="flex flex-col px-2 w-full">
                                            <p className="text-lg font-bold px-1">Address:</p>
                                            <div className="flex flex-row w-full px-4 pb-2">
                                                <div className="flex flex-row basis-1/3">
                                                    <p className="text-gray-700 text-base pr-2">Country:</p>
                                                    <input
                                                        type="text"
                                                        value={country}
                                                        onChange={handleInputChange(setCountry)}
                                                        className="px-2 py-2 text-sm bg-white rounded-md shadow"
                                                        placeholder="Germany"
                                                    />
                                                </div>
                                                <div className="flex flex-row basis-1/3">
                                                    <p className="text-gray-700 text-base pr-2">State:</p>
                                                    <input
                                                        type="text"
                                                        value={state}
                                                        onChange={handleInputChange(setState)}
                                                        className="px-2 py-2 text-sm bg-white rounded-md shadow"
                                                        placeholder="Schwarzwald"
                                                    />
                                                </div>
                                                <div className="flex flex-row basis-1/3">
                                                    <p className="text-gray-700 text-base pr-2">Postal:</p>
                                                    <input
                                                        type="text"
                                                        value={postal}
                                                        onChange={handleInputChange(setPostal)}
                                                        className="px-2 py-2 text-sm bg-white rounded-md shadow"
                                                        placeholder={123456}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-row w-full px-8">
                                                <div className="flex flex-row basis-1/2">
                                                    <p className="text-gray-700 text-base pr-2">Street:</p>
                                                    <input
                                                        type="text"
                                                        value={street}
                                                        onChange={handleInputChange(setStreet)}
                                                        className="px-2 py-2 text-sm bg-white rounded-md shadow"
                                                        placeholder="Sr.Hill"
                                                    />
                                                </div>
                                                <div className="flex flex-row basis-1/2">
                                                    <p className="text-gray-700 text-base pr-2">Addition:</p>
                                                    <input
                                                        className="px-2 py-2 text-sm bg-white rounded-md shadow"
                                                        placeholder=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row px-4 py-4 w-full">
                                        <div className="flex flex-row px-2 w-full">
                                            <p className="text-lg font-bold px-1">Reference:</p>
                                            <textarea
                                                className="w-full h-20 px-2 py-2 text-sm bg-white rounded-md shadow resize mr-10"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row px-4 py-4">
                                        <p className="text-gray-700 text-xs">Privacy Policy</p>
                                        <button>*</button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full h-fit bg-gray-50 shadow-2xl border-2 border-gray-100 rounded-b-xl">
                                <div className="flex flex-row -ml-0.5 -mb-0.5">
                                    <div className="basis-1/2">
                                        <button className="px-5 py-3 bg-blue-300 text-white font-bold rounded-bl-lg cursor-not-allowed">
                                            Back
                                        </button>
                                    </div>
                                    <div className="basis-1/2 flex flex-row-reverse">
                                        <button onClick={handleSubmit} className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-br-lg">
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                            : isSecondElementVisible ? (
                                <div
                                    className="flex flex-col w-full h-fit bg-gray-50 shadow-2xl border-2 border-gray-100 rounded-t-2xl">
                                    <div className="flex flex-col w-full">
                                        <div className="w-full bg-blue-600 rounded-t-2xl">
                                            <h1 className="text-2xl font-bold px-4 py-4 text-white">
                                                Step 2: Complete Payment
                                            </h1>
                                        </div>
                                        <div className="flex flex-row w-full text-center">
                                            <div className="basis-1/2 py-2">
                                                <p
                                                    className="text-xl cursor-pointer shadow-2xl py-2 bg-gray-100"
                                                    onClick={() => setSelectedPayment('credit')}
                                                >
                                                    Credit Card
                                                </p>
                                                {selectedPayment === 'credit' &&
                                                    (<span className="block h-1 bg-sky-500"></span>)}
                                            </div>
                                            <div className="basis-1/2 py-2">
                                                <p
                                                    className="text-xl cursor-pointer py-2 bg-gray-100"
                                                    onClick={() => setSelectedPayment('paypal')}
                                                >
                                                    Paypal
                                                </p>
                                                {selectedPayment === 'paypal' &&
                                                    <span className="block h-1 bg-sky-500"></span>}
                                            </div>
                                        </div>
                                    </div>
                                    {selectedPayment === 'credit' && (
                                        <div className="flex flex-row">
                                            <div className="basis-1/2 w-full flex flex-col">
                                                <div className="px-8 py-4 flex flex-row w-full">
                                                    <div className="basis-1/2 flex flex-col px-2">
                                                        <p className="text-lg px-1 text-gray-700 pb-1">FIRSTNAME:</p>
                                                        <input
                                                            className="px-2 py-2 text-sm bg-white rounded-md shadow-2xl"/>
                                                    </div>
                                                    <div className="basis-1/2 flex flex-col px-2">
                                                        <p className="text-lg px-1 text-gray-700 pb-1">LASTNAME:</p>
                                                        <input
                                                            className="px-2 py-2 text-sm bg-white rounded-md shadow-2xl"/>
                                                    </div>
                                                </div>
                                                <div className="px-8 py-4 flex flex-row w-full">
                                                    <div className="flex flex-col px-2 w-full">
                                                        <p className="text-lg px-1 text-gray-700">CARD NUMBER:</p>
                                                        <input
                                                            className="w-full px-2 py-2 text-sm bg-white rounded-md shadow-2xl"/>
                                                    </div>
                                                </div>
                                                <div className="px-8 py-4 flex flex-row w-full pb-4">
                                                    <div className="basis-3/4 flex flex-col px-2 w-full">
                                                        <p className="text-lg px-1 text-gray-700 pb-1">
                                                            EXPIRATION DATE:
                                                        </p>
                                                        <div className="flex flex-row">
                                                            <select
                                                                className="w-full px-2 py-2 text-sm bg-white rounded-md shadow-2xl mx-1">
                                                                <option value={1}>January</option>
                                                                <option value={2}>February</option>
                                                                <option value={3}>March</option>
                                                                <option value={4}>April</option>
                                                                <option value={5}>May</option>
                                                                <option value={6}>June</option>
                                                                <option value={7}>July</option>
                                                                <option value={8}>August</option>
                                                                <option value={9}>September</option>
                                                                <option value={10}>October</option>
                                                                <option value={11}>November</option>
                                                                <option value={12}>December</option>
                                                            </select>
                                                            <select
                                                                className="w-full px-2 py-2 text-sm bg-white rounded-md shadow-2xl mx-1">
                                                                <option value={1}>2024</option>
                                                                <option value={2}>2025</option>
                                                                <option value={3}>2026</option>
                                                                <option value={4}>2027</option>
                                                                <option value={5}>2028</option>
                                                                <option value={6}>2029</option>
                                                                <option value={7}>2030</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="basis-1/4">
                                                        <p className="text-lg px-1 text-gray-700 pb-1">CVV:</p>
                                                        <input
                                                            className="w-full px-2 py-2 text-sm bg-white rounded-md shadow-2xl"/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="basis-1/2 w-full flex flex-col">
                                                <div className="text-xl flex flex-row">
                                                    <div className="flex flex-row basis-1/2 mx-2 my-1">
                                                        <FontAwesomeIcon className="px-2 mt-0.5" icon={faCartShopping}/>
                                                        <p>
                                                            {inputValue}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-row basis-1/2 mx-2 my-1">
                                                        <FontAwesomeIcon className="px-2 mt-0.5" icon={faCheck}/>
                                                        <p>
                                                            {inputValue2}
                                                        </p>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="px-2 py-2">
                                                    <p className="text-lg text-gray-700">
                                                        *NOTE: We also support the following payment methods:
                                                    </p>
                                                </div>
                                                <div className="flex flex-col">
                                                    <div className="flex flex-row">
                                                        <div className="basis-1/10">

                                                        </div>
                                                        <div className="flex flex-col basis-4/5">
                                                            <div className="flex flex-row">
                                                                <div className="basis-1/3 px-2 py-1">
                                                                    <img className="px-4 py-2" src={visa}
                                                                         alt={visa}></img>
                                                                </div>
                                                                <div className="basis-1/3">
                                                                    <img className="px-4 py-2" src={alipay}
                                                                         alt={alipay}></img>
                                                                </div>
                                                                <div className="basis-1/3">
                                                                    <img className="px-4 py-2" src={unionpay}
                                                                         alt={unionpay}></img>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-row">
                                                                <div className="basis-1/3">
                                                                    <img className="px-4 py-2" src={mastercard}
                                                                         alt={mastercard}></img>
                                                                </div>
                                                                <div className="basis-1/3">
                                                                    <img className="px-4 py-2" src={jcb}
                                                                         alt={jcb}></img>
                                                                </div>
                                                                <div className="basis-1/3">
                                                                    <img className="px-4 py-2" src={paypal2}
                                                                         alt={paypal}></img>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-row">
                                                                <div className="basis-1/3">
                                                                    <img className="px-4 py-2" src={diners}
                                                                         alt={diners}></img>
                                                                </div>
                                                                <div className="basis-1/3">
                                                                    <img className="px-4 py-2" src={discover}
                                                                         alt={discover}></img>
                                                                </div>
                                                                <div className="basis-1/3">
                                                                    <img className="px-4 py-2" src={hipercard}
                                                                         alt={hipercard}></img>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="basis-1/10">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {selectedPayment === 'paypal' && (
                                        <div className="flex flex-col">
                                            <div className="flex flex-row">
                                                <div className="basis-1/2 flex flex-col">
                                                    <div className="flex flex-row w-full px-2 items-center py-4">
                                                        <div
                                                            className="basis-3/4 flex flex-row px-4 text-gray-700 font-bold text-xl text-center">
                                                            <p>
                                                                Have a PayPal account?
                                                            </p>
                                                        </div>
                                                        <div
                                                            className="basis-1/4 flex flex-row-reverse text-gray-700 font-bold text-xl text-center">
                                                            <button
                                                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-4 py-2 mr-4">
                                                                Log In
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-row px-2">
                                                        <div className="basis-2/5 ">
                                                            <hr/>
                                                        </div>
                                                        <div className="basis-1/10">
                                                            <p className="text-gray-700 text-xs text-center">
                                                                OR
                                                            </p>
                                                        </div>
                                                        <div className="basis-2/5">
                                                            <hr/>
                                                        </div>
                                                    </div>

                                                    <div className="px-8 py-4 flex flex-col w-full">
                                                        <div className="flex flex-col px-2 w-full">
                                                            <p className="w-full text-lg px-1 text-gray-700">COUNTRY:</p>
                                                            <select
                                                                className="w-full px-2 py-2 text-sm bg-white rounded-md shadow-2xl">
                                                                <option value={1}>Germany</option>
                                                                <option value={2}>China</option>
                                                                <option value={3}>Ukraine</option>
                                                                <option value={4}>Mexico</option>
                                                                <option value={5}>Italy</option>
                                                                <option value={6}>France</option>
                                                                <option value={7}>Spain</option>
                                                                <option value={8}>United Kingdom</option>
                                                                <option value={9}>United States</option>
                                                                <option value={10}>Canada</option>
                                                                <option value={11}>Australia</option>
                                                                <option value={12}>Japan</option>
                                                            </select>
                                                        </div>

                                                        <div className="flex flex-col px-2 w-full">
                                                            <p className="w-full text-lg px-1 text-gray-700">
                                                                CARD TYPE:
                                                            </p>
                                                            <select
                                                                className="w-1/2 px-2 py-2 text-sm bg-white rounded-md shadow-2xl">
                                                                <option value={1}>Visa</option>
                                                                <option value={2}>Mastercard</option>
                                                                <option value={3}>American Express</option>
                                                                <option value={4}>Discover</option>
                                                            </select>
                                                        </div>

                                                        <div className="flex flex-col px-2 w-full">
                                                            <p className="w-full text-lg px-1 text-gray-700">
                                                                CARD NUMBER:
                                                            </p>
                                                            <input
                                                                className="w-full px-2 py-2 text-sm bg-white rounded-md shadow-2xl"/>
                                                        </div>

                                                        <div className="flex flex-col px-2 w-full">
                                                            <p className="text-lg px-1 text-gray-700 pb-1">
                                                                EXPIRATION DATE:
                                                            </p>
                                                            <div className="flex flex-row">
                                                                <select
                                                                    className="w-full px-2 py-2 text-sm bg-white rounded-md shadow-2xl mx-1">
                                                                    <option value={1}>January</option>
                                                                    <option value={2}>February</option>
                                                                    <option value={3}>March</option>
                                                                    <option value={4}>April</option>
                                                                    <option value={5}>May</option>
                                                                    <option value={6}>June</option>
                                                                    <option value={7}>July</option>
                                                                    <option value={8}>August</option>
                                                                    <option value={9}>September</option>
                                                                    <option value={10}>October</option>
                                                                    <option value={11}>November</option>
                                                                    <option value={12}>December</option>
                                                                </select>
                                                                <select
                                                                    className="w-full px-2 py-2 text-sm bg-white rounded-md shadow-2xl mx-1">
                                                                    <option value={1}>2024</option>
                                                                    <option value={2}>2025</option>
                                                                    <option value={3}>2026</option>
                                                                    <option value={4}>2027</option>
                                                                    <option value={5}>2028</option>
                                                                    <option value={6}>2029</option>
                                                                    <option value={7}>2030</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="px-2 py-2 flex flex-row w-full">
                                                            <div className="basis-1/2 flex flex-col px-2">
                                                                <p className="text-lg px-1 text-gray-700 pb-1">Firstname:</p>
                                                                <input
                                                                    className="px-2 py-2 text-sm bg-white rounded-md shadow-2xl"/>
                                                            </div>
                                                            <div className="basis-1/2 flex flex-col px-2">
                                                                <p className="text-lg px-1 text-gray-700 pb-1">Lastname:</p>
                                                                <input
                                                                    className="px-2 py-2 text-sm bg-white rounded-md shadow-2xl"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="basis-1/2 flex flex-col">
                                                    <div className="text-xl flex flex-row py-4">
                                                        <div className="flex flex-row basis-1/2 mx-2 my-1">
                                                            <FontAwesomeIcon className="px-2 mt-0.5"
                                                                             icon={faCartShopping}/>
                                                            <p>
                                                                {inputValue}
                                                            </p>
                                                        </div>
                                                        <div className="flex flex-row basis-1/2 mx-2 my-1">
                                                            <FontAwesomeIcon className="px-2 mt-0.5" icon={faCheck}/>
                                                            <p>
                                                                {inputValue2}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <hr/>
                                                    <div className="flex flex-row w-full pt-4">
                                                        <div className="basis-1/4">

                                                        </div>
                                                        <div className="basis-1/2">
                                                            <img className="w-full" src={paypal} alt={paypal}>
                                                            </img>
                                                        </div>
                                                        <div className="basis-1/4">

                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row w-full pt-4">
                                                        <div className="basis-1/10">

                                                        </div>
                                                        <div className="basis-4/5 flex flex-col text-center">
                                                            <p className="text-xl font-bold pb-2">
                                                                Paypal is the faster, safer way to pay
                                                            </p>
                                                            <p className="text-xs text-gray-700">
                                                                No matter where you shop, PayPal make your payment and
                                                                account secure.
                                                            </p>
                                                        </div>
                                                        <div className="basis-1/10">

                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <hr/>
                                                    <div className="flex flex-col">
                                                        <div className="flex flex-row">
                                                            <div className="basis-1/10">

                                                            </div>
                                                            <div className="flex flex-col basis-4/5">
                                                                <div className="flex flex-row">
                                                                    <div className="basis-1/3 px-2 py-1">
                                                                        <img className="px-4 py-2" src={visa}
                                                                             alt={visa}></img>
                                                                    </div>
                                                                    <div className="basis-1/3">
                                                                        <img className="px-4 py-2" src={alipay}
                                                                             alt={alipay}></img>
                                                                    </div>
                                                                    <div className="basis-1/3">
                                                                        <img className="px-4 py-2" src={unionpay}
                                                                             alt={unionpay}></img>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-row">
                                                                    <div className="basis-1/3">
                                                                        <img className="px-4 py-2" src={mastercard}
                                                                             alt={mastercard}></img>
                                                                    </div>
                                                                    <div className="basis-1/3">
                                                                        <img className="px-4 py-2" src={jcb}
                                                                             alt={jcb}></img>
                                                                    </div>
                                                                    <div className="basis-1/3">
                                                                        <img className="px-4 py-2" src={elo}
                                                                             alt={elo}></img>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-row">
                                                                    <div className="basis-1/3">
                                                                        <img className="px-4 py-2" src={diners}
                                                                             alt={diners}></img>
                                                                    </div>
                                                                    <div className="basis-1/3">
                                                                        <img className="px-4 py-2" src={discover}
                                                                             alt={discover}></img>
                                                                    </div>
                                                                    <div className="basis-1/3">
                                                                        <img className="px-4 py-2" src={hipercard}
                                                                             alt={hipercard}></img>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="basis-1/10">

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div
                                        className="flex flex-col w-full h-fit bg-gray-50 shadow-2xl border-2 border-gray-100 rounded-b-xl">
                                        <div className="flex flex-row -ml-1 -mb-1">
                                            <div className="basis-1/2">
                                                <button onClick={handleClick}
                                                        className="px-5 py-3 bg-blue-600 text-white font-bold rounded-bl-lg hover:bg-blue-700">
                                                    Back
                                                </button>
                                            </div>
                                            <div className="basis-1/2 flex flex-row-reverse">
                                                <button
                                                    onClick={handleClick2}
                                                    className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-br-lg">
                                                    Donate
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div
                                        className="flex flex-col w-full h-fit bg-gray-50 shadow-2xl border-2 border-gray-100 rounded-2xl text-center">
                                        <div>
                                            <h1 className="text-2xl font-bold px-4 py-4 bg-blue-700 rounded-t-2xl text-white">
                                                THANK YOU FOR YOUR DONATION!
                                            </h1>
                                        </div>

                                        <div className="flex flex-row items-center">
                                            <div className="basis-3/10">

                                            </div>
                                            <div className="flex flex-row basis-2/5">
                                                <img src={congratulation} alt={congratulation}>
                                                </img>
                                            </div>
                                            <div className="basis-3/10">

                                            </div>

                                        </div>

                                        <div className="flex flex-row">
                                            <div className="basis-1/10">

                                            </div>
                                            <div className="flex flex-row basis-4/5 justify-center items-center py-4">
                                                <h1 className="text-2xl font-bold">
                                                    You Donate {inputValue} for {inputValue2}
                                                </h1>
                                            </div>
                                            <div className="basis-1/10">

                                            </div>

                                        </div>
                                        <div>
                                            <h1 className="text-2xl font-bold px-4 py-4 bg-blue-700 rounded-b-2xl text-white">
                                                THANK YOU AGAIN FOR YOUR GENEROUS SUPPORT!
                                            </h1>
                                        </div>

                                    </div>
                                </div>
                            )}


                    </div>
                    <br/>
                    <hr
                        className=""
                        style={{
                            backgroundImage: "linear-gradient(to right, #0a84d7, #f8c430)"
                        }}
                    />
                    <br/>
                    <div>
                        <div className="flex flex-row">
                            <div className="basis-2/5 flex flex-col">
                                <div className="copyright_footer">
                                    <p className="text-xs">
                                        © 2023 All Rights Reserved by
                                        <a className="text-black hover:text-blue-600" href="#">
                                            BrightFuture
                                        </a>
                                        .
                                    </p>
                                </div>
                                <div className="group  relative group">
                                    <a href="#" className="text-xs hover:text-blue-600 inline-block">
                                        Contact Us
                                        <span
                                            className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">
                  Email: huangjunzhao2003@gmail.com
                </span>
                                    </a>
                                </div>
                            </div>
                            <div className="basis-1/5 flex items-center justify-center">
                                <div className="transform">
                                    <picture>
                                        <img
                                            className="bg-cover"
                                            src={logo}
                                            alt={logo}
                                        />
                                    </picture>
                                </div>
                            </div>
                            <div className="basis-2/5  flex items-center justify-center">
                                <div className="flex flex-row-reverse text-xl space-x-8">
                                    <a/>
                                    <a href="https://www.facebook.com">
                                        <i className="fab fa-facebook hover:text-blue-600"/>
                                    </a>
                                    <a href="https://www.twitter.com">
                                        <i className="fab fa-twitter hover:text-blue-500"/>
                                    </a>
                                    <a href="https://www.youtube.com">
                                        <i className="fab fa-youtube hover:text-red-600"/>
                                    </a>
                                    <a href="https://www.instagram.com">
                                        <i className="fab fa-instagram hover:text-pink-600"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col basis-1/5">
                <p></p>
            </div>
        </>

    );
}

export default Donate;