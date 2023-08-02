import React from "react";
import PrimaryButton from "../uiComponents/PrimaryButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="py-8 flex justify-between w-full text-primary-black">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-medium">Netherite</h1>
      </div>
      <nav>
        <ul className="text-lg font-medium flex gap-5">
          {/* Navbar Links  */}
          <Link href="/">
            <li>How to?</li>
          </Link>
          <Link href="/">
            <li>Craftsman</li>
          </Link>
          <Link href="/">
            <li>Show love</li>
          </Link>
          {/* Signup/login CTA */}
          <div>
            <PrimaryButton size={"text-lg"} />
          </div>
        </ul>
      </nav>
    </header>
  );
}
