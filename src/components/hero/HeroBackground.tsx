import React from "react";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-64 h-64 bg-white bg-opacity-10 rounded-full blur-3xl floating-animation"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 bg-opacity-20 rounded-full blur-3xl floating-animation"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
}
