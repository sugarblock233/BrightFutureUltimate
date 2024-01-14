import React from 'react';
import {useTranslation} from "react-i18next";
import USSTImage from "../images/USSTImage.png";
import logo from "../images/BrightFutureLogo05.png";
import USSTImage2 from "../images/USSTImage2.png";

const USST = () => {
    const { t} = useTranslation();
    return <>
        <div className="">
            <div className="flex flex-col">
                <br></br>
                <br></br>
                <div className="flex flex-col md:w-3/4">
                    <h2 id="content-header" className="justify-center text-4xl font-bold leading-10 pb-4">
                        {t('ABSP5TITLE01')}
                    </h2>
                </div>
                <div className="flex flex-row">
                    <div className="basis-1/2">
                        <p className="text-lg my-4">
                            {t('ABSP5TEXT01')}
                        </p>
                        <p className="text-lg my-4">
                            {t('ABSP5TEXT010')}
                        </p>
                    </div>
                    <div className="basis-1/2 px-4 py-4">
                        <img
                            className="w-full object-cover"
                            src={USSTImage}
                            alt="USST"
                        />
                        {/*<img*/}
                        {/*    className="w-full object-cover"*/}
                        {/*    src={USSTImage2}*/}
                        {/*    alt="USST"*/}
                        {/*/>*/}
                    </div>
                </div>

                <hr/>

                <div className="">
                    <h2 id="content-header" className="justify-center text-3xl font-bold leading-10 pb-4 text-blue-600">
                        {t('ABSP5TITLE02')}
                    </h2>
                    <p className="text-lg my-4">
                        {t('ABSP5TEXT03')}
                    </p>
                    <br/>
                    <h2 id="content-header" className="justify-center text-3xl font-bold leading-10 pb-4 text-blue-600">
                        {t('ABSP5TITLE03')}
                    </h2>
                    <p className="text-lg my-4">
                        {t('ABSP5TEXT04')}
                    </p>

                </div>

                <br/>
                <hr/>
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

    </>

};

export default USST;