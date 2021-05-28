import React, {useEffect, useState} from 'react';
import styles from "../styles/ChatFrame.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {routes} from "../config/routes";

export default function ChatFrame({chatInfo, backHref}) {

    let [input, setInput] = useState("");
    let [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(chatInfo.messages)
    }, [])

    const router = useRouter()

    const onSend = () => {
        if (input !== "") {
            setMessages([...messages, {sender: 1, message: input}]);
            setInput("");
        }
    };

    return (
        <div className={"chat"}>
            <a onClick={() => router.push(backHref)} className={styles.backToChatsButton}>&#8249;</a>
            <div className={`header ${styles.header}`} onClick={() => chatInfo.userId && router.push(routes.profile(chatInfo.userId))}>
                <img
                    className={styles.chatIcon}
                    src={chatInfo.picture}
                    alt={"chat icon"}
                />
                <h1 className={styles.groupName}>{chatInfo.name}</h1>
                <p className={styles.numberUsers}>{chatInfo.numberOfMember} Mitglieder</p>
            </div>
            <div className={styles.sendMessages}>
                {messages.map((message, i) => message.sender === 0 ?
                    <div key={i} className={styles.receivedMessage}>{message.message}</div> :
                    <div key={i} className={styles.sendMessage}>{message.message}</div>
                )}
            </div>
            <div className={styles.textField}>
                <input type="text" name="message" className={styles.message} value={input} placeholder="  Nachricht"
                       onChange={(e) => setInput(e.target.value)}/>
                <button className={styles.sendBtn} onClick={onSend}><FontAwesomeIcon icon={faArrowRight}
                                                                                     className={styles.arrow}/>
                </button>
            </div>
        </div>
    );
};