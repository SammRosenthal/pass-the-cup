import GlobalNav from "../views/GlobalNav/GlobalNav";

export const Base: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-600 text-white">
      <GlobalNav />
      <main className="container flex flex-col mx-auto my-0 pb-3">
        {children}
      </main>
    </div>
  );
};

export default Base;
