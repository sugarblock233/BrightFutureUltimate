import React from 'react';

const Overall = () => {
    // 总览内容
    return <div>
        <br></br>
        <br></br>
        <h2 id="content-header" className="justify-center text-4xl font-bold">
            About us-Overall
        </h2>
        <br/>
        <div className="flex flex-col text-xl leading-normal gap-y-8">
            <p className="indent-8">
                Bright Future is a volunteer-driven startup organization dedicated to
                assisting students in Germany who face financial difficulties in their
                studies. Despite being a burgeoning team with just a few members and
                no physical office, we firmly believe that talent and creativity are
                the driving forces behind our progress.
            </p>
            <p className="indent-8">
                Our team consists of 4 passionate volunteers who form the backbone of
                Bright Future. These volunteers play a vital role in administrative
                and organizational work, and they are key in planning and executing
                various support projects. Their work includes, but is not limited to:
            </p>
            <ul className="list-disc list-inside">
                <div className="flex flex-col leading-normal pl-10 gap-y-4">
                    <li>
                        Academic Support and Tutoring: We offer one-on-one tutoring to
                        students who struggle academically, helping them overcome
                        educational barriers and improve their grades.
                    </li>
                    <li>
                        Financial Aid Consultation: We assist students in understanding
                        and applying for available financial aid and scholarships to
                        alleviate their economic burdens.
                    </li>
                    <li>
                        Community Building: Through organizing activities and workshops,
                        we aim to establish a supportive community, ensuring students do
                        not feel alone and receive encouragement and help throughout their
                        academic journey.
                    </li>
                    <li>
                        Career Planning and Guidance: We provide guidance and advice for
                        career development, helping students prepare for their future
                        careers.
                    </li>
                </div>
            </ul>
            <p className="indent-8">
                Our goal is to not only assist students in achieving academic success
                through these efforts but also to offer more support and guidance for
                their lives in Germany. As a public welfare organization, Bright
                Future relies on donations and support from all sectors of society,
                enabling us to continue providing essential help to these students.
            </p>
            <p className="indent-8">
                We understand the challenges of studying abroad, especially for those
                facing financial difficulties. Hence, we are committed to creating a
                warm and inclusive environment, where all students have the
                opportunity to realize their academic and career aspirations.
            </p>
        </div>
    </div>;
};

export default Overall;
