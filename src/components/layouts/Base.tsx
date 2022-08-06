import GlobalNav from "../views/GlobalNav/GlobalNav";

export const Base: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="h-screen bg-black text-white">
      <GlobalNav />
      <div className="container flex flex-col mx-auto my-0 bg-red-500">
        {children}
      </div>
    </main>
  );
};

export default Base;
