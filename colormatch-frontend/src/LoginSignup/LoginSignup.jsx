"use client"
import React, {useState} from 'react'
import './LoginSigup.css'
import Image from 'next/image'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSigup = () => {
    const [action,setAction] = useState("Entre")

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <Image src={user_icon} alt="" />
                    <input type="text" placeholder='Nome'/>
                </div>}               
            </div>
            <div className="inputs">
                <div className="input">
                    <Image src={email_icon} alt="" />
                    <input type="email" placeholder='E-mail'/>
                </div>
            </div>
            <div className="inputs">
                <div className="input">
                    <Image src={password_icon} alt="" />
                    <input type="password" placeholder='Senha'/>
                </div>
            </div>

            {action==="Sign Up"?<div></div>:<div className="forgot-password">Esqueceu a senha? <span>Clique Aqui!</span></div>}

            <div className="submit-container">
                <div className={action==="Entre"?"submit gray":"submit"} onClick={()=>{setAction("Cadastre-se")}}>Cadastre-se</div>
                
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Entre")}}>Entre</div>
            </div>

        </div>
    )
}

export default LoginSigup