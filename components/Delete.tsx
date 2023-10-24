"use client";
import { deleteNews } from "@/lib/action/news.action";
import { Button } from "./ui/button";
import { TrashIcon } from "@heroicons/react/24/solid";

interface props {
  id: string;
}

const Delete = ({ id }: props) => {
  const handleClick = () => {
    const confirmed = confirm("Are you sure you want to delete?");
    if (confirmed) {
      deleteNews(id);
    }
    return null;
  };
  return (
    <>
      <Button variant="outline" size="icon" onClick={handleClick}>
        <TrashIcon className="h-4 w-4" />
      </Button>
    </>
  );
};

export default Delete;
