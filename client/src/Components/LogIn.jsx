import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function LogIn(){

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login' ,{email,password})
        .then(result => {
            console.log(result)
            if(result.data === "success"){
                navigate('/home')
            }
    })
        .catch(err => console.log(err))
    }

    return(
        <>
            <div className="flex flex-col w-96 my-14 m-auto">
                <p className="text-4xl ml-28">log In Form</p>
                <form className="mt-5"  onSubmit={handleSubmit}>
                    <div className="my-3 flex flex-col">
                        <label className="me-auto py-2">Email :</label>
                        <input type="text" name="email" placeholder="Enter Your Email" className="p-3 text-bold  border border-black rounded-md" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="my-3 flex flex-col">
                        <label className="me-auto py-2">Password :</label>
                        <input type="text" name="password" placeholder="Enter Your Password" className="p-3 text-bold border border-black rounded-md" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="my-3 border rounded-md p-2 bg-gray-900 text-white hover:text-black hover:bg-white hover:border-black">Log In</button>
                    <p className="text-center mb-5">Aren't you Reagistred?</p>
                    <Link to='/signin' className="my-3 p-2 border border-black rounded-md  bg-white text-black hover:bg-gray-900 hover:text-white">Sign In</Link>
                </form>
            </div>
        </>
    )
}