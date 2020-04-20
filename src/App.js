import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './components/hocs/routes';
import { auth } from './services/firebase';


const App = () => {

    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      auth.onAuthStateChanged(user => {
        if(user) {
          setAuthenticated(true)
        } else { setAuthenticated(false) }
      })
      setLoading(false)
    }, [])
      
    if(loading) {
      return (
        <h1>Loading ...</h1>
      )
    }

    return (
      <div>
        <BrowserRouter>
          <Routes authenticated={authenticated}/>
        </BrowserRouter>
      </div>
    )
}

export default App
