import { motion, AnimatePresence } from "framer-motion";

const Tabs = ({ tabs, active, setActive }) => {
  return (
    <div className="relative flex w-full bg-[#171717] rounded-[23px] p-[6px] shadow-inner text-xs md:text-sm lg:text-[18px] font-medium select-none overflow-hidden">
      <motion.div
        className="absolute top-[6px] bottom-[6px] rounded-[20px] bg-[#28292F]"
        layout
        initial={false}
        animate={{
          left: `calc(6px + ${active * (100 / tabs.length)}%)`,
          width: `calc(${100 / tabs.length}% - 12px)`,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => setActive(i)}
          className={`relative z-10 flex-1 px-2 lg:px-5 py-2.5 rounded-full transition-all duration-300 ${
            active === i ? "text-white font-semibold" : "text-[#A3ADB2]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
