import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Mask: FC = () => {
  return (
    <div className="w-full h-[100svh] overflow-hidden">
      <ul className="h-full flex flex-col text-center justify-center items-center">
        <li className="">
          <Image
            src={"/ishikawa-tokyo-logo-white-transparent.png"}
            alt="Ishikawa Tokyo"
            width={500}
            height={100}
            className=""
            priority
          />
        </li>
        <li className=" mt-12">
          <Link
            href={"/about"}
            className=" block font-bold text-slate-800 no-underline transition text-[35px] hover:text-orange-400"
          >
            about
          </Link>
        </li>
        <li className=" mt-5">
          <Link
            href={"/blog"}
            className=" block font-bold text-slate-800 no-underline transition text-[35px] hover:text-orange-400"
          >
            blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Mask;
