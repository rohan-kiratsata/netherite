"use client";

import React, { useState } from "react";
import { Button } from "@nextui-org/button";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <section className="md:h-[90vh] flex flex-col items-center justify-center text-center">
      {/* <PrimaryButton size="text-2xl" /> */}
      <div className="flex items-center justify-center flex-col">
        {/*  */}
        <div className="p-2 rounded-lg border border-nuetral-500">
          <span>Pre-alpha stage! Join the waitlist</span>
        </div>
        <h1 className="text-8xl mt-10 font-medium">
          visual bookmarking <br /> just like your{" "}
          <span className="">brain</span>
        </h1>
        <p className="text-gray-500 text-2xl w-[60%] text-center mt-5">
          Netherite lets you bookmark images, links, tweets, notes, literally
          anything without the need for traditional folders.
        </p>
        <div className="my-10">
          <Button color="primary" size="lg">
            Button
          </Button>
        </div>
      </div>
    </section>
  );
}
