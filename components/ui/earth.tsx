"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const SpinningEarth = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const screenHeight = document.documentElement.clientHeight / 3;

    const tl = gsap.timeline();
    tl.to(wrapperRef.current, {
      duration: 3,
      y: -screenHeight,
      ease: "circ.Out",
      delay: 3,
    });
  }, [wrapperRef]);

  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return (
    <div
      ref={wrapperRef}
      className="absolute width-[50vw] top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[50vh] flex justify-center align-middle max-w-fit"
    >
      {!isSafari && (
        <video autoPlay loop muted>
          <source src="/earth.webm" type="video/webm" />
        </video>
      )}
      {isSafari && <Image src="/earth.png" alt="earth"></Image>}
    </div>
  );
};

export default SpinningEarth;
