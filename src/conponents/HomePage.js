import React from 'react';
import './css/style.css';
import logo from './images/BrightFutureLogo05.png';
import backgroundImage from './images/background_image (3).png';
import peopleBack from './images/peopleBackground.png';


function HomePage(){
    return(
    <>
        <meta charSet="UTF-8" />
        <title>BrightFuture</title>
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
            <img src={backgroundImage} alt="Background" className="w-full h-full blur-3xl bg-transparent bg-no-repeat bg-cover"/>
        </div>

        {/*navigation bar move to the app.js*/}

        <div className="flex flex-row">
            <div className="flex flex-col basis-1/5">
                <p></p>
            </div>
            <div className="flex flex-col basis-3/5 flex-grow-0">
                <section className="pb-8 mt-10 md:mt-20">
                    <div className="flex flex-row ">
                        <div className="basis-3/5 flex flex-col">
                            <h1 className="text-4xl font-bold leading-10 pb-4 md:w-4/5">
                                Illuminating Paths to Education in Germany
                            </h1>
                            <p className="text-lg">
                                At Bright Future, we are dedicated to empowering students from
                                around the globe by providing them with opportunities to pursue
                                their educational dreams in Germany. Our commitment is to bridge
                                the gap for underprivileged students, enabling access to Germany's
                                esteemed educational institutions. Join us in this journey to
                                light up futures and transform lives, one scholarship at a time.
                            </p>
                        </div>
                        <div className="basis-2/5"></div>
                    </div>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <div className="flex flex-col">
                        <div className="md:w-3/5"></div>
                        <div>
                            <h3 className="text-blue-600 text-2xl font-bold">Our Mission:</h3>
                            <br />
                            <p className="text-lg leading-7">
                                At Bright Future, we strive to brighten the horizons of global
                                youth by unlocking doors to Germany's premier education. We are
                                passionate about cultivating a diverse community of learners who
                                can emerge as the next wave of innovators, thinkers, and leaders.
                                By dismantling barriers to educational access, we aim to empower
                                underrepresented students to chase their academic and professional
                                dreams.
                            </p>
                            <br />
                            <br />
                            <h3 className="text-blue-600 text-2xl font-bold">Our Values:</h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    At Bright Future, our values guide our mission and are reflected
                                    in every scholarship we award. We honor:
                                </p>
                                <ul className="text-base leading-7 list-disc list-inside md:w-5/6">
                                    <li>
                                        <strong>Empowerment: </strong> We are committed to equipping
                                        students with the necessary tools, resources, and support to
                                        catalyze their educational and personal development.
                                    </li>
                                    <li>
                                        <strong>Access: </strong> Our dedication lies in opening the
                                        doors of German higher education to all, with special
                                        attention to aiding those from underprivileged backgrounds.
                                    </li>
                                    <li>
                                        <strong>Excellence: </strong> We advocate for the pursuit of
                                        academic brilliance, connecting students to Germany's renowned
                                        institutions to foster their pursuit of knowledge.
                                    </li>
                                    <li>
                                        <strong>Diversity: </strong> Celebrating a multitude of
                                        perspectives, we embrace diversity, which enriches the
                                        learning environment and sparks innovation and inclusivity.
                                    </li>
                                    <li>
                                        <strong>Transformation: </strong> Beyond academics, we focus
                                        on transforming lives and communities, offering scholarships
                                        that bring about change one student at a time.
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <br />
                            <div className="flex flex-row">
                                <div className="flex flex-col basis-1/3 px-2">
                                    <div className="flex flex-row h-16">
                                        <div className="basis-1/5 translate-y-2.5">
                                            <svg
                                                className="w-12 h-12 text-blue-700"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokewidth="{1.5}"
                                                stroke="currentColor"
                                                classname="w-6 h-6"
                                            >
                                                <path
                                                    strokelinecap="round"
                                                    strokelinejoin="round"
                                                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                                                />
                                            </svg>
                                        </div>
                                        <div className="basis-4/5">
                                            <p className="font-bold">
                                                Unlocking impact through global education and
                                                opportunities
                                            </p>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="">
                                        We support scholars from modest backgrounds with the
                                        application process, internships, and independent ventures.
                                        All scholars commit to return to Ukraine within 5 years after
                                        college graduation and to work in managerial positions for at
                                        least 5 years.
                                    </div>
                                </div>
                                <div className="flex flex-col basis-1/3 px-2">
                                    <div className="flex flex-row h-16">
                                        <div className="basis-1/5 translate-y-2.5">
                                            <svg
                                                className="w-12 h-12 text-pink-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokewidth="{1.5}"
                                                stroke="currentColor"
                                                classname="w-6 h-6"
                                            >
                                                <path
                                                    strokelinecap="round"
                                                    strokelinejoin="round"
                                                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="basis-4/5">
                                            <p className="translate-y-2 font-bold">
                                                Sustaining impact through a strong network
                                            </p>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="">
                                        We build a family of bright and patriotic Ukrainians
                                        passionate about changing Ukraine and the world. UGS scholars
                                        serve as Ukraine’s ambassadors on school campuses and give
                                        back to UGS through volunteering.
                                    </div>
                                </div>
                                <div className="flex flex-col basis-1/3 px-2">
                                    <div className="flex flex-row h-16">
                                        <div className="basis-1/5 translate-y-2.5">
                                            <svg
                                                className="w-12 h-12 text-yellow-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokewidth="{1.5}"
                                                stroke="currentColor"
                                                classname="w-6 h-6"
                                            >
                                                <path
                                                    strokelinecap="round"
                                                    strokelinejoin="round"
                                                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="basis-4/5">
                                            <p className="translate-y-2 font-bold">
                                                Scaling impact through results-driven mindset
                                            </p>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="">
                                        Leadership Team and Mentors collaborate to maximize
                                        full-scholarship admission chances, committed to finding best
                                        fit schools based on each scholar’s profile and preferences.
                                    </div>
                                </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="flex flex-row">
                                <div className="basis-1/2">
                                    <div className="flex flex-col">
                                        <div className="flex flex-row items-center">
                                            <div className="basis-1/5 pl-4">
                                                <svg
                                                    className="h-10 w-10 text-pink-500"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    classname="w-6 h-6"
                                                >
                                                    <path
                                                        fillrule="evenodd"
                                                        d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                                                        cliprule="evenodd"
                                                    />
                                                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                                </svg>
                                            </div>
                                            <div className="basis-4/5">
                                                <p className="font-bold text-base">Select</p>
                                                <p className="text-xs text-gray-800">
                                                    Identify ~70 scholars annually (5-7% acceptance rate).
                                                </p>
                                            </div>
                                        </div>
                                        <br />
                                        <div>
                                            <p className="px-4 text-sm">
                                                We have a dedicated admissions team and a three-stage
                                                application process. The process consists of an online
                                                application, online English and Math tests, and 1-3 online
                                                admission interviews.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-1/2">
                                    <div className="flex flex-col">
                                        <div className="flex flex-row items-center">
                                            <div className="basis-1/5 pl-4">
                                                <svg
                                                    className="h-10 w-10 text-blue-500"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    classname="w-6 h-6"
                                                >
                                                    <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                                                    <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                                                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                                                </svg>
                                            </div>
                                            <div className="basis-4/5">
                                                <p className="font-bold text-base">Prepare</p>
                                                <p className="text-xs text-gray-600">
                                                    Guide students through the application process.
                                                </p>
                                            </div>
                                        </div>
                                        <br />
                                        <div>
                                            <p className="px-4 text-sm">
                                                We have a network of 60+ mentors and 30+ co-mentors
                                                providing 1:1 application guidance. All scholars attend a
                                                10-day onboarding camp, and those who need to improve test
                                                scores, attend a 6-week test prep school. We also cover
                                                100% of application expenses.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="flex flex-row">
                                <div className="basis-1/2">
                                    <div className="flex flex-col">
                                        <div className="flex flex-row items-center">
                                            <div className="basis-1/5 pl-4">
                                                <svg
                                                    className="h-10 w-10 text-gray-700"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    classname="w-6 h-6"
                                                >
                                                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                                                    <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                                                </svg>
                                            </div>
                                            <div className="basis-4/5">
                                                <p className="font-bold text-base">Select</p>
                                                <p className="text-xs text-gray-600">
                                                    Identify ~70 scholars annually (5-7% acceptance rate).
                                                </p>
                                            </div>
                                        </div>
                                        <br />
                                        <div>
                                            <p className="px-4 text-sm">
                                                We have a dedicated admissions team and a three-stage
                                                application process. The process consists of an online
                                                application, online English and Math tests, and 1-3 online
                                                admission interviews.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-1/2">
                                    <div className="flex flex-col">
                                        <div className="flex flex-row items-center">
                                            <div className="basis-1/5 pl-4">
                                                <svg
                                                    className="h-10 w-10 text-yellow-400"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    classname="w-6 h-6"
                                                >
                                                    <path
                                                        fillrule="evenodd"
                                                        d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                                                        cliprule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="basis-4/5">
                                                <p className="font-bold text-base">Prepare</p>
                                                <p className="text-xs text-gray-600">
                                                    Guide students through the application process.
                                                </p>
                                            </div>
                                        </div>
                                        <br />
                                        <div>
                                            <p className="px-4 text-sm">
                                                We have a network of 60+ mentors and 30+ co-mentors
                                                providing 1:1 application guidance. All scholars attend a
                                                10-day onboarding camp, and those who need to improve test
                                                scores, attend a 6-week test prep school. We also cover
                                                100% of application expenses.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="relative">
                        <img
                            className="w-full blur-sm shadow-2xl"
                            src={peopleBack}
                            alt=""
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 py-3 bg-sky-600 bg-opacity-60 shadow-2xl">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-blue-900 md:text-left">
                                    Our results
                                </p>
                                <h2 className="w-full mt-6 text-3xl font-bold text-center text-white md:text-left md:w-2/3">
                                    We build a network of high-potential Ukrainians, multiplying our
                                    impact.
                                </h2>
                                <div className="md:w-3/5 text-base mt-8 leading-relaxed text-center text-white md:text-left">
                                    Since 2015, UGS has helped 250 young Ukrainians receive $62+
                                    million in full scholarships...
                                </div>
                                <div className="flex flex-row mt-12">
                                    <div className="basis-1/4 flex flex-col">
                                        <h3 className="text-lg font-bold text-white">
                                            <strong>|</strong> 250 (86%)
                                        </h3>
                                        <p className="text-sm text-white">
                                            students admitted at boarding schools and colleges.
                                        </p>
                                    </div>
                                    <div className="basis-1/4 flex flex-col">
                                        <h3 className="text-lg font-bold text-white">
                                            <strong>|</strong> 250 (86%)
                                        </h3>
                                        <p className="text-sm text-white">
                                            students admitted at boarding schools and colleges.
                                        </p>
                                    </div>
                                    <div className="basis-1/4 flex flex-col">
                                        <h3 className="text-lg font-bold text-white">
                                            <strong>|</strong> 250 (86%)
                                        </h3>
                                        <p className="text-sm text-white">
                                            students admitted at boarding schools and colleges.
                                        </p>
                                    </div>
                                    <div className="basis-1/4 flex flex-col">
                                        <h3 className="text-lg font-bold text-white">
                                            <strong>|</strong> 250 (86%)
                                        </h3>
                                        <p className="text-sm text-white">
                                            students admitted at boarding schools and colleges.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <hr />
                    <br />
                    {/*            Here is to add a subscribe button area*/}
                    <div>
                        <div className="flex flex-row">
                            <div className="basis-1/2 flex flex-col md:w-3/5">
                                <div>
                                    <h1 className="text-2xl font-bold pb-4">
                                        Subscribe to our newsletter
                                    </h1>
                                </div>
                                <div>
                                    <p className="text-base pb-10">
                                        Stay informed about BrightFuture progress via our newsletter.
                                    </p>
                                </div>
                                <div className="flex rounded">
                                    <input
                                        type="text"
                                        className="md:w-3/5 px-4 py-2 w-full rounded-s-lg"
                                        placeholder="Enter your email..."
                                    />
                                    <button className="px-4 text-white bg-blue-600 border-l rounded-r-lg hover:bg-blue-800">
                                        Subscribe
                                    </button>
                                </div>
                                <br />
                                <div>
                                    <p className="text-base pb-10">
                                        Or you could choose to accept our Text Message Notification
                                    </p>
                                </div>
                                <div className="flex rounded">
                                    <input
                                        type="text"
                                        className="md:w-3/5 px-4 py-2 w-full rounded-s-lg"
                                        placeholder="Enter your Phone Number..."
                                    />
                                    <button className="px-4 text-white bg-blue-600 border-l rounded-r-lg hover:bg-blue-800">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                            <div className="basis-1/2">
                                <div className="flex flex-col">
                                    <div>
                                        <h1 className="text-2xl font-bold">Anonymous Feedback</h1>
                                    </div>
                                    <div className="relative w-full px-2 h-96 rounded-2xl">
                                        <div className="absolute left-0">
                                            {/*                                    design a list that users can choose which type of question he/she want to feedback*/}
                                            <div className="pb-4">
                                                <div className="w-full max-w-xs">
                                                    <select
                                                        id="options"
                                                        name="options"
                                                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                                    >
                                                        <option value="">Select your question...</option>
                                                        <option value={1}>Website Improvement</option>
                                                        <option value={2}>Can't Contact Us</option>
                                                        <option value={3}>Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {/*                                    the window to feedback*/}
                                            <div className="pb-2 pl-2">
                      <textarea
                          className="w-full h-48 text-sm border-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 resize-none px-2 py-2"
                          placeholder="Enter your message..."
                          defaultValue={""}
                      />
                                            </div>
                                            {/*                                    submit button*/}
                                            <div className="flex flex-row flex-row-reverse px-2 pb-8">
                                                <button className="py-1 px-4 text-white bg-blue-600 border-l rounded-lg hover:bg-blue-800">
                                                    Submit
                                                </button>
                                                <div className="">
                                                    <p className="text-xs text-gray-700">
                                                        *This form will be anonymous, we will not collect any
                                                        personal information.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
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
                                    <a />
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
    </>);

}

export default HomePage;