import { useState, useRef } from "react";
import generatePDF, { Resolution } from "react-to-pdf";
import { HiDownload, HiArrowLeft, HiArrowRight, HiEye } from "react-icons/hi";
import Education from "../Component/Education";
import Container from "../Component/Container";
import SocialLinks from "../Component/SocialLinks";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import EmploymentHistory from "../Component/EmploymentHistory";
import Button1 from "../Component/Button1";
import PersonalInfoFormContainer from "../Component/personalInfoForm/PersonalInfoFormContainer";

function App() {
  const [isSideBarActive, setIsSideBarActive] = useState(true);
  const targetRef = useRef();

  const handleSideBarDisplay = () => {
    setIsSideBarActive(!isSideBarActive);
  };

  // Options of Download the PDF
  const optionsDownload = {
    filename: "Resume.pdf",
    resolution: Resolution.LOW,

    canvas: {
      qualityRatio: 1,
    },
    overrides: {
      pdf: {
        compress: true,
      },
      canvas: {
        useCORS: true,
        scale: 10,
      },
    },
  };

  // Options of View the PDF
  const optionsView = {
    method: "open",
    ...optionsDownload,
  };

  return (
    <div className="relative overflow-auto  bg-black/80">
      <Navbar />
      <main className="flex relative overflow-auto justify-end py-[2.5rem] mt-4  h-screen box-border">
        <nav
          className={`w-full max-w-[320px] scroll-auto scrollbar fixed left-0 ${
            isSideBarActive ? "-translate-x-full" : "translate-x-0"
          } top-[3.5rem] bottom-[2.5rem] bg-blue-900/90 transition-all backdrop-blur-md z-50 flex flex-col justify-start text-primary-100`}
        >
          <div className="overflow-y-scroll h-full">
            <PersonalInfoFormContainer />
            <SocialLinks />
            <EmploymentHistory />
            <Education />
          </div>
          <button
            className="flex items-center justify-center box-border pr-1 w-10 absolute top-12 right-0 translate-x-full aspect-square bg-blue-900/90 backdrop-blur-md  rounded-r-xl"
            onClick={handleSideBarDisplay}
          >
            {isSideBarActive ? <HiArrowRight /> : <HiArrowLeft />}
          </button>
        </nav>

        {/* CV Container */}
        <Container targetRef={targetRef} />
      </main>
      <div
        className={`fixed z-10 ${
          isSideBarActive ? "left-[2rem]" : "left-[calc(320px+2rem)]"
        } transition-all bg-gray-500/20 hover:bg-blue-900  p-2 rounded-2xl bottom-[5rem] flex gap-1 flex-col`}
      >
        <Button1
          classes="hover:!bg-primary-800 hover:!opacity-80"
          ClickFunc={() => generatePDF(targetRef, optionsView)}
          Icon={HiEye}
        />
        <Button1
          ClickFunc={() => generatePDF(targetRef, optionsDownload)}
          Icon={HiDownload}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
