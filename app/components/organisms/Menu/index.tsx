"use client";

import { MdDashboardCustomize } from "react-icons/md";
import { PiPlant } from "react-icons/pi";

import { usePathname } from "next/navigation";
import { Li } from "../../atoms/LinkNav";

export const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className="max-w-[300px] ">
      <h3 className="text-xs text-[#aaaaaa] mb-4">MENU</h3>
      <ul className="[&>a>li]:mb-2">
        <Li
          icon={<MdDashboardCustomize color="#5C5C5C" />}
          redirect="/dashboard"
          active={pathname === "/dashboard"}
        >
          Dashboard
        </Li>
        <Li
          icon={<PiPlant color="#5C5C5C" />}
          redirect="/plants"
          active={pathname.includes("/plants")}
        >
          Plantas
        </Li>
      </ul>
    </nav>
  );
};
