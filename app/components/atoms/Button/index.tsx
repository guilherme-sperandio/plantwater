import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  children: React.ReactNode;
  icon?: JSX.Element;
} & ComponentPropsWithoutRef<"button">;

export const Button = ({ children, icon, ...rest }: ButtonProps) => {
  return (
    <button
      className="bg-black text-white font-medium flex items-center p-2 border-none rounded-md transition duration-0 hover:duration-150 hover:bg-black/75 "
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
};
