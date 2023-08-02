"use client";

import React from "react";
import { css } from "@emotion/react";
import PrimaryButton from "../uiComponents/PrimaryButton";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <section className="md:h-[80vh] flex flex-col items-center justify-center text-center">
      {/* <PrimaryButton size="text-2xl" /> */}
      <div className="">
        <h1 className="text-5xl font-semibold text-primary-black">
          visual bookmarking just like your{" "}
          <span className="text-gradient">brain</span>
        </h1>
        <style jsx>
          {`
            .text-gradient {
              background: #818cf8;
              background: linear-gradient(to right, #818cf8 0%, #fb7185 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          `}
        </style>
      </div>
    </section>
  );
}
