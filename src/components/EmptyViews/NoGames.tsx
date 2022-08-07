import Link from "next/link";

export const NoGames = () => {
  return (
    <div className="flex flex-col justify-start items-center py-2">
      <h2 className="text-lg text-center pb-6">
        Looks like there are no active games.
      </h2>
      <Link href="/">
        <button className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
          Go Back
        </button>
      </Link>
    </div>
  );
};
