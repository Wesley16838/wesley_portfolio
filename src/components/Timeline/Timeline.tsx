import Image from 'next/image'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { LandingPage } from '@/constants';
import TimeLine from '../../../public/timeline_img.svg';
import "./style.scss";

const NewTimeline = () => {
    const { aboutMe } = LandingPage;

    return (
        <div className='about-me-wrapper'>
            <Image src={TimeLine} alt={"Timeline"} className="about-me-bgimage" />
            {
                aboutMe.map(item => {
                    const className = `about-me-container ${item.position} ${item.category}`
                    return (
                        <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                            <div className={className}>
                                <h3 className='about-me-title'>{item.title}</h3>
                                <h4 className='about-me-subtitle'>{item.subtitle}</h4>
                                <h4 className='about-me-subtitle bold'>{item.time} {item.location}</h4>
                                {
                                    item?.list && item.list.map((el: any, index: number) => {
                                        return (
                                            <div className='content-container' key={`${index}-master`}>
                                                {'title' in el && <h5 className='content-title'>{el.title}</h5>}
                                                <p className='content-subtitle'>{el.content}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </AnimationOnScroll>
                    )
                })
            }
        </div>
    )
}

export default NewTimeline