import React from "react";
import Typewriter from "typewriter-effect";
import hero from "../images/MyImage.png";
const Home = () => {
  const social_media = [
    "logo-github",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-100">
        <img src={hero} alt="" className="home-img md:w-11/12 h-full object-cover" style={{width:"48%",borderRadius:"10%"}}/>
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello👋 Namaste🙏
              <br />
            </span>
            My Name is <span id="user-detail-name" className="text-orange-400">SAGAR PAWAR</span>
          </h1>

          <div className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            <Typewriter
              options={{
                loop: true,
              }}

              onInit={(typewriter) => {
                typewriter
                  .typeString("I am a MERN Stack Developer.")
                  .pause(2000)
                  .deleteAll()
                  .typeString("I am a Frontend Developer.")
                  .pause(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </div>


          {/* <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer, Writer and Player
          </h4> */}
         <a href="#contact">
         <button className="btn-primary mt-8">Contact Me</button>
          </a> 
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;