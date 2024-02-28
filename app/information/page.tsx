"use client";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CircleWithImageProps {
	name: string;
	role: string;
}

const CircleWithImage: React.FC<CircleWithImageProps> = ({ name, role }) => {
	// useGSAP(() => {
	// 	gsap.to(".content", {
	// 		rotation: "+=360",
	// 		duration: 3,
	// 		repeat: -1,
	// 		ease: "none",
	// 	});
	// }, []);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Hide content2 initially
		gsap.set(".content2", {
			opacity: 0,
			position: "absolute",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			height: 300vh",
		});

		ScrollTrigger.create({
			trigger: ".content",
			start: "top center",
			onEnter: () => {
				gsap.to("body, html", { overflowY: "hidden" });
				gsap.to(".content", { opacity: 0 }); // Fade out content1
				gsap.to(".content2", { opacity: 1 }); // Fade in content2
			},
			onLeave: () => {
				gsap.to("body, html", { overflowY: "auto" });
				gsap.to(".content", { opacity: 1 }); // Fade in content1
				gsap.to(".content2", { opacity: 0 }); // Fade out content2
			},
		});
	}, []);

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				height: "200vh",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					marginRight: "50px",
				}}
			>
				<div
					style={{
						width: "350px",
						height: "350px",
						borderRadius: "50%",
						overflow: "hidden",
						marginRight: "200px",
					}}
				>
					<img
						src="/imgs/dogImg.jpeg"
						alt="Dog"
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
					/>
				</div>
				<div className="content">
					<h1>Lalith Shravan Guruprasad</h1>
					<div style={{ textAlign: "center" }}>
						<p>Researcher and Developer</p>
					</div>
				</div>

				<div className="content2">
					<h1>Sai Avinash Chittella</h1>
					<div style={{ textAlign: "center" }}>
						<p>Researcher and Developer</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CircleWithImage;
