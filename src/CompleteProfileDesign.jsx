import LayoutContainer from "./components/Layout/LayoutContainer";
import ProfileWidget from "./components/Profile/ProfileWidget";
import GalleryWidget from "./components/Gallery/GalleryWidget";
import { useState } from "react";

const CompleteProfileDesign = () => {
  // ✅ Tabs logic
  const tabs = ["About Me", "Experiences", "Recommended"];
  const [active, setActive] = useState(0);

  // ✅ Content for each tab
  const content = {
    "About Me": `Hello! I'm Dave, your sales rep here from Salesforce...`,
    Experiences: `I've had the privilege of working with over 150 companies...`,
    Recommended: `I highly recommend checking out "The Challenger Sale"...`,
  };

  // ✅ Gallery images
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400",
    "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400",
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400",
    "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=400",
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <LayoutContainer>
      <div className="flex flex-col gap-5 h-full overflow-hidden">
        <ProfileWidget
          tabs={tabs}
          active={active}
          setActive={setActive}
          content={content}
        />

        <GalleryWidget
          images={images}
          setImages={setImages}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </LayoutContainer>
  );
};

export default CompleteProfileDesign;
