import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import CardTitle from "../component/particles/CardTitle"
import Chip from "../component/particles/Chip"
import ChipsCustom from "../component/particles/ChipCustom"
import Section from "../component/Section"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons"
import Macbook from '../assets/images/Macbook3.svg'

import Company1 from '../assets/images/partner/company1.svg'
import Company2 from '../assets/images/partner/company2.svg'
import Company3 from '../assets/images/partner/company3.svg'
import Company4 from '../assets/images/partner/company4.svg'
import Company5 from '../assets/images/partner/company5.svg'

import DEVICE from '../assets/images/Content.svg'
import Card from "../component/Card"
import CardInformation from "../component/particles/CardInformation"
import Container from "../component/Container"
import ContainerTitle from "../component/particles/ContainerTitle"
import ContainerInformation from "../component/particles/ContainerInformation"
import Avatar from '../assets/images/Avatar.svg'


function About() {
    return (
        <>
            <section>
                <Section>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="mx-auto w-fit mt-16 px-4">
                            <ChipsCustom addOns={<Chip text='Fitur Baru' ring='primary' background='white' />} icon={faArrowRight} text='Coba Fitur AI Tools Sekarang' />
                        </div>
                        <div className="md:w-2/3 mx-auto">
                            <h1 className="text-4xl md:text-6xl text-center font-semibold">Membantu Bisnis Anda Fokus Bertumbuh</h1>
                        </div>
                        <div className="md:w-3/5  mx-auto">
                            <p className="text-center text-lg md:text-xl text-slate-600">Kami hadir untuk membantu event organizer, hotel dan penyedia layanan klinik & wellness tumbuh dengan efisien melalui sistem manajemen pemesanan dan tiket yang terpadu.</p>
                        </div>
                        <div className="md:w-3/5 mx-auto flex flex-col md:flex-row w-full md:items-center md:justify-center gap-4">
                            <button className="py-4 px-7 ring-1 ring-slate-300 rounded-md flex gap-2 items-center justify-center text-center w-full md:w-fit">
                                <FontAwesomeIcon icon={faCirclePlay} />
                                Demo
                            </button>
                            <button className="py-4 px-7 bg-primary text-white rounded-md w-full md:w-fit">
                                Registrasi Sekarang
                            </button>
                        </div>
                    </div>
                </Section>
            </section>
            <div className="relative md:h-full h-[60vh]">
                <Section className="z-10">
                    <img src={Macbook} alt="" className="w-full" />
                </Section>
                <div className="flex flex-col gap-12 absolute bottom-0 left-0 w-full h-1/3 px-24 pt-8 bg-white z-20">
                    <p className="text-center text-base text-deep2 text-medium">Join dengan 150+ Bisnis yang telah Bertumbuh</p>
                    <div className="flex flex-row flex-wrap md:flex-nowrap gap-1 justify-between">
                        <img src={Company5} alt="" className="w-24 md:w-48" />
                        <img src={Company1} alt="" className="w-24 md:w-48" />
                        <img src={Company2} alt="" className="w-24 md:w-48" />
                        <img src={Company3} alt="" className="w-24 md:w-48" />
                        <img src={Company4} alt="" className="w-24 md:w-48" />
                    </div>
                </div>
            </div>
            <Section>
                <Container>
                    <div className="w-fit p-4 text-primary mx-auto">
                        <Chip text='Benefit' background='transparen' />
                    </div>
                    <div className="w-full md:w-2/5 mx-auto">
                        <ContainerTitle>
                            Teknologi Agendakota
                        </ContainerTitle>
                    </div>
                    <div className="w-full md:w-3/4 mx-auto">
                        <ContainerInformation>Kami percaya bahwa setiap bisnis berhak mendapatkan kemudahan dalam mengelola layanan. Dengan sistem booking, ticketing dan tools marketing kami dapat mendukung bisnis Anda.</ContainerInformation>
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
                            <CardTitle>Untuk Klinik & Wellnes Provider</CardTitle>
                            <CardInformation>Berguna untuk manajemen reservasi layanan klinik, special promotions, kegiatan wellness seperti Yoga, Reflexology, dsb.</CardInformation>
                            <div className="mx-auto">
                                <ChipsCustom icon={faArrowRight} text='Learn More' />
                            </div>
                        </Card>
                        <Card>
                            <CardTitle>Untuk Event Organizer</CardTitle>
                            <CardInformation>Cocok untuk event creator mempromosikan event dan mengelola pemesanan tiket event Anda. Mulai dari event kecil hingga besar.</CardInformation>
                            <div className="mx-auto">
                                <ChipsCustom icon={faArrowRight} text='Learn More' />
                            </div>
                        </Card>
                        <Card>
                            <CardTitle>Untuk Hotel</CardTitle>
                            <CardInformation>Mudah menjual side services selain kamar. Cocok untuk layanan Restaurant, Spa, Gym, Swimming Pool dan Special Promo lainnya.</CardInformation>
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
                        <Chip text='Fitur' background='transparen' />
                    </div>
                    <div className="w-full md:w-2/5 mx-auto">
                        <ContainerTitle>
                            Manajemen Tiket & Booking Layanan
                        </ContainerTitle>
                    </div>
                    <div className="w-full md:w-3/4 mx-auto">
                        <ContainerInformation>Solusi kami dirancang khusus untuk membuat Anda fokus bertumbuh, berinovasi dan memberikan pengalaman terbaik pada pelanggan.</ContainerInformation>
                    </div>
                    <div>
                        <Container>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-10 w-full md:w-4/5 mx-auto">
                                <Card>
                                    <div className="mx-auto">
                                        <img className="w-14" src="../../public/icon/1.svg" alt="" />
                                    </div>
                                    <CardTitle>Ticketing Management</CardTitle>
                                    <CardInformation>Kelola penjualan tiket event dengan kemudahan bukti QR code, refund, re-scheduling, sistem pembayaran beragam hingga voucher.</CardInformation>
                                </Card>
                                <Card>
                                    <div className="mx-auto">
                                        <img className="w-14" src="../../public/icon/2.svg" alt="" />
                                    </div>
                                    <CardTitle>Reservation Management</CardTitle>
                                    <CardInformation>Kelola reservasi dan tingkatkan optimalkan kepuasan pelanggan Anda dengan sistem pembayaran beragam.</CardInformation>
                                </Card>
                                <Card>
                                    <div className="mx-auto">
                                        <img className="w-14" src="../../public/icon/3.svg" alt="" />
                                    </div>
                                    <CardTitle>Marketing Analytics</CardTitle>
                                    <CardInformation>Sistem analisis data yang lengkap untuk tracking ROI bisnis atau event, sehingga mudah menentukan strategi bisnis.</CardInformation>
                                </Card>
                            </div>
                        </Container>
                    </div>
                    <div>
                        <Container>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 w-4/5 mx-auto">
                                <Card>
                                    <div className="mx-auto">
                                        <img className="w-14" src="../../public/icon/4.svg" alt="" />
                                    </div>
                                    <CardTitle>AI Marketing Generator</CardTitle>
                                    <CardInformation>Buat strategi marketing dan konten marketing untuk meningkatkan penjualan tiket event atau layanan bisnis Anda.</CardInformation>
                                </Card>
                                <Card>
                                    <div className="mx-auto">
                                        <img className="w-14" src="../../public/icon/5.svg" alt="" />
                                    </div>
                                    <CardTitle>Virtual Events Management</CardTitle>
                                    <CardInformation>Sistem virtual event terintegrasi dengan marketplace untuk memberikan pengalaman event virtual terbaik.</CardInformation>
                                </Card>
                                <Card>
                                    <div className="mx-auto">
                                        <img className="w-14" src="../../public/icon/6.svg" alt="" />
                                    </div>
                                    <CardTitle>Marketing Tools</CardTitle>
                                    <CardInformation>Fitur marketing untuk meningkatkan promosi event maupun bisnis Anda, seperti email marketing, WA marketing, media coverage dsb.</CardInformation>
                                </Card>
                            </div>
                        </Container>
                    </div>
                </Container>
            </Section>
            <Section>
                <Container>
                    <div className="px-8">
                        <div className="w-fit text-primary">
                            <Chip text='Testimoni' background='transparen' />
                        </div>
                        <div className="text-left">
                            <ContainerTitle>Apa Kata Pengguna Agendakota</ContainerTitle>
                        </div>
                        <div className="text-left">
                            <ContainerInformation>Kami bangga mendukung bisnis-bisnis lokal untuk berkembang.</ContainerInformation>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div className="flex flex-col md:flex-row gap-8 px-6 md:px-8 mt-16">
                        <div className="w-full md:w-3/4 flex flex-col gap-8 py-8">
                            <img src={Company1} alt="" className="w-28 mx-auto" />
                            <p className="text-center text-2xl md:text-5xl w-full md:w-4/5 font-semibold mt-8 mx-auto md:display-lg-medium text[#101828;]">
                                We’ve been using Untitled to kick start every new project and can’t imagine working without it.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="mx-auto w-fit">
                                    <img src={Avatar} />
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <p className="text-center text-xl font-medium">
                                        Candice Wu
                                    </p>
                                    <p className="text-center text-lg">
                                        Product Manager, Sisyphus
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-1/2 w-full h-[30vh] md:h-[90vh] md:ml-24 bg-cover" style={{ backgroundImage: "url('../public/side-background.svg')" }}></div>

                    </div>
                </Container>
            </Section>
                <div className="flex flex-col gap-4 md:gap-6 px-2 py-4  md:p-8 mt-44 bg-[#F9FAFB]">
                    <div className="md:w-2/3 mx-auto">
                        <h1 className="text-3xl text-center font-semibold">Scale Up Bisnismu Sekarang</h1>
                    </div>
                    <div className="md:w-3/5  mx-auto">
                        <p className="text-center text-lg md:text-xl text-slate-600">Join dengan 150+ Bisnis yang Telah Bertumbuh</p>
                    </div>
                    <div className="md:w-3/5 mx-auto flex flex-col md:flex-row w-full md:items-center md:justify-center gap-4">
                        <button className="py-4 px-7 font-semibold ring-1 ring-slate-300 rounded-md flex gap-2 items-center justify-center text-center w-full md:w-fit">
                            Fitur Agendakota
                        </button>
                        <button className="py-4 px-7 font-semibold bg-primary text-white rounded-md w-full md:w-fit">
                            Registrasi Sekarang
                        </button>
                    </div>
                </div>
        </>
    )
}
export default About