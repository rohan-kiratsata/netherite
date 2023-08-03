import React from "react";
import PrimaryButton from "../uiComponents/PrimaryButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="py-4 rounded-xl my-5 border border-[#E0E0E0] px-5 flex w-[70%] mx-auto justify-between text-primary-black bg-[#F9F9F9] items-center">
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
            <li>Craftsman</li>
          </Link>
          <Link
            href="/"
            className="hover:text-primary-black transition-colors ease-in-out"
          >
            <li>Show love</li>
          </Link>
        </ul>
      </nav>
      {/* Signup/login CTA */}
      <div className="flex gap-4 items-center">
        {/* <PrimaryButton variant="outline" size={"text-base"}>
          Login
        </PrimaryButton> */}
        <PrimaryButton variant="primary" size={"text-base"}>
          Join waitlist
        </PrimaryButton>
      </div>
    </header>
  );
}
