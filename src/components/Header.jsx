import React, { useEffect, useState } from 'react'
import Auth from './Auth';
import Message from './Message';
import { useSelector } from 'react-redux';
function Header() {

    const { userinfo } = useSelector(x => x.user)

    

    useEffect(() =>{
    },[userinfo])




    return (
        <div className='bg-cyan-950'>
            <div className='text-white flex justify-around items-center py-5'>
                <div className='font-mono text-4xl'>
                    Sirin
                </div>
                <div className=''>
                    {
                        userinfo.success ?
                            <div className='flex items-center'>
                                <Message />
                                <Auth firstName={userinfo.data.first_name} image={userinfo.data.avatar}/>
                            </div>
                            :
                            "Login"
                    }
                </div>
            </div>
        </div>
    )
}

export default Header