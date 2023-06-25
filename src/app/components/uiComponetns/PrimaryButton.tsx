import Link from "next/link";
import React from "react";

type Size =
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-5xl"
  | "text-6xl"
  | "text-7xl"
  | "text-8xl";

type Props = {
  size: Size;
};

export default function PrimaryButton({ size }: Props) {
  const fontSize = size ? size : "text-lg";
  // Styling
  const primaryBtnStyle = `text-white py-2 px-3 bg-gradient-to-r from-indigo-400 to-rose-400 rounded-3xl ${fontSize}`;

  return (
    <>
      <Link href="/signup" className={primaryBtnStyle}>
        Signup
      </Link>
    </>
  );
}
