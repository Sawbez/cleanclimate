// ParentComponent.tsx
import React, { useEffect, useState } from "react";
import InformationPage from "./page";

const ParentComponent: React.FC = () => {
	return (
		<div>
			<InformationPage
                name= "Lalith Shravan Guruprasad"
                role= "Researcher and Developer"
            />
		</div>
	);
};

export default ParentComponent;
