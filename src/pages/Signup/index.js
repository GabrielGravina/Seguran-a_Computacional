import React, { useState } from 'react'
import * as C from "./style"
import { Input } from '../../components/Input/style'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import ReCAPTCHA from 'react-google-recaptcha'


function validate_password(password) {
    let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if (password.match(check)) {
        return true
    } else {
      return false
    }
}
  
function hashPassword(password){
    
}
const Signup = () => {
    const [email, setEmail] = useState("")
    const [emailConf, setEmailConf] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const { signup } = useAuth()

    const handleSignUp = () => {
        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos")
            return
        } else if (email!== emailConf) {
            setError("Os e-mails são diferentes")
            return
        } else if (!validate_password(senha)){
            console.log(senha)
            setError("A sua senha é fraca!")
            return
        }
        const res = signup(email, senha)
        if(res){
            setError(res)
            return
        }

        alert("Cadastrado com sucesso!")
        navigate("/")
    }

    return (   
    <C.Container>
        <C.Label>Página de login</C.Label>
        <C.Content>
            <Input 
                type="email"
                placeholder='Insira o seu e-mail'
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <Input 
                type="email"
                placeholder='Confirme o seu e-mail'
                value={emailConf}
                onChange={(e) => [setEmailConf(e.target.value), setError("")]}
            />
            <Input 
                type="password"
                placeholder='Insira a sua senha'
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <C.LabelError>{error}</C.LabelError>
            <Button Text="Registrar" onClick={handleSignUp} />
            <C.LabelSignin>
                Já tem uma conta?
                <C.Strong>
                    <Link to="/">&nbsp;Entre</Link>
                </C.Strong>
            </C.LabelSignin>
        </C.Content>
    </C.Container>
  )
}

export default Signup