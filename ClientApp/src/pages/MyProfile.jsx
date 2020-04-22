import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../profile.scss'

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
      <section className="user-favorites">
        <h3>Favorites</h3>
        {profile.bookmarks && (
          <ul>
            {profile.bookmarks.map(bookmark => {
              return (
                <li>
                  <h4>{bookmark.book.title}</h4>
                  <img src={bookmark.book.pages[0].imageUrl} alt="Book Cover" />
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </main>
  )
}

export default MyProfile
