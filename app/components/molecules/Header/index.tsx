"use client";

import { usePathname } from "next/navigation";
import { User } from "../User";
import { titles, texts } from "@/app/helpers/headerTexts";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center pb-[11px] border-b-2 border-solid border-grayLight">
      <div>
        <h1 className="text-3xl font-bold mb-1">{titles[pathname].text}</h1>
        <p className="text-sm text-gray">{texts[pathname].text}</p>
      </div>

      <User email="jamesbrown@teste.com" name="James Brown" />
    </header>
  );
};
