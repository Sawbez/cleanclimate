import { cn } from "@/utils/cn";
import "./gridFloor.css";

const GridFloor = ({ className }: { className: string }) => {
  return (
    <div className={cn("floor-wrap", className)}>
      <div className="floor" />
    </div>
  );
};

export default GridFloor;
