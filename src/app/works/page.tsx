import Image from 'next/image'
import Layout from '@/components/Layout'
import VisaImage from '../../../public/visa_work_image.png';
import VisaIcon from '../../../public/visa_icon.svg';
import './style.scss';
import Label from '@/components/Label';

const WorkPage = () => {
    return <Layout>
        <div className="workpage-wrapper">
            <div className='work-wrapper'>
                <div className='topic-wrapper visa-wrapper'>
                    <div className="flex-row align-center justify-conter gap-10">
                        <h2>VISA</h2> <Image src={VisaIcon} alt="visa icon" />
                    </div>
                    <h3>Design Engineer @ Visa User Experience</h3>
                    <h3 className='weight-normal'>Aug 2021 - Present | Austin, TX</h3>
                    <div className='overview-wrapper'>
                        <h4>Overview</h4>
                        <ul>
                            <li>- Rebuilt the Visa Digital Commerce App and showcased it to over 2,000 industry clients at the Visa Payments Forum</li>
                            <li>- Integrated gesture accessibility into 'Tap to Phone,' facilitating individuals with disabilities in entering tips and PINs</li>
                            <li>- Played a pivotal role in close collaboration with the Equinox team to craft an app tailored for Point of Sale terminals</li>
                            <li>- Collaborated with the Crypto team to build a global tokennization demo platform for HSBC and Hang Seng Bank</li>
                            <li>- Instructed 20-person teams on React Router, WebSocket, React Query, Mapbox, and Mobile Accessibility</li>
                        </ul>
                    </div>
                    <div className="flex-column gap-15">
                        <h4>Key Skills</h4>
                        <div className='flex-row gap-10'>
                            <Label name="ReactJS" />
                            <Label name="NextJS" />
                            <Label name="ContextAPI" />
                            <Label name="Angular" />
                            <Label name="JavaScript" />
                            <Label name="TypeScript" />
                            <Label name="jQuery" />
                            <Label name="Flutter" />
                            <Label name="WebSocket" />
                        </div>
                    </div>

                </div>
                <div className='topic-image-wrapper'>
                    <Image src={VisaImage} className='visa-image' alt={'Visa Image'} />
                </div>
            </div>
        </div>

    </Layout>
}

export default WorkPage;