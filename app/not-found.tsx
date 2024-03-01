// src/NotFoundPage.tsx

import Link from "next/link";
import { FC } from "react";

const NotFoundPage: FC = () => {
  return (
    <div className="h-screen text-center flex flex-col items-center justify-center">
      <div className="flex items-center flex-col">
        <h1 className="text-2xl font-semibold mr-3 border-r pr-3 border-gray-300 dark:border-gray-600">
          404
        </h1>
        <div>
          <h2 className="text-lg font-medium">This page could not be found.</h2>
        </div>
        <Link href="/">
          <button className="mt-6 inline-flex items-center font-semibold border-2 border-white bg-black hover:bg-green-900 hover:ring-2 hover:ring-green-300 hover:outline-none hover:ring-opacity-50 rounded-lg py-2 px-4 shadow-md hover:shadow-lg transition duration-150 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
