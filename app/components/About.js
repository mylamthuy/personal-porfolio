"use client";
import React from "react"
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";

function About() {

  const onButtonClick = () => {
     
    // using Java Script method to get PDF file
    fetch("SamplePDF.pdf").then((response) => {
        response.blob().then((blob) => {
         
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                 
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "SamplePDF.pdf";
            alink.click();
        });
    });
  };

  return (
    <div id="about" className="pb-20">
        <div className="z-1">
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="#83DEF6"/> {/*left*/}
            <Spotlight className="top-28 left-96 h-[80vh] w-[50vw]" fill="#2EA8C8" /> {/*middle*/}
            {/* <Spotlight className="top-20 left-full w-[50vw] h-[80vh] " fill="#069957" />  */} {/*right*/}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 z-20">
          {/* Left section */}
          <div className="col-span-7 place-self-center">
            <div className="flex flex-wrap space-x-2">
              <h1 className="md-4 text-6xl font-extrabold">Hello, I&apos;m 
                <span className="bg-gradient-to-r from-gray-800 to-[#2ea8c8] bg-clip-text text-transparent"> Hazel Lam</span>
              </h1>
              <div>
                <Image src="/daisy.png" alt="daisy" width={40} height={40} className="w-10 h-10 rotate-image" />
              </div>
            </div>
            <div className="mt mt-[50px] bg-[white]/20 relative z-10 p-[20px] backdrop-blur-sm w-3/4 rounded-lg">
              <p>Passionate Software Developer, driven by challenges and eager to explore new technologies, dedicated to enhancing user experiences within collaborative environments, and committed to continuous learning in software development.</p>
            </div>

            {/* Download resume button */}
            <div className="mt-10 ml-5 rounded-full p-[0.20rem] bg-gradient-to-b from-[#2EA8C8]/80 to-pink-100 w-36 h-12 hover:bg-white" >
              <button className="rounded-full bg-white h-full w-full flex items-center justify-center text-[#1d376e] hover:bg-[#2EA8C8]/40 hover:font-semibold">
                <a href="Hazel-Lam-Resume.pdf" download="Hazel-Lam-Resume.pdf" >My Resume</a>
              </button>
            </div>
            {/* className="rounded-lg bg-[white]/20 backdrop-blur-md h-full w-full flex items-center justify-center" */}
          </div>
          {/* Profile image */}
          <div className="col-span-5 sm:mt-16 md:mt-16 z-10">
            <div className="rounded-full w-[310px] h-[310px] relative">
              <Image src="/profile-image.png" alt="profile picture" width={300} height={300} className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-none w-80 h-80 rounded-full custom-position" />
              {/* custom-position: https://stackoverflow.com/questions/72622298/tailwind-using-the-top-of-an-image-for-a-circle-profile-pic */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default About;