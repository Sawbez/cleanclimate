"use client";
import Navbar from "@/components/ui/navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Person from "./person";

function ScrollSection(): React.ReactElement {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-500vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <Navbar className="top-2 border-zinc-800 border-2 rounded-full"></Navbar>
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
			<Person person="Brian Kearl" role="Lead Developer, Primary Researcher, and Graphic Designer" src="brian.jpeg"></Person>
			<Person person="Logan Dharmawan" role="Lead Researcher and Graphic Designer" src="logan.jpeg"></Person>
			<Person person="Sai Avinash Chittella" role="Researcher and Coder" src="sai.webp"></Person>
			<Person person="Lalith Shravan Gururprasad" role="Researcher and Coder" src="lalith.jpeg"></Person>
			<Person person="Tanush Bhatia" role="Graphic Designer" src="tanush.jpeg"></Person>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
