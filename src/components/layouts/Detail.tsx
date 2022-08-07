import { useAutoAnimate } from "@formkit/auto-animate/react";

const container = "flex flex-col items-center pb-1";

export const DetailLayout: React.FC<{
  children: React.ReactNode;
  className?: string;
  title: string;
}> = ({ children, className, title }) => {
  const [parent] = useAutoAnimate<HTMLDivElement>();

  return (
    <div
      className={`flex flex-col mx-auto mt-5 bg-gray-800 w-4/5  py-8 px-4 shadow rounded-lg sm:px-10 ${className}`}
      ref={parent}
    >
      <div className={`${container} border-b-2 border-white`}>
        <h1 className="text-2xl">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default DetailLayout;
