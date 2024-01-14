import React from 'react';
import './css/style.css';
import logo from './images/BrightFutureLogo05.png';
import backgroundImage from "./images/background_image (3).png";
import {useTranslation} from "react-i18next";

function Admission() {
    const { t} = useTranslation();

    return (
        <>
            <meta charSet="UTF-8" />
            <title>Admission</title>
            <link href="./css/style.css" rel="stylesheet" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap"
                rel="stylesheet"
            />
            <div className="w-full fixed -z-10">
                <img src={backgroundImage} alt="Background"
                     className="w-full h-full blur-3xl bg-transparent bg-no-repeat bg-cover"/>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col basis-1/5">
                    <p></p>
                </div>
                <div className="flex flex-col basis-3/5 flex-grow-0">
                    <section className="pb-8 mt-10 md:mt-20">
                        <div className="w-full mt-10 md:w-4/5 md:mr-4 md:mt-0">
                            <h1 className="text-4xl font-bold leading-none text-center text-gray-900 md:text-left heading">
                                {t('ADMTITLE01')}
                            </h1>
                            <div className="mt-4 leading-loose content">
                                <p className="text-lg">
                                    {t('ADMTEXT01')}
                                </p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <hr />
                        <br />
                        <div>
                            <h3 className="text-blue-600 text-2xl font-bold">
                                {t('ADMTITLE02')}
                            </h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    {t('ADMTEXT02')}
                                </p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div>
                            <h3 className="text-blue-600 text-2xl font-bold">{t('ADMTITLE03')}</h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    {t('ADMTEXT03')}
                                </p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div>
                            <h3 className="text-blue-600 text-2xl font-bold">{t('ADMTITLE04')}</h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    {t('ADMTEXT040')}
                                </p>
                                <ul className="text-base leading-7 list-disc list-inside md:w-5/6">
                                    <li>
                                        <strong>{t('ADMTEXT040101')}</strong> {t('ADMTEXT040102')}
                                    </li>
                                    <li>
                                        <strong>{t('ADMTEXT040201')} </strong> {t('ADMTEXT040202')}
                                    </li>
                                    <li>
                                        <strong>{t('ADMTEXT040301')} </strong> {t('ADMTEXT040302')}
                                    </li>
                                    <li>
                                        <strong>{t('ADMTEXT040401')} </strong> {t('ADMTEXT040402')}
                                    </li>
                                    <li>
                                        <strong>{t('ADMTEXT040501')} </strong> {t('ADMTEXT040502')}
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <p className="text-lg leading-7">
                                {t('ADMTEXT0406')}
                            </p>
                            <br />
                            <br />
                            <h3 className="text-blue-600 text-2xl font-bold">{t('ADMTITLE05')}</h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    {t('ADMTEXT06')}
                                </p>
                                <ul className="text-base leading-7 list-disc list-inside md:w-5/6">
                                    <li>
                                        <strong>{t('ADMTEXT050101')}</strong> {t('ADMTEXT050102')}
                                    </li>
                                    <li>
                                        <strong>{t('ADMTEXT050201')} </strong> {t('ADMTEXT050202')}
                                    </li>
                                    <li>
                                        <strong>{t('ADMTEXT050301')} </strong> {t('ADMTEXT050302')}
                                    </li>
                                    <li>
                                        <strong>{t('ADMTEXT050401')} </strong> {t('ADMTEXT050402')}
                                    </li>
                                    <li>
                                        <strong>{t('ADMTEXT050501')} </strong> {t('ADMTEXT050502')}
                                    </li>
                                </ul>
                            </div>
                            <br/>
                            <br/>
                            <h3 className="text-blue-600 text-2xl font-bold">{t('ADMTITLE06')}</h3>
                            <br/>
                            <div>
                                <p className="text-lg leading-7">
                                    {t('ADMTEXT061')}
                                </p>
                            </div>
                            <br />
                            <br />
                            <h3 className="text-blue-600 text-2xl font-bold">{t('ADMTITLE07')}</h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    {t('ADMTEXT07')}
                                </p>
                            </div>
                            <br />
                            <br />
                            <h3 className="text-blue-600 text-2xl font-bold">
                                {t('ADMTITLE08')}
                            </h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    {t('ADMTEXT08')}
                                </p>
                            </div>
                            <br />
                            <br />
                            <h3 className="text-blue-600 text-2xl font-bold">
                                {t('ADMTITLE09')}
                            </h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    {t('ADMTEXT09')}
                                </p>
                            </div>
                            <br />
                            <br />
                            <h3 className="text-blue-600 text-2xl font-bold">{t('ADMTITLE10')}</h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    {t('ADMTEXT10')}
                                </p>
                            </div>
                            <br />
                            <br />
                            <h3 className="text-blue-600 text-2xl font-bold">{t('ADMTITLE11')}</h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    {t('ADMTEXT11')}
                                </p>
                                <br />
                                <ul className="text-base leading-7 list-disc list-inside md:w-5/6">
                                    <li>
                                        <strong>{t('ADMTEXT110101')}</strong> {t('ADMTEXT110102')}
                                    </li>
                                    <li>
                                        <strong>{t('ADMTEXT110201')} </strong> {t('ADMTEXT110202')}
                                    </li>
                                    <li>
                                        <strong>{t('ADMTEXT110301')} </strong> {t('ADMTEXT110302')}
                                    </li>
                                    <li>
                                        <strong>{t('ADMTEXT110401')} </strong> {t('ADMTEXT110402')}
                                    </li>
                                    <li>
                                        <strong>{t('ADMTEXT110501')} </strong> {t('ADMTEXT110502')}
                                    </li>
                                    <li>
                                        <strong>{t('ADMTEXT110601')}</strong> {t('ADMTEXT110602')}
                                    </li>
                                    <li>
                                        <strong>{t('ADMTEXT110701')} </strong> {t('ADMTEXT110702')}
                                    </li>
                                    <li>
                                        <strong>{t('ADMTEXT110801')} </strong> {t('ADMTEXT110802')}
                                    </li>
                                    <li>
                                        <strong>{t('ADMTEXT110901')} </strong> {t('ADMTEXT110902')}
                                    </li>
                                    <li>
                                        <strong>{t('ADMTEXT111001')} </strong> {t('ADMTEXT111002')}
                                    </li>
                                </ul>
                                <br/>
                                <p className="text-lg leading-7">
                                    {t('ADMTEXT1112')}
                                </p>
                            </div>
                        </div>
                    </section>
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
                                        <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">
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
                                        <i className="fab fa-facebook hover:text-blue-600" />
                                    </a>
                                    <a href="https://www.twitter.com">
                                        <i className="fab fa-twitter hover:text-blue-500" />
                                    </a>
                                    <a href="https://www.youtube.com">
                                        <i className="fab fa-youtube hover:text-red-600" />
                                    </a>
                                    <a href="https://www.instagram.com">
                                        <i className="fab fa-instagram hover:text-pink-600" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col basis-1/5">
                    <p></p>
                </div>
            </div>
        </>
    );
}

export default Admission;