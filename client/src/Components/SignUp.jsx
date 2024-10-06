import {React , useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function SignUp(){

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register' ,{name,email,password})
        .then(result => {console.log(result)
            navigate('/login')
    })
        .catch(err => console.log(err))
    }

    return(
        <>
            <div className="flex flex-col w-96 my-12 m-auto">
                <p className="text-4xl">Sign In Form</p>
                <form className="mt-5" onSubmit={handleSubmit}>
                    <div className="my-3 flex flex-col">
                        <label className="me-auto py-2">Name :</label>
                        <input type="text" name="name" placeholder="Enter Your Name" className="p-3 text-bold  border border-black rounded-md w-25"  onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="my-3 flex flex-col">
                        <label className="me-auto py-2">Email :</label>
                        <input type="text" name="email" placeholder="Enter Your Email" className="p-3 text-bold  border border-black rounded-md"  onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="my-3 flex flex-col">
                        <label className="me-auto py-2">Password :</label>
                        <input type="text" name="password" placeholder="Enter Your Password" className="p-3 text-bold border border-black rounded-md"  onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="my-3 border rounded-md p-2 bg-gray-900 text-white hover:text-black hover:bg-white hover:border-black">Sign In</button>
                    <p className="text-center mb-5">If you have Already Reagistred?</p>
                    <Link to='/login' className="my-5 p-2 border border-black rounded-md  bg-white text-black hover:bg-gray-900 hover:text-white">Log In</Link>
                </form>
            </div>
        </>
    )
}