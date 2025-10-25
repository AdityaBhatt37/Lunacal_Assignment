const IconButton = ({ label }) => (
  <button className="w-10 h-10 lg:w-12 lg:h-12 bg-[#171717] hover:bg-[#272727] rounded-full flex items-center justify-center text-[#A3ADB2] text-xl lg:text-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-[4px_5px_30px_5px_#101213,-5px_-3px_30px_-10px_#96BEE7]">
    {label}
  </button>
);

export default IconButton;
