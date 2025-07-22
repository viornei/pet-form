import ActionButton from "@/components/ui/ActionButton";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex w-full justify-center bg-primary-pink-100">
      <div className=" flex justify-between items-center w-330 border-b-gray-400 border-b-1 h-18 py-12">
        <nav className="flex">
          <Image
            src="/picsvg_download (2).svg"
            alt="logo"
            width={200}
            height={200}
            className="object-contain -ml-12"
          />
          <div className=" flex items-center gap-6">
            <a href="#services">Services</a>
            <a href="#calendar">Calendar</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact us</a>
          </div>
        </nav>
        <div className="flex gap-4 items-center">
          <ActionButton className="bg-gray-100 w-20 h-10 rounded-full  transition-all duration-100 font-bold border-b-4 border-gray-500 shadow-2xl hover:brightness-105 active:border-b-2 active:translate-y-0.5 ">
            Join
          </ActionButton>
          <ActionButton>Login</ActionButton>
        </div>
      </div>
    </header>
  );
};
export default Header;
