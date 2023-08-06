import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  children: React.ReactNode;
  icon?: JSX.Element;
  defaultColor?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = ({
  children,
  defaultColor = true,
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`${
        defaultColor ? "bg-black" : "bg-blue"
      } text-white font-medium flex items-center p-2 border-none rounded-md transition duration-0 hover:duration-150 ${
        defaultColor ? "hover:bg-black/75" : "hover:bg-blue/75"
      }`}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
};
