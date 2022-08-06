import Link from "next/link";
import DetailLayout from "../components/layouts/Detail";

import {
  IoIosBaseball,
  IoIosAmericanFootball,
  IoIosBasketball,
} from "react-icons/io";

const container = "flex flex-col items-center pb-1";
const cardStyle =
  "bg-gray-600 h-12 rounded-md pr-2 pl-4 cursor-pointer flex gap-x-3 items-center";

export const Home = () => {
  return (
    <DetailLayout className="gap-y-2">
      <div className={`${container} border-b-2 border-white`}>
        <h1 className="text-xl">Choose a sport to see what games are on.</h1>
      </div>
      <div className={container}>
        <div className="flex flex-col gap-y-2 w-full mt-2">
          <Link href="/baseball">
            <div className={cardStyle}>
              <IoIosBaseball className="text-3xl" />
              <span className="text-lg">Baseball</span>
            </div>
          </Link>
          <Link href="/basketball">
            <div className={cardStyle}>
              <IoIosBasketball className="text-3xl" />
              <span className="text-lg">Basketball</span>
            </div>
          </Link>
          <Link href="/football">
            <div className={cardStyle}>
              <IoIosAmericanFootball className="text-3xl" />
              <span className="text-lg">Football</span>
            </div>
          </Link>
        </div>
      </div>
    </DetailLayout>
  );
};

export default Home;
