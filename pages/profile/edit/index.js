import React, {useState} from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGenderless, faMars, faVenus} from "@fortawesome/free-solid-svg-icons"
import {useRouter} from "next/router";
import {routes} from "../../../config/routes"
import styles from "../../../styles/EditProfile.module.css"
import NextBackComponent from "../../../components/NextBackComponent";

export default function ProfilePage() {

    const router = useRouter()

    return (
        <div>
            <h1 className={"header"}>
                {router.query.edit ? "Profil von Lisa-Marie" : "Bitte ergänze dein Profil"}
            </h1>
            <div className="px-4 row">
                <img
                    className={`col ${styles.profilePicture}`}
                    src={"/default_profile.png"}
                    alt={"profile picture"}
                />
                <div className={"col d-flex justify-content-center align-items-center"}>
                    <GenderButtons/>
                </div>
            </div>
            <InputFields/>
            {router.query.edit ?
                <NextBackComponent hrefBack={routes.home} hrefNext={routes.editInterests + "/?edit=true"}/> :
                <NextBackComponent hrefBack={routes.signIn} hrefNext={routes.editInterests}/>}

        </div>
    );
};

const UniversityField = () => {

    const unis = [
        "Universität zu Köln",
        "Technische Hochschule Köln",
        "RWTH Aachen",
        "Technische Fachhochschule Aachen"
    ]

    return (
        <>
            <input className="form-control my-2" list="uniDatalistOptions" id="uniDataList" placeholder="Universität"/>
            <datalist id="uniDatalistOptions">
                {unis.map((uni, i) => <option key={i} value={uni}/>)}
            </datalist>
        </>
    )
}

const StudyProgramField = () => {

    const programs = [
        "Wirtschaftsinformatik",
        "Wirtschaftsmathematik",
        "Betriebtswirtschaftslehre (BWL)",
        "Medienpsychologie",
        "Lehramt Mathe"
    ]

    return (
        <>
            <input className="form-control my-2" list="programDatalistOptions" id="programDataList"
                   placeholder="Studiengang"/>
            <datalist id="programDatalistOptions">
                {programs.map(program => <option value={program}/>)}
            </datalist>
        </>
    )

}

const InputFields = () => (
    <form className={"p-4"}>
        <input className={"form-control my-2"} placeholder={"Vorname"}/>
        <input className={"form-control my-2"} placeholder={"Nachname"}/>
        <input className={"form-control my-2"} placeholder={"Geburtstag"}/>
        <UniversityField/>
        <StudyProgramField/>
        <PhoneNumberField />
    </form>
)

const PhoneNumberField = () => (
    <div className={"d-flex align-items-center"}>
        <input style={{width: "200px"}} className={"form-control"} placeholder={"Telefonnummer"}/>
        <div className="form-check mx-2">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                öffentlich
            </label>
        </div>
    </div>
)

const GenderButtons = () => {

    const genderType = {
        male: "mannlich",
        female: "weiblich",
        none: "keine Angabe"
    }



    const [gender, setGender] = useState(genderType.none);

    const onChange = (evt) => {
        if(evt.target.id === "btnradio1"){
            setGender(genderType.female)
        } else if (evt.target.id === "btnradio2"){
            setGender(genderType.none)
        } else if (evt.target.id === "btnradio3"){
            setGender(genderType.male)
        }
    }

    return (
        <div>
            <span className={"text-center w-100"}>{gender}</span>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onChange={onChange} checked={gender === genderType.female}/>
                <label className="btn btn-lg btn-outline-primary" htmlFor="btnradio1">
                    <FontAwesomeIcon icon={faVenus}/>
                </label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onChange={onChange} checked={gender === genderType.none}/>
                <label className="btn btn-lg btn-outline-primary" htmlFor="btnradio2">
                    <FontAwesomeIcon icon={faGenderless}/>
                </label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onChange={onChange} checked={gender === genderType.male}/>
                <label className="btn btn-lg btn-outline-primary" htmlFor="btnradio3">
                    <FontAwesomeIcon icon={faMars}/>
                </label>
            </div>
        </div>
    )
}
