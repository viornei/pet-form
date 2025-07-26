const Footer = () => {
  return (
    <footer className="bg-primary-pink-100 flex w-full justify-center">
      <div className="flex h-10 w-330 items-center justify-between border-t-1 border-t-gray-400 px-4 py-8 md:py-12 md:h-30">
        <span className="font-libreBaskerville max-w-30 text-sm font-semibold md:max-w-full md:text-xl">
          🐾 trusted companion
        </span>
        <nav className="flex">
          <div className="flex items-center gap-6 text-sm te font-semibold transition-all duration-300 md:text-base">
            <a href="#services" className="hover:text-primary-pink-700">
              Services
            </a>
            <a
              href="#calendar"
              className="hover:text-primary-pink-700 transition"
            >
              Calendar
            </a>
            <a href="#faq" className="hover:text-primary-pink-700 transition">
              FAQ
            </a>
            <a
              href="#contact"
              className="hover:text-primary-pink-700 hidden transition md:block"
            >
              Contact us
            </a>
          </div>
        </nav>
        <div></div>
      </div>
    </footer>
  );
};
export default Footer;
