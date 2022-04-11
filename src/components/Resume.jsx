import React from "react";
import "../css/portfolio.css";
import { resume } from "./Data";
const Resume = () => {
  return (
    <div>
      <section id="resume" class="resume max-w-[1140px] mx-auto p-6">
        <div class="container">
          <div class="section-title">
            <h2>Resume</h2>
            <p>{resume.intro}</p>
          </div>

          <div class="flex flex-col lg:flex-row gap-4">
            <div class="w-full" data-aos="fade-up">
              <h3 class="resume-title">Sumary</h3>
              <div class="resume-item pb-0">
                <h4>Kushtrim Hyseni</h4>
                <p>
                  <em>
                    I am a talented,ambitious and hardworking individual,with
                    broad skills and experience. Furthermore, I am able to
                    handle multiple tasks on a daily basis. I have experience
                    working as part of a team and individually.
                  </em>
                </p>
                <ul>
                  <li>Bernice e Eperme St.Prizreni No.29, Prishtine</li>
                  <li>0(49) 605-405</li>
                  <li>info@kushtrimhyseni.com</li>
                </ul>
              </div>

              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>Master of Computer Science &amp; Engineering</h4>
                <h5>SEP 2019 - CURRENT</h5>
                <p>
                  <em>University for Business and Technology</em>
                </p>
                <p>
                  Qui deserunt veniam. Et sed aliquam labore tempore sed
                  quisquam iusto autem sit. Ea vero voluptatum qui ut
                  dignissimos deleniti nerada porti sand markend
                </p>
              </div>
              <div class="resume-item">
                <h4>Bachelor of of Computer Science &amp; Engineering</h4>
                <h5>2010 - 2016</h5>
                <p>
                  <em>University for Business and Technology</em>
                </p>
                <p>
                  Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                  reiciendis et quis Eius vel ratione eius unde vitae rerum
                  voluptates asperiores voluptatem Earum molestiae consequatur
                  neque etlon sader mart dila
                </p>
              </div>
              <div class="resume-item">
                <h4>Mobile Application &amp; Technology</h4>
                <h5>OCT 2019 - JAN 2020</h5>
                <p>
                  <em>University for Business and Technology</em>
                </p>
                <p>
                  Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                  reiciendis et quis Eius vel ratione eius unde vitae rerum
                  voluptates asperiores voluptatem Earum molestiae consequatur
                  neque etlon sader mart dila
                </p>
              </div>
              <div class="resume-item">
                <h4>CCNA Discovery:Networking for Home &amp; Small Business</h4>
                <h5>JUL 2012 - SEP 2012</h5>
                <p>
                  <em>AUK(The American University in Kosovo)</em>
                </p>
                <p>
                  Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                  reiciendis et quis Eius vel ratione eius unde vitae rerum
                  voluptates asperiores voluptatem Earum molestiae consequatur
                  neque etlon sader mart dila
                </p>
              </div>
            </div>
            <div class="w-full" data-aos="fade-up" data-aos-delay="100">
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>Web Developer Front/Back End</h4>
                <h5>2020 - Present</h5>
                <p>
                  <em>StarLabs ,Prishtine</em>
                </p>
                <ul>
                  <li>Writing efficient code.</li>
                  <li>
                    Creating websites/a website using standard HTML/CSS
                    practices.{" "}
                  </li>
                  <li>
                    Working closely with web designers and programmers to
                    produce the website
                  </li>
                  <li>
                    Implementing contingency plans in case the website goes down
                  </li>
                  <li>
                    Maintaining and expanding/enhancing the website once built
                  </li>
                  <li>Managing a team might also be part of the job role</li>
                  <li>
                    Researching different software programs, maintaining
                    software documentation
                  </li>
                </ul>
              </div>
              <div class="resume-item">
                <h4>Chief of Logistics</h4>
                <h5>2016 - 2019</h5>
                <p>
                  <em>Gentli Shoes</em>
                </p>
                <ul>
                  <li>Select carriers and negotiate contracts and rates.</li>
                  <li>Plan and monitor inbound and outgoing deliveries.</li>
                  <li>
                    Supervise logistics, warehouse, transportation, and customer
                    services.
                  </li>
                  <li>
                    Organize warehouse, label goods, plot routes, and process
                    shipments.
                  </li>
                  <li>Respond to any issues or complaints.</li>
                  <li>
                    Research ideal shipping techniques, routing, and carriers.
                  </li>
                  <li>
                    Work with other departments to incorporate logistics with
                    company procedures and operations.
                  </li>
                  <li>
                    Update and evaluate metrics to assess performance and
                    implement enhancements.
                  </li>
                </ul>
              </div>
              <div class="resume-item">
                <h4>RECOMMENDATIONS</h4>
                <ul>
                  <li>Darsej Rizaj-/CEO-darsej@starlabspro.com</li>
                  <p>Starlabs</p>
                  <li>Albert Hoxha-/CFO-(+383)44187697.</li>
                  <p>Gentli Shoes</p>
                  <li>Labinot Gashi-/COO-(+383)49690816</li>
                  <p>Pi Communications</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
