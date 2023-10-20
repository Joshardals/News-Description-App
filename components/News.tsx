import { TrashIcon, PencilSquareIcon } from "@heroicons/react/20/solid";
import { Button } from "./ui/button";
import Link from "next/link";

const News = () => {
  return (
    <section
      className="flex flex-col sm:flex-row w-full justify-between border border-black p-5 h-auto
     space-y-2 sm:space-y-0"
    >
      <div className="space-y-1 sm:space-y-0 sm:w-[85%]">
        <div>
          <h2 className="font-bold text-2xl">Dance Dreams</h2>
        </div>
        <div className="inline-flex">
          Amidst the vibrant cityscape, a lone street performer danced to the
          rhythm of an invisible tune, captivating the curious onlookers with
          graceful movements that told a story of unspoken dreams.
        </div>
      </div>

      <div className="space-x-2 flex justify-end sm:justify-start">
        <Link href="#">
          <Button variant="outline" size="icon">
            <TrashIcon className="h-4 w-4" />
          </Button>
        </Link>

        <Link href={"/editNews/josh"}>
          <Button variant="outline" size="icon">
            <PencilSquareIcon className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default News;
