"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RenderImage from "./renderImage";
import Navbar from "@/components/ui/navbar";

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
				translateX: "-300vw",
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
					<div className="scroll-section">
						<RenderImage></RenderImage>
						<div className="container flex flex-col items-center">
							<p className="text-4xl font-bold text-center">
								Lalith Shravan Gururprasad
							</p>
							<p className="text-center">
								Researcher and Developer
							</p>
						</div>
					</div>
					<div className="scroll-section">
						<RenderImage></RenderImage>
						<div className="container flex flex-col items-center">
							<p className="text-4xl font-bold text-center">
								Sai Avinash Chittella
							</p>
							<p className="text-center">
								Researcher and Developer
							</p>
						</div>
					</div>
					<div className="scroll-section">
						<RenderImage></RenderImage>
						<div className="container flex flex-col items-center">
							<p className="text-4xl font-bold text-center">
								Tanush Bhatia
							</p>
							<p className="text-center">Graphic Designer</p>
						</div>
					</div>
					<div className="scroll-section">
						<RenderImage></RenderImage>
						<div className="container flex flex-col items-center">
							<p className="text-4xl font-bold text-center">
								Logan Dharmawan
							</p>
							<p className="text-center">
								Researcher and Graphic Designer
							</p>
						</div>
					</div>
					<div className="scroll-section">
						<RenderImage></RenderImage>
						<div className="container flex flex-col items-center">
							<p className="text-4xl font-bold text-center">
								Brian Kearl
							</p>
							<p className="text-center">
								Developer and Graphic Designer
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ScrollSection;
