import React, {useState} from 'react';
import './css/style.css';
import logo from './images/BrightFutureLogo05.png';
import backgroundImage from "./images/background_image (3).png";
import CollapsibleCard from './CollapsibleCard';
import { useTranslation } from 'react-i18next';

function FAQ() {
    // Importing the useTranslation hook from react-i18next for internationalization
    const { t} = useTranslation();

    // Initializing the searchTerm state variable to an empty string
    // setSearchTerm is the function that will be used to update the searchTerm state variable
    const [searchTerm, setSearchTerm] = useState('');

    // 更新搜索词的函数
    /**
     * This function is triggered when the value of the search input field changes.
     * It updates the searchTerm state variable with the new value of the input field.
     * The new value is converted to lowercase to make the search case-insensitive.
     *
     * @param {object} event - The event object that triggered the function call
     */
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    /**
     * This is the data for the FAQ cards.
     * Each card is an object with a title and content.
     * The title and content are internationalized strings.
     * The key for the internationalized string is passed to the t function from react-i18next to get the string in the current language.
     */
    const cardsData = [
        {
            title: t('faqtitle01'),
            content: t('faqdescription01')
        },
        {
            title: t('faqtitle02'),
            content: t('faqdescription02')
        },
        {
            title: t('faqtitle03'),
            content: t('faqdescription03')
        },
        {
            title: t('faqtitle04'),
            content: t('faqdescription04')
        },
        {
            title: t('faqtitle05'),
            content: t('faqdescription05')
        },
        {
            title: t('faqtitle06'),
            content: t('faqdescription06')
        },
        {
            title: t('faqtitle07'),
            content: t('faqdescription07')
        },
        {
            title: t('faqtitle08'),
            content: t('faqdescription08')
        },
        // 更多数据
    ];

    return (
        <>
            <meta charSet="UTF-8" />
            <title>FAQ</title>
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
            <div className="flex flex-row">
                <div className="flex flex-col basis-1/5">
                    <p></p>
                </div>
                <div className="flex flex-col basis-3/5 flex-grow-0">
                <div className="flex flex-col md:w-4/5">
                        <div className="pb-8 mt-10 md:mt-20">
                            <div className="w-full mt-10 text-center md:w-3/4 md:mr-4 md:text-left md:mt-0">
                                <h1 className="text-4xl font-extrabold leading-none text-gray-900 heading">
                                    {t('faqtitle')}
                                </h1>
                            </div>
                        </div>
                        {/*This section is responsible for the search functionality in the FAQ page.*/}
                        {/*It includes an input field for the user to enter their search term and a list of collapsible cards that display the FAQ data.*/}
                        {/*The list of cards is filtered based on the search term entered by the user.*/}
                        <div className="pt-8 pb-12">
                            <div className="flex flex-col justify-center w-full">
                                {/* Input field for the search term. The 'onChange' prop is set to the 'handleSearchChange' function which updates the search term whenever the user types in the input field. */}
                                <input
                                    type="text"
                                    className="py-2 px-2 border-2 border-gray-100 rounded-md w-full"
                                    placeholder={t('searchkeywords')}
                                    autoComplete="off"
                                    onChange={handleSearchChange}
                                />
                                <hr></hr>
                                <div className="mt-10">
                                    {/*
                                    * This section is responsible for rendering a list of collapsible cards that display the FAQ data.
                                    * The 'filter' method is used to filter the cards based on the search term.
                                    * The 'map' method is used to render each card.
                                    *
                                    * The 'filter' method takes a function as an argument which is called for each card in the 'cardsData' array.
                                    * The function checks if the title or content of the card includes the search term.
                                    * If the function returns true, the card is included in the new array returned by the 'filter' method.
                                    * If the function returns false, the card is not included in the new array.
                                    *
                                    * The 'map' method takes a function as an argument which is called for each card in the array returned by the 'filter' method.
                                    * The function returns a 'CollapsibleCard' component with the 'key', 'title', and 'content' props set to the corresponding properties of the card.
                                    * The 'key' prop is a special prop in React that helps identify which items have changed, are added, or are removed.
                                    * The 'title' and 'content' props are used by the 'CollapsibleCard' component to display the title and content of the card.
                                    */}
                                    {cardsData.filter(card =>
                                        card.title.toLowerCase().includes(searchTerm) ||
                                        card.content.toLowerCase().includes(searchTerm)
                                    ).map(card => (
                                        <CollapsibleCard
                                            key={card.title}
                                            title={card.title}
                                            content={card.content}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
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

export default FAQ;