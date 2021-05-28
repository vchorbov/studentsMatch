import React from 'react';
import Link from 'next/link';
import styles from '../styles/startpage.module.css';

export default function StartPage() {
    
    return (
        <div>
            <header className={`col ${styles.header}`}>
                <div className="col d-flex justify-content-center align-items-center">
                    <h1 className={`col ${styles.h1}`}>
                        Student Match
                    </h1>
                </div>
            </header>
            <br></br>
            <body>
                <div className="col d-flex justify-content-center align-items-center">
                    <h2>
                        Jetzt registrieren.
                    </h2>
                </div>
                <img className={`col ${styles.picture}`} src="/app_logo_1.png" alt="test"/>
                <div>
                    <h3 className={`col ${styles.vert_center1}`}>
                        Neu.
                    </h3>
                    <h3 className={`col ${styles.vert_center2}`}>
                        Innovativ.
                    </h3>
                    <h3 className={`col ${styles.vert_center3}`}>
                        Beeindruckend.
                    </h3>
                </div>
                <div className="d-flex position-absolute bottom-0 w-100 justify-content-evenly">
                    <div className={"d-flex justify-content-center py-4"}>
                        <Link
                        href={'/signup'} passHref>
                            <button className={"btn btn-lg btn-secondary mx-2"}>Sign up</button>
                        </Link>
                        <Link
                        href={'/signin'} passHref>
                            <button className={"btn btn-lg btn-primary mx-2"}>
                            <span>Login</span>
                        </button>
                        </Link>
                     </div>
                </div>
            </body>
        </div>
    )
}
