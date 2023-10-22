
'use client';
import Image from 'next/image'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import ProfileImage from '../../public/profileImage.png'
import ArrowDown from '../../public/arrow-down.svg'
import Layout from '@/components/Layout'
import { GlobalAssets, LandingPage } from '@/constants'
import { useEffect, useRef, useState } from 'react'
import "./page.scss"
import Article from '@/components/Article';
import AsusImage from "../../public/asus-demo.png";
import AdvantechImage from "../../public/advantech-demo.png";
import VISAImage from "../../public/visa_image.png";
import CreattopImage from '../../public/hsuanfu6.png';
import NewTimeline from '@/components/Timeline/Timeline';

const Page = () => {
  const {
    fullname,
    subtitle,
    company,
    content,
    working_projects,
    personal_projects,
    visaData,
    asusData,
    advantechData,
    creatopData,
    imageList,
    personalProjects,
    about_me
  } = LandingPage
  const [active, setActive] = useState(0)
  const activeElement = useRef<number>(0)
  const [position, setPosition] = useState({
    home: 0,
    work: 0,
    personal: 0,
    about: 0,
  })
  const homeElement = useRef<HTMLInputElement>(null);
  const workProjectElement = useRef<HTMLInputElement>(null);
  const personalProjectElement = useRef<HTMLInputElement>(null);
  const aboutMeElement = useRef<HTMLInputElement>(null);

  const bgColorArray = [
    "pink",
    "dark-blue",
    "light-blue",
    "orange"
  ]
  const imagesArray = [
    {
      imageUrl: "/travel-cover.png",
      alt: "Taiwan Travel Guide"
    },
    {
      imageUrl: "/bike-cover.png",
      alt: "Taiwan Bike Guide"
    },
    {
      imageUrl: "/bus-cover.png",
      alt: "Taiwan Bus Guide"
    },
    {
      imageUrl: "/english4tw-cover.png",
      alt: "English for Taiwanese"
    }
  ]

  useEffect(() => {
    const home = homeElement.current?.getBoundingClientRect();
    const workPro = workProjectElement.current?.getBoundingClientRect();
    const personalPro = personalProjectElement.current?.getBoundingClientRect();
    const aboutMe = aboutMeElement.current?.getBoundingClientRect();
    if (home && workPro && personalPro && aboutMe) {
      const carry = window.scrollY;
      setPosition({
        home: home.top + carry,
        work: workPro.top + carry,
        personal: personalPro.top + carry,
        about: aboutMe.top + carry
      })
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setActive(0)
    activeElement.current = 0
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleOnScroll);
  }, [position])

  const handleOnScroll = (e: Event) => {
    const window = e.currentTarget as Window;
    const currentPosition = window.scrollY;
    if (currentPosition >= position.home && currentPosition < position.work && activeElement.current !== 0) {
      setActive(0)
      activeElement.current = 0
    } else if (currentPosition >= position.work && currentPosition < position.personal && activeElement.current !== 1) {
      setActive(1)
      activeElement.current = 1
    } else if (currentPosition >= position.personal && currentPosition < position.about && activeElement.current !== 2) {
      setActive(2)
      activeElement.current = 2
    } else if (currentPosition >= position.about && activeElement.current !== 3) {
      setActive(3)
      activeElement.current = 3
    }
  }

  return (
    <Layout navList={GlobalAssets.nav_LandingPage} currentState={active}>
      <div className="wrapper" ref={homeElement}>
        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce={true}>
          <div className='image-wrapper'><Image className='image-container' src={ProfileImage} alt={'Profile Image'} priority /></div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
          <div className='title'>
            <p>Hi I am</p><h1>{fullname}</h1>
          </div>
          <div className='subtitle'>
            <h2>A {subtitle} at </h2><h2 className='company-name'>{company}</h2>
          </div>
          <div className='content'>
            <span>Passionate about </span><h2>{content}</h2>
          </div>
          <button><a href='/resume.pdf' target="_blank" rel="noopener noreferrer">Resume</a></button>
        </AnimationOnScroll>

        <Image className='arrow-down' src={ArrowDown} width={31} height={18} alt={'Scroll Down'} />
      </div>
      <div className='full-wrapper' ref={workProjectElement}>
        <h1>{working_projects}</h1>
        <div className="experience-wrapper">
          <Article data={visaData} type="visa">
            <Image src={VISAImage} alt={'Article VISA Image'} priority className="article-image visa-image" />
          </Article>
          <Article data={asusData} type="asus">
            <Image src={AsusImage} alt={'Article Asus Image'} priority className="article-image asus-image" />
          </Article>
          <Article data={advantechData} type="advantech">
            <Image src={AdvantechImage} alt={'Article Advantech Image'} priority className="article-image advantech-image" />
          </Article>
          <Article data={creatopData} type="creatop">
            <Image src={CreattopImage} alt={'Article Advantech Image'} priority className="article-image creatop-image" />
          </Article>
        </div>
      </div>
      <div className='full-wrapper' ref={personalProjectElement}>
        <h1>{personal_projects}</h1>
        <div className="experience-wrapper">
          {
            personalProjects.map((project, index) => {
              const imageClassName = `${project.type}-image`
              return (
                <Article data={project} type={project.type}>
                  <Image src={imagesArray[index].imageUrl} alt={imagesArray[index].alt} priority className={`article-image ${imageClassName}`} width={400} height={300} />
                </Article>
              )
            })
          }
        </div>
      </div>
      <div className='full-wrapper space-top-40' ref={aboutMeElement}>
        <h1>{about_me}</h1>
        <NewTimeline />
      </div>
    </Layout>

  )
}

export default Page