import { ComponentPropsWithoutRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

type LiProps = {
  children: React.ReactNode;
  icon?: JSX.Element;
  active?: boolean;
  redirect: string;
} & ComponentPropsWithoutRef<"li">;

export const Li = ({
  children,
  icon,
  active = false,
  redirect,
  ...rest
}: LiProps) => {
  return (
    <Link href={redirect}>
      <li
        className={`list-none flex items-center w-full p-2 ${
          active
            ? "bg-grayLight rounded-[4px] [&>p]:text-black [&>svg:first-child]:fill-blue [&>svg:last-child]:hidden border-l-4 border-solid border-blue"
            : "bg-transparent rounded-none [&>p]:text-gray"
        } transition duration-0 hover:duration-300 hover:bg-grayLight hover:rounded-[4px] [&>p]:hover:text-black [&>p]:hover:font-medium [&>svg:first-child]:hover:fill-blue [&>svg:last-child]:hover:hidden`}
        {...rest}
      >
        {icon}
        <p className={`ml-2  ${active ? "font-medium" : "font-normal"}`}>
          {children}
        </p>
        <FaChevronRight className="ml-auto" size={10} />
      </li>
    </Link>
  );
};
