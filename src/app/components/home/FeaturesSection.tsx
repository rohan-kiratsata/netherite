import React from "react";

type Props = {};

/*
4 Cols mentioning features

1. Graph (connect nodes)
2. Dark mode
3. AI generated Tags
4. Pricing

*/
export default function FeaturesSection({}: Props) {
  return (
    <section className="my-10">
      {/* 1st Feature */}
      <div className="">
        {/* Title */}
        <h2 className="font-medium text-primary-black text-3xl">
          Visualize Neurons
        </h2>
        {/* Description */}
        <p className="font-medium text-gray-500 text-xl">
          Connect and link neurons and form a visual patterns of your brain.
        </p>
      </div>
      {/* 2nd Feature */}
    </section>
  );
}
