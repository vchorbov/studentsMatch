import React from 'react';
import Link from 'next/link';
import styles from "../styles/Activation.module.css"
import {routes} from "../config/routes";

export default function SignupPage() {

    return (
        <div>
            <a href={"/signup"} className={"backButton"} >&#8249;</a>
            <h1 className={"signinHeader"}>E-Mail <br/> Bestätigen</h1>
            <img src={"/mail.png"} overflow={"hidden"} className={`${styles.letter}`} alt={""} />
            <p className={`${styles.notice}`}>Wir haben einen 6-Stelligen Code <br />an example@example.de geschickt.</p>
            <input className={`form-control form-control-lg ${styles.securecode}`} placeholder={"6-Stelliger Code"} />
            <div className={"buttonHeader"}>
                <Link href={routes.editProfile} passHref>
                <button className={"btn btn-primary authenticate"}>Bestätigen</button>
                </Link>
            </div>
        </div>
    );
};
