import Image from 'next/image'
import Props from "@/types/components/article";
import Label from "../Label";
import "./style.scss";
import VerticalDashWhite from "../../../public/vertical-dash.svg";
import VerticalDashBlack from "../../../public/vertical-dash-b.svg";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Article = ({ data, children, type }: Props) => {
    const { name, list, title, date, content, description } = data;
    return (
        <div className='article-wrapper'>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                <div className='article-content-body'>
                    <div className={`article-image-container ${type}`}>
                        {children}
                    </div>

                    <h2 className="article-title">{name}</h2>
                    <div className="article-subtitle">
                        <p>{title}</p>
                        <Image src={VerticalDashBlack} alt={'Vertical Dash'} width={6} height={20} />
                        <p>{date}</p>
                    </div>
                    <div className="article-description">
                        <p>{description}</p>
                    </div>
                    <div className="label-wrapper">
                        {
                            list.map((item: string) => {
                                return <Label name={item} key={item} />
                            })
                        }
                    </div>
                    {/* <ul>
                        {
                            content.map(ele => {
                                return <li className='article-content'>{ele}</li>
                            })
                        }
                    </ul> */}
                </div>
            </AnimationOnScroll>
        </div >
    )
}

export default Article;