import React from "react";

export default function Remark({
  title,
  year,
}: {
  title: string;
  year: string;
}) {
  return (
    <div className="flex flex-col text-center flex-1 basis-1/3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{year}</p>
    </div>
  );
}
