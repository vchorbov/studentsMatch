import React from 'react';
import {useRouter} from "next/router";

export default function NextBackComponent(props) {

    const router = useRouter()

    return (
        <div className={"w-100 d-flex justify-content-center"}>
            <button className={"btn btn-secondary m-4"} onClick={() => router.push(props.hrefBack)}>Zurück</button>
            <button className={"btn btn-primary m-4"} onClick={() => router.push(props.hrefNext)}>Weiter</button>
        </div>
    );
};