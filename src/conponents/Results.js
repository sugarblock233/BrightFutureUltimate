import React from 'react';
import './css/style.css';
import logo from './images/BrightFutureLogo05.png';
import backgroundImage from "./images/background_image (3).png";
import FIDH from "./images/icons/FIDH.svg";
import GATE from "./images/icons/GATE.svg";
import Trinational from "./images/icons/Trinational.svg";
import WeltoffeneHS from "./images/icons/WeltoffeneHS.svg";
import WVB from "./images/icons/WVB.svg";
import usst_light_blue from "./images/icons/usst_light_blue.png";
import princeton from "./images/icons/princeton.png";
import matej from "./images/matej.jpg";
import olena from "./images/olena.JPG";
import {useTranslation} from "react-i18next";

function Results() {
    const { t} = useTranslation();

    return (
        <>
            <meta charSet="UTF-8" />
            <title>Our Results</title>
            <link href="./css/style.css" rel="stylesheet" />
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

            <div className="flex flex-row">
                <div className="flex flex-col basis-1/5">
                    <p></p>
                </div>
                <div className="flex flex-col basis-3/5 flex-grow-0">
                    <section className="pb-8 mt-10 md:mt-20">
                        <div className="w-full mt-10 md:w-4/5 md:mr-4 md:mt-0">
                            <h1 className="text-4xl font-bold leading-none text-center text-gray-900 md:text-left heading">
                                {t('RESTITLE01')}
                            </h1>
                            <div className="mt-4 leading-loose content">
                                <p className="text-lg">
                                    {t('RESTEXT01')}
                                </p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <hr />
                        <br />
                        <h2 className="text-blue-500 text-3xl font-bold">{t('OURPARTNERS')}</h2>
                        {/*               add some partners' logos here*/}
                        <div className="grid grid-cols-4 gap-2">
                            <img
                                className="w-64 h-32 px-4"
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 216.59 77.01'%3E%3Cpath d='M160.28 23.66a10.09 10.09 0 1 0 10.09-10.09 10.09 10.09 0 0 0-10.09 10.09m56.31 26.65a53.36 53.36 0 0 1-92.37.12l8.78-5.07a43.28 43.28 0 0 0 74.9-.09z' fill='%23008c58'/%3E%3Cpath d='M208 13.61a38.94 38.94 0 0 1-65.15 37.59L150 44a28.84 28.84 0 0 0 48.25-27.83z' fill='%23008c58'/%3E%3Cpath d='M176.77 0A24.52 24.52 0 1 1 164 47.34l2.61-9.75a14.42 14.42 0 0 0 7.49-27.85z' fill='%23008c58'/%3E%3Cpath d='M0 15.45V7.12h1.08v3.6H4v-3.6h1.06v8.33H4v-3.81H1.08v3.81zm7.72-3.05V9.67A2.4 2.4 0 0 1 9.85 7a2.57 2.57 0 0 1 .48 0A2.41 2.41 0 0 1 13 9.12a2.53 2.53 0 0 1 0 .55v2.73c0 2.31-.85 3.22-2.62 3.22s-2.66-.91-2.66-3.22zm4.15 0V9.64c0-1.75-1.2-1.8-1.54-1.8s-1.53 0-1.53 1.8v2.81c0 1.82.53 2.28 1.53 2.28s1.54-.46 1.54-2.28zm7.34-2.98A1.88 1.88 0 0 0 19 8.21a1.36 1.36 0 0 0-1-.36 1.31 1.31 0 0 0-1.26.64 3.85 3.85 0 0 0-.24 1.73v2.23c0 2 .67 2.28 1.49 2.28.32 0 1.3-.11 1.31-1.74h1.1c0 2.63-1.81 2.63-2.36 2.63-1 0-2.63-.07-2.63-3.3V10c0-2.35 1-3 2.68-3s2.29.85 2.18 2.47zm3.57 6.03V7.12h1.06v3.6h2.92v-3.6h1.06v8.33h-1.06v-3.81h-2.92v3.81zM31.3 13v.24a1.31 1.31 0 0 0 1.14 1.48 1.11 1.11 0 0 0 .26 0c.84 0 1.48-.36 1.48-1.35 0-1.85-3.73-1.64-3.73-4.14A2.2 2.2 0 0 1 32.6 7h.29a2 2 0 0 1 2.32 1.62 1.94 1.94 0 0 1 0 .76h-1.12c0-.91-.27-1.51-1.28-1.51a1.16 1.16 0 0 0-1.28 1v.19c0 1.84 3.74 1.57 3.74 4.21 0 1.76-1.21 2.32-2.59 2.32-2.45 0-2.45-1.86-2.43-2.65zm10.02-3.58a1.9 1.9 0 0 0-.24-1.21 1.39 1.39 0 0 0-.93-.36 1.31 1.31 0 0 0-1.26.64 3.85 3.85 0 0 0-.24 1.73v2.23c0 2 .67 2.28 1.49 2.28.32 0 1.3-.11 1.31-1.74h1.1c0 2.63-1.81 2.63-2.36 2.63-1 0-2.63-.07-2.63-3.3V10c0-2.35 1-3 2.68-3s2.28.85 2.18 2.47zm3.57 6.03V7.12H46v3.6h2.92v-3.6H50v8.33h-1.13v-3.81H46v3.81zm7.7-8.33h1.06v5.33c0 1.82.56 2.28 1.56 2.28s1.56-.46 1.56-2.28V7.12h1.06v5.28c0 2.31-.86 3.22-2.62 3.22s-2.62-.91-2.62-3.22zm7.85 8.33V7.12h1.07v7.41h3.05v.92zm5.92 0V7.12h4.29V8h-3.23v2.68h3v.92h-3v2.89h3.3v.92zM0 27v-8.35h4.13v.93H1.06v2.67H4v.93H1.06V27zm5.51-8.35h1.06V24c0 1.83.56 2.29 1.56 2.29s1.56-.48 1.56-2.29v-5.35h1.06v5.29c0 2.3-.85 3.22-2.62 3.22s-2.62-.92-2.62-3.22zm8.49 4.5V27h-1.09v-8.35h2.87a1.89 1.89 0 0 1 2 1.74v.34a1.79 1.79 0 0 1-1.52 1.9c1 .15 1.3.47 1.36 2.14A12.83 12.83 0 0 0 17.9 27h-1.11a9.59 9.59 0 0 1-.32-2.77 1.1 1.1 0 0 0-1.13-1.07h-.13zm0-.92h1.59c.76 0 1.13-.66 1.13-1.38a1.13 1.13 0 0 0-1-1.26H14zm10.36-3.58v.93h-2.19V27h-1.06v-7.4h-2.2v-.93zm.56 0h1.13l1.57 7.22 1.67-7.22h1.37l1.51 7.22 1.7-7.22H35L32.83 27h-1.3L30 19.76 28.25 27H27zm12.93 0h1.35L41.91 27h-1.19l-.6-2h-3.21l-.63 2h-1.07zm.65 1l-1.3 4.45h2.67zm10.63-1V27h-1.45l-3.29-7.22V27h-1v-8.35h1.5l3.24 7.13v-7.13zm6.26 2.23c0-1-.4-1.51-1.47-1.51-.34 0-1.54.06-1.54 1.8V24c0 1.83.53 2.29 1.54 2.29a2.61 2.61 0 0 0 1.49-.37v-2.51h-1.54v-.93h2.6v4.05a5.16 5.16 0 0 1-2.55.63c-1.77 0-2.62-.92-2.62-3.22V21.2a2.41 2.41 0 0 1 2.07-2.71 2.53 2.53 0 0 1 .55 0c1.8 0 2.65.66 2.58 2.4zM58.78 27v-8.35h4.3v.93h-3.24v2.67h3v.93h-3v2.88h3.3V27zm11.88-8.35V27h-1.45l-3.29-7.22V27H65v-8.35h1.5l3.25 7.13v-7.13zM11.78 30.19h1.06v5.33c0 1.82.55 2.28 1.55 2.28S16 37.34 16 35.52v-5.33h1v5.28c0 2.31-.85 3.22-2.62 3.22s-2.61-.91-2.61-3.22zm13.22 0v8.33h-1.48l-3.29-7.23v7.23h-.95v-8.33h1.5L24 37.32v-7.13zm3.44 8.33h-1.06v-8.33h1.06zm5.25 0h-1.27L30 30.19h1.15l1.91 7.32L35 30.19h1.08zm3.85 0v-8.33h4.29v.92H38.6v2.68h3v.92h-3v2.88h3.3v.93zm7.14-3.83v3.83h-1.06v-8.33h2.87a1.89 1.89 0 0 1 2 1.75v.32A1.83 1.83 0 0 1 47 34.17c1 .15 1.31.47 1.36 2.14a13.4 13.4 0 0 0 .29 2.19H47.5a10 10 0 0 1-.32-2.77 1.1 1.1 0 0 0-1.13-1.07h-.13zm0-.93h1.59c.76 0 1.13-.65 1.13-1.38a1.13 1.13 0 0 0-1-1.26h-1.72zM51.21 36v.24a1.31 1.31 0 0 0 1.14 1.48 1 1 0 0 0 .25 0c.85 0 1.49-.36 1.49-1.35 0-1.85-3.74-1.64-3.74-4.15A2.21 2.21 0 0 1 52.53 30h.27a2.06 2.06 0 0 1 2.33 1.75 2 2 0 0 1 0 .69H54c0-.91-.28-1.51-1.28-1.51a1.16 1.16 0 0 0-1.28 1v.19c0 1.83 3.73 1.57 3.73 4.21 0 1.75-1.21 2.32-2.58 2.32-2.46 0-2.46-1.86-2.43-2.65zm7.15 2.52H57.3v-8.33h1.06zm7.01-8.33v.92h-2.19v7.41h-1.06v-7.41h-2.19v-.92zm5.09 0h1.07l-2.27 5.15v3.18H68.2v-3.18L66 30.19h1.19l1.62 4zm13.34 8.66V6.57h4.11v13.95h11.31V6.57h4.11v32.28h-4.11V24.09H87.91v14.76H83.8zm25.2 0V6.57h16.01v3.57h-11.89v10.38h11.27v3.57h-11.27v14.76H109zm19.43-32.28h4.11v20.65c0 7.07 2.15 8.86 6 8.86s6-1.79 6-8.86V6.57h4.11V27c0 9-3.31 12.48-10.15 12.48S128.43 36 128.43 27z' fill='%23727777'/%3E%3Cpath fill='none' stroke='%23727777' stroke-width='.52' d='M76.94 6.53v32.35'/%3E%3C/svg%3E"
                            />
                            <img className="w-64 h-32 px-4" src={FIDH} />
                            <img className="w-64 h-32 px-4" src={GATE} />
                            <img className="w-64 h-32 px-4" src={princeton} />
                            <img className="w-64 h-32 px-4" src={Trinational} />
                            <img className="w-64 h-32 px-4" src={WeltoffeneHS} />
                            <img
                                className="w-64 mt-8 px-4"
                                src={usst_light_blue}
                            />
                            <img className="w-64 h-32 px-4" src={WVB} />
                        </div>
                        <br />
                        <hr />
                        <br />
                        <br />
                        <h3 className="text-blue-600 text-2xl font-bold">{t('COMMITMENT')}</h3>
                        <br />
                        <div>
                            <p className="text-lg leading-7">
                                {t('RESTEXT02')}
                            </p>
                        </div>
                        <br />
                        <br />
                        <hr />
                        <br />
                        {/*            add one more thing here, some students profile, and you can search for other things*/}
                        <div>
                            <div>
                                <h3 className="text-blue-600 text-2xl font-bold">
                                    {t('RESTITLE03')}
                                </h3>
                                <br />
                                <div className="flex flex-col">
                                    <div className="relative w-full group cursor-pointer transition-all duration-300 ease-linear transform hover:z-50 hover:scale-110 hover:shadow-2xl hover:-translate-y-2">
                                        <div className="absolute inset-0 bg-blue-50 blur-2xl group-hover:blur-none" />
                                        <div className="relative flex flex-row items-center">
                                            <div className="basis-1/4 flex justify-center items-center">
                                                <img
                                                    src={matej}
                                                    className="w-24 h-24 rounded-full"
                                                    alt="Matej"
                                                />
                                            </div>
                                            <div className="basis-3/4 flex flex-col">
                                                <p className="text-gray-600 text-xs">
                                                    {t('LOCATION01')}
                                                </p>
                                                <p className="text-xl mb-1 font-bold">Matej</p>
                                                <div className="relative">
                                                    <p className="line-clamp-3 group-hover:line-clamp-none">
                                                        {t('RESDESCRIPTION01')}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <hr className="font-thin" />
                                    <br />
                                    <div className="relative w-full group cursor-pointer transition-all duration-300 ease-linear transform hover:z-50 hover:scale-110 hover:shadow-2xl hover:-translate-y-2">
                                        <div className="absolute inset-0 bg-blue-50 blur-2xl group-hover:blur-none" />
                                        <div className="relative flex flex-row items-center">
                                            <div className="basis-1/4 flex justify-center items-center">
                                                <img
                                                    src={olena}
                                                    className="w-24 h-24 rounded-full"
                                                    alt="Olena"
                                                />
                                            </div>
                                            <div className="basis-3/4 flex flex-col">
                                                <p className="text-gray-600 text-xs">
                                                    {t('LOCATION02')}
                                                </p>
                                                <p className="text-xl mb-1 font-bold">Olena</p>
                                                <div className="relative">
                                                    <p className="line-clamp-3 group-hover:line-clamp-none">
                                                        {t('RESDESCRIPTION02')}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <hr
                            className=""
                            style={{
                                backgroundImage: "linear-gradient(to right, #0a84d7, #f8c430)"
                            }}
                        />
                        <br />
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
                                    <div className="group relative">
                                        <a
                                            href="#"
                                            className="text-xs hover:text-blue-600 inline-block"
                                        >
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
                    </section>
                </div>
                <div className="flex flex-col basis-1/5">
                    <p></p>
                </div>
            </div>
        </>
    );
}

export default Results;