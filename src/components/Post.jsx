import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { BASE_URL } from '../config/config';

export default function Post({ refresh }) {

  const [userPosts, setUserPosts] = useState()
  const [sendData, setSendData] = useState(refresh)


  const getPostDatas = async () => {
    await fetch(`${BASE_URL}/Post/posts`).then(x => x.json()).then(x => setUserPosts(x))
  }


  const likeHandler = async (postId) => {
    let token = localStorage.getItem("token")
    await fetch(`${BASE_URL}/Reaction/like/${postId}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(x => x.json())
    setSendData(!sendData)
  }

  const dislikeHandler = async (postId) => {
    let token = localStorage.getItem("token")
    await fetch(`${BASE_URL}/Reaction/dislike/${postId}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(x => x.json())
    setSendData(!sendData)
  }

  useEffect(() => {
    console.log(userPosts);
    getPostDatas()
  }, [sendData])

  return (
    <>
      {
        userPosts &&
        userPosts.data.map((d, index) => (

          <Card className='my-14'>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {d.user.first_name} {d.user.last_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {d.content}
              </Typography>
            </CardContent>
            {
              d.photo_url &&
              <CardMedia
                sx={{ height: 140 }}
                image={d.photo_url}
                title="green iguana"
                className='w-96 h-96'
              />
            }

            <CardActions>
              <Button onClick={() => likeHandler(d.id)}>
                <ThumbUpIcon />
                {d.like}
              </Button>
              <Button onClick={() => dislikeHandler(d.id)}>
                <ThumbDownIcon />
                {d.dislike}
              </Button>

              <ChatBubbleOutlineIcon />
              {/* {comment} */}
            </CardActions>
          </Card>
        ))
      }
    </>
  );
}