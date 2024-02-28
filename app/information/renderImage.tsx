// ParentComponent.tsx
import React, { useEffect, useState } from "react";

const ParentComponent: React.FC = () => {
	return (
		<div>
			<div
				className="relative rounded-full"
				style={{
					width: "350px",
					height: "350px",
				}}
			>
				<div className="relative overflow-hidden rounded-full left-10">
					<img
						className="h-full w-full object-cover"
						src="/imgs/personImg.jpeg"
						alt="Profile"
						style={{
							width: "350px",
							height: "350px",
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ParentComponent;
