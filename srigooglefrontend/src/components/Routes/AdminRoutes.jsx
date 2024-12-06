import { useState, useEffect } from "react";
import {useAuth} from '../../context/Auth';
import { Outlet} from 'react-router-dom';
import Spinner from '../Spinner';
import axios from "axios";

const baseURL = import.meta.env.REACT_APP_API;
axios.defaults.withCredentials = true;

export default function AdminRoutes(){
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(()=>{
        const authCheck = async() => {
            const res = await axios.get(`${baseURL}/api/v1/auth/admin-auth`)
            if(res.data.Ok){
                setOk(true)
            }else{
                setOk(false)
            }
        }
        if(auth?.token)authCheck()
    },[auth?.token])

    return ok ? <Outlet/> : <Spinner path="/" />
}