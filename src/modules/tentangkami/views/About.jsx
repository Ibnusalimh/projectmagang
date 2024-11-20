import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import CardTitle from "../component/particles/CardTitle"
import Chip from "../component/particles/Chip"
import ChipsCustom from "../component/particles/ChipCustom"
import Section from "../component/Section"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons"
import Macbook from '../assets/images/Macbook3.svg'

import DEVICE from '../assets/images/Content.svg'
import Card from "../component/Card"
import CardInformation from "../component/particles/CardInformation"
import Container from "../component/Container"
import ContainerTitle from "../component/particles/ContainerTitle"
import ContainerInformation from "../component/particles/ContainerInformation"
import sideImage from '../assets/images/side-background.svg'

import Icon1 from '../assets/images/icon/1.svg';
import Icon2 from '../assets/images/icon/2.svg';
import Icon3 from '../assets/images/icon/3.svg';
import Icon4 from '../assets/images/icon/4.svg';
import Icon5 from '../assets/images/icon/5.svg';
import Icon6 from '../assets/images/icon/6.svg';



const About = ({ dataHero, dataPartners, dataPtext, dataSolutions, dataCTA, dataBenefit, dataFeatures, dataTestimonial }) => {
    const handleToFitur = () => {
        window.location.href = "/fitur";
      }

    return (
        <>
            <section>
                <Section>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="mx-auto w-fit mt-16 px-4">
                            <ChipsCustom addOns={<Chip text={dataHero.data.chip_text} ring='primary' background='white' />} icon={faArrowRight} text='Coba Fitur AI Tools Sekarang' />
                        </div>
                        <div className="md:w-2/3 mx-auto">
                            <h1 className="text-4xl md:text-6xl text-center font-semibold">{dataHero.data.title}</h1>
                        </div>
                        <div className="md:w-3/5  mx-auto">
                            <p className="text-center text-lg md:text-xl text-slate-600">{dataHero.data.description}</p>
                        </div>
                        <div className="md:w-3/5 mx-auto flex flex-col md:flex-row w-full md:items-center md:justify-center gap-4">
                            <button className="py-4 px-7 ring-1 ring-slate-300 rounded-md flex gap-2 items-center justify-center text-center w-full md:w-fit">
                                <FontAwesomeIcon icon={faCirclePlay} />
                                {dataHero.data.cta_demo_text}
                            </button>
                            <button 
                                className="py-4 px-7 bg-primary text-white rounded-md w-full md:w-fit"
                                onClick={() => (window.location.href = dataHero.data.cta_register_link)}
                                >
                                {dataHero.data.cta_register_text}
                            </button>
                        </div>
                    </div>
                </Section>
            </section>
            <div className="relative md:h-full h-[60vh]">
                <Section className="z-10">
                    <img src={`http://localhost:1337${dataHero.data.pichero[0].url}`} alt="" className="w-full" />
                </Section>
                <div className="flex flex-col gap-12 absolute bottom-0 left-0 w-full h-1/3 px-24 pt-8 bg-white z-20">
                    <p className="text-center text-base text-deep2 text-medium">{dataHero.data.company_section_text}</p>
                    <div className="flex flex-row flex-wrap md:flex-nowrap gap-1 justify-between">
                        <img src={`http://localhost:1337${dataPartners.data[0].CompanyPic[0].url}`} alt="" className="w-24 md:w-48" />
                        <img src={`http://localhost:1337${dataPartners.data[1].CompanyPic[0].url}`} alt="" className="w-24 md:w-48" />
                        <img src={`http://localhost:1337${dataPartners.data[2].CompanyPic[0].url}`} alt="" className="w-24 md:w-48" />
                        <img src={`http://localhost:1337${dataPartners.data[3].CompanyPic[0].url}`} alt="" className="w-24 md:w-48" />
                        <img src={`http://localhost:1337${dataPartners.data[4].CompanyPic[0].url}`} alt="" className="w-24 md:w-48" />
                    </div>
                </div>
            </div>
            <Section>
                <Container>
                    <div className="w-fit p-4 text-primary mx-auto">
                        <Chip text='Benefit' background='#fff4f9' ring='primary'/>
                    </div>
                    <div className="w-full md:w-2/5 mx-auto">
                        <ContainerTitle>
                            {dataBenefit.data.title}
                        </ContainerTitle>
                    </div>
                    <div className="w-full md:w-3/4 mx-auto">
                        <ContainerInformation>{dataBenefit.data.description}</ContainerInformation>
                    </div>
                </Container>
            </Section>
            <Section>
                <Container>
                    <div className="mx-auto">
                        <img src={DEVICE} alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 px-2 md:px-10 w-full md:w-4/5 mx-auto">
                        <Card>
                            <CardTitle>{dataSolutions.data[0].title}</CardTitle>
                            <CardInformation>{dataSolutions.data[0].description}</CardInformation>
                            <div className="mx-auto">
                                <ChipsCustom icon={faArrowRight} text='Learn More' />
                            </div>
                        </Card>
                        <Card>
                            <CardTitle>{dataSolutions.data[1].title}</CardTitle>
                            <CardInformation>{dataSolutions.data[1].description}</CardInformation>
                            <div className="mx-auto">
                                <ChipsCustom icon={faArrowRight} text='Learn More' />
                            </div>
                        </Card>
                        <Card>
                            <CardTitle>{dataSolutions.data[2].title}</CardTitle>
                            <CardInformation>{dataSolutions.data[2].description}</CardInformation>
                            <div className="mx-auto">
                                <ChipsCustom icon={faArrowRight} text='Learn More' />
                            </div>
                        </Card>
                    </div>
                </Container>
            </Section>
            <Section>
                <Container>
                    <div className="w-fit p-4 text-primary mx-auto">
                        <Chip text='Fitur' background='transparen' ring='primary'/>
                    </div>
                    <div className="w-full md:w-2/5 mx-auto">
                        <ContainerTitle>
                            {dataFeatures.data[6].title}
                        </ContainerTitle>
                    </div>
                    <div className="w-full md:w-3/4 mx-auto">
                        <ContainerInformation>{dataFeatures.data[6].description}</ContainerInformation>
                    </div>
                    <div>
                        <Container>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-10 w-full md:w-4/5 mx-auto">
                                <Card>
                                    <div className="mx-auto">
                                        <img className="w-14" src={Icon1} alt="" />
                                    </div>
                                    <CardTitle>{dataFeatures.data[0].title}</CardTitle>
                                    <CardInformation>{dataFeatures.data[0].description}</CardInformation>
                                </Card>
                                <Card>
                                    <div className="mx-auto">
                                        <img className="w-14" src={Icon2} alt="" />
                                    </div>
                                    <CardTitle>{dataFeatures.data[1].title}</CardTitle>
                                    <CardInformation>{dataFeatures.data[1].description}</CardInformation>
                                </Card>
                                <Card>
                                    <div className="mx-auto">
                                        <img className="w-14" src={Icon3} alt="" />
                                    </div>
                                    <CardTitle>{dataFeatures.data[2].title}</CardTitle>
                                    <CardInformation>{dataFeatures.data[2].description}</CardInformation>
                                </Card>
                            </div>
                        </Container>
                    </div>
                    <div>
                        <Container>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 w-4/5 mx-auto">
                                <Card>
                                    <div className="mx-auto">
                                        <img className="w-14" src={Icon4} alt="" />
                                    </div>
                                    <CardTitle>{dataFeatures.data[3].title}</CardTitle>
                                    <CardInformation>{dataFeatures.data[3].description}</CardInformation>
                                </Card>
                                <Card>
                                    <div className="mx-auto">
                                        <img className="w-14" src={Icon5} alt="" />
                                    </div>
                                    <CardTitle>{dataFeatures.data[4].title}</CardTitle>
                                    <CardInformation>{dataFeatures.data[4].description}</CardInformation>
                                </Card>
                                <Card>
                                    <div className="mx-auto">
                                        <img className="w-14" src={Icon6} alt="" />
                                    </div>
                                    <CardTitle>{dataFeatures.data[5].title}</CardTitle>
                                    <CardInformation>{dataFeatures.data[5].description}</CardInformation>
                                </Card>
                            </div>
                        </Container>
                    </div>
                </Container>
            </Section>
            <Section>
                <Container>
                    <div className="px-8">
                        <div className="w-fit p-4 text-primary">
                            <Chip text='Testimoni' background='transparen' />
                        </div>
                        <div className="text-left">
                            <ContainerTitle>{dataTestimonial.data[0].title_testi}</ContainerTitle>
                        </div>
                        <div className="text-left">
                            <ContainerInformation>{dataTestimonial.data[0].description}</ContainerInformation>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col md:flex-row gap-8 px-6 md:px-8 mt-16">
                        <div className="w-full md:w-3/4 flex flex-col gap-8 py-8">
                            <img src={`http://localhost:1337${dataTestimonial.data[0].comlogo[0].url}`} alt="" className="w-28 mx-auto" />
                            <p className="text-center text-2xl md:text-5xl w-full md:w-4/5 font-semibold mt-8 mx-auto md:display-lg-medium text[#101828;]">
                                {dataTestimonial.data.testimonial_text}
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="mx-auto w-fit">
                                    <img src={`http://localhost:1337${dataTestimonial.data[0].avatar[0].url}`} />
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <p className="text-center text-xl font-medium">
                                        {dataTestimonial.data[0].person_name}
                                    </p>
                                    <p className="text-center text-lg">
                                        {dataTestimonial.data[0].person_position}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 w-full h-[30vh] md:h-[90vh] md:ml-24 bg-cover">
                            <img src={sideImage} alt='' />
                        </div>
                    </div>
                </Container>
            </Section>
                <div className="flex flex-col gap-4 md:gap-6 px-2 py-4  md:p-8 mt-44 bg-[#F9FAFB]">
                    <div className="md:w-2/3 mx-auto">
                        <h1 className="text-3xl text-center font-semibold">{dataCTA.data.title}</h1>
                    </div>
                    <div className="md:w-3/5  mx-auto">
                        <p className="text-center text-lg md:text-xl text-slate-600">{dataCTA.data.description}</p>
                    </div>
                    <div className="md:w-3/5 mx-auto flex flex-col md:flex-row w-full md:items-center md:justify-center gap-4">
                        <button className="py-4 px-7 font-semibold ring-1 ring-slate-300 rounded-md flex gap-2 items-center justify-center text-center w-full md:w-fit" onClick={handleToFitur}>
                            {dataCTA.data.feature_button_text}
                        </button>
                        <button 
                            className="py-4 px-7 font-semibold bg-primary text-white rounded-md w-full md:w-fit"
                            onClick={() => (window.location.href = dataCTA.data.register_button_link)}
                        >
                            {dataCTA.data.register_button_text}
                        </button>
                    </div>
                </div>
        </>
    )
}
export default About