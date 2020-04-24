import React, { useEffect, useState } from 'react'
import Banner from '../images/Banner.png'
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
      <img className="banner" src={Banner} alt="Profile Banner" />
      <h1 className="profile-name">{profile.fullName}</h1>
      <div className="user-portrait"></div>
      <section className="user-favorites">
        <div className="favorites-header-container">
          <h3>Favorites</h3>
        </div>
        {profile.bookmarks && (
          <ul className="favorite-books-container">
            {profile.bookmarks.map(bookmark => {
              return (
                <li>
                  <a href={`/read/${bookmark.book.id}`}>
                    <img
                      className="favorite-books"
                      src={bookmark.book.pages[0].imageUrl}
                      alt="Book Cover"
                    />
                    <p>{bookmark.book.title}</p>
                  </a>
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
