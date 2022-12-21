import { useEffect, useState } from "react";
import Ranger from "../components/ranger";
import skills, { about, education, projects } from "../modals/seeds";
import style from "../styles/Home.module.css";
import { Projecttype } from "../components/projectType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGears,
  faPen,
  faRectangleList,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { Education } from "../components/Educations";

export default function Home() {
  const [skillsArray, setskills] = useState([]);
  useEffect(() => {
    setskills(() => {
      return skills;
    });
  }, []);

  return (
    <div className="container-fluid row" style={{ backgroundColor: "#0D1116" }}>
      {/* navbar */}
      <div
        className="col-3 vh-100 sticky-top"
        style={{ backgroundColor: "#000028" }}
      >
        <div className="d-flex flex-column justify-content-center h-100 text-center">
          <img src="1.png" className="w-100"></img>
          <p className="my-5 display-6">Naman Dhingra</p>
          <ul className="list-group list-unstyled h4">
            <li className={`mx-3 my-1 text-center `+style.lihover} onClick={() => window.location.replace("/#about")}>About</li>
            <li className={`mx-3 my-1 text-center `+style.lihover} onClick={() => window.location.replace("/#skills")}>Skills</li>
            <li className={`mx-3 my-1 text-center `+style.lihover} onClick={() => window.location.replace("/#projects")}>Projects</li>
            <li className={`mx-3 my-1 text-center `+style.lihover} onClick={() => window.location.replace("/#education")}>Education</li>
            <li className={`mx-3 my-1 text-center `+style.lihover} onClick={() => window.location.replace("/#contact")}>Contact</li>
          </ul>
        </div>
      </div>

      <div className="col-9 pt-5 px-4">
        <div className="row">

          {/* About */}
          <div className="col-12" id="about">
            <div className="display-3">
              <FontAwesomeIcon
                icon={faPen}
                size="2xs"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
              />
              <span className="mx-4">About</span>
            </div>
            <div className="row">
              <div className="col-1 d-flex justify-content-center">
                <div
                  className="h-100"
                  style={{ width: "0.2rem", backgroundColor: "#8656DA" }}
                  data-aos="fade-down"
                  data-aos-offset="100"
                  data-aos-delay="100"
                  data-aos-duration="2000"
                ></div>
              </div>
              <div className="col-11">
                <div className="ps-2">
                  <p className="font-weight-normal">{about.line1}</p>
                  <p className="font-weight-normal">{about.line2}</p>
                  <p>{about.line3}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="col-12" id="skills">
            <div className="display-3">
              <FontAwesomeIcon
                icon={faGears}
                size="2xs"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1500"
              />
              <span className="mx-4">Skills</span>
            </div>
            <div className="row">
              <div className="col-1 d-flex justify-content-center">
                <div
                  className="h-100"
                  style={{ width: "0.2rem", backgroundColor: "#8656DA" }}
                  data-aos="fade-down"
                  data-aos-offset="100"
                  data-aos-delay="100"
                  data-aos-duration="2000"
                ></div>
              </div>
              <div className="col-11">
                <div className="row px-4">
                  {skillsArray.map((x, i) => {
                    return (
                      <div className={`col-lg-6 col-md-12 mb-3`} key={i}>
                        <div className="row">
                          <p className={`${style.skill}  col-12`}>{x.title}</p>
                          <Ranger val={x.rating} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="col-12" id="projects">
            <div className="display-3">
              <FontAwesomeIcon
                icon={faRectangleList}
                size="2xs"
                data-aos="fade-right"
                data-aos-offset="700"
                data-aos-delay="50"
                data-aos-duration="1500"
              />
              <span className="mx-4">Projects</span>
            </div>
            <div className="row">
              <div className="col-1 d-flex justify-content-center">
                <div
                  className="h-100"
                  style={{ width: "0.2rem", backgroundColor: "#8656DA" }}
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-delay="100"
                  data-aos-duration="2000"
                ></div>
              </div>
              <div className="col-11 my-3">
                <div
                  className="row px-4 py-3 rounded-top rounded-bottom"
                  style={{ backgroundColor: "#161B22" }}
                >
                  <div className="col-12">
                    {projects.map((x, i) => {
                      return (
                        <Projecttype
                          key={i}
                          name={x.name}
                          projects={x.projects}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="col-12" id="education">
            <div className="display-3">
              <FontAwesomeIcon
                icon={faUserGraduate}
                size="2xs"
                data-aos="fade-right"
                data-aos-offset="1000"
                data-aos-delay="100"
                data-aos-duration="1500"
              />
              <span className="mx-4">Education</span>
            </div>
            <div className="row">
              <div className="col-1 d-flex justify-content-center">
                <div
                  className="h-100"
                  style={{ width: "0.2rem", backgroundColor: "#8656DA" }}
                  data-aos="fade-down"
                  data-aos-offset="0"
                  data-aos-delay="100"
                  data-aos-duration="2000"
                ></div>
              </div>
              <div className="col-11 my-4">
                {education.map((x, i) => {
                  return <Education content={x} key={i} />;
                })}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="col-12" id="contact">
            <div className="display-3">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2xs"
                data-aos="fade-right"
                data-aos-offset="1250"
                data-aos-delay="50"
                data-aos-duration="1500"
              />
              <span className="mx-4">Contact</span>
            </div>
            <div className="row">
              <div className="col-1 d-flex justify-content-center">
                <div
                  className="h-100"
                  style={{ width: "0.2rem", backgroundColor: "#8656DA" }}
                  data-aos="fade-down"
                  data-aos-offset="0"
                  data-aos-delay="100"
                  data-aos-duration="2000"
                ></div>
              </div>
              <div className="col-11">
                <div className="px-4">
                  <p>
                    If you would like to get in touch with me,feel free to
                    contact through my mail-
                    <b>namandhingra90@gmail.com</b>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="col-12 border ms-2 my-4 px-5">
            <div className="row">
              <div className="col-12 text-center">
                <p className="h4 my-3">My profiles</p>
                <ul className="list-unstyled text-center my-3">
                  <li className={`d-inline-block mx-3 h5 `+style.lifont}><a href="https://leetcode.com/namandhingra90/" className={style.anch}>Leetcode</a></li>
                  <li className={`d-inline-block mx-3 h5 `+style.lifont}><a href="https://github.com/namandhingra19" className={style.anch}>Github</a></li>
                  <li className={`d-inline-block mx-3 h5 `+style.lifont}><a href="https://auth.geeksforgeeks.org/user/namandhingra90/" className={style.anch}>GFG</a></li>
                  <li className={`d-inline-block mx-3 h5 `+style.lifont}><a href="https://www.linkedin.com/in/naman-dhingra-10490911a" className={style.anch}>Linkedin</a></li>
                  <li className={`d-inline-block mx-3 h5 `+style.lifont}><a href="https://www.codechef.com/users/namandhingra" className={style.anch}>Codechef</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
