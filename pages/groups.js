import React, {useState} from 'react';
import NavigationBarFrame, {pageNames} from "../components/NavigationBarFrame";
import styles from "../styles/Chats.module.css"
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRouter} from "next/router";
import {routes} from "../config/routes";

const Groups = () => {

    const router = useRouter()
    const [isShown, setIsShown] = useState(false);
    const [isFound, setIsFound] = useState(false);

    const popUp = () => {
        setIsShown(true);
        setTimeout(setIsShown, 2000, false);
        setTimeout(setIsFound, 2007, true);
    }

    const dynammicPopUp = () => (isShown ? {display: 'block'} : {display: 'none'});
    const dynammicFound = () => (isFound ? {display: 'block'} : {display: 'none'});

    return (
        <NavigationBarFrame pageName={pageNames.groups}>
            <div className={styles.headerOfChts}>
                <h1 className={styles.titleChats}>Gruppen</h1>
                <h2 className={styles.addNewChatLink} onClick={popUp}>+ Neuer Chat</h2>
            </div>

            <div className={styles.popUpMessage} style={dynammicPopUp()}>
                <h4 className={styles.popUpTitle}>Matching...</h4>
                <FontAwesomeIcon icon={faTimesCircle} className={styles.closePopUp}/>
                <p>Bitte warte während wir dir eine Gruppe zusammenstellen.</p>
            </div>
            <div className={styles.foundChat} style={dynammicFound()}>
                <img src="\app_logo.png" alt="profile picture" className={styles.chatProfilePic}/>
                <h4 className={styles.chatUserName}>Neuer Match</h4>
                <FontAwesomeIcon icon={faChevronRight} className={styles.arrowToChat}/>
                <p className={styles.howManyParticipants}>4 Mitglieder</p>
                <p className={styles.lastMessage}></p>
            </div>


            <div className={styles.singleChatOptions}>
                <div class={styles.singleChatOption} onClick={() => router.push(routes.groupchat)}>
                    <img src="groupchatImages\vg_icon.jpg" alt="profile picture" className={styles.chatProfilePic}/>
                    <h4 className={styles.chatUserName}>Video games</h4>
                    <FontAwesomeIcon icon={faChevronRight} className={styles.arrowToChat}/>
                    <p className={styles.howManyParticipants}>5 Mitglieder</p>
                    <p className={styles.lastMessage}>Hat jemand Lust...</p>
                </div>
                <div class={styles.singleChatOption}>
                    <img src="interests\it.jfif" alt="profile picture" className={styles.chatProfilePic}/>
                    <h4 className={styles.chatUserName}>IT</h4>
                    <FontAwesomeIcon icon={faChevronRight} className={styles.arrowToChat}/>
                    <p className={styles.howManyParticipants}>4 Mitglieder</p>
                    <p className={styles.lastMessage}>Du: React?</p>
                </div>
            </div>

        </NavigationBarFrame>
    );
};

export default Groups;