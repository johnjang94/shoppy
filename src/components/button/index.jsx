import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="hover:text-cyan-500 bg-brand text-white py-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
