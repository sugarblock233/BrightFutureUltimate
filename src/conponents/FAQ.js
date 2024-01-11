import React, {useState} from 'react';
import './css/style.css';
import logo from './images/BrightFutureLogo05.png';
import backgroundImage from "./images/background_image (3).png";
import CollapsibleCard from './CollapsibleCard';

function FAQ() {

    const [searchTerm, setSearchTerm] = useState('');

    // 更新搜索词的函数
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const cardsData = [
        {
            title: "What is Bright Futures for?",
            content: "At Bright Futures, we are dedicated to empowering students from around the globe by providing them with opportunities to pursue their educational dreams in Germany. Our commitment is to bridge the gap for underprivileged students, enabling access to Germany's esteemed educational institutions. Join us in this journey to light up futures and transform lives, one scholarship at a time."
        },
        {
            title: "How can I get involved?",
            content: "Our programme does not have a single source of funding. We rely on grassroots fundraising in Germany as well as support of a large number of individual and corporate donors. If interested in making a donation to us, please review the Donate section of our website."
        },
        {
            title: "Why are you helping me? What are you getting from this?",
            content: "Bright Futures is a non-profit organization, it doesn't receive any profit from supporting the students. Our help doesn't involve any payments from students and their families. Our only requirement for Bright Futures is to provide help to the organization as volunteers."
        },
        {
            title: "What are the admissions criteria?",
            content: "While reviewing each application, we assess a number of factors to select well-rounded, accomplished, and prepared candidates who are most likely to get admitted to best universities with our help. Our main criteria include the student's grades and English fluency, the track record of academic and extracurricular achievements, the track record of contributions to their school/home communities, the strength of character (defined as maturity, resilience, high energy, etc.), their family income, and desire to study in Germany."
        },
        {
            title: "How will my admissions decision be communicated to me?",
            content: "Regardless of whether you are accepted or rejected, you will receive email notifications from our Admissions team with final admission decisions."
        },
        {
            title: "Who pays for students' education abroad?",
            content: "Schools and colleges provide generous scholarships to cover the cost of education and living expenses for students. Bright Futures only covers the cost of the application process and standardized tests. Students perform at the top of their class consistently and typically make lasting contributions to their schools."
        },
        {
            title: "Can I stay abroad and get a master's degree after college graduation? Will you help me with the application process?",
            content: "Although we encourage our students to get work experience anywhere in the world after college graduation, you are free to proceed your studies as long as they are not longer than 5 years. However, we do not help our students receive a master's degree."
        },
        {
            title: "Can I apply to your program twice?",
            content: "Yes, you are welcome to apply to Bright Futures more than once."
        }
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
                                    Frequently Asked Questions
                                </h1>
                            </div>
                        </div>
                        <div className="pt-8 pb-12">
                            <div className="flex flex-col justify-center w-full">
                                <input
                                    type="text"
                                    className="py-2 px-2 border-2 border-gray-100 rounded-md w-full"
                                    placeholder="Search keywords..."
                                    autoComplete="off"
                                    onChange={handleSearchChange}
                                />
                                <hr></hr>
                                <div className="mt-10">
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