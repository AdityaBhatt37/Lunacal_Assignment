const LayoutContainer = ({ children }) => {
  return (
    <div className="h-screen bg-[#1a1a1a] md:p-6 lg:p-8 overflow-hidden rounded-2xl">
      <div className="h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 h-full">
          {/* Left Side Placeholder for Instructions */}
          <div className="bg-[#616161] rounded-3xl shadow-2xl p-6 lg:p-8 overflow-y-auto custom-scrollbar h-full">
            <div className="space-y-4 text-[#b8c0d0] text-sm lg:text-base leading-relaxed">
              {/* Instruction content */}
              <p>This side can contain user onboarding or helpful tips.</p>
            </div>
          </div>

          {/* Right side (children) */}
          <div className="p-1 flex flex-col gap-5 h-full overflow-hidden">
            {children}
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
      `}</style>
    </div>
  );
};

export default LayoutContainer;
