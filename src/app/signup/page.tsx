"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/react";
import { PiX, PiGoogleLogo, PiEye, PiEyeSlash } from "react-icons/pi";

type Props = {};

export default function SignUpPage({}: Props) {
  // password input visiblity
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  // add generated password
  const [password, setPassword] = useState("");

  const handleGeneratedPassword = () => {
    const newPassword = GeneratePassword();
    setPassword(newPassword);
  };

  return (
    <div className="bg-slate-300 px-20 py-10 h-screen">
      <div className="rounded-2xl bg-primary-white px-10 py-5 h-full">
        {/* Logo / Nav */}
        <div className="mb-10 flex items-center justify-between">
          <h3 className="text-2xl text-center">Netherite</h3>
          <Button
            as={Link}
            isIconOnly
            aria-label="Close"
            size="lg"
            variant="light"
            href="/"
          >
            <PiX size={24} />
          </Button>
        </div>
        {/* Title */}
        <h1 className="text-5xl font-semibold text-center">
          Greetings, fellow human.
        </h1>
        <p className="text-center font-medium text-xl mt-4 text-gray-500">
          First, Let's create your account!
        </p>

        {/* Form */}
        <div className="w-full flex flex-col items-center justify-center my-5 gap-3">
          <Input
            type="email"
            label="Email"
            className="w-[300px]"
            variant="faded"
          />
          <Input
            defaultValue={password}
            label="Password"
            className="w-[300px]"
            variant="faded"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <PiEyeSlash
                    size={24}
                    className=" text-default-400 pointer-events-none"
                  />
                ) : (
                  <PiEye
                    size={24}
                    className=" text-default-400 pointer-events-none"
                  />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
          {/* Generate password */}
          <div className="w-[300px] ">
            <Link
              onClick={handleGeneratedPassword}
              color="primary"
              className="text-sm cursor-pointer"
            >
              Generate password
            </Link>
          </div>
          {/* Signup Options */}
          <Button color="primary" variant="solid" className="w-[300px]">
            Signup
          </Button>
          <span className="text-gray-300">OR</span>
          <Button variant="faded" className="w-[300px]">
            <PiGoogleLogo size={20} /> Signup with Google
          </Button>
          <div className="text-gray-500 text-sm">
            Already using Netherite?{" "}
            <Link
              href="#"
              color="primary"
              underline="hover"
              className="text-sm"
            >
              Log in here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export const GeneratePassword = () => {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  const allCharacters = lowercase + uppercase + numbers + symbols;

  const passwordLength = Math.floor(Math.random() * (16 - 8 + 1) + 8);
  let generatedPassword = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    generatedPassword += allCharacters[randomIndex];
  }

  return generatedPassword;
};
