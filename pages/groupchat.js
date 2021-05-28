import React from 'react';
import ChatFrame from "../components/ChatFrame";
import {routes} from "../config/routes";

export default function GroupChatPage() {

    return (
        <ChatFrame backHref={routes.groups} chatInfo={{
            name: "Video Spiele",
            picture: "/groupchatImages/vg_icon.jpg",
            numberOfMember: 5,
            messages: [
                {
                    sender: 0,
                    message: "Hat jemand Lust auf ein Spiel?"
                }
            ]
        }}/>
    );
};
