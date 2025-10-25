import { useState } from "react";
import ProfileWidget from "./ProfileWidget";
import GalleryWidget from "./GalleryWidget";
import LeftInstructions from "./LeftInstructions";

const CompleteProfileDesign = () => {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400",
    "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400",
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400",
    "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=400",
    "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=400",
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="h-screen bg-[#1a1a1a] md:p-6 lg:p-8 overflow-hidden rounded-2xl">
      <div className="h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 h-full">
          
          {/* Left Side - Instructions */}
          <LeftInstructions />

          {/* Right Side - Profile + Gallery */}
          <div className="p-1 flex flex-col gap-5 h-full overflow-hidden">
            <ProfileWidget
              tabs={["About Me", "Experiences", "Recommended"]}
              active={active}
              setActive={setActive}
              hovered={hovered}
              setHovered={setHovered}
              clicked={clicked}
              setClicked={setClicked}
            />
            <GalleryWidget
              images={images}
              setImages={setImages}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default CompleteProfileDesign;
