import React, {useState, useEffect} from 'react';
import {interestsData} from "../../../config/mockData"
import styles from "../../../styles/Interests.module.css";
import {useRouter} from "next/router";
import {routes} from "../../../config/routes";
import NextBackComponent from "../../../components/NextBackComponent";

export default function InterestsPage() {

    const [interests, setInterests] = useState([])

    const router = useRouter()

    useEffect(() => setInterests(interestsData), [])

    return (
        <div className={"d-flex flex-column h-100"}>
            <h1 className={"header"}>
                Wofür interessierst du dich?
            </h1>
            <InterestsList interests={interests} setInterests={setInterests}/>
            {router.query.edit ?
                <NextBackComponent hrefBack={routes.editProfile  + "/?edit=true"} hrefNext={routes.home}/>:
                <NextBackComponent hrefBack={routes.editProfile} hrefNext={routes.home}/> }
        </div>
    );
};


const InterestsList = (props) => {

    return (
        <div className={`overflow-auto border-bottom border-top ${styles.listWrapper}`}>
            <div className={"d-flex flex-wrap"}>
                {props.interests.map((interest, index) => <Interest key={index} interest={interest} index={index}
                                                                    setInterests={props.setInterests}/>)}
            </div>
        </div>
    )
}


const Interest = (props) => {

    return (
        <div onClick={() => {
            props.setInterests(interests => {
                const clone = [...interests]
                clone.splice(props.index, 1)
                return clone
            })
            if (props.interest.sub) {
                props.setInterests(interests => {
                    const clone = [...interests]
                    props.interest.sub.forEach((sub, i) => clone.splice(props.index + i, 0, sub))
                    return clone
                })
            }


        }} className={"mx-auto"}>
            <img
                className={`${styles.icon} border`}
                src={props.interest.icon}
                alt={props.interest.name}
            />
            <div className={`my-2 text-center ${styles.interestText}`}>
                {props.interest.name}
            </div>
        </div>
    )


}