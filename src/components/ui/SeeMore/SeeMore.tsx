import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const SeeMore: FC = () => {
  return (
    <ul className=" flex justify-center items-center text-white my-[30px]">
      <li className=" flex items-center justify-center p-[10px] rounded-lg bg-white">
        <Image src={"/github.png"} width={100} height={100} alt="github" />
      </li>
      <li>
        <a
          href="https://github.com/Ydayo"
          target="_blank"
          className="text-white text-[20px] transition hover:text-orange-400"
        >
          My Github
        </a>
      </li>
      <li>or</li>
      <li>
        <Link
          href={"/blog"}
          className="text-white text-[20px] transition hover:text-orange-400"
        >
          My Blog
        </Link>
      </li>
    </ul>
  );
};

export default SeeMore;
