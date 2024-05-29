function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="z-[80] fixed bottom-0 w-full border border-[rgb(255,255,255,0.08)] bg-blue-900 backdrop-blur-md font-semibold justify-center text-center h-10 pt-1 text-primary-300">
      <a href="" className="text-xs sm:text-md text-white">
        Resume Builder Team © - {currentYear} All Rights Reserved
      </a>
    </footer>
  );
}

export default Footer;
