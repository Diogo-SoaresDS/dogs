import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../Feed/Feed'
import Head from '../Helper/Head'

const UserProfile = () => {
  const { user } = useParams()
  function capitalize(texto) {
    return texto
      .toLowerCase()
      .split(' ')
      .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join(' ')
  }

  return (
    <section className="container mainContainer">
      <Head title={capitalize(user)} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  )
}

export default UserProfile
