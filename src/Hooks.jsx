import React from "react";
import { useState } from "react";
import './index.css'

const Hooks = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reTypePasswrod, setReTypePassword ] = useState('');
    const [submit, setSubmit] = useState('');
    const message =  `Hello, i am ${name}, and you can contact me at ${email}`;

    return (
        <>
            <div className="form-wripper">
                <h2 className="title">Hope And Care Sign Up</h2>
                <form action="/">
                    <div>
                        <input type="text" placeholder="Enter FullName" value={name}  className="input" onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div>
                        <input type="email" placeholder="Eter Email" value={email} className="input" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <input type="password" placeholder="Create a Strong Password" value={password} className="input" onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div>
                        <input type="password" placeholder="Re-type Password" value={reTypePasswrod} className="input" onChange={(e) => setReTypePassword(e.target.value)} />
                    </div>

                    <div>
                        <input type="submit" value={'Sign Up'} id="submit" onClick={(e) => {
                            e.preventDefault();
                            setSubmit(message);
                        }} />
                    </div>
                </form>
            </div>

            <div className="display">{submit}</div>
        </>
    )
}

export default Hooks