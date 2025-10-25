import Tabs from "./Tabs";
import TabContent from "./TabContent";
import IconButton from "../Shared/IconButton";

const ProfileWidget = ({ tabs, active, setActive, content }) => {
  return (
    <div className="flex-1 min-h-0 bg-gradient-to-br from-[#363C43] to-[#363C43] rounded-[27px] shadow-[5px_5px_10px_rgba(0,0,0,0.5)] p-4 lg:p-6 flex flex-col overflow-hidden">
      <div className="flex items-center gap-3 lg:gap-4 mb-4">
        <IconButton label="?" />

        <Tabs tabs={tabs} active={active} setActive={setActive} />
      </div>

      <TabContent tabs={tabs} active={active} content={content} />
    </div>
  );
};

export default ProfileWidget;
