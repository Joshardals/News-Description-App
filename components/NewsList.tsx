import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { Button } from "./ui/button";
import Link from "next/link";
import Delete from "./Delete";
import { formatDateString } from "@/lib/utils";

interface Props {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
const NewsList = ({ id, title, description, createdAt, updatedAt }: Props) => {
  const notUpdated = createdAt === updatedAt;
  return (
    <section
      className="flex flex-col w-full justify-between border dark:border dark:border-[#3f3f3f] border-black p-5 h-auto
    space-y-2 sm:space-y-4"
    >
      <div className="flex flex-col sm:flex-row space-x-3 justify-between">
        <div className="space-y-1 ">
          <div>
            <h2 className="font-bold text-2xl">{title}</h2>
          </div>
          <div className="inline-flex">{description}</div>
        </div>

        <div className="space-x-2 flex justify-end sm:justify-start max-sm:hidden">
          <Delete id={id} />

          <Link href={`/editNews/${id}`}>
            <Button variant="outline" size="icon">
              <PencilSquareIcon className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="text-xs flex items-center justify-between">
        <span>
          <b className="italic">{notUpdated ? "Updated:" : "Created: "}</b>{" "}
          {formatDateString(notUpdated ? updatedAt : createdAt)}
        </span>
        <div className="space-x-2 flex justify-end sm:justify-start sm:hidden">
          <Delete id={id} />

          <Link href={`/editNews/${id}`}>
            <Button variant="outline" size="icon">
              <PencilSquareIcon className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsList;
