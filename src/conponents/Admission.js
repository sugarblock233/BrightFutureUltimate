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
                                    Welcome to Bright Futures - your gateway to a world of educational
                                    opportunities. At Bright Futures, we believe that every aspiring
                                    student, regardless of their background, deserves the chance to
                                    pursue their dreams through higher education. Bright Futures
                                    follows a selective admission process, accepting a limited
                                    percentage of applicants each year. Our acceptance rate typically
                                    ranges from 5-7%, ensuring that we can provide focused support to
                                    each individual.
                                </p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <hr />
                        <br />
                        <div>
                            <h3 className="text-blue-600 text-2xl font-bold">
                                Admissions Matters
                            </h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    Admissions to higher education are a pivotal moment in a student's
                                    life, representing more than just an academic achievement. It's
                                    the beginning of a journey that fundamentally shapes one's
                                    personal, professional, and intellectual growth. At Bright
                                    Futures, we deeply appreciate this critical phase. Our aim is to
                                    shepherd you through this transformative experience, ensuring that
                                    it is not only accessible but also enriching for every deserving
                                    student, irrespective of their background. Higher education opens
                                    doors to new horizons, offering exposure to diverse ideas,
                                    cultures, and ways of thinking. It equips students with critical
                                    skills, fosters independent thought, and prepares them for the
                                    challenges of the global job market. Particularly in Germany, with
                                    its rich academic heritage and innovative educational approaches,
                                    the experience is uniquely empowering. At Bright Futures, our
                                    commitment extends beyond mere admission. We focus on holistic
                                    development, ensuring that our students are not only academically
                                    prepared but also culturally and socially adept to thrive in an
                                    international environment. We believe in nurturing future leaders,
                                    thinkers, and innovators who will contribute positively to
                                    society. Thus, gaining admission is not just about securing a
                                    place in a university; it's about embarking on a life-altering
                                    journey that shapes your future in profound and lasting ways.
                                </p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div>
                            <h3 className="text-blue-600 text-2xl font-bold">We can offer</h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    At Bright Futures, our approach to supporting aspiring students
                                    transcends the conventional boundaries of educational guidance. We
                                    offer a multifaceted program meticulously designed to assist not
                                    only in the application process but also in the holistic
                                    development of each applicant. Our aim is to ensure that every
                                    student is not just prepared, but poised to excel. Our
                                    comprehensive program includes personalized academic counseling,
                                    where we help students select courses and universities that best
                                    match their aspirations and potential. We also offer extensive
                                    preparation for entrance examinations and interviews, ensuring
                                    students are thoroughly prepared for every aspect of the
                                    application process. Beyond academic preparedness, we place a
                                    strong emphasis on personal development. Our workshops and
                                    seminars focus on building essential soft skills like
                                    communication, leadership, and critical thinking – skills that are
                                    vital in today's competitive academic and professional landscapes.
                                    Additionally, we recognize the importance of cultural
                                    acclimatization, especially for students aspiring to study in
                                    Germany. To this end, we provide language courses, cultural
                                    immersion sessions, and mentorship programs. These initiatives are
                                    designed to familiarize students with the academic culture and
                                    societal norms of Germany, ensuring a smooth transition and
                                    successful integration. Our dedicated team of experienced
                                    educators, counselors, and industry professionals are committed to
                                    providing tailored support to each student. By fostering an
                                    environment of encouragement and excellence, Bright Futures stands
                                    as a beacon for those seeking to transform their educational
                                    aspirations into reality.
                                </p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div>
                            <h3 className="text-blue-600 text-2xl font-bold">Process</h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    Admission decisions at Bright Futures are carefully considered
                                    based on a holistic evaluation of candidates. We take into
                                    account:
                                </p>
                                <ul className="text-base leading-7 list-disc list-inside md:w-5/6">
                                    <li>
                                        <strong>Academic Excellence: </strong> Strong academic
                                        performance is a fundamental criterion, showcasing your
                                        dedication to learning.
                                    </li>
                                    <li>
                                        <strong>Merit and Achievements: </strong> A track record of
                                        accomplishments, both academically and in extracurricular
                                        activities, plays a pivotal role.
                                    </li>
                                    <li>
                                        <strong>English Proficiency: </strong>Fluency in English is
                                        essential, ensuring you can fully engage in academic and social
                                        aspects of your chosen program.
                                    </li>
                                    <li>
                                        <strong>Socio-Emotional Skills: </strong> We value qualities
                                        such as resilience, adaptability, and empathy, recognizing the
                                        importance of socio-emotional skills in personal growth.{" "}
                                    </li>
                                    <li>
                                        <strong>Family Income: </strong> Bright Futures is dedicated to
                                        supporting applicants from modest backgrounds. Typically, our
                                        focus is on those with a gross annual income of less than
                                        $35,000.
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <p className="text-lg leading-7">
                                Bright Futures is more than a program; it's a commitment to
                                unlocking the potential within each student. Join us on this
                                transformative journey and let's build a brighter future together.
                                Ready to take the first step? Take a look on the application process
                                now to begin your journey with Bright Futures.
                            </p>
                            <br />
                            <br />
                            <h3 className="text-blue-600 text-2xl font-bold">Eligibility</h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    At Bright Futures, we believe in inclusivity and aim to provide
                                    opportunities to a diverse range of students. To be eligible for
                                    our program, applicants should meet the following criteria:
                                </p>
                                <ul className="text-base leading-7 list-disc list-inside md:w-5/6">
                                    <li>
                                        <strong>Educational Background: </strong> Hold a high school
                                        diploma or equivalent qualification and demonstrate a strong
                                        academic record.
                                    </li>
                                    <li>
                                        <strong>Language Proficiency: </strong> Applicants may be
                                        required to undergo language proficiency tests, such as IELTS or
                                        TOEFL. Proficiency in the English language is essential.
                                    </li>
                                    <li>
                                        <strong>Financial Need: </strong> Applicants should be able to
                                        demonstrate financial need through the application process.
                                        Bright Futures primarily supports students facing financial
                                        constraints.
                                    </li>
                                    <li>
                                        <strong>Aspiration for Education in Germany: </strong>{" "}
                                        Articulate your academic and career goals and how studying in
                                        Germany aligns with them. Genuine interest in pursuing higher
                                        education in Germany.
                                    </li>
                                    <li>
                                        <strong>Demonstrated Commitment: </strong> Provide evidence of
                                        involvement in extracurricular activities, community service, or
                                        relevant experiences. Showcase a commitment to personal and
                                        academic growth.
                                    </li>
                                </ul>
                            </div>
                            <br />
                            <br />
                            <h3 className="text-blue-600 text-2xl font-bold">Student Profile</h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    Meet Matej, a determined dreamer who envisioned studying Computer
                                    Science but faced financial constraints. Despite challenges, Matej
                                    tirelessly sought a university that could make his bachelor's
                                    degree dream a reality. Discovering Bright Futures, Matej's story
                                    highlights unique student struggles and the resilience that
                                    defines academic excellence. At Bright Futures, we value diverse
                                    academic journeys, recognizing excellence beyond conventional
                                    metrics. Matej's fluent English showcases effective communication,
                                    breaking down cultural barriers. His proactive approach,
                                    discovering opportunities and embracing Bright Futures, reflects
                                    our emphasis on leadership, initiative, and individual qualities.
                                    Matej's narrative is a testament to the transformative power of
                                    education. If you share Matej's passion, dream of a brighter
                                    future, and value individuality, Bright Futures welcomes you.
                                    Submit your application, showcase your unique strengths, and let
                                    us help turn your dreams into reality. Each person is an
                                    individual, and your journey to success starts with us. Apply Now:
                                    Matej's story echoes Bright Futures' commitment to empowering
                                    individuals with diverse backgrounds. Seize the opportunity,
                                    submit your application, and let us be a catalyst for your
                                    extraordinary journey.
                                </p>
                            </div>
                            <br />
                            <br />
                            <h3 className="text-blue-600 text-2xl font-bold">How To Apply</h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    To begin your journey with Bright Futures, please ensure you
                                    complete the online application form with precise and honest
                                    details. Additionally, prepare the required documents, which
                                    should include academic transcripts, recommendation letters, and a
                                    thoughtfully crafted personal statement. Your application and
                                    these documents are crucial steps in our thorough selection
                                    process, allowing us to better understand your unique qualities
                                    and aspirations.
                                </p>
                            </div>
                            <br />
                            <br />
                            <h3 className="text-blue-600 text-2xl font-bold">
                                Selection Process
                            </h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    Our selection process is meticulous, designed to identify students
                                    with exceptional potential. Shortlisted candidates, based on their
                                    initial applications and documents, may be invited for further
                                    stages, which could include interviews or additional assessments.
                                    This process ensures that we thoroughly evaluate each applicant's
                                    qualifications and aspirations, allowing us to make well-informed
                                    decisions in selecting the most promising individuals for the
                                    Bright Futures program.
                                </p>
                            </div>
                            <br />
                            <br />
                            <h3 className="text-blue-600 text-2xl font-bold">
                                Application Guide
                            </h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    Welcome to the first step towards a brighter future! The Bright
                                    Futures application process is designed to be thorough yet
                                    accessible, ensuring that every deserving student has the
                                    opportunity to pursue their dreams through higher education.
                                    Here's a step-by-step guide to help you navigate through our
                                    application process
                                </p>
                            </div>
                            <br />
                            <br />
                            <h3 className="text-blue-600 text-2xl font-bold">Deadlines</h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    Bright Futures opens its doors to aspiring students year-round. We
                                    operate on a continuous admissions cycle, offering flexibility to
                                    those eager to seize the opportunity for a brighter future. There
                                    is only one intake each year, ensuring that you have ample time to
                                    carefully prepare your application. Embrace the chance to join our
                                    global community of scholars, with the application deadline set
                                    for August 31st.
                                </p>
                            </div>
                            <br />
                            <br />
                            <h3 className="text-blue-600 text-2xl font-bold">Tips</h3>
                            <br />
                            <div>
                                <p className="text-lg leading-7">
                                    Embarking on the journey to Bright Futures is a step toward
                                    transformative education and a realm of endless possibilities! To
                                    ensure your application journey is as seamless as possible, we've
                                    compiled valuable tips to elevate your experience and pave the way
                                    for success:
                                </p>
                                <br />
                                <ul className="text-base leading-7 list-disc list-inside md:w-5/6">
                                    <li>
                                        <strong>Know Your Eligibility: </strong> Review eligibility
                                        criteria thoroughly.
                                    </li>
                                    <li>
                                        <strong>Provide Accurate Information: </strong> Ensure honesty
                                        and accuracy in your application details.
                                    </li>
                                    <li>
                                        <strong>Highlight Achievements: </strong> Showcase academic and
                                        extracurricular accomplishments.
                                    </li>
                                    <li>
                                        <strong>Craft a Strong Personal Statement: </strong> Express
                                        your passion, goals, and alignment with the program.
                                    </li>
                                    <li>
                                        <strong>Emphasize Language Proficiency: </strong> Highlight
                                        language skills and consider proficiency tests if needed.
                                    </li>
                                    <li>
                                        <strong>Follow Instructions: </strong> Adhere to application
                                        guidelines meticulously.
                                    </li>
                                    <li>
                                        <strong>Proofread Thoroughly: </strong> Avoid errors by
                                        carefully proofreading your application.
                                    </li>
                                    <li>
                                        <strong>Prepare for Interviews or Assessments: </strong> If
                                        shortlisted, be ready for potential interviews or assessments.
                                    </li>
                                    <li>
                                        <strong>Stay Informed: </strong> Regularly check communications
                                        from Bright Futures for updates or requests.
                                    </li>
                                    <li>
                                        <strong>Seek Guidance if Needed: </strong> Don't hesitate to ask
                                        questions or seek assistance from Bright Futures.
                                    </li>
                                </ul>
                                <br />
                                <p className="text-lg leading-7">
                                    Wishing you success on your Bright Futures application journey!
                                </p>
                            </div>
                        </div>
                    </section>
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