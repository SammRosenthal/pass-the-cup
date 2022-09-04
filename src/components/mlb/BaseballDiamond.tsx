import React from "react";

export const BaseballDiamond: React.FC<{
  onFirst: boolean;
  onSecond: boolean;
  onThird: boolean;
}> = ({ onFirst, onSecond, onThird }) => {
  console.log("debug", { onFirst, onSecond, onThird });
  return (
    <div className="flex flex-col w-full items-center p-2">
      <div
        className={`w-5 border h-5 rotate-45 ${onSecond ? "bg-white" : ""}`}
      />
      <div className="flex gap-x-5">
        <div
          className={`w-5 border h-5 rotate-45 ${onThird ? "bg-white" : ""}`}
        />
        <div
          className={`w-5 border h-5 rotate-45 ${onFirst ? "bg-white" : ""}`}
        />
      </div>
      <div className="w-5 border h-5 rotate-45 bg-white" />
    </div>
  );
};
