import { motion, AnimatePresence } from "framer-motion";

const ProfileWidget = ({ tabs, active, setActive, hovered, setHovered, clicked, setClicked }) => {
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

  return (
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
  );
};

export default ProfileWidget;
