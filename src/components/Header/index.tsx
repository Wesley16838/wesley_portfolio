import Image from 'next/image'
import Logo from '../../../public/logo.svg'
import './style.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <Image src={Logo} width={64} height={64} alt={'Logo Image'} />
            </div>
        </div>
    )
}

export default Header