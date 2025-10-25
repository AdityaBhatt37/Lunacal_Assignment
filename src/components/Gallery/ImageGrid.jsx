import { motion, AnimatePresence } from "framer-motion";

const ImageGrid = ({ images, currentIndex }) => {
  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="grid grid-cols-3 gap-3 lg:gap-5 w-full px-7">
        <AnimatePresence mode="popLayout">
          {visibleImages.map((img, i) => (
            <motion.div
              key={currentIndex + i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="aspect-square rounded-[24px] overflow-hidden bg-[#1a1f2e] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img}
                alt={`Gallery ${currentIndex + i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageGrid;
