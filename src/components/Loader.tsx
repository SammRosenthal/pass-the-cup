import { ThreeDots } from "react-loader-spinner";

export const Loader: React.FC<{ color?: string }> = ({ color = "#4b5563" }) => (
  <div className="flex justify-center items-center h-36">
    <ThreeDots color={color} />
  </div>
);
