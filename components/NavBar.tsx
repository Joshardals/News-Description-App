import Link from "next/link";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="w-full bg-gray-200 h-auto p-5 flex justify-between items-center">
      <Link href="/" className="font-bold">
        Python Ninja
      </Link>

      <Button asChild>
        <Link href="/addNews">Add News</Link>
      </Button>
    </div>
  );
};

export default NavBar;
