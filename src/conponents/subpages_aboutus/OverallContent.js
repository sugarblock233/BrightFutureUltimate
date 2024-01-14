import React from 'react';
import {useTranslation} from "react-i18next";
import logo from "../images/BrightFutureLogo05.png";

const Overall = () => {
    const { t} = useTranslation();
    // 总览内容
    return <div>
        <br></br>
        <br></br>
        <h2 id="content-header" className="justify-center text-4xl font-bold">
            {t('ABSP1TITLE01')}
        </h2>
        <br/>
        <div className="flex flex-col text-lg leading-normal gap-y-8">
            <p className="indent-8">
                {t('ABSP1TEXT01')}
            </p>
            <p className="indent-8">
                {t('ABSP1TEXT02')}
            </p>
            <ul className="list-disc list-inside">
                <div className="flex flex-col leading-normal pl-10 gap-y-4">
                    <li>
                        <strong>{t('ABSP1TEXT020101')}</strong>{t('ABSP1TEXT020102')}
                    </li>
                    <li>
                        <strong>{t('ABSP1TEXT020201')}</strong>{t('ABSP1TEXT020202')}
                    </li>
                    <li>
                        <strong>{t('ABSP1TEXT020301')}</strong>{t('ABSP1TEXT020302')}
                    </li>
                    <li>
                        <strong>{t('ABSP1TEXT020401')}</strong>{t('ABSP1TEXT020402')}
                    </li>
                </div>
            </ul>
            <p className="indent-8">
                {t('ABSP1TEXT03')}
            </p>
            <p className="indent-8">
                {t('ABSP1TEXT04')}
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
    </div>;
};

export default Overall;
