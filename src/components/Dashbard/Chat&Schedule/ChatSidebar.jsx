import React from "react";
import { Menu, Search } from "lucide-react";
import ChatPreviewItem from "./ChatPreviewItem";
import Avatar1 from "../../../assets/profiles/Avatar1.png";
import Avatar2 from "../../../assets/profiles/Avatar2.png";
import Avatar3 from "../../../assets/profiles/Avatar3.png";
import Avatar4 from "../../../assets/profiles/Avatar4.png";

const ChatSidebar = () => {
  return (
    <div className="overflow-hidden xl:max-w-82.5 w-full ">
      <div className="flex p-4 gap-4 items-center border-b border-border-color">
        <Menu strokeWidth={1} size={30} />
        <div className="px-2 py-1 flex-1 bg-light-gray flex gap-2 items-center rounded-full">
          <Search size={24} strokeWidth={1} />
          <input
            type="text"
            placeholder="Search"
            className="text-sm text-text-gray focus:outline-none"
          />
        </div>
      </div>
      <div>
        <ChatPreviewItem
          name="Jessica Drew"
          message="Ok, see you later"
          img={Avatar1}
          time="19:48"
          newMsg={1}
        />
        <ChatPreviewItem
          name="David Moore"
          message="You: i don't remember any "
          img={Avatar2}
          time="19:48"
          newMsg={2}
        />
        <ChatPreviewItem
          name="Greg James"
          message="I got a job at SpaceX 🎉 🚀  "
          img={Avatar3}
          time="19:48"
        />
        <ChatPreviewItem
          name="Emily Dorson"
          message="Table for four, 5PM. Be there.  "
          img={Avatar4}
          time="19:48"
        />
      </div>
    </div>
  );
};

export default ChatSidebar;
