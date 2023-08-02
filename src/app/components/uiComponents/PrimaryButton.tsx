import Link from "next/link";
import React, { ReactNode } from "react";

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

type Variant = "primary" | "outline";

type Props = {
  size: Size;
  variant: Variant;
  children: ReactNode;
};

export default function PrimaryButton({ size, variant, children }: Props) {
  const fontSize = size ? size : "text-lg";

  // Styling
  const primaryBtnStyle = `text-white py-2 px-3 from-primary-black to-neutral-700 bg-gradient-to-b rounded-md ${fontSize}`;

  const outlineBtnStyle = `text-primary-black py-2 px-3 from-primary-white to-gray-200 bg-gradient-to-b rounded-md border-[0.5px] border-[#CECECE]`;

  return (
    <>
      <Link
        href="/signup"
        className={variant == "primary" ? primaryBtnStyle : outlineBtnStyle}
      >
        {children}
      </Link>
    </>
  );
}
