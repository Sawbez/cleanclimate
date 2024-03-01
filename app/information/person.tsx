import RenderImage from "./renderImage";

const Person = ({
  person,
  role,
  src,
}: {
  person: string;
  role: string;
  src: string;
}) => {
  return (
    <div className="scroll-section">
      <RenderImage src={src}></RenderImage>
      <div className="relative top-[30vh] right-[25vw] lg:right-[-15vw] lg:top-0 xl:right-[-6vw] container flex flex-col items-center">
        <p className="text-4xl font-bold text-center">{person}</p>
        <p className="text-center">{role}</p>
      </div>
    </div>
  );
};

export default Person;
