"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC, useRef } from "react";

const SquareAnimation: FC = ({}) => {
  const squareRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const screenWidth = document.documentElement.clientWidth;
    const screenHeight = document.documentElement.clientHeight;
    const size = Math.min(0.4 * screenWidth, 0.4 * screenHeight);

    const tl = gsap.timeline();
    tl.to(squareRef.current, {
      duration: 2,
      width: size,
      height: size,
      rotation: 180,
      ease: "expo",
    })
      .to(
        squareRef.current,
        {
          duration: 0.25,
          width: 0,
          height: 0,
          ease: "circ.in",
        },
        "-=30%"
      )
      .to("#grid-left", { duration: 1, x: "-100%", ease: "expo.out" })
      .to("#grid-right", { duration: 1, x: "100%", ease: "expo.out" }, "<");
  }, [squareRef]);

  return (
    <div
      className="absolute fullscreen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50"
      ref={squareRef}
    ></div>
  );
};

const IntroAnimation: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <div className="absolute grid grid-cols-2 w-screen h-screen">
        <div id="grid-left" className="bg-black z-40"></div>
        <div id="grid-right" className="bg-black z-40"></div>
      </div>
      {children}
      <SquareAnimation />
    </>
  );
};

export default IntroAnimation;
