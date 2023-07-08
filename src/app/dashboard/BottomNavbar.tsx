import React from "react";
import { PiBrain, PiGraph, PiGear } from "react-icons/pi";
import { IconType } from "react-icons/lib/esm/iconBase";

let navItems: { id: number; name: String; icon: JSX.Element; route: String }[] =
  [
    {
      id: 1,
      name: "Brain",
      icon: <PiBrain />,
      route: "/dashboard",
    },
    {
      id: 2,
      name: "Graph",
      icon: <PiGraph />,
      route: "/graph",
    },
    {
      id: 3,
      name: "Settings",
      icon: <PiGear />,
      route: "/account",
    },
  ];

export default function BottomNavbar() {
  return (
    <div className="border border-neutral-800 flex gap-5 px-6 py-2 rounded-full bg-gradient-to-b from-neutral-800 to-transparent to-80%  w-fit fixed left-1/2 -translate-x-1/2 bottom-5 h-fit">
      {navItems.map((navItem) => {
        return (
          <div key={navItem.id} className="flex flex-col items-center">
            <div className="text-3xl">{navItem.icon}</div>
            <p className="text-sm font-light">{navItem.name}</p>
          </div>
        );
      })}
    </div>
  );
}
