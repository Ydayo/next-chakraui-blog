"use client";
import { FC, MouseEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun } from "@/components/icons/Sun";
import { Moon } from "@/components/icons/Moon";
import { useColorChange } from "@/hooks/ToggleColorChage";
import { Button } from "@chakra-ui/react";
import { useScroll } from "@/hooks/Scroll";

const Header: FC = () => {
  const [toggle, setToggle] = useState(false);
  const { toggleColorMode, fromBackground } = useColorChange();
  const handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleColorMode();
    setToggle(!toggle);
  };
  return (
    <header className="w-full h-[80px] flex justify-center text-center items-center border-b border-white">
      <Link href={"/"}>
        <Image
          src={"/ishikawa-tokyo-logo-white-transparent.png"}
          alt="logo"
          width={500}
          height={500}
          className="w-[200px] h-[40px]"
          priority
        />
      </Link>
      <div className=" bg-green-100 rounded-full h-[45px] w-[45px] flex justify-center items-center text-center absolute top-4 right-6">
        <Button
          className="rounded-full w-full h-full hover:bg-green-300"
          onClick={handleToggle}
        >
          {toggle ? <Moon /> : <Sun />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
