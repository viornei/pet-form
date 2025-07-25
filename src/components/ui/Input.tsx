import { cn } from "@/utils/utils";
import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  withBorder?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, withBorder, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "utline-none focus:ring-primary-pink-500 min-h-9 rounded-xl px-2 pl-2 font-sans focus:rounded-xl focus:ring-2 focus:outline-none",
          withBorder
            ? "border-primary-pink-500 rounded-none border-b"
            : "border-none",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
export default Input;
