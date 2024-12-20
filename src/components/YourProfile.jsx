import React from "react";
import { Link } from "react-router-dom";

function YourProfile() {
  return (
    <>
      <div className="border-b border-gray-400 pb-12 m-auto max-w-96">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-800 sm:text-4xl text-center pt-10">
          Your Profile
        </h1>
      </div>
      <div className="m-auto pl-40 flex gap-52">
        <div className="space-y-5">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="size-28 rounded-full shadow-2xl"
          />
        </div>
        <div className="p-8">
        <h1 className="text-balance text-2xl font-semibold tracking-tight text-gray-00 sm:text-5xl">
            Welcome! Name
          </h1>
        </div>
      </div>

      <div>
      <p className="mt-8 text-center text-pretty text-md font-medium text-black sm:text-xl/6">
           Your Email : abc@example.com
          </p>
      </div>

      <p className="mt-10 text-center text-sm/6 text-gray-500">
        Want to make any changes?{" "}
        <Link
          to="/setting"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Go to Settings
        </Link>
      </p>
    </>
  );
}

export default YourProfile;
