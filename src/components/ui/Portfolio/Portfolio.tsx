import { portfolioItem } from "@/store";
import Image from "next/image";
import { PortfolioImageProps } from "@/types/ImageTypes";
import { FC } from "react";

export const Portfolio: FC = () => {
  return (
    <>
      <h1 className=" text-center text-[40px] font-bold text-orange-400">
        Portfolio
      </h1>
      <div className=" flex flex-wrap justify-evenly text-center mx-auto rounded-2xl py-5">
        {portfolioItem.map(
          ({ id, src, title, description, link }: PortfolioImageProps) => (
            <a
              href={link}
              target="_blank"
              key={id}
              className="w-[400px] items-center no-underline text-white p-4 transition rounded-md hover:bg-slate-400"
            >
              <Image
                src={src}
                width={400}
                height={200}
                alt="PortfolioImage"
                className=""
              />
              <p className=" text-left ml-2">{title}</p>
              <p className=" text-left ml-2">{description}</p>
            </a>
          )
        )}
      </div>
    </>
  );
};
