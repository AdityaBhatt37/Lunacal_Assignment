import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CompleteProfileDesign = () => {
  const tabs = ["About Me", "Experiences", "Recommended"];
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

  const content = {
    "About Me": `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.`,
    Experiences: `I've had the privilege of working with over 150 companies across various industries including technology, healthcare, and retail. My approach focuses on understanding each client's unique challenges and delivering tailored solutions.`,
    Recommended: `I highly recommend checking out "The Challenger Sale" by Matthew Dixon - it completely transformed my approach to sales and customer engagement.`,
  };

  const handleClick = (i) => {
    setClicked(i);
    setActive(i);
    setHovered(null);
    setTimeout(() => setClicked(null), 50);
  };

  const handleAddImage = () => {
    const newImageUrl = prompt("Enter image URL:");
    if (newImageUrl) setImages([...images, newImageUrl]);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextImage = () => {
    setCurrentIndex((prev) =>
      prev < images.length - 3 ? prev + 1 : prev
    );
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="h-screen bg-[#1a1a1a] md:p-6 lg:p-8 overflow-hidden rounded-2xl">
      <div className="h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 h-full">

          {/* Left Side - Instructions */}
          <div className="bg-[#616161] rounded-3xl shadow-2xl p-6 lg:p-8 overflow-y-auto custom-scrollbar h-full">
         
            <div className="space-y-4 text-[#b8c0d0] text-sm lg:text-base leading-relaxed">
              {/* Instruction content */}
            </div>
          </div>

          {/* Right Side - Profile + Gallery */}
          <div className="p-1 flex flex-col gap-5 h-full overflow-hidden">

            {/* Profile Widget */}
            <div className="flex-1 min-h-0 bg-gradient-to-br from-[#363C43] to-[#363C43] rounded-[27px] shadow-[5px_5px_10px_rgba(0,0,0,0.5)] p-4 lg:p-6 flex flex-col overflow-hidden">
              <div className="flex items-center gap-3 lg:gap-4 mb-4">
                <button className="w-10 h-10 lg:w-12 lg:h-12 bg-[#171717] hover:bg-[#272727] rounded-full flex items-center justify-center text-[#A3ADB2] text-xl lg:text-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7]">
                  ?
                </button>

                <div className="relative flex w-full bg-[#171717] rounded-[23px] p-[6px] shadow-inner text-xs md:text-sm lg:text-[18px] font-medium select-none overflow-hidden">
                  <motion.div
                    className="absolute top-[6px] bottom-[6px] rounded-[20px] bg-[#28292F] shadow-[13px_10px_30px_0px_#101213,-8px_-8px_20px_-4px_rgba(150,190,231,0.3),inset_4px_4px_10px_0px_rgba(0,0,0,0.1)] pointer-events-none"
                    layout
                    initial={false}
                    animate={{
                      left: `calc(6px + ${active * (100 / tabs.length)}%)`,
                      width: `calc(${100 / tabs.length}% - 12px)`,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 25,
                    }}
                  />
                  {tabs.map((tab, i) => (
                    <button
                      key={tab}
                      onClick={() => handleClick(i)}
                      onMouseEnter={() => i !== active && setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      className="relative z-10 flex-1 px-2 lg:px-5 py-2.5 rounded-full overflow-hidden"
                    >
                      <AnimatePresence>
                        {hovered === i && i !== active && (
                          <motion.span
                            key={`hover-${i}`}
                            className="absolute inset-0 bg-gradient-to-br from-[#32323242] to-[#1e1e1e] rounded-[20px] z-0"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{
                              x: "-100%",
                              transition: { duration: 0.35 },
                            }}
                            transition={{ duration: 0.35 }}
                          />
                        )}
                      </AnimatePresence>
                      <span
                        className={`relative z-10 transition-colors duration-300 ${
                          active === i
                            ? "text-white font-semibold"
                            : "text-[#A3ADB2]"
                        }`}
                      >
                        {tab}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#969696] text-[15px] lg:text-[18px] leading-relaxed whitespace-pre-line"
                  >
                    {content[tabs[active]]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Gallery Widget */}
            <div className="flex-1 min-h-0 bg-gradient-to-br from-[#363C43] to-[#363C43] rounded-[27px] shadow-[5px_5px_10px_rgba(0,0,0,0.5)] p-4 lg:p-6 flex flex-col overflow-hidden">
              <div className="flex items-center gap-3 lg:gap-4 mb-4">
                <button className="w-10 h-10 lg:w-12 lg:h-12 bg-[#171717] hover:bg-[#272727] rounded-full flex items-center justify-center text-[#A3ADB2] text-xl lg:text-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7]">
                  ?
                </button>
                <div className="flex-1 flex items-center justify-between bg-[#171717] rounded-[23px] p-[6px] shadow-inner">
                  <div className="bg-[#28292F] px-4 lg:px-6 py-2.5 rounded-[20px] shadow-[13px_10px_30px_0px_#101213,-8px_-8px_20px_-4px_rgba(150,190,231,0.3)]">
                    <span className="text-white font-semibold text-xs md:text-sm lg:text-[18px]">
                      Gallery
                    </span>
                  </div>
                  <div className="flex items-center gap-2 lg:gap-3 pr-1 lg:pr-2">
                    <button
                      onClick={handleAddImage}
                      className="bg-[#FFFFFF08] hover:bg-[#FFFFFF15] text-white px-3 lg:px-5 py-2 lg:py-2.5 rounded-full text-xs lg:text-[13px] font-semibold transition-all duration-300 flex items-center gap-1.5 lg:gap-2 shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7,inset_0px_4px_10px_rgba(255,255,255,0.05)]"
                    >
                      <span className="text-base lg:text-lg">+</span>
                      <span className="hidden sm:inline">ADD IMAGE</span>
                      <span className="sm:hidden">ADD</span>
                    </button>
                    <button
                      onClick={handlePrevImage}
                      disabled={currentIndex === 0}
                      className="w-9 h-9 lg:w-11 lg:h-11 bg-gradient-to-br from-[#303439] to-[#161718] rounded-full flex items-center justify-center text-[#6F787C] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNextImage}
                      disabled={currentIndex >= images.length - 3}
                      className="w-9 h-9 lg:w-11 lg:h-11 bg-gradient-to-br from-[#303439] to-[#161718] rounded-full flex items-center justify-center text-[#6F787C] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="grid grid-cols-3 gap-3 lg:gap-5 w-full px-7">
                  <AnimatePresence mode="popLayout">
                    {visibleImages.map((img, index) => (
                      <motion.div
                        key={currentIndex + index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="aspect-square rounded-[24px] overflow-hidden bg-[#1a1f2e] shadow-lg hover:shadow-xl transition-all duration-300 hover: grayscale hover:grayscale-0"
                      >
                        <img
                          src={img}
                          alt={`Gallery ${currentIndex + index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4a5568;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #5a6578;
        }
      `}</style>
    </div>
  );
};

export default CompleteProfileDesign;
