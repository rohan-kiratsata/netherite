import React from "react";
// import PrimaryButton from "../uiComponents/PrimaryButton";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-5 py-4 rounded-xl my-5 border border-[#E0E0E0] px-5 flex w-[70%] mx-auto justify-between text-primary-black bg-[#F9F9F9]/60 backdrop-blur-md items-center z-50">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-medium">Netherite</h1>
      </div>
      <nav>
        <ul className="text-base text-neutral-500  items-center justify-center flex gap-5">
          {/* Navbar Links  */}
          <Link
            href="/"
            className="hover:text-primary-black transition-colors ease-in-out"
          >
            <li>How to?</li>
          </Link>
          <Link
            href="/"
            className="hover:text-primary-black transition-colors ease-in-out"
          >
            <li>Why?</li>
          </Link>
          <Link
            href="/"
            className="hover:text-primary-black transition-colors ease-in-out"
          >
            <li>Who?</li>
          </Link>
        </ul>
      </nav>
      {/* Signup/login CTA */}
      <div className="flex gap-4 items-center">
        {/* <PrimaryButton variant="outline" size={"text-base"}>
          Login
        </PrimaryButton> */}
        <Button variant="solid" color="primary">
          Signup
        </Button>
      </div>
    </header>
  );
}
