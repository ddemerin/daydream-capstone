import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MyProfile = () => {
  const [profile, setProfile] = useState({})

  const loadProfile = async () => {
    const resp = await axios.get('/api/profile', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })

    console.log(resp.data)
    setProfile(resp.data)
  }

  useEffect(() => {
    loadProfile()
  }, [])

  return (
    <main>
      <h1>{profile.fullName}'s Profile</h1>
      <h2>{profile.email}</h2>
    </main>
  )
}

export default MyProfile
