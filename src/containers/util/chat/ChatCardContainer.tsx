import React from "react";
import { ChatCard } from "components/util";

const chats = [
  {
    id: 1,
    sender: "dangmil",
    reciver: "narciss",
    messages: [
      {
        id: 1,
        sender: "narciss",
        reciver: "dangmil",
        message: "안녕하세요",
        create_at: "1주",
      },
      {
        id: 2,
        sender: "dangmil",
        reciver: "narciss",
        message: "안녕하세요",
        create_at: "1주",
      },
    ],
  },

  {
    id: 2,
    sender: "egoing",
    reciver: "narciss",
    messages: [
      {
        id: 1,
        sender: "narciss",
        reciver: "egoing",
        message: "안녕하세요",
        create_at: "1주",
      },
      {
        id: 2,
        sender: "egoing",
        reciver: "narciss",
        message: "안녕하세요",
        create_at: "1주",
      },
    ],
  },
];

const ChatCardContainer = () => {
  return (
    <article>
      {chats.map((chat) => (
        <ChatCard key={chat.id} chat={chat} />
      ))}
    </article>
  );
};

export default ChatCardContainer;
