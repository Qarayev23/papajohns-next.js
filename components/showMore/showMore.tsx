"use client";

import { useRouter } from "next/navigation";
import { ShowMoreProps } from "@/types";
import Button from "../button/button";

const ShowMore = ({ pageNumber, isNext, isEqual }: ShowMoreProps) => {
  const router = useRouter();

  const handleClick = () => {
    const newLimit = (pageNumber + 1) * 8;
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("_limit", newLimit.toString());
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname, { scroll: false });
  };

  return (
    <div className="flex justify-center my-8">
      {!isNext && !isEqual && (
        <Button handleClick={handleClick}>Daha çox</Button>
      )}
    </div >
  );
};

export default ShowMore;
