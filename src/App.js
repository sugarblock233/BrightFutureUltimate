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

                    <section className="fixed top-0 w-full z-10">
                        <div
                            className="flex flex-row place-items-center px-8 h-16 text-3lg font-sans shadow-md"
                            style={{backgroundColor: "rgba(255,255,255,0.95)"}}
                        >
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </nav>
                <br></br>
                <br></br>

                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/admission" element={<Admission/>}/>
                    <Route path="/results" element={<Results/>}/>
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
