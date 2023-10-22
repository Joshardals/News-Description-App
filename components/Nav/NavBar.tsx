import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../Themes/ModeToggle";

const NavBar = () => {
  return (
    <div className="w-full bg-gray-200 dark:bg-[#282828] h-auto p-5 flex justify-between items-center">
      <Link href="/" className="font-bold">
        Python Ninja
      </Link>

      <div className="flex items-center space-x-2">
        <Button asChild>
          <Link href="/addNews">Add News</Link>
        </Button>

        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
