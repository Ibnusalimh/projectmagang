import React from 'react';
import Button from './Button';

const partners = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/29c9de800c51bbf1f1ba87c978b9be104d37ff1497fef1debf6f0a29358facd7?placeholderIfAbsent=true&apiKey=f2d7e403ce0348a7a99da9027832b54a", alt: "Partner 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c8dcd0fed9049f7059d687d8a385c35d7831de9a05b6b98def1731521aa7fb8?placeholderIfAbsent=true&apiKey=f2d7e403ce0348a7a99da9027832b54a", alt: "Partner 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f7f4452215942d408da0f345911583db735a5f46f389750f05f978498c3e75f2?placeholderIfAbsent=true&apiKey=f2d7e403ce0348a7a99da9027832b54a", alt: "Partner 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/094da2e670a065db41710fcc92f496dc35ed5a452678dfa581bf1de025c99999?placeholderIfAbsent=true&apiKey=f2d7e403ce0348a7a99da9027832b54a", alt: "Partner 4" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bcb6aa19f1194d10a03378cac60ac831f4762438ac5f6f0800606293feac7095?placeholderIfAbsent=true&apiKey=f2d7e403ce0348a7a99da9027832b54a", alt: "Partner 5" },
];

function CTASection() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center py-24 w-full bg-pink-700 max-md:max-w-full">
      <div className="flex flex-col px-8 max-w-full w-[1280px] max-md:px-5">
        <div className="flex flex-wrap gap-8 items-start w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink items-start basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[768px]">
              <h2 className="text-4xl font-semibold tracking-tighter leading-none text-white max-md:max-w-full">Scale Up Bisnismu Sekarang</h2>
              <p className="mt-5 text-xl text-pink-100 max-md:max-w-full">Join dengan 150+ Bisnis yang Telah Bertumbuh</p>
            </div>
            <div className="flex flex-col mt-10 max-w-full w-[421px]">
              <div className="flex gap-8 items-center w-full max-md:max-w-full">
                {partners.slice(0, 3).map((partner, index) => (
                  <img key={index} loading="lazy" src={partner.src} alt={partner.alt} className="object-contain shrink-0 self-stretch my-auto w-24 aspect-[3]" />
                ))}
              </div>
              <div className="flex gap-8 items-center mt-4 w-full max-md:max-w-full">
                {partners.slice(3).map((partner, index) => (
                  <img key={index} loading="lazy" src={partner.src} alt={partner.alt} className="object-contain shrink-0 self-stretch my-auto w-24 aspect-[3]" />
                ))}
                <div className="flex shrink-0 self-stretch my-auto w-32 h-8" />
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-start text-base font-semibold min-w-[240px]">
            <Button text="Fitur Agendakota" variant="secondary" />
            <Button text="Registrasi Sekarang" variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;