import React from "react";
import store from "../store"
import Header from "./header"
import  _ from 'lodash'
import "../css/chatWindow.css"

import Chat from "../components/chat"
import MessageInput from "../containers/messageInput";
const ChatWindow = ({ activeUserId }) => {
  const state=store.getState();
  const activeUser= state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];
  const {typing} = state;
  console.log(typing)

  return (
    <div className="ChatWindow">
        <Header user={activeUser} />
        <Chat messages ={_.values(activeMsgs)} />
        <MessageInput value={typing} />
       

    </div>
  );
};

export default ChatWindow;