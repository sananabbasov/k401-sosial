import React from 'react'
import Post from '../components/Post'
import { Button, TextField } from '@mui/material'

function HomePage() {
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
      />
  <Button className='my-1.5' variant="contained">Share</Button>

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default HomePage