import Image from 'next/image'
import Props from "@/types/components/article";
import Label from "../Label";
import "./style.scss";
import VerticalDashWhite from "../../../public/vertical-dash.svg";
import VerticalDashBlack from "../../../public/vertical-dash-b.svg";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Article = ({ data, mode, children, type }: Props) => {
    const { name, list, title, date, content } = data
    const theme = mode ? "article-wrapper__dark" : "article-wrapper__light"
    return (
        <div className={`${theme} ${type} flex-column`}>
            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
                <h2>{name}</h2>

                <div className="label-wrapper">
                    {
                        list.map((item: string) => {
                            return <Label name={item} key={item} />
                        })
                    }
                </div>

                <div className="article-subtitle-wrapper">
                    <h5>{title}</h5>
                    <Image src={mode ? VerticalDashWhite : VerticalDashBlack} alt={'Vertical Dash'} width={6} height={20} />
                    <h5>{date}</h5>
                </div>
                <p className="article-content">{content}</p>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true} className="article-image-wrapper">
                {children}
            </AnimationOnScroll>


        </div >
    )
}

export default Article;