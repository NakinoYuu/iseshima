"use client";
import React from "react";

const Button = ({ color, backgroundColor }) => {
  // Color map for Tailwind-safe class names
  const colorClass =
    {
      red: "text-red-500",
      blue: "text-blue-500",
      green: "text-green-500",
    }[color] || "text-black"; // Default color if none is provided

  const bg =
    {
      gray: "bg-slate-700",
      red: "bg-red-500",
    }[backgroundColor] || "bg-black";

  return (
    <div className="bg-slate-100">
      <button className={`${colorClass} ${bg} px-4 py-2 rounded-md`}>
        もっと見る
      </button>
    </div>
  );
};

export default Button;
