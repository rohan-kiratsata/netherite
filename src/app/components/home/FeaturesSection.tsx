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
    <section className="my-20 flex justify-between">
      {/* 1st Feature */}
      <div className="w-[300px]">
        {/* Title */}
        <h2 className="font-medium text-primary-black text-2xl">
          Visualize Neurons
        </h2>
        {/* Description */}
        <p className="font-medium text-gray-500 text-xl">
          Connect and link neurons and form a visual patterns of your brain.
        </p>
      </div>
      {/* 2nd Feature */}
      <div className="w-[300px]">
        {/* Title */}
        <h2 className="font-medium text-primary-black text-2xl">Dark Mode</h2>
        {/* Description */}
        <p className="font-medium text-gray-500 text-xl">
          Switch between light and dark modes as you like.
        </p>
      </div>
      {/* 3rd Feature */}
      <div className="w-[300px]">
        {/* Title */}
        <h2 className="font-medium text-primary-black text-2xl">
          AI Generated Tags
        </h2>
        {/* Description */}
        <p className="font-medium text-gray-500 text-xl">
          Auto detects images and generates relevent tags to make your job easy.
        </p>
      </div>
      <div className="w-[300px]">
        {/* Title */}
        <h2 className="font-medium text-primary-black text-2xl">
          Free Forever
        </h2>
        {/* Description */}
        <p className="font-medium text-gray-500 text-xl">
          Currently I do not have plans for making pricing plans, but might
          think about it in future.
        </p>
      </div>
    </section>
  );
}
