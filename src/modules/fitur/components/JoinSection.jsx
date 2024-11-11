import React from "react";
import Button from "./Button";
import mockup from "../images/mockup.png"
import checkicon from "../images/Check-icon.png"

const JoinSection = () => (
  <section className="flex overflow-hidden flex-col justify-center items-center py-24 w-full bg-white max-md:max-w-full">
    <div className="flex flex-wrap gap-10 justify-center items-center px-8 max-w-full w-[1280px] max-md:px-5">
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <h2 className="text-5xl font-semibold tracking-tighter text-gray-900 leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
            Join dengan 150+ Bisnis yang telah Bertumbuh
          </h2>
          <div className="flex flex-col pl-4 mt-8 w-full text-lg leading-loose text-slate-600 max-md:max-w-full">
            <div className="flex flex-wrap gap-3 items-start w-full max-md:max-w-full">
              <img
                loading="lazy"
                src={checkicon}
                alt=""
                className="object-contain shrink-0 w-7 aspect-square fill-pink-100"
              />
              <div className="flex-1 shrink min-w-[240px] max-md:max-w-full">
                30-day free trial
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-start mt-5 w-full max-md:max-w-full">
              <img
                loading="lazy"
                src={checkicon}
                alt=""
                className="object-contain shrink-0 w-7 aspect-square fill-pink-100"
              />
              <div className="flex-1 shrink min-w-[240px] max-md:max-w-full">
                Peronalized onboarding
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-start mt-5 w-full max-md:max-w-full">
              <img
                loading="lazy"
                src={checkicon}
                alt=""
                className="object-contain shrink-0 w-7 aspect-square fill-pink-100"
              />
              <div className="flex-1 shrink min-w-[240px] max-md:max-w-full">
                Access to all features
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-start self-start mt-10">
          <Button variant="primary" text="Registrasi Sekarang" className="text-base font-semibold" onClick={() => { window.location.href = 'https://agendakota.id/register-user'; }}/>
        </div>
      </div>
      <img
        loading="lazy"
        src={mockup}
        alt="Join Us"
        className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-[1.12] basis-0 min-w-[240px] max-md:max-w-full"
      />
    </div>
  </section>
);

export default JoinSection;
