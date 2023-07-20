import React from "react";
import aboutImg from "../images/hireMe.png";
//import MyPdf from  "../images/resume.pdf"

const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "3" },
    { text: "Companies Work", count: "02" },
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = "/resume.pdf";
    link.href = "/resume.pdf";
    link.target="_blank"
    document.body.appendChild(link)
    link.click();
    link.remove();
  };

  return (
    <section id="about" className="about section py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p id="user-detail-intro" className="text-justify leading-7 w-11/12 mx-auto">
              Developer specialized in MERN stack. Dynamic & ambitious professional with a fascination for making user-friendly products.
              Have Experience of 1 year in web development (Total Working Experience of 4+ Yrs). 
              
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="/resume.pdf" target={"_blank"} rel="noreferrer" >
                <button id="resume-button-2" className="btn-primary" onClick={handleDownload}>Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt="AboutImage"
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
