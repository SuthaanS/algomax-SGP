import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'antd/dist/reset.css'
import{BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/Auth.jsx'
import { SearchProvider } from './context/Search.jsx'
import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_APIKEY,
  authDomain: import.meta.env.REACT_APP_AUTHDOMAIN,
  projectId: import.meta.env.REACT_APP_PROJECTID,
  storageBucket: import.meta.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.REACT_APP_MESSAGINGSENDERID,
  appId: import.meta.env.REACT_APP_APPID
};


firebase.initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider >
    <SearchProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchProvider>
    
  </AuthProvider>
  
)


