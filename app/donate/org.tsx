const ParentComponent: React.FC<{
	imgSrc: string;
	name: string;
	link: string;
}> = ({ imgSrc, name, link }) => {
	return (
		<div className="flex justify-between w-full max-w-lg">
			<div className="w-1/2 p-4 border border-gray-300">
				<img
					src={imgSrc}
					alt="Organization Logo"
					className="w-full h-auto"
				/>
			</div>
			<div className="w-1/2 p-4 border border-gray-300 flex flex-col items-center text-center justify-center">
				<div className="font-bold mb-2 text-xl">{name}</div>
				<a
					href={link}
					className="font-bold mb-2 underline text-blue-300 hover:text-blue-500"
				>
					Click Here
				</a>
			</div>
		</div>
	);
};

export default ParentComponent;
