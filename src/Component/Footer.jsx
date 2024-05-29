function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="z-[80] fixed bottom-0 w-full border border-[rgb(255,255,255,0.08)] bg-blue-900 backdrop-blur-md font-semibold justify-center text-center h-12 pt-2 text-primary-300 hover:text-primary-400">
      <a href="https://github.com/devbn3li/CV-Builder" target="_blank" className="text-lg sm:text-md text-white">
        Resume Builder Team © - {currentYear} All Rights Reserved
      </a>
    </footer>
  );
}

export default Footer;
