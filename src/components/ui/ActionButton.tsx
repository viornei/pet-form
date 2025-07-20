type Props = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
};
export default function ActionButton({
  children,
  type = "button",
  onClick,
  className = "bg-primary-pink-500 w-26 h-10 rounded-full  transition-all duration-100 font-bold border-b-4 border-primary-pink-700 shadow-2xl hover:brightness-105 active:border-b-2 active:translate-y-0.5 ",
}: Props) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
