import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from './projectType.module.css'
import Aos from 'aos'

export const Projecttype = (props) => {
  const [openproject, setProject] = useState(false);
  const clickHandler = () => {
    setProject((prev) => {
      return !prev;
    });
  };
  useEffect(()=>{
    Aos.refresh();
  },[openproject])
  return (
    <div className="row">
      <div
        className={`col-12 d-flex justify-content-between pt-2 `}
        onClick={clickHandler}
        style={{ cursor: "pointer" }}
      >
        <p className="h5 ">{props.name}</p>
        <p className="h4 ">+</p>
      </div>
      <div
        className="bg-primary w-100 col-12 me-3"
        style={{ backgroundColor: "red", height: "1px" }}
      ></div>
      <div className={`col-12 ${
                openproject ? `d-none` : ''
              } `+style.animate}>
        {props.projects.map((x, i) => {
          return (
            <div
              className={`row   border rounded-top rounded-bottom my-3 mx-1 py-2`}
              key={i}
              data-aos="fade-right"
                data-aos-offset="100"
                data-aos-delay="200"
                data-aos-duration="1500"
            >
              <div className="col-lg-3 col-md-12 justify-content-around d-flex flex-column py-4">
                <img src={`${x.imageLink}`} className={`w-100`}></img>
                <div>
                  <div className="me-3">
                    <a className="me-1" href={`${x.projectlink}`}><u>Project link</u></a>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      size="xs"
                    />
                  </div>
                    <div className="me-2">
                      <a className="me-1" href={`${x.githublink}`}><u>Github</u></a>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        size="xs"
                      />
                    </div>
                </div>
              </div>
              <div className={`col-lg-9 col-md-12`}>
                <p className="h4">{x.title}</p>
                <p className=" col-12">{x.description}</p>
                {x.tech.map((technology, i) => {
                  return (
                    <p
                      className="d-inline-block rounded-top rounded-bottom px-2 me-2"
                      style={{ backgroundColor: `black`, color: `white` }}
                      key={i}
                    >
                      {technology}
                    </p>
                  );
                })}
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
