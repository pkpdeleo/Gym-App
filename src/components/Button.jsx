import React from "react";

function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="px-8 py-4 mx-auto rounded-md border-[2px] border-green-400 border-solid bg-black text-green-400 greenShadow duration-200 hover:bg-green-600 hover:text-black"
    >
      <p>{text}</p>
    </button>
  );
}

export default Button;
