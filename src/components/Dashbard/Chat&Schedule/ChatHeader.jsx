import React from "react";
import Avatar1 from "../../../assets/profiles/Avatar1.png";
import { Video, EllipsisVertical } from "lucide-react";

const ChatHeader = () => {
  return (
    <div className="flex gap-10 py-2 px-3 justify-between items-center border-b border-border-color">
      <div className="flex gap-4 items-center">
        <div className="w-12 h-12 rounded-full">
          <img src={Avatar1} alt="" className="w-full h-full object-cover" />
        </div>
        <div>
          <h5 className="leading-5 font-semibold">Alex Thompson</h5>
          <h6 className="text-text-gray font-medium text-sm leading-4.5 mt-1">
            last seen 5 mins ago
          </h6>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Video strokeWidth={1} className="w-10 h-10 p-2" />
        <EllipsisVertical strokeWidth={1} />
      </div>
    </div>
  );
};

export default ChatHeader;
