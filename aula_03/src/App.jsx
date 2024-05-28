import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import Aluno from './components/Aluno'

const App = () => {
  return (
    //<div><EstouConseguindoAprenderReact estouConseguindo = {false}/></div>
    <div><EstouConseguindoAprenderReact estouConseguindo = {false}/>{
      [
      {nome: "Carlos", email: "carlos@gmail.com", curso: "Sistemas para internet", media: 4},
      {nome: "Pedro", email: "pedro@gmail.com", curso: "Sistemas para internet", media: 6},
      {nome: "Jayme", email: "jayme@gmail.com", curso: "Sistemas da informação", media: 8}
      ].map((aluno) => <Aluno nome = {aluno.nome} email = {aluno.email} curso = {aluno.curso} media = {aluno.media}/>)
    }</div>
    
  )
}

export default App