import React from 'react'
import LeftContainer from "./LeftContainer";
import WidgetContainer from "./WidgetContainer";

const MainContainer = () => {
  return (
    <div className=' w-full h-full bg-linear-to-b from-[#373E44] to-[#191B1F] rounded-[28px] p-5 flex gap-5'>
      <LeftContainer/>
      <WidgetContainer/>
    </div>
  )
}

export default MainContainer