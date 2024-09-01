import React from "react";

function SectionWrapper(props) {
  const { children, header, title, id } = props;
  return (
    <section id={id} className="min-h-screen flex flex-col gap-10">
      <div className="bg-black py-10 flex flex-col gap-2 justify-center items-center">
        <p className="uppercase font-medium text-green-400">{header}</p>
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-300">
          {title[0]}{" "}
          <span className="uppercase text-green-500">{title[1]}</span>
          {title[2]}
        </h2>
      </div>
      <div className="max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4 text-green-300">
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
