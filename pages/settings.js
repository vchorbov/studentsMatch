import React from 'react';
import NavigationBarFrame, {pageNames} from "../components/NavigationBarFrame";
import {useRouter} from "next/router";
import {routes} from "../config/routes";

export default function Settings() {

    const router = useRouter()

    return (
        <NavigationBarFrame pageName={pageNames.settings}>
            <h1 className={"header"}>
                Einstellungen
            </h1>
            <ul className="list-group">
                <ListEntry title={"Benachrichtigungen"}/>
                <ListEntry title={"Datenschutz"}/>
                <ListEntry title={"Impressum"}/>
                <ListEntry title={"Tell a Friend"}/>
                <ListEntry title={"Hilfe"}/>
                <ListEntry title={"Profile"} onClick={() => router.push(routes.profile("0"))}/>
                <ListEntry title={"Logout"} onClick={() => router.push(routes.signIn)}/>
            </ul>
        </NavigationBarFrame>
    );
};


const ListEntry = (props) => {
    return (
        <div className={"list-group-item list-group-item-action btn"} {...props}>
            <span>{props.title}</span>

        </div>
    )
}