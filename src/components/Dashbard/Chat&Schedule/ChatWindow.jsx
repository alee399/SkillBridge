import React from "react";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

const ChatWindow = () => {
  const chatData = [
    {
      id: 1,
      text: "Hi Jane, how are you doing today? I wanted to discuss the upcoming Python session.",
      time: "18:12",
      variant: "received",
    },
    {
      id: 2,
      text: "Hi Alex! I am doing well, thanks. I am available to chat about it now if you are free?",
      time: "18:12",
      variant: "sent",
      status: "read",
    },
    {
      id: 3,
      text: "Yes, I am. I had a few questions about the advanced concepts we touched upon last week. Specifically, related to asynchronous programming.",
      time: "18:12",
      variant: "received",
    },
    {
      id: 4,
      text: "Understood. We can go through those. Do you have specific examples or scenarios in mind?",
      time: "18:12",
      variant: "sent",
      status: "read",
    },
    {
      id: 5,
      text: "I was trying to implement a web scraper, and faced some challenges with `asyncio`. I also wanted to schedule our next session for next week.",
      time: "18:12",
      variant: "received",
    },
  ];

  return (
    <div className="border-x border-border-color max-xl:border-t ">
      <ChatHeader />
      <div className="py-2">
        {chatData.map((data) => {
          return (
            <>
              <MessageBubble
                text={data.text}
                variant={data.variant}
                status={data.status}
                time={data.time}
              />
            </>
          );
        })}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
