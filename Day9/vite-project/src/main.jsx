import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Marks from './Marks.jsx'
// import Profile from './Profile.jsx'
import Displaymarks from './Displaymarks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Displaymarks />
  </StrictMode>,
)
