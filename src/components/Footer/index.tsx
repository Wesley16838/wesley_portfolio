import Image from 'next/image'
import { FooterAssets } from "@/constants";
import Logo from '../../../public/logo.png'
import Instagram from '../../../public/instagram.svg'
import Facebook from '../../../public/facebook.svg'
import LinkedIn from '../../../public/linkedin.svg'
import "./style.scss"

const Footer = () => {
    const { title, copyright } = FooterAssets
    return (
        <div className="footer-wrapper">
            <h1>{title}</h1>
            <Image src={Logo} width={100} height={100} alt={'Logo Image'} />
            <div className='flex-row gap-10 logo-wrapper'>
                <Image src={Instagram} width={48} height={48} alt={'Instagram'} />
                <Image src={LinkedIn} width={48} height={48} alt={'LinkedIn'} />
                <Image src={Facebook} width={48} height={48} alt={'Facebook'} />
            </div>
            <h5>{copyright}</h5>
        </div>
    )
}

export default Footer;