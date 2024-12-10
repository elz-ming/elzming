import React from "react";

export default function TimelineItem({
  period,
  company,
  role,
  description,
  isRight,
}: {
  period: string;
  company: string;
  role: string;
  description: string;
  isRight?: boolean;
}) {
  return (
    <div className={`flex w-full ${isRight ? "justify-end" : "justify-start"}`}>
      <div className="relative flex flex-col w-[45%] p-4 bg-gray-200 rounded-lg shadow-md">
        {/* Year */}
        <div className="absolute -top-8 text-xl font-semibold">{period}</div>
        {/* Content */}
        <h3 className="text-lg font-bold text-gray-700">{company}</h3>
        <h4 className="text-sm font-semibold text-gray-700">{role}</h4>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
}
