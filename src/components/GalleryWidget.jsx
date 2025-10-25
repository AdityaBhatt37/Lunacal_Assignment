import { motion, AnimatePresence } from "framer-motion";

const GalleryWidget = ({ images, setImages, currentIndex, setCurrentIndex }) => {

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
  );
};

export default GalleryWidget;
