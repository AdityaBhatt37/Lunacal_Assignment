import React from "react";
import LeftContainer from "./LeftContainer";
import WidgetContainer from "./WidgetContainer";
import CompleteProfileDesign from "./CompleteProfileDesign";

const MainContainer = () => {
  return (
      <div className=" w-full h-full flex flex-row gap-5 card rounded-3xl bg-linear-to-b from-[#373E44] to-[#191B1F] image-full shadow-sm pt-10 pb-10 pl-7 pr-7">
          <LeftContainer/>
          <CompleteProfileDesign/>
      </div>
  );
};

export default MainContainer;
