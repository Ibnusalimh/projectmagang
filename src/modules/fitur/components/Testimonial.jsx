// Testimonial.jsx
import React from "react";
import avatar from "../images/Avatar.png";
import logo1 from "../images/layercomp.png";
import logo2 from "../images/sisypuscomp.png";
import logo3 from "../images/cicrcoolecomp.png";
import logo4 from "../images/catalogcomp.png";
import logo5 from "../images/quotientcomp.png";

const Testimonial = () => (
  <section className="flex flex-col justify-center items-center py-24 w-full bg-gray-50">
    <div className="flex flex-col px-8 w-full max-w-7xl md:px-5">
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center w-full">
          {/* Testimonial Quote */}
          <div className="text-5xl font-medium tracking-tighter text-gray-900 leading-[60px] md:text-4xl md:leading-[56px] text-center">
            Untitled has saved us thousands of hours of work and has unlocked data
            insights we never thought possible.
          </div>
          
          {/* Testimonial Avatar and Name */}
          <div className="flex flex-col items-center mt-8 w-full">
            <img
              loading="lazy"
              src={avatar}
              alt="Testimonial Avatar"
              className="object-contain w-16 h-16 rounded-full"
            />
            <div className="flex flex-col items-center mt-4 w-full">
              <div className="text-lg font-medium leading-loose text-gray-900">
                Koray Okumus
              </div>
              <div className="mt-1 text-base text-slate-600">
                UX Designer, Circooles
              </div>
            </div>
          </div>
        </div>
        
        {/* Company Logos */}
        <div className="flex flex-wrap gap-10 justify-center items-center mt-12 md:mt-10">
          <img
            loading="lazy"
            src={logo1}
            alt="LayerComp Logo"
            className="object-contain w-[98px] h-auto"
          />
          <img
            loading="lazy"
            src={logo2}
            alt="SisypusComp Logo"
            className="object-contain w-[141px] h-auto"
          />
          <img
            loading="lazy"
            src={logo3}
            alt="Circooles Logo"
            className="object-contain w-[183px] h-auto"
          />
          <img
            loading="lazy"
            src={logo4}
            alt="CatalogComp Logo"
            className="object-contain w-[133px] h-auto"
          />
          <img
            loading="lazy"
            src={logo5}
            alt="QuotientComp Logo"
            className="object-contain w-[125px] h-auto"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Testimonial;
