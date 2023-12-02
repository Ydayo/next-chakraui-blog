"use client";
import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft } from "@/components/icons/ChevronLeft";
import { ChevronRight } from "@/components/icons/ChevronRight";

type PaginationControlsProps = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
};

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "8";
  return (
    <div className="flex justify-center items-center gap-3">
      <button
        className="border-none bg-white flex text-center items-center h-[25px] w-[25px] rounded-full justify-center"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/blog/?page=${Number(page) - 1}`);
        }}
      >
        <ChevronLeft color="black" />
      </button>

      <div className="text-white">
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <button
        className="border-none bg-white flex text-center items-center h-[25px] w-[25px] rounded-full justify-center"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/blog/?page=${Number(page) + 1}`);
        }}
      >
        <ChevronRight color="black" />
      </button>
    </div>
  );
};

export default PaginationControls;
