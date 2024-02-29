// ParentComponent.tsx
import React, { useEffect, useState } from "react";
import InformationPage from "./aboutUs";
import Reasons from "./reasons";

const ParentComponent: React.FC = () => {
	return (
		<footer className="footer">
			<InformationPage />
			<Reasons />
		</footer>
	);
};

export default ParentComponent;
