import { motion, AnimatePresence } from "framer-motion";

const TabContent = ({ tabs, active, content }) => (
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
);

export default TabContent;
