import React from 'react';
import Link from 'next/link'

export default function SigninPage() {

    return (
        <div>
            <Link href={"/"}>
                <a className={"backButton"}>&#8249;</a>
            </Link>
            <h1 className={"signinHeader"}>Einloggen</h1>
            <div className={"signin field"}>
                <input className="form-control form-control-lg inputs" placeholder={"benutzername"}/>
                <input className="form-control form-control-lg inputs" type="password" placeholder={"passwort"}/>
                <br/>
                <Link
                    href={'/'} passHref><a className={"forgotten"}>Passwort vergessen?</a></Link>
            </div>
            <div className={"buttonHeader"}>
                <Link
                    href={'/home'} passHref>
                    <button className={"btn btn-primary authenticate"}>Einloggen</button>
                </Link>
            </div>
        </div>
    );
};
