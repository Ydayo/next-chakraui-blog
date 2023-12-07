"use client";
import { FC, MouseEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun } from "@/components/icons/Sun";
import { Moon } from "@/components/icons/Moon";
import { useColorChange } from "@/hooks/ToggleColorChage";
import { Button } from "@chakra-ui/react";
import { Menu } from "@/components/icons/Menu";
import { Close } from "@/components/icons/Close";

const Header: FC = () => {
  const [toggle, setToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const { toggleColorMode, fromBackground } = useColorChange();
  const handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleColorMode();
    setToggle(!toggle);
  };
  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
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
      <Button
        className=" rounded-full hover:bg-white-1/2 w-12 h-12 absolute t-4 right-[80px]"
        onClick={handleMenuToggle}
      >
        <Menu color="white" className=" w-full h-full" />
      </Button>
      <div
        className={`w-[240px] h-full absolute top-0 right-[-100%] z-[1000] bg-black transition-all ${
          menuToggle && "right-0"
        }`}
      >
        <Button onClick={handleMenuToggle} className="absolute top-0 right-0">
          <Close color="white" />
        </Button>
        <Link className="text-white mt-14 block font-bold" href={"/"}>
          Homeへ戻る
        </Link>
        <Link className="text-white mt-5 block font-bold" href={"/blog"}>
          Blogへ行く
        </Link>
      </div>
    </header>
  );
};

export default Header;
