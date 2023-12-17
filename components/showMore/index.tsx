"use client";

import { useRouter } from "next/navigation";
import Button from "../button";

const ShowMore = ({ isNext }: { isNext: boolean }) => {
  const router = useRouter();

  const handleClick = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const limit = searchParams.get("_limit");
    searchParams.set("_limit", limit ? (Number(limit) + 8).toString() : "16");
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname, { scroll: false });
  };

  return (
    <div className="flex justify-center my-8">
      {isNext && (
        <Button handleClick={handleClick}>Daha çox</Button>
      )}
    </div>
  );
};

export default ShowMore;
