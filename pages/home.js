import React, {useState} from 'react';
import Link from 'next/link'
import NavigationBarFrame, {pageNames} from "../components/NavigationBarFrame";
import home from "../styles/Home.module.css";
import {routes} from "../config/routes"

const HomePage = () => {

    const [anim, setAnim] = useState(home.spinner1);
    const [matchbutton, setMatchbutton] = useState("btn-primary");
    const [textbutton, setTextbutton] = useState("Match me up!");
    const [text, setText] = useState(
        <p className={`${home.inactive}`}>
            Suche <br/> Inaktiv
        </p>
    );

    const startmatch = () => {
        if (anim == home.spinner1) {
            setMatchbutton("btn-danger");
            setAnim(home.spinner2);
            setTextbutton("Abbrechen");
            setText(<p className={`${home.active}`}>
                Suche <br/> Aktiviert
            </p>);
        } else {
            setMatchbutton("btn-primary");
            setAnim(home.spinner1);
            setTextbutton("Match me up!");
            setText(<p className={`${home.inactive}`}>
                Suche <br/> Inaktiv
            </p>);
        }
    }

    return (
        <NavigationBarFrame pageName={pageNames.home}>
            <div className={"header"}>
                <h1>
                    Willkommen,<br/>Lisa-Marie
                </h1>

                <div>
                    <Link href={routes.editProfile + "/?edit=true"} passHref>
                        <button type="button" className={`btn btn-outline-warning ${home.editProfile}`}>Profil
                            bearbeiten
                        </button>
                    </Link>
                    <img
                        className={`col ${home.profilePicture}`}
                        src={"/lisa-marie.jfif"}
                        alt={"profile picture"}
                    />
                </div>
            </div>
            <div className={`${anim}`}/>
            {text}
            <button type="button" className={`btn ${matchbutton} ${home.matchUp}`}
                    onClick={startmatch}>{textbutton}</button>
            <p className={`${home.disclaimer}`}>Wir suchen Gruppen mit <br/> mindestens 3 Mitgliedern für Dich </p>

        </NavigationBarFrame>


    );
};

export default HomePage;