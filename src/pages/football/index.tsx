import { useState } from "react";
import DetailLayout from "../../layouts/Detail";

const container = "flex flex-col items-center pb-1";

export const Football = () => {
  const [activeGames] = useState(Array(9).fill("test entry for Football"));

  return (
    <DetailLayout title="Football" className="gap-y-2">
      <div className={container}>
        <h2 className="text-lg pb-2">Current Games</h2>
        <div className="flex flex-col gap-y-2 w-full mt-2">
          {activeGames.map((data) => {
            return (
              <div key="" className="bg-gray-600 h-12 rounded-md px-2 pt-1">
                {data}
              </div>
            );
          })}
        </div>
      </div>
    </DetailLayout>
  );
};

export default Football;
