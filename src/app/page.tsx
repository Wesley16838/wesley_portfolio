
'use client';
import Image from 'next/image'
import ProfileImage from '../../public/profile-image.png'
import ArrowDown from '../../public/arrow-down.svg'
import Layout from '@/components/Layout'
import { GlobalAssets, LandingPage } from '@/constants'
import { useState } from 'react'
import "./page.scss"
import Article from '@/components/Article';
import AsusImage from "../../public/asus-demo.png";
import AdvantechImage from "../../public/advantech-demo.png";
import Carousel from '@/components/Carousel';

const Page = () => {
  const { fullname, subtitle, content, working_projects, personal_projects, asusData, advantechData, creatopData, imageList, personalProjects } = LandingPage
  const [active, setEffect] = useState(0)
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
  return (
    <Layout navList={GlobalAssets.navList_LandingPage} currentState={active}>
      <div className="wrapper">
        <div className="left-wrapper">
          <div className='title'>
            <span>Hi I am</span><h1>{fullname}</h1>
          </div>
          <div className='subtitle'>
            <span>An</span><h2>{subtitle}</h2>
          </div>
          <div className='content'>
            <span>Passionate about </span><h2>{content}</h2>
          </div>
        </div>
        <div className="right-wrapper">
          <div className='image-border' >
            <Image className='image-container' src={ProfileImage} width={325} height={579} alt={'Profile Image'} priority />
          </div>
        </div>
        <Image className='arrow-down' src={ArrowDown} width={31} height={18} alt={'Scroll Down'} />
      </div>
      <div className='full-wrapper'>
        <h1>{working_projects}</h1>
        <div className='grid-half-columns'>
          <div className='asus-container'>
            <Article data={asusData} mode={true} >
              <Image src={AsusImage} alt={'Article Asus Image'} priority fill objectFit={'contain'} />
            </Article>
          </div>
          <div className='advantech-container'>
            <Article data={advantechData} mode={false}>
              <Image src={AdvantechImage} alt={'Article Advantech Image'} priority fill objectFit={'contain'} />
            </Article>
          </div>
        </div>
        <div className='creatop-container'>
          <Article data={creatopData} mode={false}>
            <Carousel data={imageList} />
          </Article>
        </div>
      </div>
      <div className='full-wrapper'>
        <h1>{personal_projects}</h1>
        <div className="full-grid-wrapper">
          {
            personalProjects.map((project, index) => {
              return (
                <div key={project.name} className={`grid-container bg--${bgColorArray[index]}`}>
                  <Article data={project} mode={bgColorArray[index] == "dark-blue"}>
                    <Image src={imagesArray[index].imageUrl} alt={imagesArray[index].alt} priority fill objectFit={'contain'} />
                  </Article>
                </div>
              )
            })
          }
        </div>
      </div>

    </Layout>

  )
}

export default Page