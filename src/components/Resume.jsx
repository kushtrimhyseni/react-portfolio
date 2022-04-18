import React from "react";
import "../css/portfolio.css";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Resume = () => {
  const [resume, setResume] = useState([]);

  useEffect(() => {
    const resumeRef = collection(db, "resume");
    const getDataFromResume = async () => {
      const resumeData = await getDocs(resumeRef);
      setResume(resumeData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDataFromResume();
  }, []);

  return (
    <div>
      <section
        id="resume"
        className="resume max-w-[1140px] mx-auto p-6 md:p-0 mt-4"
      >
        {resume.map((info) => {
          const starlabs = info.currentjob.trim().split(".");
          const gentli = info.gentli.trim().split(".");
          return (
            <div className="container p-6 md:p-0">
              <div className="section-title">
                <h2>Resume</h2>
                <p>{info.intro}</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full" data-aos="fade-up">
                  <h3 className="resume-title">Sumary</h3>
                  <div className="resume-item pb-0">
                    <h4>Kushtrim Hyseni</h4>
                    <p>
                      <em>{info.about}</em>
                    </p>
                    <ul className="mt-2">
                      <li>{info.address}</li>
                      <li>{info.tel}</li>
                      <li>{info.email}</li>
                    </ul>
                  </div>
                  <h3 className="resume-title">Education</h3>
                  <div className="resume-item">
                    <h4>Master of Computer Science &amp; Engineering</h4>
                    <h5>SEP 2019 - CURRENT</h5>
                    <p>
                      <em>{info.university}</em>
                    </p>
                    <p className="mt-2">{info.abouteducation}</p>
                  </div>
                  <div className="resume-item">
                    <h4>Bachelor of of Computer Science &amp; Engineering</h4>
                    <h5>2010 - 2016</h5>
                    <p>
                      <em>{info.university}</em>
                    </p>
                    <p className="mt-2">{info.abouteducation}</p>
                  </div>
                  <div className="resume-item">
                    <h4>Mobile Application &amp; Technology</h4>
                    <h5>OCT 2019 - JAN 2020</h5>
                    <p>
                      <em>{info.university}</em>
                    </p>
                    <p className="mt-2">{info.abouteducation}</p>
                  </div>
                  <div className="resume-item">
                    <h4>
                      CCNA Discovery:Networking for Home &amp; Small Business
                    </h4>
                    <h5>JUL 2012 - SEP 2012</h5>
                    <p>
                      <em>AUK(The American University in Kosovo)</em>
                    </p>
                    <p className="mt-2">{info.abouteducation}</p>
                  </div>
                </div>
                <div className="w-full" data-aos="fade-up" data-aos-delay="100">
                  <h3 className="resume-title">Professional Experience</h3>
                  <div className="resume-item">
                    <h4>Web Developer Front/Back End</h4>
                    <h5>2020 - Present</h5>
                    <p>
                      <em>StarLabs ,Prishtine</em>
                    </p>
                    <ul>
                      {starlabs.map((job) => {
                        return <li className="mt-2">{job}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="resume-item">
                    <h4>Chief of Logistics</h4>
                    <h5>2016 - 2019</h5>
                    <p>
                      <em>Gentli Shoes</em>
                    </p>
                    <ul>
                      {gentli.map((job) => {
                        return <li className="mt-2">{job}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="resume-item">
                    <h4>RECOMMENDATIONS</h4>
                    <ul>
                      <li className="mt-2">{info.starlabsceo}</li>
                      <p>Starlabs</p>
                      <li className="mt-2">{info.gentliceo}</li>
                      <p>Gentli Shoes</p>
                      <li className="mt-2">{info.piceo}</li>
                      <p>Pi Communications</p>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Resume;
