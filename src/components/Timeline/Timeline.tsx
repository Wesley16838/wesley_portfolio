import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { LandingPage } from "@/constants";
import TimeLine from "../../../public/timeline_img.svg";
import ProjectDot from "../../../public/project_dot.png";
import EducationDot from "../../../public/education_dot.png";
import InternshipDot from "../../../public/internship_dot.png";
import FulltimeDot from "../../../public/fulltime_dot.png";

import "./style.scss";
import useWindowSize from "@/hooks/useWindowSize";

const NewTimeline = () => {
  const { aboutMe } = LandingPage;
  const { width } = useWindowSize();
  let lineLength = 0;
  if (width >= 1200) {
    lineLength = 1850;
  } else if (width >= 768) {
    lineLength = 2000;
  } else if (width >= 568) {
    lineLength = 2150;
  } else if (width >= 525) {
    lineLength = 1450;
  } else if (width >= 490) {
    lineLength = 1500;
  } else if (width >= 416) {
    lineLength = 1650;
  } else {
    lineLength = 1700;
  }

  return (
    <div className="about-me-part">
      <div className="about-me-dots-wrapper">
        <div className="about-me-dots">
          <Image src={EducationDot} alt={"Education Dot"} />
          <p>Education</p>
        </div>
        <div className="about-me-dots">
          <Image src={InternshipDot} alt={"Internship Dot"} />
          <p>Internship</p>
        </div>
        <div className="about-me-dots">
          <Image src={ProjectDot} alt={"Project Dot"} />
          <p>Personal Projects</p>
        </div>
        <div className="about-me-dots">
          <Image src={FulltimeDot} alt={"Full time Dot"} />
          <p>Full-Time Job</p>
        </div>
      </div>
      <div className="about-me-wrapper">
        <Image
          src={TimeLine}
          alt={"Timeline"}
          className="about-me-bgimage"
          style={{ height: `${lineLength}px` }}
        />
        {aboutMe.map((item) => {
          const className = `about-me-container ${
            width <= 568 ? "right" : item.position
          } ${item.category}`;
          return (
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOnce={true}
              key={`${item.title}-master`}
            >
              <div className={className}>
                <h3 className="about-me-title">{item.title}</h3>
                <h4 className="about-me-subtitle">{item.subtitle}</h4>
                <h4 className="about-me-subtitle bold">
                  {item.time} {item.location}
                </h4>
                {item?.list &&
                  item.list.map((el: any, index: number) => {
                    return (
                      <div
                        className="content-container"
                        key={`${index}-master`}
                      >
                        {"title" in el && (
                          <h5 className="content-title">{el.title}</h5>
                        )}
                        <p className="content-subtitle">{el.content}</p>
                      </div>
                    );
                  })}
              </div>
            </AnimationOnScroll>
          );
        })}
      </div>
    </div>
  );
};

export default NewTimeline;
