"use client";

import SpinningEarth from "@/components/ui/earth";
import GridFloor from "@/components/ui/gridFloor";
import Navbar from "@/components/ui/navbar";
import IntroAnimation from "@/components/ui/square-intro-anim";
import WavyBackground from "@/components/ui/wavy-background";
import { cn } from "@/utils/cn";
import { Lato } from "next/font/google";
import { useEffect } from "react";

const lato = Lato({ weight: "700", subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  });

  return (
    <IntroAnimation>
      <Navbar className="top-2 border-zinc-800 border-2 rounded-full" />

      <main className="flex min-h-screen flex-col items-center justify-between p-24 themed overflow-visible">
        <WavyBackground
          className="fullscreen z-20"
          colors={["#19fba6", "#39f5cf", "#5ff0fd", "#06fe8f", "#29f8ba"]}
        >
          <GridFloor className="hidden xl:block" />
          <div className="absolute fit max-width-[100vw] top-[43%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-[#91ffb7] to-transparent to-60% bg-center"></div>
          <SpinningEarth />
          <div
            className={cn(
              "absolute ml-64 mt-16 sm:ml-40 sm:mt-24 md:m-20 lg:m-8 text-white text-4xl",
              lato.className
            )}
          >
            Save energy.
            <br />
            Save the world.
          </div>
        </WavyBackground>
      </main>
    </IntroAnimation>
  );
}
