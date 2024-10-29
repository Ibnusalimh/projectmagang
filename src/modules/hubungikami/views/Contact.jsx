import { useState } from 'react'
import SideImage from '../assets/images/Image.png'

const Contact = () => {
    const [dropdown, setDropdown] = useState(false)
    const showDropdown = () => {
        console.log(dropdown);

        setDropdown(!dropdown)
    }

    const companyType = [
        { name: 'Event Organizer' },
        { name: 'Hotel' },
        { name: 'Klinik' },
        { name: 'Wellness Provider' },
        { name: 'Tour & Travel' },
        { name: 'Lainya' },
    ]

    return (
        <>
            <div className="flex flex-row max-h-screen h-full">
                <div className="hidden lg:block lg:flex-shrink-0 lg:w-auto">
                    <img src={SideImage} className='' alt="" />
                </div>
                <div className="lg:ml-8 px-4 lg:px-8 py-12 lg:py-24 lg:w-1/2 flex flex-col gap-8 lg:gap-12">
                    <div className="flex flex-col gap-6 lg:gap-6">
                        <h1 className='text-4xl lg:text-[42px] font-semibold text-left lg:text-left'>Kembangkan Bisnis Anda dengan Agendakota</h1>
                        <p className="text-sm text-left lg:text-left">Anda bisa kontak kami melalui <span className='block lg:inline font-semibold text-primary'>halo@agendakota.id</span></p>
                    </div>
                    <div className="flex flex-col gap-6 lg:gap-8">
                        <div className="flex flex-col gap-2">
                            <label className='text-sm font-medium text-[#344054]'> Nama </label>
                            <input type="text" placeholder='Tuliskan Nama Anda' className='block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg bg-white text-base' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-sm font-medium text-[#344054]'> Email </label>
                            <input type="text" placeholder='you@company.com' className='block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg bg-white text-base' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-sm font-medium text-[#344054]'> Nomor Kontak </label>
                            <div className="flex">
                                <button id="dropdown-button" className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-gray-900 border border-e-0 border-gray-300 rounded-l-lg" onClick={showDropdown} type="button">ID <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" /></svg>
                                </button>
                                <div className="relative w-full">
                                    <input type="search" id="search-dropdown" className="block py-3 px-4 w-full z-20 text-sm text-gray-900 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="+62 000 000 0000" required />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-sm font-medium text-[#344054]'> Apa yang bisa kamu bantu? </label>
                            <textarea type="text" placeholder='' rows="4" className='block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-lg bg-white text-base' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className='text-sm font-medium text-[#344054]'> Perusahaan Anda </label>
                            <div className="grid grid-rows-3 grid-flow-col gap-4">
                                {
                                    companyType.map((company, index) => (
                                        <div className="flex items-center" key={index}>
                                            <input id={company.name} type="checkbox" value="" className="w-4 h-4 accent-primary bg-gray-100 border-gray-300 rounded focus:ring-primary" />
                                            <label htmlFor="checked-checkbox" className="ms-2 text-base text-[#344054]">{company.name}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <button className='block bg-primary text-white p-3 rounded-lg mb-12'>Kirim Pesan</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact