import React from 'react'
import FirstWidget from "./FirstWidget";
import SecondWidget from "./SecondWidget";

const WidgetContainer = () => {
  return (

    
    <div className=" w-1/2  flex flex-col gap-5 card  image-full  ">
         <FirstWidget/>
        <SecondWidget/>
    </div>
  )
}

export default WidgetContainer