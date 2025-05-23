
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import UserContext from './components/Context/UserContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
<UserContext>
<BrowserRouter>
  <StrictMode>
    <ToastContainer/>
    <App />
  </StrictMode>
  </BrowserRouter>
  </UserContext>,
)
