/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {};

export default function HowToSection({}: Props) {
  return (
    <>
      <section>
        <div className="w-[70%] my-10 mx-auto">
          <h1 className="text-5xl font-medium text-primary-black text-center">
            All of your notes, images, articles, bookmarks, quotes in one single{" "}
            <span className="text-neutral-400">vault</span>
          </h1>
        </div>

        <div className="my-10 p-2 bg-neutral-200 rounded-lg">
          <img src="/graph-screenshot.png" alt="" className="rounded-lg" />
        </div>
      </section>
    </>
  );
}
