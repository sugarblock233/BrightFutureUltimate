import React from 'react';
import {useTranslation} from "react-i18next";
import logo from "../images/BrightFutureLogo05.png";

const TeamMember = () => {
    const { t} = useTranslation();
    // 团队成员内容
    return <div>
        <>
            <br></br>
            <br></br>
            <h2 id="content-header" className="justify-center text-4xl font-bold leading-10 pb-4">
                {t('ABSP3TITLE01')}
            </h2>
            <h4 id="content-bheader" className="justify-center text-2xl font-medium">
                {t('ABSP3TITLE010')}
            </h4>
            <br/>
            <p className="indent-8 text-lg">
                {t('ABSP3TEXT01')}
            </p>
            <br/>
            <ul className="list-none list-inside">
                <div className="flex flex-col leading-normal pl-10 gap-y-4">
                    <h3 className="text-2xl font-bold">
                        {t('ABSP3TITLE0201')}
                    </h3>
                    <li className="indent-8 text-lg">
                        {t('ABSP3TEXT0201')}
                    </li>
                    <h3 className="text-2xl font-bold">
                        {t('ABSP3TITLE0202')}
                    </h3>
                    <li className="indent-8 text-lg">
                        {t('ABSP3TEXT0202')}
                    </li>
                    <h3 className="text-2xl font-bold">
                        {t('ABSP3TITLE0203')}
                    </h3>
                    <li className="indent-8 text-lg">
                        {t('ABSP3TEXT0203')}
                    </li>
                    <h3 className="text-2xl font-bold">
                        {t('ABSP3TITLE0204')}
                    </h3>
                    <li className="indent-8 text-lg">
                        {t('ABSP3TEXT0204')}
                    </li>
                </div>
            </ul>
            <br/>
            <p className="indent-8 text-lg">
                {t('ABSP3TEXT03')}
            </p>
            <br/>
            <p className="indent-8 text-lg">
                {t('ABSP3TEXT04')}
            </p>
            <br/>
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
        </>

    </div>;
};

export default TeamMember;
