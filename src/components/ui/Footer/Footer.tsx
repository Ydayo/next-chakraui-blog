import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className=" h-[100px] flex justify-center items-center text-center border-t border-white ">
      <Link href={"/"}>
        <Image
          src={"/ishikawa-tokyo-logo-white-transparent.png"}
          alt="logo"
          width={500}
          height={500}
          className="w-[200px] h-[40px]"
        />
      </Link>
    </footer>
  );
};

export default Footer;
