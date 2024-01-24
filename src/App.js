import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './conponents/HomePage';
import Admission from './conponents/Admission';
import Results from "./conponents/Results";
import Aboutus from "./conponents/Aboutus";
import OverallContent from './conponents/subpages_aboutus/OverallContent';
import OurGoal from './conponents/subpages_aboutus/OurGoal';
import TeamMember from "./conponents/subpages_aboutus/TeamMember";
import HFU from "./conponents/subpages_aboutus/HFU";
import USST from "./conponents/subpages_aboutus/USST";
import FAQ from "./conponents/FAQ";
import Donate from "./conponents/Donate";
import './conponents/css/style.css';
import { useTranslation } from 'react-i18next';


function App() {
    // useTranslation 钩子使得你可以在组件内部访问翻译函数 t。这个函数可以用来翻译内容，基于当前选择的语言
    // The useTranslation hook gives you access to the t function inside your component. This function can be used to translate content based on the currently selected language.
    const { t , i18n} = useTranslation();

    return (
        <Router>
            <div>
                <nav>
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Cardo:400i|Rubik:400,700&display=swap"
                        rel="stylesheet"
                    />
                    {/* This section is a part of the navigation bar of the application.*/}
                    {/* It is fixed at the top of the page and spans the full width.*/}
                    {/* It contains several NavLink components, each representing a different page in the application.*/}
                    {/* Each NavLink has a 'to' prop which is the URL path for that page.*/}
                    {/* The 'className' prop is a function that returns a string of class names.*/}
                    {/* The function takes an object with a single property 'isActive' which is true if the current URL matches the 'to' prop of the NavLink.*/}
                    {/* If 'isActive' is true, the text color of the NavLink is 'text-sky-500', otherwise it is 'text-black'.*/}
                    {/* If 'isActive' is true, a blue line is displayed under the NavLink.*/}
                    {/* The last child of the div is a button for changing the language of the application.*/}
                    {/* When the button is clicked, a list of languages is displayed and the user can select a language.*/}
                    <section className="fixed top-0 w-full z-10">
                        <div
                            className="flex flex-row place-items-center px-8 h-16 text-3lg font-sans shadow-md"
                            style={{backgroundColor: "rgba(255,255,255,0.95)"}}
                        >
                            {/*NavLink是一种特殊的Link组件，可以知道和当前URL匹配的组件添加特定的样式和类*/}
                            {/*NavLink is a special Link component that can add specific styles and classes to components that match the current URL.*/}
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `relative flex flex-row justify-center items-center basis-3/19 flex-grow ${
                                        isActive ? "text-sky-500" : "text-black hover:text-sky-500"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {t('HOME')}
                                        {/*这个isActive参数用来显示链接是否激活*/}
                                        {/*This isActive parameter is used to show whether the link is active.*/}
                                        {isActive && <span className="absolute -bottom-5 left-0 right-0 h-1 bg-sky-500"></span>}
                                    </>
                                )}
                            </NavLink>
                            <NavLink
                                to="/aboutus"
                                className={({ isActive }) =>
                                    `relative flex flex-row justify-center items-center basis-3/19 flex-grow ${
                                        isActive ? "text-sky-500" : "text-black hover:text-sky-500"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {t('ABOUTUS')}
                                        {isActive && <span className="absolute -bottom-5 left-0 right-0 h-1 bg-sky-500"></span>}
                                    </>
                                )}
                            </NavLink>
                            <NavLink
                                to="/results"
                                className={({ isActive }) =>
                                    `relative flex flex-row justify-center items-center basis-3/19 flex-grow ${
                                        isActive ? "text-sky-500" : "text-black hover:text-sky-500"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {t('RESULTS')}
                                        {isActive && <span className="absolute -bottom-5 left-0 right-0 h-1 bg-sky-500"></span>}
                                    </>
                                )}
                            </NavLink>
                            <NavLink
                                to="/admission"
                                className={({ isActive }) =>
                                    `relative flex flex-row justify-center items-center basis-3/19 flex-grow ${
                                        isActive ? "text-sky-500" : "text-black hover:text-sky-500"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {t('ADMISSION')}
                                        {isActive && <span className="absolute -bottom-5 left-0 right-0 h-1 bg-sky-500"></span>}
                                    </>
                                )}
                            </NavLink>
                            <NavLink
                                to="/donate"
                                className={({ isActive }) =>
                                    `relative flex flex-row justify-center items-center basis-3/19 flex-grow ${
                                        isActive ? "text-sky-500" : "text-black hover:text-sky-500"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {t('DONATE')}
                                        {isActive && <span className="absolute -bottom-5 left-0 right-0 h-1 bg-sky-500"></span>}
                                    </>
                                )}
                            </NavLink>
                            <NavLink
                                to="/faq"
                                className={({ isActive }) =>
                                    `relative flex flex-row justify-center items-center basis-3/19 flex-grow ${
                                        isActive ? "text-sky-500" : "text-black hover:text-sky-500"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {t('FAQ')}
                                        {isActive && <span className="absolute -bottom-5 left-0 right-0 h-1 bg-sky-500"></span>}
                                    </>
                                )}
                            </NavLink>
                            {/*language*/}
                            <div className="flex flex-row justify-center items-center basis-1/19 flex-grow-0 group">
                                <button className="">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-8 h-8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                                        />
                                    </svg>
                                </button>
                                <div className="hidden absolute group-hover:block min-w-max top-12">
                                    <ul className="bg-white shadow-lg rounded-md flex flex-col">
                                        <button className="p-2 hover:bg-gray-100" onClick={() => i18n.changeLanguage('en')}>English</button>
                                        <button className="p-2 hover:bg-gray-100" onClick={() => i18n.changeLanguage('de')}>Deutsch</button>
                                        <button className="p-2 hover:bg-gray-100" onClick={() => i18n.changeLanguage('zh')}>中文</button>
                                        <button className="p-2 hover:bg-gray-100" onClick={() => i18n.changeLanguage('ja')}>日本語</button>
                                        <button className="p-2 hover:bg-gray-100" onClick={() => i18n.changeLanguage('es')}>Español</button>
                                        <button className="p-2 hover:bg-gray-100" onClick={() => i18n.changeLanguage('ru')}>Русский</button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </nav>
                <br></br>
                <br></br>
                {/*route根据目前的url渲染子route*/}
                {/*route renders sub-route based on the current url*/}
                {/* The Routes component from 'react-router-dom' is used to define the different routes of the application.*/}
                {/* Each Route component inside Routes represents a different page in the application.*/}
                {/* The 'path' prop in the Route component is a string that represents the URL path for that route.*/}
                {/* The 'element' prop is the component that will be rendered when the URL matches the 'path'.*/}
                {/* Nested routes are also possible by placing Route components inside another Route component.*/}
                <Routes>
                    {/* Route for the home page. When the URL is "/", the HomePage component will be rendered. */}
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/admission" element={<Admission/>}/>
                    <Route path="/results" element={<Results/>}/>
                    {/*嵌套route*/}
                    {/*Nested routes*/}
                    {/* Route for the about us page. When the URL is "/aboutus", the Aboutus component will be rendered. */}
                    <Route path="/aboutus" element={<Aboutus/>}>
                        <Route path="overall" element={<OverallContent/>}/>
                        <Route path="goal" element={<OurGoal/>}/>
                        <Route path="teamMember" element={<TeamMember/>}/>
                        <Route path="hfu" element={<HFU/>}/>
                        <Route path="usst" element={<USST/>}/>
                    </Route>
                    <Route path="/faq" element={<FAQ/>}/>
                    <Route path="/donate" element={<Donate/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
