import { skillIcons } from "@/store";
import { ImageProps } from "@/types/ImageTypes";
import Image from "next/image";
import React, { FC } from "react";

const Skill: FC = () => {
  return (
    <>
      <h1 className=" text-center text-[40px] font-bold text-orange-400 my-5">
        Skill
      </h1>
      <ul className=" flex flex-wrap justify-center mb-[100px] gap-3">
        {skillIcons.map(
          ({ id, icon, width = 100, height = 100 }: ImageProps) => (
            <li
              key={id}
              className="min-w-[300px] min-h-[150px] flex basis-1/3 text-center justify-center items-center p-3 rounded-2xl bg-slate-200 list-none"
            >
              <Image
                src={icon}
                width={width}
                height={height}
                alt="Skill Icon"
                className="w-[120px] h-auto"
                priority
              />
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default Skill;
