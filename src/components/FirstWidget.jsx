import React from "react";
import BtnWidget from "./BtnWidget";
import TextSection from "./TextSection";

const FirstWidget = () => {
  return (
    <div className="bg-[#363C43] shadow-[0_4px_4px_rgba(0,0,0,0.25)] h-1/2 rounded-[18.89px] border border-black p-2">
      <BtnWidget/>
      <TextSection/>
    </div>
  );
};

export default FirstWidget;
