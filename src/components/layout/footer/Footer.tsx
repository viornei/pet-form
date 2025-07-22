const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-primary-pink-100">
      <div className=" flex justify-between items-center w-330 border-t-gray-400 border-t-1 h-18 py-8">
        <span className=" font-libreBaskerville  font-semibold text-xl px-6">
          🐾 trusted companion
        </span>
        <nav className="flex">
          <div className=" flex items-center gap-6">
            <a href="#services">Services</a>
            <a href="#calendar">Calendar</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact us</a>
          </div>
        </nav>
        <div></div>
      </div>
    </footer>
  );
};
export default Footer;
