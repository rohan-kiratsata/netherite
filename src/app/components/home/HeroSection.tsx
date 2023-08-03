"use client";

import React from "react";
import { css } from "@emotion/react";
import PrimaryButton from "../uiComponents/PrimaryButton";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <section className="md:h-[80vh] flex flex-col items-center justify-center text-center">
      {/* <PrimaryButton size="text-2xl" /> */}
      <div className="flex items-center justify-center flex-col">
        {/*  */}
        <div className="bg-neutral-100  p-2 rounded-lg text-neutral-500 border border-nuetral-500">
          <span>Pre-alpha stage! Join the waitlist</span>
        </div>
        <h1 className="text-8xl mt-10 font-semibold text-primary-black">
          visual bookmarking <br /> just like your{" "}
          <span className="text-neutral-400">brain</span>
        </h1>
        <p className="text-gray-500 text-2xl w-[60%] text-center mt-5">
          Netherite lets you bookmark images, links, tweets, notes, literally
          anything without the need for traditional folders.
        </p>
        <div className="my-10">
          <PrimaryButton size="text-xl" variant="primary">
            Join waitlist
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
