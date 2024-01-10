import React from 'react';

const Goal = () => {
    // 目标内容
    return <div>
        <>

            <h2 id="content-header" className="justify-center text-4xl font-bold">
                Our Goal
            </h2>
            <h4 id="content-bheader" className="justify-center text-2xl font-medium">
                ——Empowering Students for a Brighter Tomorrow
            </h4>
            <br />
            <div className="flex flex-col text-xl leading-normal gap-y-8">
                <p className="indent-8">
                    At Bright Future, our goals are rooted in the belief that every student
                    deserves an equal opportunity to excel, irrespective of their financial
                    background. We are dedicated to turning this belief into reality through
                    our concerted efforts in the following areas:
                </p>
                <ul className="list-disc list-inside">
                    <div className="flex flex-col leading-normal pl-10 gap-y-4">
                        <li>
                            Breaking Educational Barriers: We strive to offer personalized
                            academic support and tutoring, enabling students to overcome
                            challenges in their studies and achieve academic excellence.
                        </li>
                        <li>
                            Easing Financial Struggles: Understanding the complexities of
                            financial aid, we commit to providing comprehensive consultation
                            services. Our aim is to guide students through the maze of
                            scholarships and financial aid, reducing their financial burdens and
                            opening doors to new educational opportunities.
                        </li>
                        <li>
                            Fostering a Supportive Community: We believe in the power of
                            community. By organizing workshops and activities, we aim to create a
                            nurturing and supportive environment where students can find
                            encouragement, build networks, and feel a sense of belonging during
                            their academic journey.
                        </li>
                        <li>
                            Guiding Career Paths: Recognizing the importance of career planning,
                            we offer guidance and advice tailored to individual needs. Our goal is
                            to help students not only envision but also take concrete steps
                            towards their future careers.
                        </li>
                        <li>
                            Inclusivity and Support: We are dedicated to creating an inclusive
                            atmosphere where students from diverse backgrounds can thrive. Our
                            focus is on offering holistic support, ensuring that every student has
                            the opportunity to realize their academic and professional dreams in
                            Germany.
                        </li>
                        <li>
                            Community Engagement and Growth: As a volunteer-driven organization,
                            we actively seek to expand our community engagement. We aim to
                            collaborate with various sectors of society, harnessing their support
                            to grow our initiatives and reach more students in need.
                        </li>
                    </div>
                </ul>
                <p className="indent-8">
                    By achieving these goals, Bright Future aspires to be a beacon of hope and
                    a catalyst for change in the lives of students in Germany. Our vision is
                    to see a world where every student, regardless of their financial
                    situation, has the opportunity to shine and achieve their full potential.
                </p>
            </div>
        </>

    </div>;
};

export default Goal;
