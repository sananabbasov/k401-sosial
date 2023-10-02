import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import { Button, TextField } from '@mui/material'
import { BASE_URL } from "../config/config"

function HomePage() {

  const [sharePost, setSharePost] = useState("");
  const [photo, setPhoto] = useState("")
  const [userPosts, setUserPosts] = useState()
  const [sendData, setSendData] = useState(false)

  const sharePostHandler = async () => {
    let token = localStorage.getItem("token")
    console.log(sharePost);
    await fetch(`${BASE_URL}/Post/share`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        content: sharePost,
        photo_url: photo
      })
    }).then(x => x.json()).then(x => console.log(x))
    setSendData(!sendData)

  }


  useEffect(() => {

  }, [sendData])

  return (
    <div className='container m-auto p-16'>

      <TextField
        className='shadow-md p-16 my-14'
        fullWidth
        id="standard-multiline-static"
        placeholder='How are you?'
        multiline
        rows={10}
        variant="standard"
        onChange={(e) => setSharePost(e.target.value)}
      />
      <Button onClick={() => sharePostHandler()} className='my-1.5' variant="contained">Share</Button>

      <Post refresh={sendData}/>


    </div>
  )
}

export default HomePage