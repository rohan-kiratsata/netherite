import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
type Props = {};

export default function page({}: Props) {
  return (
    <>
      <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
        <Card className="px-10 py-10">
          <CardHeader className="flex items-center justify-center flex-col">
            <h1 className="text-2xl font-semibold text-center">
              Log in to your account
            </h1>
            <span className="text-xl my-2 font-semibold text-primary">
              Netherite
            </span>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-4">
              <Input
                type="text"
                size="md"
                variant="bordered"
                color="primary"
                placeholder="Email"
                className="w-[400px]"
              />
              <div>
                <Input
                  type="password"
                  size="md"
                  variant="bordered"
                  color="primary"
                  placeholder="Password"
                />
                <div className="mt-2">
                  Forgot Password? <Link href="/">Reset</Link>
                </div>
              </div>

              <Button
                variant="solid"
                color="primary"
                className="w-full text-base font-medium"
                size="md"
              >
                Login
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
