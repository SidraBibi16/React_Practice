import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Props from './props.jsx'

import'./index.css'
import BgChanger from './BgChanger.jsx';
import PasswordSeter from './passwordSeter.jsx';
let user={
name:'sidra',
Domain:'Wd'
}
let arr=[1,2,3,4,]
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordSeter/>
<BgChanger/>
    {/* <App /> */}
    {/* <Props newonject={user} newarr={arr} age='18'/> */}
    {/* <Props heading='Full stack Development'btntxt='save'/> */}
    {/* <Props heading='MERN stack Development' /> */}
  </StrictMode>,
)
