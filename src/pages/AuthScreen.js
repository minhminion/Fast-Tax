
import React, { useEffect } from 'react'
import { Tabs } from 'antd'
import Login from '../components/Login'
import Register from '../components/Register'
import { login, register, loginWithGoogle, loginWithFaceBook, uiStart } from  '../helpers/auth'

const {TabPane} = Tabs

const AuthScreen = () => {

    useEffect(() => {
        uiStart()
    }, [])

    return (
        <>
            <h1 style={{textAlign: 'center'}}>Welcome to - <span style={{color: '#1890ff', fontWeight:'bold'}}>Fast Tax</span></h1>
            <div id="firebaseUI-auth-container"></div>
            <div id="loader">Loading...</div>
        </>
        // <Tabs defaultActiveKey="1">
        //     <TabPane tab="Login" key="1">
        //         <Login onSubmit={login} loginWithGoogle={loginWithGoogle} loginWithFaceBook={loginWithFaceBook}/>
        //     </TabPane>
        //     <TabPane tab="Register" key="2">
        //         <Register onSubmit={register}/>
        //     </TabPane>
        // </Tabs>
    )
}

export default AuthScreen

