import React from "react";
import cirlcelogo from "../images/Check-icon.png"

const FeatureCard = ({
  icon,
  title,
  description,
  benefits,
  image,
  reverse,
}) => (
  <div
    className={`flex flex-wrap gap-10 items-center px-8 mt-24 max-w-full w-[1280px] max-md:px-5 max-md:mt-10 ${
      reverse ? "flex-row-reverse" : ""
    }`}
  >
    <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain w-12 aspect-square"
        />
        <div className="flex flex-col mt-6 w-full max-md:max-w-full">
          <h3 className="text-3xl font-semibold leading-none text-gray-900 max-md:max-w-full">
            {title}
          </h3>
          <p className="mt-4 text-lg leading-7 text-slate-600 max-md:max-w-full">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col pl-4 mt-8 w-full text-lg leading-loose text-slate-600 max-md:max-w-full">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-wrap gap-3 items-start mt-5 w-full max-md:max-w-full"
          >
            <img
              loading="lazy"
              src={cirlcelogo}
              alt=""
              className="object-contain shrink-0 w-7 aspect-square fill-pink-100"
            />
            <div className="flex-1 shrink min-w-[240px] max-md:max-w-full">
              {benefit}
            </div>
          </div>
        ))}
      </div>
    </div>
    <img
      loading="lazy"
      src={image}
      alt={title}
      className="object-contain flex-1 shrink self-stretch my-auto w-full aspect-[1.09] basis-0 min-w-[240px] max-md:max-w-full"
    />
  </div>
);

export default FeatureCard;
