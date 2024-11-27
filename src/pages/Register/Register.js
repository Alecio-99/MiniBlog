import React from 'react'
import stelys from './Register.module.css'
import { useState, useEffect } from 'react'


const Register = () => {
const [displayName, setDisplayName] = useState("")
const [email, setEmail] = useState("")
const [senha, setSenha] = useState("")
const [confirmaSenha, setConfirmaSenha] = useState("")
const [error, setError] = useState("")

const handleSubmit = (e) => {
  e.preventDefault()

  setError("")

  const user = {
    displayName,
    email,
    senha,
  }

  if(senha !== confirmaSenha){
    setError("As senhas precisam ser iguais!")
    return
  }

  console.log(user);
}

  return (
    <div className={stelys.register}>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e comparilhe suas histórias</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input type="text" 
            name="displayName"
            required
            placeholder="Nome do usuário"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            />
          </label>
          <label>
            <span>Email:</span>
            <input type="email" 
            name="email"
            required
            placeholder="Email do usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Senha:</span>
            <input type="senha" 
            name="senha"
            required
            placeholder="Senha do usuário"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            />
          </label>
          <label>
            <span>Confirmação de senha:</span>
            <input type="confirmaSenha" 
            name="confirmaSenha"
            required
            placeholder="Confirmação de senha"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
            />
          </label>
          <button className="btn">Cadastrar</button>
          {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Register