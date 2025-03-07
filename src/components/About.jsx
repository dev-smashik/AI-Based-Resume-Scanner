import React from "react";
import handDrawnResumeTemplate1 from "../assets/cv.png";
import CheckmarkCircle from "../assets/checkmark.svg";

const About = () => {
  return (
    <div className="inline-flex items-center gap-[108px] relative">
      <img
        className="relative w-[660px] h-[660px] mt-[-26.00px] mb-[-34.00px] ml-[-30.00px] object-cover"
        alt="Hand drawn resume"
        src={handDrawnResumeTemplate1}
      />

      <div className="relative w-[681px] h-[302px] mr-[-2.00px]">
        <p className="absolute w-[679px] h-[174px] top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#444750] text-5xl tracking-[0] leading-[57.6px]">
          Make sure your resume stands out for the right reasons!
        </p>

        <div className="top-[206px] inline-flex items-center gap-2.5 absolute left-0">
        <CheckmarkCircle className="!relative !w-5 !h-5" color="#3C50E0" />
          <p className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
            Eliminate embarrassing mistakes and typos
          </p>
        </div>

        <div className="top-[242px] inline-flex items-center gap-2.5 absolute left-0">
          <CheckmarkCircle className="!relative !w-5 !h-5" color="#3C50E0" />
          <p className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
            Sell yourself effectively by strengthening your content
          </p>
        </div>


        <div className="top-[278px] inline-flex items-center gap-2.5 absolute left-0">
          <CheckmarkCircle className="!relative !w-5 !h-5" color="#3C50E0" />
          <p className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
            Improve your design and create a visually appealing resume
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 