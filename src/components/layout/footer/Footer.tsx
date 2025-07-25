const Footer = () => {
  return (
    <footer className="bg-primary-pink-100 flex w-full justify-center">
      <div className="flex h-18 w-330 items-center justify-between border-t-1 border-t-gray-400 py-8">
        <span className="font-libreBaskerville px-6 text-xl font-semibold">
          🐾 trusted companion
        </span>
        <nav className="flex">
          <div className="flex items-center gap-6">
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
