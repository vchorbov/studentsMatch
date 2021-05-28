import React from 'react';
import {chats, users} from "../../config/mockData";
import {useRouter} from "next/router";
import ChatFrame from "../../components/ChatFrame";
import {routes} from "../../config/routes";

export default function ChatPage() {

    const router = useRouter()

    const {chatId} = router.query

    if (!chatId){
        return <></>
    }

    const chat = chats[chatId]
    const user = users[chat.userId]

    return (
        <ChatFrame backHref={routes.chats} chatInfo={{
            userId: chat.userId,
            name: user.name,
            picture: user.picture,
            numberOfMembers: 0,
            messages: chat.messages
        }}/>
    )
}
