import React, { useEffect } from 'react'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import MyRouter from './router/MyRouter'
import Footer from './components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByToken } from './redux/actions/UserAction'

function App() {

  const { userinfo } = useSelector(x => x.user)
  const { user } = useSelector(x => x.auth)
  const dispatch = useDispatch()

  const getUserInfo = () => {
    const token = localStorage.getItem("token")
    console.log(token);
    if (token != null) {
      console.log(token);
      dispatch(getUserByToken(token))
    }
    if (token == null) {
      dispatch(getUserByToken(""))
      console.log("Logout oldu");
    }
  }


  useEffect(() => {
    getUserInfo()
    console.log("Elii",userinfo);
  }, [user])
  return (
    <div>
      <BrowserRouter>
        <Header />
        <MyRouter />
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App