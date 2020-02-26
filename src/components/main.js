import React from 'react'
import "../css/main.css"
import Empty from "../components/empty"
import ChatWindow from "./chatWindow.js"

const Main = ({user, activeUserId})=>{
    const renderMainContent = () =>{
        if(!activeUserId){
            return <Empty user={user} activeUserId={activeUserId} />;
        } else {
            return <ChatWindow activeUserId={activeUserId} />;
        }

    }
return <main className='main'>{renderMainContent()}</main>

}

export default Main;