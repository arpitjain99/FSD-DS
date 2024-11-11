import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Marks from './Marks.jsx'
import Profile from './Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App n1="Arpit Jain" n2="xyz@gmail.com" n3="abes Engineering College"/>
    <App n1="Abhay Tiyagi" n2="abc@gmail.com" n3="abes Engineering College"/>
    <Marks m1="89" m2="81" m3="79" m4="93" m5="99" />
    <Marks m1="78" m2="84" m3="94" m4="93" m5="96" />
    <Profile />
  </StrictMode>,
)
