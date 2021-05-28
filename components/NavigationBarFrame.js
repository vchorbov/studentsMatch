import React from 'react';
import styles from "../styles/NavigationBarFrame.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faUsers, faCog, faHome} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import {routes} from "../config/routes"


export const pageNames = {
    chats: "chats",
    groups: "groups",
    home: "home",
    settings: "settings"
}

/**
 * Use this component as wrapper for pages that should contain the navigation bar
 * Example: settings.js
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function NavigationBarFrame(props) {

    console.log(props.pageName)
    return (
        <div className={"position-relative h-100"}>
            {props.children}
            <NavigationBar activePage={props.pageName}/>
        </div>
    );
};

const PageIconWrapper = (props) => {
    const router = useRouter()
    return (
        <div className={`${styles.pageIconWrapper} ${props.active && styles.active}`} onClick={() => {
            if (!props.active) {
                router.push(props.href)
            }
        }}>
            <FontAwesomeIcon icon={props.icon}/>
        </div>
    )
}


const NavigationBar = (props) => {

    return (
        <div className={"d-flex position-absolute bottom-0 border-top w-100 justify-content-evenly"}>
            <PageIconWrapper active={props.activePage === pageNames.chats} icon={faUser} href={routes.chats}/>
            <PageIconWrapper active={props.activePage === pageNames.groups} icon={faUsers} href={routes.groups}/>
            <PageIconWrapper active={props.activePage === pageNames.home} icon={faHome} href={routes.home}/>
            <PageIconWrapper active={props.activePage === pageNames.settings} icon={faCog} href={routes.settings}/>
        </div>
    )

}



