import React, {useState} from 'react';
import NavigationBarFrame, {pageNames} from "../components/NavigationBarFrame";
import styles from "../styles/Chats.module.css"
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {chats, users} from "../config/mockData";
import {useRouter} from "next/router";
import {routes} from "../config/routes";

const Chats = () => {

    const router = useRouter()

    return (
        <NavigationBarFrame pageName={pageNames.chats}>
            <div className={styles.headerOfChts}>
                <h1 className={styles.titleChats}>Chats</h1>
            </div>

            <div className={styles.singleChatOptions}>
                {chats.map((chat, i) => (
                    <div className={styles.singleChatOption} onClick={() => router.push(routes.chat(i))}>
                        <img src={users[chat.userId].picture} alt="profile picture" className={styles.chatProfilePic}/>
                        <h4 className={styles.chatUserName}>{users[chat.userId].name}</h4>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.arrowToChat}/>
                        <p className={styles.lastMessage}>{chat.messages[chat.messages.length - 1].message}</p>
                    </div>
                ))}
            </div>

        </NavigationBarFrame>
    );
};

export default Chats;