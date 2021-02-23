import React, {createRef, useContext} from "react";
import {Fade, Slide, Zoom} from "react-reveal";
import LightSpeed from 'react-reveal/LightSpeed';
import "./EducationCard.css";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  const imgRef = createRef();

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
  const {isDark} = useContext(StyleContext);
  return (
    <div  style={{padding:"10px"}}>
    <Fade top duration={1000}>


       <div className={isDark ? "experience-card-dark" : "experience-card"}>
            <div  className="experience-banner">
              <div className="experience-blurred_div"></div>
              <div className="experience-div-company">
              <LightSpeed top cascade>
                <h5 className="experience-text-company">{school.schoolName}</h5>
                 </LightSpeed>
              </div>

              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="experience-roundedimg"
                 src={school.logo}
                 alt={school.schoolName}

              />
            </div>
            <div className="experience-text-details">
              <h5
                className={
                  isDark
                    ? "experience-text-role dark-mode-text"
                    : "experience-text-role"
                }
              >
                {school.duration}
              </h5>
              <h5
                className={
                  isDark
                    ? "experience-text-date dark-mode-text"
                    : "experience-text-date"
                }
              >
                 {school.subHeader}
              </h5>
              <p
                className={
                  isDark
                    ? "subTitle experience-text-desc dark-mode-text"
                    : "subTitle experience-text-desc"
                }
              >
               {school.desc}
              </p>
               <Slide left duration={2000}>

              </Slide>
            </div>
          </div>
           </Fade>
    </div>
  );
}
