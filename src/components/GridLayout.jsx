import React from "react";

export default function GridLayout({ children }) {
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">{children}</div>
  );
}
