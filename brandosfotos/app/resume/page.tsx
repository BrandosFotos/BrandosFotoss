"use client";
import { Image } from "@nextui-org/image";
import React from "react";
import { Button, Progress } from "@nextui-org/react";
export default function ResumePage() {
  return (
    <div>
      <div className="font-mono grid grid-rows-2 grid-cols-2">
        <div className="flex-auto bg-indigo-950/[0.1] bg-gray-50 dark:bg-[#1A1A1A] rounded-3xl shadow-xl m-1 p-4">
          <Image
            alt="Brandon Memoji"
            radius="full"
            shadow="md"
            src="SmilingWaveBrandon.png"
            width={350}
          />
          <br />
          <h1 className="font-bold text-3xl">Brandon White</h1>
          <br />
          <p>
            Network Engineer at Peraton <br />{" "}
          </p>
        </div>
        <div className="bg-indigo-950/[0.1] bg-gray-50 dark:bg-[#1A1A1A] space-y-7 rounded-3xl shadow-xl m-1 p-4">
          <h2 className="font-semibold text-2xl">Experience</h2>
          <Progress
            className="max-w-md"
            color="success"
            label="Web Development"
            size="md"
            value={85}
          />

          <Progress
            className="max-w-md"
            color="success"
            label="Graphic Design"
            size="md"
            value={50}
          />
          <Progress
            className="max-w-md"
            color="success"
            label="Windows Server 2022"
            size="md"
            value={75}
          />
          <Progress
            className="max-w-md"
            color="success"
            label="TailwindCSS"
            size="md"
            value={70}
          />
          <Progress
            className="max-w-md"
            color="success"
            label="Ability to Learn"
            size="md"
            value={100}
          />
        </div>

        <div className="col-span-2 bg-indigo-950/[0.1] bg-gray-50 dark:bg-[#1A1A1A] rounded-3xl shadow-xl p-4 m-2">
          <div className="flex-wrap text-left">
            <div className="flex-initial w-14">
              <Button
                isIconOnly
                aria-label="Like"
                className="bg-yellow-200"
                color="default"
              >
                <Image
                  alt="Book Emoji"
                  src="open-book-svgrepo-com.svg"
                  width="36"
                />
              </Button>
            </div>
            <div className="flex-1 w-10">
              <h1 className="text-3xl">Experience</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
