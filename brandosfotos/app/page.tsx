"use client";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import React from "react";

import { title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Brandos</h1>
        <h1 className={title({ color: "violet" })}>Fotos&nbsp;</h1>
        <br />
        <br />
        <h1 className={title()}>
          We are under maintenance, please come back soon!
        </h1>
      </div>

      <div className="flex text-center grid-rows-2 gap-2 sm:gap-15 md:gap-20">
        <div className="bg-indigo-950/[0.1] bg-white dark:bg-[#1A1A1A] ring-primary/5 dark:ring-white/10 rounded-3xl shadow-md p-4">
          <Image
            alt="Smiling Memoji"
            radius="full"
            shadow="md"
            src="SmilingWaveBrandon.png"
            width={350}
          />
          <br />
          <h1 className="font-bold text-3xl">Brandon White</h1>
          <br />
          <Button
            showAnchorIcon
            as={Link}
            color="primary"
            href="/about#brandon"
            variant="solid"
          >
            Learn More
          </Button>
        </div>
        <div className="bg-indigo-950/[0.1] bg-white dark:bg-[#1A1A1A] ring-primary/5 dark:ring-white/10 rounded-3xl shadow-md p-4">
          <Image
            alt="Amelia Memoji"
            radius="full"
            shadow="md"
            src="CuteAmeliaPosing.png"
            width={350}
          />
          <br />
          <h1 className="font-bold text-3xl">Amelia Ownby</h1>
          <br />
          <Button
            showAnchorIcon
            as={Link}
            color="primary"
            href="/about#amelia"
            variant="solid"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="flow-root ..." />
      <div className="flow-root ..." />
      <div className="flow-root ..." />
      <div className="flow-root ..." />
    </section>
  );
}
