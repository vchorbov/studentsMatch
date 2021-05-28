import React from 'react';
import {users} from "../../config/mockData";
import {useRouter} from "next/router";
import styles from "../../styles/Profile.module.css"
import {faComment} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ProfilePage() {

    const router = useRouter()

    const {userId} = router.query
    if(!userId){
        return <></>
    }

    const user = users[userId];
    console.log(user)

    return (
        <div className={"d-flex flex-column"}>
            <div className={"d-flex justify-content-between"}>
                <div className={"backButton"} onClick={() => router.back()}>&#8249;</div>
                <FontAwesomeIcon icon={faComment} className={styles.chat}/>
            </div>
            <div className={`w-100 overflow-scroll ${styles.contentWrapper}`}>
                <img
                    className={styles.picture}
                    src={user.picture}
                    alt={"profile picture"}
                />
                <div className={"px-2"}>
                    <div className={"d-flex justify-content-between"}>
                        <h1 className={styles.name}>{user.name} {user.lastName}</h1>
                        <div className={`${styles.age} px-3`}>{calcAge(user.birthday)}</div>
                    </div>
                    <div className={styles.phone}>{user.phone}</div>
                    <div className={`py-3 ${styles.text}`}>
                        Studiert {user.studyProgram} an der {user.university} im {user.semester}. Semester
                    </div>
                    <div className={`py-4 ${styles.text}`}>
                        {user.pitch}
                    </div>
                    <div className={styles.text}>
                        <h3>Interessen</h3>
                        <ul className={styles.interestsList}>
                            {user.interests.map((interest, i) => <li key={i}>{interest}</li>)}
                        </ul>
                    </div>
                    <div className={"w-100 d-flex"}>
                        {user.button}
                    </div>
                </div>
            </div>

        </div>
    )
}

function calcAge(dob) {
    const millis = Date.now() - dob.getTime()
    const tmp = new Date(millis)
    return Math.abs(tmp.getFullYear() - 1970)
}