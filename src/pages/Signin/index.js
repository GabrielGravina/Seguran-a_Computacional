import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import * as C from "./style"

import { Link, useNavigate } from "react-router-dom"
import useAuth from '../../hooks/useAuth'
import ReCAPTCHA from 'react-google-recaptcha'

const recaptchaRef = React.createRef();


const Signin = () => {

    const { signin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("")



    let captchaConfirm = false
    const onChange = () => {
        captchaConfirm = true
    }

    let captchaNotDone = true
    
    const handleLogin = () => {
        if(captchaConfirm === true) {
                if (!email | !senha) {
                    setError("Preencha todos os campos!")
                    return
                }
                const res = signin(email, senha)
                if (res) {
                    setError(res)
                    return
                }
            captchaNotDone = false
            navigate("/home")
        } else{
            captchaNotDone = true
        }   
    }
    
  return (
    
    <C.Container>
        <C.Label>Olá! Bem vindo de volta</C.Label>
        <C.Content>
        
            <Input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => [setEmail(e.target.value),setError("")]}
            />
            <Input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => [setSenha(e.target.value),setError("")]}
            />

            <ReCAPTCHA style={{marginTop: 2 + 'em'}}
                ref={recaptchaRef}
                sitekey="6LcSq4YlAAAAAGcG4xHKtlaFjgJW2TGZtEcM1k8a"
                onChange={onChange}
            />
            <span></span>
            <C.LabelError>{error}</C.LabelError>
            <Button Text="Log in" onClick={handleLogin} />
            
            {captchaNotDone? ( 
                <C.Label>Verificação Captcha mal sucedida!</C.Label>
            ) : (
                <C.Label>Capcha feito com sucesso!</C.Label>
            )
            }
            
            <C.LabelSignup>
                Caso não seja cadastrado,
                <C.Strong>
                    <Link to="/signup">&nbsp;faça o registro!</Link>
                </C.Strong>
            </C.LabelSignup>
        </C.Content>
    </C.Container>
  )
}

export default Signin 