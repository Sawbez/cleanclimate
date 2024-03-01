// ParentComponent.tsx

const ParentComponent = ({src}: {src: string}) => {
	return (
		<div>
			<div
				className="relative left-[20vw] rounded-full"
				style={{
					width: "350px",
					height: "350px",
				}}
			>
				<div className="relative overflow-hidden rounded-full left-10">
					<img
						className="h-full w-full object-cover"
						src={"/imgs/" + src}
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
