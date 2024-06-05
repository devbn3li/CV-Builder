import React from "react";
import { Link } from "react-router-dom";
import { IoIosCheckmarkCircle, IoMdCloudDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center mt-[55px]">
      <div className="flex py-20 px-4 flex-col max-w-[600px] text-center items-center justify-center mx-auto">
        <h1 className="text-4xl max-md:text-2xl text-white font-bold mb-4">
          The journey of a thousand miles begins with a step
        </h1>
        <p className="text-2xl max-md:text-xl text-white">
          Start building your professional CV with our easy-to-use CV builder
        </p>
        <button className="mt-4">
          <Link
            to="/cv-builder"
            className="bg-blue-700 hover:bg-blue-800 text-xl duration-300 text-white py-2 px-6 rounded-full mt-4"
          >
            Start building your CV
          </Link>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-4xl max-md:text-2xl text-white text-center mb-8">
          How to use our CV Builder?
        </h2>
        <div className="md:w-[900px] md:h-[600px] mb-16">
          <iframe
            src="https://www.loom.com/embed/a4b3dfca136d43f58f10956aa5fb560a?sid=3ebe4a2a-24e4-4fb8-ae86-446a78b1d530"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            className="w-full h-full rounded-xl"
          ></iframe>
        </div>
      </div>
      <div className="mb-14 max-md:mb-20">
        <h2 className="font-bold text-4xl max-md:text-2xl text-white text-center mb-8">
          Why to use our CV Builder?
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center max-w-[900px] mx-auto">
          <div className="flex flex-col items-center max-w-[300px] p-4">
            <IoIosCheckmarkCircle className="text-6xl text-white" />
            <h3 className="text-2xl max-md:text-xl text-white font-bold mt-4">
              Easy to use
            </h3>
            <p className="text-white text-center mt-2">
              Our CV builder is easy to use and requires no technical skills
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[300px] p-4">
            <FaStar className="text-6xl text-white" />
            <h3 className="text-2xl max-md:text-xl text-white font-bold mt-4">
              Professional Templates
            </h3>
            <p className="text-white text-center mt-2">
              Choose from a variety of professional templates to create your CV
            </p>
          </div>
          <div className="flex flex-col items-center max-w-[300px] p-4">
            <IoMdCloudDownload className="text-6xl text-white" />
            <h3 className="text-2xl max-md:text-xl text-white font-bold mt-4">
              Download as PDF
            </h3>
            <p className="text-white text-center mt-2">
              Download your CV as a PDF file for easy sharing
            </p>
          </div>
        </div>
      </div>
      <div className="mb-32 text-center">
        <h2 className="text-6xl max-md:text-2xl font-semibold text-white mb-6">Try enhance your CV with AI</h2>
        <button className="text-white text-xl cursor-not-allowed bg-blue-700 hover:bg-blue-800 duration-300 rounded-full py-2 px-6">Coming soon</button>
      </div>
    </div>
  );
};

export default LandingPage;
