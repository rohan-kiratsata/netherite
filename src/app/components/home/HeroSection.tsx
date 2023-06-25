import React from "react";
import PrimaryButton from "../uiComponetns/PrimaryButton";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <section className="md:h-[80vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-medium">
        Connect Everything. <br /> Organize Nothing.
      </h1>
      <div className="text-zinc-600 text-2xl font-medium my-3 w-[500px]">
        Netherite is visual bookmarking plus note taking app without need of
        traditional folders
      </div>
      <PrimaryButton size="text-2xl" />
    </section>
  );
}
