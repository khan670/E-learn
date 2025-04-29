import React from "react";

const Button = ({
  text,
  handle,
  className,
}: {
  text: string;
  handle?: () => void;
  className?: string;
}) => {
  return (
    <button
      className={`px-6 py-3 hover:shadow cursor-pointer transition-all duration-300 text-white rounded-3xl text-base font-semibold bg-[#2ECA7F] ${className}`}
      onClick={handle}>
      {text}
    </button>
  );
};

export default Button;
