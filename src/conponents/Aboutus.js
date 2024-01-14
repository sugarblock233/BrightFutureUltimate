import React from 'react';
import './css/style.css';
import { Routes, Route, Link} from 'react-router-dom';
import OverallContent from './subpages_aboutus/OverallContent';
import OurGoal from './subpages_aboutus/OurGoal';
import TeamMember from "./subpages_aboutus/TeamMember";
import HFU from "./subpages_aboutus/HFU";
import USST from "./subpages_aboutus/USST";
import backgroundImage from './images/background_image (3).png';
import {useTranslation} from "react-i18next";

function Aboutus() {
    const { t} = useTranslation();

    return (
        <div>
            {
                <>
                    <meta charSet="UTF-8"/>
                    <title>aboutUs</title>
                    <link href="./css/style.css" rel="stylesheet"/>
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

                    <link
                        href="https://fonts.googleapis.com/css?family=Droid+Sans:700|Droid+Serif"
                        rel="stylesheet"
                        type="text/css"
                    />
                    <div className="flex flex-row justify-center sidebar">
                        <div className="flex flex-col basis-1/4 flex-grow-0 align-middle text-gray-700">
                            <div
                                className="fixed pt-4 px-8 mx-4 mt-2 w-fit max-h-160 shadow-inner shadow-sky-100 overflow-y-auto 2xl:max-h-256">
                                <br></br>
                                <h2 className="text-3xl font-semibold pb-2">{t('ABSIDE01')}</h2>
                                <ul className="space-y-2 list-inside list-image-none text-xl">
                                    <li className="hover:text-blue-600 cursor-pointer indent-4">
                                        <Link to="/aboutus/overall">{t('ABSIDE0101')}</Link>
                                    </li>
                                    <li className="hover:text-blue-600 cursor-pointer indent-4">
                                        <Link to="/aboutus/goal">{t('ABSIDE0102')}</Link>
                                    </li>
                                    <li className="hover:text-blue-600 cursor-pointer  indent-4">
                                        <Link to="/aboutus/teammember">{t('ABSIDE0103')}</Link>
                                    </li>
                                </ul>
                                <h2 className="mt-4 mb-2 font-semibold text-3xl">{t('ABSIDE02')}</h2>
                                <ul className="space-y-2 list-inside list-image-none text-xl">
                                    <li className="hover:text-blue-600 cursor-pointer indent-4">
                                        <li className="hover:text-blue-600 cursor-pointer  indent-4">
                                            <Link to="/aboutus/HFU">{t('ABSIDE0201')}</Link>
                                        </li>
                                    </li>
                                    <li className="hover:text-blue-600 cursor-pointer indent-4">
                                        <li className="hover:text-blue-600 cursor-pointer indent-4">
                                            <Link to="/aboutus/USST">{t('ABSIDE0202')}</Link>
                                        </li>
                                    </li>
                                    <li className="hover:text-blue-600 cursor-pointer indent-4">
                                        <button
                                            className="hover:text-blue-600 bg-transparent border-none p-0 cursor-pointer">
                                            {t('ABSIDE0203')}
                                        </button>
                                    </li>
                                </ul>
                                <h2 className="mt-4 mb-2 font-semibold text-3xl">{t('ABSIDE03')}</h2>
                                <ul className="space-y-2 list-inside list-image-none text-xl">
                                    <li className="hover:text-blue-600 cursor-pointer indent-4">
                                        {t('ABSIDE0301')}
                                    </li>
                                    <li className="hover:text-blue-600 cursor-pointer indent-4">{t('ABSIDE0302')}</li>
                                    <li className="hover:text-blue-600 cursor-pointer indent-4">
                                        {t('ABSIDE0303')}
                                    </li>
                                    <li className="hover:text-blue-600 cursor-pointer indent-4">
                                        {t('ABSIDE0304')}
                                    </li>
                                </ul>
                                <h2 className="mt-4 mb-2 font-semibold text-3xl">{t('ABSIDE04')}</h2>
                                <ul className="space-y-2 list-inside list-image-none text-xl">
                                    <li className="hover:text-blue-600 cursor-pointer indent-4">{t('ABSIDE0401')}</li>
                                    <li className="hover:text-blue-600 cursor-pointer indent-4">{t('ABSIDE0402')}</li>
                                    <li className="hover:text-blue-600 cursor-pointer indent-4">{t('ABSIDE0403')}</li>
                                    <li className="hover:text-blue-600 cursor-pointer indent-4">{t('ABSIDE0404')}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-xl basis-5/8 flex-shrink">
                            <br/>

                            <Routes>
                                <Route index element={<OverallContent/>}/>
                                <Route path="overall" element={<OverallContent/>}/>
                                <Route path="goal" element={<OurGoal/>}/>
                                <Route path="teamMember" element={<TeamMember/>}/>
                                <Route path="HFU" element={<HFU/>}/>
                                <Route path="USST" element={<USST/>}/>
                            </Routes>

                            <br/>
                            <br/>
                        </div>
                        <div className="basis-1/8 flex-grow"></div>
                    </div>
                </>

            }
        </div>
    );
}

export default Aboutus;