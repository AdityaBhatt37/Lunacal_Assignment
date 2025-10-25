import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProfileCard = () => {
  const tabs = ["About Me", "Experiences", "Recommended"];
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  const content = {
    "About Me": `Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.

I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...

I love spending time with my family, exploring new restaurants in the area, and playing basketball on weekends. I'm passionate about helping businesses grow and finding the perfect solutions for their needs.`,
    
    "Experiences": `I've had the privilege of working with over 150 companies across various industries including technology, healthcare, and retail. My approach focuses on understanding each client's unique challenges and delivering tailored solutions.

Before joining Salesforce, I spent 5 years at Oracle where I managed enterprise accounts and led a team of junior sales representatives. During my time there, I consistently exceeded quarterly targets by an average of 25%.

I hold a Bachelor's degree in Business Administration from Syracuse University and have completed advanced certifications in CRM strategy, cloud computing, and digital transformation. I believe in continuous learning and regularly attend industry conferences to stay updated with the latest trends.

My proudest achievement was closing a multi-million dollar deal with a Fortune 500 company last year, which resulted in a long-term partnership and opened doors to several other opportunities within their network.`,
    
    "Recommended": `I highly recommend checking out "The Challenger Sale" by Matthew Dixon - it completely transformed my approach to sales and customer engagement. This book provides valuable insights into how to take control of customer conversations.

For CRM best practices, I suggest following the Salesforce blog and attending their annual Dreamforce conference. It's an incredible opportunity to network with peers and learn about the latest innovations in customer relationship management.

If you're looking to improve your productivity, I can't recommend Trello and Slack enough. These tools have been game-changers for our team's collaboration and project management. We've seen a 40% improvement in response times since implementing them.

For anyone interested in sales training, I recommend the courses offered by HubSpot Academy - they're free and provide excellent certifications that are recognized across the industry. Their content is always up-to-date and practical.`
  };

  const handleClick = (i) => {
    setClicked(i);
    setActive(i);
    setHovered(null);
    setTimeout(() => setClicked(null), 50);
  };

  return (
    <>
      <div className="w-full max-w-2xl bg-gradient-to-br from-[#3a3f4f] to-[#2d323e] rounded-3xl shadow-2xl p-4 sm:p-6">
        {/* Header with Question Mark and Tabs */}
        <div className="flex items-center gap-3 sm:gap-4 mb-5">
          {/* Question Mark Icon */}
          <button className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#4a5060] hover:bg-[#5a6070] rounded-full flex items-center justify-center text-[#a0a8b8] text-xl sm:text-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            ?
          </button>

          {/* Tabs Widget */}
          <div className="relative flex w-full bg-[#171717] rounded-2xl p-1 shadow-inner shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-sm md:text-base font-medium select-none overflow-hidden">
            {/* Active background */}
            <motion.div
              className="absolute top-1 bottom-1 rounded-2xl bg-neutral-800 shadow-md pointer-events-none"
              layout
              initial={false}
              animate={{
                left: `${active * (100 / tabs.length)}%`,
                width: `${100 / tabs.length}%`,
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
                onMouseEnter={() => {
                  if (i !== active) setHovered(i);
                }}
                onMouseLeave={() => setHovered(null)}
                className="relative z-10 flex-1 px-3 sm:px-5 py-2 rounded-full overflow-hidden"
              >
                {/* Hover Sweep */}
                <AnimatePresence>
                  {hovered === i && i !== active && (
                    <motion.span
                      key={`hover-${i}`}
                      className="absolute inset-0 bg-gradient-to-br from-[#32323242] to-[#1e1e1e] rounded-2xl z-0"
                      initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      exit={
                        clicked === i
                          ? { opacity: 0, transition: { duration: 0 } }
                          : { x: "-100%", transition: { duration: 0.35, ease: "easeInOut" } }
                      }
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    />
                  )}
                </AnimatePresence>

                {/* Label */}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    active === i ? "text-white font-semibold" : "text-gray-400"
                  }`}
                >
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-[#2a2f3e] rounded-2xl p-5 sm:p-6 min-h-[200px] max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#4a5568] scrollbar-track-transparent hover:scrollbar-thumb-[#5a6578]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[#a0a8b8] text-sm sm:text-base leading-relaxed whitespace-pre-line"
            >
              {content[tabs[active]]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #4a5568;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #5a6578;
        }
      `}</style>
    </>
  );
};

export default ProfileCard;