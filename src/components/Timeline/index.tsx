import Image from 'next/image'
import TimelineImg from "../../../public/timeline.svg";
import { LandingPage } from '@/constants'
import { Experience } from '@/types/components/tooltip';
import Tooltip from '../Tooltip';
import "./style.scss";

const Timeline = () => {
    const { experience } = LandingPage
    const { master, education, work, project } = experience
    return (
        <div className='about-me-container'>
            <div className='about-me-title-wrapper'>
                <div className='about-me-title-container'><p>Master</p></div>
                <div>
                    {
                        master.map((item: Experience, index: number) => {
                            return (
                                <div className="about-me-button" id="master" key={`${index}-master`}>
                                    <Tooltip data={item} position="bottom" />
                                </div>

                            )
                        })
                    }
                </div>

            </div>
            <div className='about-me-title-wrapper'>
                <div className='about-me-title-container'><p>Work</p></div>
                <div>
                    {
                        work.map((item: Experience, index: number) => {
                            return (
                                <div className="about-me-button" id="work" key={`${index}-work`}>
                                    <Tooltip data={item} position="bottom" />
                                </div>

                            )
                        })
                    }
                </div>

            </div>
            <div className='about-me-title-wrapper'>
                <div className='about-me-title-container'><p>Education</p></div>
                <div>
                    {
                        education.map((item: Experience, index: number) => {
                            return (
                                <div className="about-me-button" id="education" key={`${index}-education`}>
                                    <Tooltip data={item} position="bottom" />
                                </div>

                            )
                        })
                    }
                </div>

            </div>
            <div className='about-me-title-wrapper'>
                <div className='about-me-title-container'><p>Project</p></div>
                <div>
                    {
                        project.map((item: Experience, index: number) => {
                            return (
                                <div className="about-me-button" id="projects" key={`${index}-projects`}>
                                    <Tooltip data={item} position="top" />
                                </div>

                            )
                        })
                    }
                </div>

            </div>
            <Image src={TimelineImg} alt={"Timeline"} className="about-me-timeline" />
        </div>
    )
}

export default Timeline;