import React from 'react';
import Button from './Button';

function PricingCard({ title, subtitle, description, features, tag }) {
  return (
    <div className="flex flex-col flex-1 shrink bg-white rounded-2xl border border-gray-200 border-solid shadow-lg basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col px-8 pt-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col pl-20 w-full max-md:pl-5 max-md:max-w-full">
          {tag && <div className="z-10 self-end mt-0 mr-0 text-sm font-medium leading-none text-pink-700">{tag}</div>}
          <h3 className="self-center mt-12 text-5xl font-semibold tracking-tighter leading-none text-center text-gray-900 max-md:mt-10 max-md:text-4xl">{title}</h3>
        </div>
        <div className="flex flex-col items-start mt-4 w-full text-center max-md:max-w-full">
          <h4 className="text-xl font-semibold text-gray-900 max-md:max-w-full">{subtitle}</h4>
          <p className="mt-1 text-base text-slate-600 max-md:max-w-full">{description}</p>
        </div>
      </div>
      <div className="flex flex-col px-8 pt-8 pb-10 w-full text-base text-slate-600 max-md:px-5 max-md:max-w-full">
        <ul className="flex flex-col w-full max-md:max-w-full">
          {features.map((feature, index) => (
            <li key={index} className="flex flex-wrap gap-3 items-start mt-4 w-full max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/044b0d4965be653267c4267cd37850ef42aa4305b06c7280d7fec0c8def523b3?placeholderIfAbsent=true&apiKey=f2d7e403ce0348a7a99da9027832b54a" alt="" className="object-contain shrink-0 w-6 aspect-square fill-emerald-100" />
              <div className="flex-1 shrink min-w-[240px] max-md:max-w-full">{feature}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col px-8 pb-8 w-full text-base font-semibold text-white max-md:px-5 max-md:max-w-full">
        <Button text="Registrasi Sekarang" variant="primary" />
      </div>
    </div>
  );
}

export default PricingCard;