"use client";

import SpinningEarth from "@/components/ui/earth";
import GridFloor from "@/components/ui/gridFloor";
import Navbar from "@/components/ui/navbar";
import IntroAnimation from "@/components/ui/square-intro-anim";
import WavyBackground from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <IntroAnimation>
      <Navbar className="top-2 border-zinc-800 border-2 rounded-full" />

      <main className="flex min-h-screen flex-col items-center justify-between p-24 themed overflow-visible">
        <WavyBackground
          className="fullscreen z-20"
          colors={["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"]}
        >
          <GridFloor />
          <div className="absolute top-[-8px] fullscreen bg-gradient-radial from-[#91ffb7] to-transparent to-60% bg-center"></div>
          <SpinningEarth />
        </WavyBackground>
      </main>
    </IntroAnimation>
  );
}
