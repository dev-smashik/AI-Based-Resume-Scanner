import React, { useEffect, useRef } from "react";
import handDrawnResumeTemplate1 from "../assets/cv.png";
import CheckmarkCircle from "../assets/checkmark.svg";

const About = () => {
  const sectionRef = useRef(null);

  // This ensures the section is properly registered for scroll behavior
  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      // Force a layout recalculation to ensure the section is properly registered
      section.offsetHeight;
    }
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 pt-28 flex flex-col md:flex-row items-center gap-8 md:gap-[108px] relative scroll-mt-20"
    >
      <img
        className="relative w-full md:w-[660px] h-auto md:h-[660px] object-cover"
        alt="Hand drawn resume"
        src={handDrawnResumeTemplate1}
      />

      <div className="relative w-full md:w-[681px]">
        <h2 className="font-['Poppins-SemiBold',Helvetica] font-semibold text-[#444750] text-3xl md:text-5xl tracking-[0] leading-tight mb-10">
          Make sure your resume stands out for the right reasons!
        </h2>

        <div className="flex items-center gap-2.5 mb-4">
          <CheckmarkCircle className="w-5 h-5" color="#3C50E0" />
          <p className="font-medium text-primary-text-color">
            Eliminate embarrassing mistakes and typos
          </p>
        </div>

        <div className="flex items-center gap-2.5 mb-4">
          <CheckmarkCircle className="w-5 h-5" color="#3C50E0" />
          <p className="font-medium text-primary-text-color">
            Sell yourself effectively by strengthening your content
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <CheckmarkCircle className="w-5 h-5" color="#3C50E0" />
          <p className="font-medium text-primary-text-color">
            Improve your design and create a visually appealing resume
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;