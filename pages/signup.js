import React from 'react';
import Link from 'next/link'
import { useState } from 'react'

function SignupPage() {

    let [email, setEmail] = useState('')

    const emailvalue = () => {
        setEmail(document.getElementById("email").value);
    }

    return (
        <div>
            <a href={"/"} className={"backButton"} >&#8249;</a>
            <h1 className={"signinHeader"}>Registrieren</h1>
            <div className={"signin field"}>
                <input className="form-control form-control-lg inputs" placeholder={"benutzername"} />
                <input className="form-control form-control-lg inputs" id="email" placeholder={"email"} />
                <input className="form-control form-control-lg inputs" type="password" placeholder={"passwort"} />
                <input className="form-control form-control-lg inputs" type="password" placeholder={"passwort wiederholen"} />
                <br />
                <Link
                    href={'/signin'} passHref><a className={"forgotten"} >Bereits registriert?</a></Link>
            </div>
            <div className={"buttonHeader"}>
                <Link
                    href={'/activation'} passHref>
                    <button className={"btn btn-primary authenticate"} onClick={emailvalue}>Registrieren</button>
                </Link>
            </div>
        </div>
    );
};
export default SignupPage;