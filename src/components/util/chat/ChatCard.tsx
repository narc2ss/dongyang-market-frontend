import React from "react";

import profile from "static/img/user_42.png";

interface Props {
  chat: any;
}

const ChatCard = ({ chat }: Props) => {
  const { sender, messages } = chat;
  return (
    <div>
      <img src={profile} alt="profileImage" />
      <span>{sender}</span>
      <span>{messages[0].message}</span>
      <span>{messages[0].create_at}</span>
    </div>
  );
};

export default ChatCard;
