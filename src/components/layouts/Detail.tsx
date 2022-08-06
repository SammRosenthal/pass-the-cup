import { useAutoAnimate } from "@formkit/auto-animate/react";

export const DetailLayout: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const [parent] = useAutoAnimate<HTMLDivElement>();

  return (
    <div
      className={`flex flex-col mx-auto mt-5 bg-gray-800 w-4/5  py-8 px-4 shadow rounded-lg sm:px-10 ${className}`}
      ref={parent}
    >
      {children}
    </div>
  );
};

export default DetailLayout;
